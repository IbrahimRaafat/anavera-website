"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Badge, GlowDot } from "@/components/atoms";
import { fadeUp, staggerContainer } from "@/design-system/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-radial-teal pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

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
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-text leading-tight tracking-tight mb-6"
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
              Anavera delivers intelligent IoT platform applications for industrial and enterprise environments —
              turning sensor streams into the insights your operations can act on.
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

          {/* Right — dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-[0_8px_48px_rgba(0,149,163,0.15)]">
              <Image
                src="/dashboards/overview.png"
                alt="Anavera IoT Platform — Live Overview Dashboard"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
