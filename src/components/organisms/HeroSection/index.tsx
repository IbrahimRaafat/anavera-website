"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms";
import { fadeUp, staggerContainer } from "@/design-system/animations";
import DashboardCarousel from "@/components/organisms/DashboardCarousel";

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

export function HeroSection() {
  return (
    <section className="relative lg:min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-radial-teal pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-6 pb-10 lg:py-32 w-full">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 items-center">

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
