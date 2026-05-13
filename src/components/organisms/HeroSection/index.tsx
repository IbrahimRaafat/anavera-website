"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Badge, GlowDot } from "@/components/atoms";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-radial-teal pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
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
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-tight tracking-tight mb-6"
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
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Dashboard image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          viewport={viewport}
          className="mt-16"
        >
          <div className="rounded-2xl overflow-hidden border border-border shadow-[0_8px_48px_rgba(0,149,163,0.12)]">
            <Image
              src="/dashboards/overview.png"
              alt="Anavera IoT Platform — Live Overview Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-text-muted text-sm text-center italic mt-3">
            Anavera IoT Platform — Overview Dashboard showing all 7 use cases in real-time
          </p>
        </motion.div>
      </div>
    </section>
  );
}
