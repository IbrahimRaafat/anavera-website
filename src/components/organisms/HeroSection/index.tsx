"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button, Badge, GlowDot } from "@/components/atoms";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      {/* Teal radial glow top */}
      <div className="absolute inset-0 bg-radial-teal pointer-events-none" />
      {/* Soft teal orb */}
      <div className="absolute top-1/4 right-1/4 size-[500px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 size-80 rounded-full bg-sky/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border shadow-sm">
              <GlowDot size="sm" color="teal" />
              <span className="text-xs text-teal font-heading font-medium">IoT Platform — Live</span>
            </div>
            <Badge variant="teal">UK · Est. 2023</Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text leading-tight tracking-tight mb-6"
          >
            From Sensor Data
            <br />
            to{" "}
            <span className="text-gradient-teal">Operational Clarity</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-text-muted text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
          >
            Anavera delivers intelligent IoT platform applications for industrial and enterprise environments —
            turning sensor streams into the insights your operations can act on.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link href="/use-cases">
              <Button size="lg" iconRight={<ArrowRight size={16} />}>
                Explore Use Cases
              </Button>
            </Link>
            <Link href="/platform">
              <Button size="lg" variant="secondary">
                Our Platform
              </Button>
            </Link>
          </motion.div>

          {/* Quick nav pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-10">
            {[
              "Power Efficiency", "Cold Chain", "Smart Office",
              "Fuel Monitoring", "Agriculture", "Healthcare",
            ].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-border shadow-sm text-xs text-text-muted font-heading hover:border-teal/40 hover:text-teal transition-colors cursor-default"
              >
                <ChevronRight size={10} className="text-teal" />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          viewport={viewport}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border shadow-sm"
        >
          {[
            { value: "7",          label: "Industry Use Cases" },
            { value: "3",          label: "Hardware Partners" },
            { value: "15 km",      label: "LoRaWAN Coverage" },
            { value: "Real-time",  label: "Data Intelligence" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white px-6 py-5 flex flex-col gap-1">
              <span className="font-heading font-bold text-2xl text-gradient-teal">{value}</span>
              <span className="text-text-muted text-xs">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
