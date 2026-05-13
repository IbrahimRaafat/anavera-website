"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Badge, GlowDot } from "@/components/atoms";
import { fadeUp, staggerContainer } from "@/design-system/animations";

const dashboards = [
  { src: "/dashboards/overview.png",         label: "Platform Overview" },
  { src: "/dashboards/power-management.png", label: "Power Management" },
  { src: "/dashboards/fuel-monitoring.png",  label: "Fuel Monitoring" },
  { src: "/dashboards/agriculture.png",      label: "Smart Agriculture" },
  { src: "/dashboards/cold-chain.png",       label: "Cold Chain" },
  { src: "/dashboards/smart-office.png",     label: "Smart Office" },
  { src: "/dashboards/smart-hotel.png",      label: "Smart Hotel" },
  { src: "/dashboards/smart-hospital.png",   label: "Smart Hospital" },
];

function DashboardCarousel() {
  const [current, setCurrent] = useState(0);
  const n = dashboards.length;

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % n), 3500);
    return () => clearInterval(t);
  }, [n]);

  const d1 = dashboards[(current + 1) % n];
  const d2 = dashboards[(current + 2) % n];

  return (
    <div className="relative pr-7 pb-7">
      {/* Card 3 — furthest back */}
      <div className="absolute inset-0 translate-x-7 translate-y-7 origin-top-left rounded-xl overflow-hidden border border-border opacity-40 scale-[0.90]">
        <Image src={d2.src} alt="" width={1200} height={675} className="w-full h-auto" aria-hidden />
      </div>

      {/* Card 2 — middle */}
      <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 origin-top-left rounded-xl overflow-hidden border border-border opacity-65 scale-[0.95]">
        <Image src={d1.src} alt="" width={1200} height={675} className="w-full h-auto" aria-hidden />
      </div>

      {/* Card 1 — front, animated */}
      <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-[0_8px_48px_rgba(0,149,163,0.15)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-110%", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.32, 0, 0.67, 0] }}
            className="absolute inset-0"
          >
            <Image
              src={dashboards[current].src}
              alt={dashboards[current].label}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Label + dots */}
      <div className="flex items-center justify-between mt-3 pr-7">
        <p className="text-text-muted text-xs font-heading italic">
          {dashboards[current].label}
        </p>
        <div className="flex gap-1">
          {dashboards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-5 bg-teal" : "w-1.5 bg-border"
              }`}
              aria-label={dashboards[i].label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-radial-teal pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border shadow-sm">
                <GlowDot size="sm" color="teal" />
                <span className="text-xs text-teal font-heading font-medium">IoT Platform — Live</span>
              </div>
              <Badge variant="teal">UK · Est. 2023</Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl sm:text-5xl xl:text-6xl text-text leading-tight tracking-tight mb-6"
            >
              From Sensor Data
              <br />
              to{" "}
              <span className="text-gradient-teal">Operational Clarity</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-text-muted text-lg leading-relaxed mb-10"
            >
              Anavera delivers intelligent IoT platform applications for industrial
              and enterprise environments — turning sensor streams into the insights
              your operations can act on.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/use-cases">
                <Button size="lg" iconRight={<ArrowRight size={16} />}>
                  Explore Use Cases
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — carousel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden lg:block"
          >
            <DashboardCarousel />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
