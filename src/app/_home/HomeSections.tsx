"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
            <Link href="/use-cases" className="shrink-0">
              <Button variant="ghost" iconRight={<ArrowRight size={14} />}>All use cases</Button>
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {useCases.map((uc) => (
              <motion.div key={uc.slug} variants={fadeUp}>
                <UseCaseCard useCase={uc} className="h-full" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section className="py-32 bg-bg relative overflow-hidden">
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
