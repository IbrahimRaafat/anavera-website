"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface DashboardItem {
  src: string;
  label: string;
  slug?: string;
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
const ITEM_HEIGHT = 400;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };
const CLICK_THRESHOLD = 5;

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
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  return (
    <motion.div
      className="relative shrink-0 rounded-xl overflow-hidden border border-border shadow-md cursor-pointer active:cursor-grabbing"
      style={{ width: itemWidth, height: ITEM_HEIGHT, rotateY }}
      transition={transition}
      onPointerDown={(e) => { pointerStart.current = { x: e.clientX, y: e.clientY }; }}
      onClick={(e) => {
        if (pointerStart.current) {
          const dx = Math.abs(e.clientX - pointerStart.current.x);
          const dy = Math.abs(e.clientY - pointerStart.current.y);
          if (dx > CLICK_THRESHOLD || dy > CLICK_THRESHOLD) return;
        }
        if (item.slug) {
          const el = document.getElementById(item.slug);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            el.classList.remove("use-case-highlight");
            void el.offsetWidth; // force reflow so re-clicking restarts the animation
            el.classList.add("use-case-highlight");
            setTimeout(() => el.classList.remove("use-case-highlight"), 2000);
          }
        }
      }}
    >
      <Image
        src={item.src}
        alt={item.label}
        fill
        className="object-cover"
        draggable={false}
      />
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

  function goPrev() {
    setPosition((p) => Math.max(0, p - 1));
  }

  function goNext() {
    setPosition((p) => Math.min(p + 1, itemsForRender.length - 1));
  }

  const activeIndex = loop
    ? (position - 1 + items.length) % items.length
    : Math.min(position, items.length - 1);

  const dragConstraints = loop
    ? undefined
    : { left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0), right: 0 };

  return (
    <div className="w-full">
      {/* Image track */}
      <div
        ref={wrapperRef}
        className="relative w-full overflow-hidden rounded-2xl"
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

            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm border border-border p-1.5 shadow-sm hover:bg-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} className="text-text" />
            </button>

            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm border border-border p-1.5 shadow-sm hover:bg-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={18} className="text-text" />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {containerWidth > 0 && (
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
      )}
    </div>
  );
}
