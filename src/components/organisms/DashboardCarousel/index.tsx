"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export interface DashboardItem {
  src: string;
  label: string;
}

interface Props {
  items: DashboardItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 12;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

function CarouselItem({
  item, index, itemWidth, trackItemOffset, x, transition,
}: {
  item: DashboardItem;
  index: number;
  itemWidth: number;
  trackItemOffset: number;
  x: ReturnType<typeof useMotionValue<number>>;
  transition: object;
}) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];
  const rotateY = useTransform(x, range, [45, 0, -45], { clamp: false });

  return (
    <motion.div
      className="relative shrink-0 rounded-xl overflow-hidden border border-border shadow-md cursor-grab active:cursor-grabbing"
      style={{ width: itemWidth, rotateY }}
      transition={transition}
    >
      <Image
        src={item.src}
        alt={item.label}
        width={1200}
        height={675}
        className="w-full h-auto block"
        draggable={false}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3 pointer-events-none">
        <p className="text-white text-xs font-heading font-medium">{item.label}</p>
      </div>
    </motion.div>
  );
}

export default function DashboardCarousel({
  items,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const itemWidth = containerWidth > 0 ? containerWidth : 0;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop || items.length === 0) return items;
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const x = useMotionValue(0);

  useEffect(() => {
    const start = loop ? 1 : 0;
    setPosition(start);
    x.set(-start * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1 || (pauseOnHover && isHovered)) return;
    const t = setInterval(() => {
      setPosition((p) => Math.min(p + 1, itemsForRender.length - 1));
    }, autoplayDelay);
    return () => clearInterval(t);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  function handleAnimationComplete() {
    if (!loop || itemsForRender.length <= 1) { setIsAnimating(false); return; }
    if (position === itemsForRender.length - 1) {
      setIsJumping(true);
      setPosition(1);
      x.set(-trackItemOffset);
      requestAnimationFrame(() => { setIsJumping(false); setIsAnimating(false); });
      return;
    }
    if (position === 0) {
      setIsJumping(true);
      const t = items.length;
      setPosition(t);
      x.set(-t * trackItemOffset);
      requestAnimationFrame(() => { setIsJumping(false); setIsAnimating(false); });
      return;
    }
    setIsAnimating(false);
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    const { offset, velocity } = info;
    const dir =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD ? 1
      : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD ? -1
      : 0;
    if (!dir) return;
    setPosition((p) => Math.max(0, Math.min(p + dir, itemsForRender.length - 1)));
  }

  const activeIndex = loop
    ? (position - 1 + items.length) % items.length
    : Math.min(position, items.length - 1);

  const dragConstraints = loop
    ? undefined
    : { left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0), right: 0 };

  return (
    <div
      ref={wrapperRef}
      className="w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {containerWidth > 0 && (
        <>
          <div style={{ perspective: 1000, perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%` }}>
            <motion.div
              className="flex"
              drag={isAnimating ? false : "x"}
              dragConstraints={dragConstraints}
              style={{ width: itemWidth, gap: GAP, x }}
              animate={{ x: -(position * trackItemOffset) }}
              transition={effectiveTransition}
              onDragEnd={handleDragEnd}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={handleAnimationComplete}
            >
              {itemsForRender.map((item, index) => (
                <CarouselItem
                  key={`${item.src}-${index}`}
                  item={item}
                  index={index}
                  itemWidth={itemWidth}
                  trackItemOffset={trackItemOffset}
                  x={x}
                  transition={effectiveTransition}
                />
              ))}
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-4">
            {items.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setPosition(loop ? i + 1 : i)}
                animate={{ scale: activeIndex === i ? 1.2 : 1 }}
                transition={{ duration: 0.15 }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-5 bg-teal" : "w-1.5 bg-border"
                }`}
                aria-label={items[i].label}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
