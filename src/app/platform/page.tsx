"use client";

import { motion } from "framer-motion";
import { Layers, Code2, Radio, GitMerge, BrainCircuit, Headphones } from "lucide-react";
import { PageLayout } from "@/components/templates/PageLayout";
import { GlowCard } from "@/components/molecules";
import { Badge } from "@/components/atoms";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";
import DashboardCarousel from "@/components/organisms/DashboardCarousel";

const dashboards = [
  { src: "/dashboards/overview.png",         label: "Platform Overview" },
  { src: "/dashboards/power-management.png", label: "Power Efficiency Monitoring" },
  { src: "/dashboards/fuel-monitoring.png",  label: "Tank level & pipeline monitoring" },
  { src: "/dashboards/agriculture.png",      label: "Smart Irrigation & Agriculture" },
  { src: "/dashboards/cold-chain.png",       label: "Temp. Supply Chain" },
  { src: "/dashboards/smart-office.png",     label: "Smart Office" },
  { src: "/dashboards/smart-hotel.png",      label: "Hotel Environment Monitoring" },
  { src: "/dashboards/smart-hospital.png",   label: "Hospital Environment Monitoring" },
];

const capabilities = [
  {
    icon: <Layers size={22} />,
    title: "Platform",
    desc: "Own IoT platform — deployable as-is or fully customized to your requirements.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Bespoke Development",
    desc: "Full custom IoT solution development from sensor to cloud, built to your specification.",
  },
  {
    icon: <Radio size={22} />,
    title: "LoRaWAN Expertise",
    desc: "End-to-end LoRaWAN network design, deployment, and managed service.",
  },
  {
    icon: <GitMerge size={22} />,
    title: "Integration",
    desc: "Proven integration with BMS, ERP, SCADA, CMMS, and third-party analytics platforms.",
  },
  {
    icon: <BrainCircuit size={22} />,
    title: "AI & ML",
    desc: "Advanced analytics, predictive models, and intelligent automation built into every solution.",
  },
  {
    icon: <Headphones size={22} />,
    title: "Support",
    desc: "Dedicated technical support and ongoing platform management services.",
  },
];

export default function PlatformPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 bg-bg-deep overflow-hidden">
        <div className="absolute inset-0 bg-radial-teal opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-10 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp}>
                <Badge variant="teal" className="mb-6">Platform</Badge>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="font-heading font-bold text-4xl sm:text-5xl text-text leading-tight tracking-tight mb-6"
              >
                Platform
              </motion.h1>
              <motion.p variants={fadeUp} className="text-text-muted text-lg leading-relaxed">
                Anavera delivers a standards-based platform designed to provide flexible, scalable, and secure
                deployment options for modern industrial and enterprise environments. Available as both
                cloud-based services and on-premises deployments, the Anavera platform enables organizations
                to choose the infrastructure model that best fits their operational and security requirements.
                Built with interoperability in mind, the platform supports seamless integration with
                third-party applications through open integration APIs, allowing customers to extend
                functionality and unify data across existing systems. To ensure long-term reliability and
                performance, Anavera also provides comprehensive Annual Maintenance Contracts (AMC) for both
                cloud and on-premises deployments, delivering continuous support, updates, and system
                optimization.
              </motion.p>
            </motion.div>

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

      {/* Capabilities */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {capabilities.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <GlowCard className="p-6 h-full flex flex-col gap-4">
                  <div className="size-11 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="font-heading font-semibold text-text">{item.title}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
