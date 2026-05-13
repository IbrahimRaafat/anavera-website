"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageLayout } from "@/components/templates/PageLayout";
import { UseCaseCard } from "@/components/organisms/UseCaseCard";
import { useCases } from "@/data/useCases";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";

const differentiators = [
  { title: "Own IoT Platform",       desc: "Cloud-native, scalable, deployable as-is or fully white-labeled and customized." },
  { title: "Custom Development",     desc: "Full-stack IoT development from sensor firmware to mobile dashboards." },
  { title: "LoRaWAN Expertise",      desc: "End-to-end LoRaWAN network design, deployment, and managed service delivery." },
  { title: "Protocol Convergence",   desc: "Seamless integration between wired legacy sensors (Modbus, BACnet, RS485) and modern wireless technologies (LoRaWAN, NB-IoT, Wi-Fi)." },
  { title: "AI & Machine Learning",  desc: "Predictive analytics, anomaly detection, demand forecasting, and intelligent automation built into every solution." },
  { title: "Hardware Ecosystem",     desc: "Partnerships with Milesight, TEKTELIC, and Agatel for best-fit device selection." },
];

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
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl sm:text-5xl text-text leading-tight tracking-tight mb-4"
            >
              About Anavera
            </motion.h1>
            <motion.p variants={fadeUp} className="text-teal text-xl font-heading font-semibold mb-6">
              Your Trusted IoT Platform Partner — Connectivity to Clarity
            </motion.p>
            <motion.p variants={fadeUp} className="text-text-muted text-lg leading-relaxed">
              Anavera is a leading IoT platform development company delivering end-to-end intelligent IoT
              solutions across seven industry verticals. We offer our own powerful, cloud-native IoT platform
              that can be deployed out-of-the-box or fully customized. When clients have unique or specialized
              requirements, we engineer complete bespoke solutions from the sensor to the cloud.
            </motion.p>
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

      {/* Our Differentiators */}
      <section className="py-16 bg-bg-deep border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-8">
            <motion.p variants={fadeUp} className="text-xs font-heading font-semibold uppercase tracking-widest text-teal">
              Our Differentiators
            </motion.p>
            <motion.ul variants={fadeUp} className="flex flex-col gap-4">
              {differentiators.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="size-1.5 rounded-full bg-teal mt-2.5 shrink-0" />
                  <p className="text-text-muted leading-relaxed">
                    <span className="font-heading font-semibold text-text">{item.title}: </span>
                    {item.desc}
                  </p>
                </li>
              ))}
            </motion.ul>
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
            className="grid grid-cols-3 gap-4"
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
