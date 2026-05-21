"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/templates/PageLayout";
import { useCases, type UseCase } from "@/data/useCases";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";
import { cn } from "@/lib/cn";

/* ─── Hero slider ─────────────────────────────────────────────────── */
function HeroSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);
  if (!images.length) return null;
  return (
    <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image src={images[index]} alt="Anavera Use Case" fill className="object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-tr from-bg-deep/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn("size-2 rounded-full transition-all", i === index ? "bg-teal w-4" : "bg-white/40 hover:bg-white/60")}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Data ────────────────────────────────────────────────────────── */
const stats = [
  { value: "7+",    label: "Industry Verticals" },
  { value: "15km+", label: "LoRaWAN Coverage" },
  { value: "100%",  label: "Customizable Platform" },
];

const industryConfig: Record<string, { label: string; description: string }> = {
  industrial:  { label: "Industrial",  description: "IoT solutions for energy, fluid management, and critical infrastructure." },
  agriculture: { label: "Agriculture", description: "Precision farming and smart irrigation powered by real-time sensor data." },
  commercial:  { label: "Commercial",  description: "Intelligent building management and workplace optimisation." },
  hospitality: { label: "Hospitality", description: "Connected guest experiences and hotel operations management." },
  healthcare:  { label: "Healthcare",  description: "Clinical compliance, patient safety, and hospital infrastructure monitoring." },
};

/* ─── Bento card ──────────────────────────────────────────────────── */
function BentoCard({ useCase, className }: { useCase: UseCase; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={cn("group min-h-[320px]", className)}>
      <Link
        href={`/applications/${useCase.slug}`}
        className="relative flex flex-col justify-end rounded-2xl overflow-hidden h-full border border-border/50 hover:border-teal/40 transition-colors duration-300"
      >
        {/* Background image */}
        {useCase.heroImage && (
          <div className="absolute inset-0">
            <Image
              src={useCase.heroImage}
              alt={useCase.shortTitle}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
          </div>
        )}

        {/* Number watermark */}
        <span className="absolute top-4 right-5 font-heading font-bold text-6xl text-white/8 select-none leading-none pointer-events-none">
          {useCase.number}
        </span>

        {/* Content */}
        <div className="relative p-6 flex flex-col gap-3">
          <h3 className="font-heading font-bold text-white text-xl leading-tight">
            {useCase.shortTitle}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{useCase.tagline}</p>
          <div className="mt-1">
            <span className="inline-flex items-center gap-2.5 h-10 px-5 rounded-full bg-teal text-bg font-heading font-semibold text-sm shadow-[0_0_20px_rgba(0,168,181,0.4)] group-hover:shadow-[0_0_28px_rgba(0,168,181,0.55)] transition-all duration-200">
              Explore
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Industry section with bento grid ───────────────────────────── */
function IndustrySection({ industryKey, cases }: { industryKey: string; cases: UseCase[] }) {
  const config = industryConfig[industryKey];

  const spanClass = (i: number, total: number) => {
    if (total === 4) {
      if (i === 0) return "sm:col-span-2 lg:col-span-2 lg:min-h-[400px]";
      if (i === 3) return "sm:col-span-2 lg:col-span-2 lg:min-h-[400px]";
    }
    if (total === 3) {
      if (i === 0) return "sm:col-span-2 lg:col-span-2 lg:min-h-[380px]";
      if (i === 2) return "sm:col-span-2 lg:col-span-3 lg:min-h-[340px]";
    }
    return "";
  };

  const gridClass =
    cases.length === 1 ? "grid-cols-1" :
    cases.length === 2 ? "grid-cols-1 sm:grid-cols-2" :
    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="flex flex-col gap-5"
    >
      {/* Industry header */}
      <motion.div variants={fadeUp} className="flex items-end justify-between gap-4 pb-4 border-b border-border">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-heading font-bold text-3xl text-text">{config.label}</h2>
          <p className="text-text-muted text-sm">{config.description}</p>
        </div>
        <span className="text-xs font-heading text-text-subtle shrink-0">
          {cases.length} {cases.length === 1 ? "solution" : "solutions"}
        </span>
      </motion.div>

      {/* Bento grid */}
      <div className={cn("grid gap-4", gridClass)}>
        {cases.map((uc, i) => (
          <BentoCard key={uc.slug} useCase={uc} className={spanClass(i, cases.length)} />
        ))}
      </div>
    </motion.div>
  );
}

const industryOrder = ["industrial", "agriculture", "commercial", "hospitality", "healthcare"] as const;

const groupedByIndustry = industryOrder
  .map((key) => ({ key, cases: useCases.filter((uc) => uc.industry === key) }))
  .filter((g) => g.cases.length > 0);

export function ApplicationsClient() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-28 bg-bg-deep overflow-hidden">
        <div className="absolute inset-0 bg-radial-teal opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-xl">
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-4xl sm:text-5xl text-text leading-tight tracking-tight mb-4">
              Applications
            </motion.h1>
            <motion.p variants={fadeUp} className="text-teal text-xl font-heading font-semibold mb-6">
              Your Trusted IoT Platform Partner — Connectivity to Clarity
            </motion.p>
            <motion.p variants={fadeUp} className="text-text-muted text-lg leading-relaxed text-justify">
              Anavera offers a diverse portfolio of intelligent monitoring and analytics applications
              designed to address real operational challenges across industrial and enterprise environments.
              By combining multi-application analysis, real-time monitoring, advanced analytics, and
              proactive alarm generation, Anavera enables organizations to gain deeper operational
              visibility, improve decision-making, and optimize performance while reducing operational
              costs and response time.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <HeroSlider images={useCases.map((uc) => uc.heroImage).filter(Boolean) as string[]} />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <motion.div key={s.value} variants={fadeUp} className="flex flex-col gap-1 p-5 rounded-xl bg-card border border-border hover:border-teal/40 transition-colors duration-300">
                <span className="font-heading font-bold text-2xl sm:text-3xl text-gradient-teal">{s.value}</span>
                <span className="text-text-muted text-sm leading-tight">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry bento sections */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
          {groupedByIndustry.map(({ key, cases }) => (
            <IndustrySection key={key} industryKey={key} cases={cases} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
