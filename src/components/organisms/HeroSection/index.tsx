"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms";
import { fadeUp, staggerContainer } from "@/design-system/animations";
import DashboardCarousel from "@/components/organisms/DashboardCarousel";
import { useCases } from "@/data/useCases";

const dashboards = useCases.map((uc) => ({ src: uc.heroImage, label: uc.shortTitle, slug: uc.slug }));

export function HeroSection() {
  return (
    <section className="relative lg:h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-radial-teal pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-6 pb-10 lg:py-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl sm:text-5xl xl:text-6xl text-text leading-tight tracking-tight mb-6"
            >
              Connectivity
              <br />
              to{" "}
              <span className="text-gradient-teal">Clarity</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-text-muted text-lg leading-relaxed mb-10"
            >
              Anavera provides standards-based automation and IIoT platform solutions
              designed to simplify data monitoring, system integration, and operational
              analytics for modern industrial and enterprise operations.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/platform">
                <Button size="lg" iconRight={<ArrowRight size={16} />} className="whitespace-nowrap">
                  Explore our Platform
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="w-full overflow-hidden"
          >
            <DashboardCarousel
              items={dashboards}
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              loop
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
