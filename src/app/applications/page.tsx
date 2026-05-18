"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PageLayout } from "@/components/templates/PageLayout";
import { UseCaseCard } from "@/components/organisms/UseCaseCard";
import { useCases } from "@/data/useCases";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";
import { cn } from "@/lib/cn";

function HeroSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
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
            className={cn(
              "size-2 rounded-full transition-all",
              i === index ? "bg-teal w-4" : "bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const stats = [
  { value: "7+",    label: "Industry Verticals" },
  { value: "15km+", label: "LoRaWAN Coverage" },
  { value: "100%",  label: "Customizable Platform" },
];

const techStack = [
  { title: "Connectivity", desc: "LoRaWAN, NB-IoT, LTE-M, Wi-Fi, BLE, Zigbee, wired RS485/Modbus/BACnet" },
  { title: "Platform",     desc: "Cloud-native IoT with REST APIs, MQTT broker, and real-time data streaming" },
  { title: "Analytics",    desc: "Built-in dashboards, KPI tracking, predictive analytics, AI/ML integration" },
  { title: "Integration",  desc: "ERP, SCADA, BMS, CMMS, third-party APIs, legacy systems" },
  { title: "Security",     desc: "End-to-end AES-128 encryption, device authentication, role-based access" },
  { title: "Deployment",   desc: "On-premise, private cloud, or public cloud (AWS, Azure, GCP)" },
];

export default function UseCasesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-28 bg-bg-deep overflow-hidden">
        <div className="absolute inset-0 bg-radial-teal opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-xl">
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl sm:text-5xl text-text leading-tight tracking-tight mb-4"
            >
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroSlider images={useCases.map(uc => uc.heroImage).filter(Boolean) as string[]} />
          </motion.div>
        </div>
      </section>

      {/* Platform Overview Dashboard */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-6">
            <motion.p variants={fadeUp} className="text-xs font-heading font-semibold uppercase tracking-widest text-teal">
              Platform Overview Dashboard
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/dashboards/overview.png"
                  alt="Anavera IoT Platform Overview Dashboard"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-text-muted text-sm text-center italic">
                Anavera IoT Platform — Overview Dashboard showing all 7 use cases in real-time
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.value}
                variants={fadeUp}
                className="flex flex-col gap-1 p-5 rounded-xl bg-card border border-border hover:border-teal/40 transition-colors duration-300"
              >
                <span className="font-heading font-bold text-2xl sm:text-3xl text-gradient-teal">{s.value}</span>
                <span className="text-text-muted text-sm leading-tight">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-bg-deep border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-8">
            <motion.p variants={fadeUp} className="text-xs font-heading font-semibold uppercase tracking-widest text-teal">
              Technology Stack
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col divide-y divide-border rounded-xl border border-border overflow-hidden">
              {techStack.map((item) => (
                <div key={item.title} className="grid sm:grid-cols-[160px_1fr] bg-card px-6 py-4 gap-4">
                  <p className="font-heading font-semibold text-text text-sm">{item.title}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-8">
            <motion.p variants={fadeUp} className="text-xs font-heading font-semibold uppercase tracking-widest text-teal">
              IoT Use Cases
            </motion.p>
            <motion.p variants={fadeUp} className="text-text-muted leading-relaxed max-w-3xl">
              The following pages present Anavera's IoT solutions across seven key industry verticals. Each use case includes the live platform dashboard view, solution overview, key features, measurable KPIs, hardware used, and value delivered.
            </motion.p>
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {useCases.map((uc) => (
                <UseCaseCard key={uc.slug} useCase={uc} className="h-full" />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
