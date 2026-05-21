"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms";
import { SectionLabel } from "@/components/molecules";
import { UseCaseCard } from "@/components/organisms/UseCaseCard";
import { useCases } from "@/data/useCases";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";

export function HomeSections() {
  return (
    <>
      <UseCasesGrid />
      <PlatformIntro />
      <CtaBanner />
    </>
  );
}

/* ─── Use Cases Grid ─────────────────────────────────────────────── */
function UseCasesGrid() {
  return (
    <section className="py-24 bg-bg-deep border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-12"
        >
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <SectionLabel
              eyebrow="Field Focus"
              heading="Industry Verticals"
              description="Proven IoT applications built with subject matter experts, ready to deploy or fully customisable."
            />
            <Link href="/applications" className="shrink-0">
              <Button variant="ghost" iconRight={<ArrowRight size={14} />}>All applications</Button>
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {useCases.map((uc) => (
              <motion.div key={uc.slug} id={uc.slug} variants={fadeUp} className="scroll-mt-24 rounded-xl">
                <UseCaseCard useCase={uc} className="h-full" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Platform Intro Section ─────────────────────────────────────── */
function PlatformIntro() {
  return (
    <section className="py-24 bg-bg border-t border-border relative overflow-hidden">
      {/* Background glowing visuals */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-tight font-space">
                A Unified Industrial <br />
                <span className="bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent">
                  IoT Platform
                </span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-text-muted text-lg leading-relaxed">
              Anavera provides a unified industrial IoT platform that combines device connectivity, real-time monitoring, data visualization, and customizable application development within a single architecture. Built for scalable enterprise deployments, the platform enables seamless integration between sensors, gateways, cloud services, and third-party business systems across distributed operations.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link href="/platform">
                <Button size="lg" iconRight={<ArrowRight size={16} />}>
                  Explore our platform
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Photographic Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Elegant glassmorphic outer panel */}
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card/40 p-2 group hover:border-teal/30 transition-colors duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal/15 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Aspect Ratio Screen Frame */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-bg-deep border border-border/50">
                <Image
                  src="/images/platform_monitoring_new.png"
                  alt="Operations specialist monitoring dynamic industrial IoT dashboards on multiple screens"
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-102"
                  priority
                />
              </div>
            </div>
            
            {/* Visual background ambient light */}
            <div className="absolute -inset-4 bg-radial-teal -z-10 opacity-20 blur-2xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section className="py-16 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-teal pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-8 items-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel
              eyebrow="Get Started"
              heading={<>Ready to Connect<br />Your Operations?</>}
              description="Tell us about your use case and we'll show you how Anavera can deliver measurable results for your business."
              align="center"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" iconRight={<ArrowRight size={16} />}>Contact Us</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

