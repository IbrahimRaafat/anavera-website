"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cloud, Server, Plug, Shield } from "lucide-react";
import { Button } from "@/components/atoms";
import { SectionLabel, GlowCard } from "@/components/molecules";
import { UseCaseCard } from "@/components/organisms/UseCaseCard";
import { useCases } from "@/data/useCases";
import { hardwarePartners } from "@/data/hardware";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";

export function HomeSections() {
  return (
    <>
      <AboutTeaser />
      <PlatformTeaser />
      <UseCasesGrid />
      <HardwarePartners />
      <CtaBanner />
    </>
  );
}

/* ─── About Teaser ───────────────────────────────────────────────── */
function AboutTeaser() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel
                eyebrow="About Anavera"
                heading={<>UK Software House.<br />IIoT Platform Builder.</>}
                description="Founded in 2023, Anavera expanded into Industrial IoT in 2025 — bringing a standards-based platform and adaptive use case applications to industrial and enterprise operations worldwide."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="/about-us">
                <Button variant="secondary" iconRight={<ArrowRight size={14} />}>
                  Our Story
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: "🌐", title: "LoRaWAN Native",   desc: "Built on the open LPWAN standard for wide-area IoT deployments" },
              { icon: "🤖", title: "AI & ML Core",     desc: "Anomaly detection, demand forecasting, and predictive analytics built in" },
              { icon: "🔌", title: "Protocol Agnostic", desc: "Modbus, BACnet, MQTT, RS485 — all unified on a single platform" },
              { icon: "🏗️", title: "Tailored Builds",  desc: "Custom development for use cases beyond standard applications" },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="p-5 rounded-xl bg-card border border-border hover:border-teal/40 transition-colors"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="font-heading font-semibold text-text text-sm mb-1">{item.title}</p>
                <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Platform Teaser ────────────────────────────────────────────── */
function PlatformTeaser() {
  return (
    <section className="py-24 bg-bg-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel
              eyebrow="Platform"
              heading="Deploy the Way You Need"
              description="Anavera's standards-based platform is available as cloud-hosted or fully on-premises — you choose the model that fits your security and operational requirements."
              align="center"
            />
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {[
              {
                icon: <Cloud size={24} />,
                title: "Cloud Deployment",
                desc: "Managed cloud infrastructure with zero overhead. Instant setup, automatic updates, and global accessibility.",
                features: ["Managed infrastructure", "Automatic scaling", "Global CDN", "SLA-backed uptime"],
              },
              {
                icon: <Server size={24} />,
                title: "On-Premises",
                desc: "Full deployment within your own infrastructure. Maximum data sovereignty and integration with internal systems.",
                features: ["Complete data ownership", "Air-gap compatible", "Internal network only", "Custom integrations"],
              },
            ].map((card) => (
              <motion.div key={card.title} variants={fadeUp}>
                <GlowCard className="p-8 h-full flex flex-col gap-6">
                  <div className="size-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text text-xl mb-2">{card.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
                  </div>
                  <ul className="flex flex-col gap-2 mt-auto">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-muted">
                        <span className="size-1.5 rounded-full bg-teal shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
            {[
              { icon: <Plug size={16} />, title: "Open Integration APIs", desc: "Connect Anavera to your existing ERP, CMMS, or BMS systems seamlessly." },
              { icon: <Shield size={16} />, title: "Annual Maintenance Contracts", desc: "Continuous support, updates, and system optimisation included." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start p-5 rounded-xl bg-card border border-border">
                <div className="size-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-heading font-semibold text-text text-sm">{item.title}</p>
                  <p className="text-text-muted text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center">
            <Link href="/platform">
              <Button variant="secondary" iconRight={<ArrowRight size={14} />}>Explore the Platform</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Use Cases Grid ─────────────────────────────────────────────── */
function UseCasesGrid() {
  return (
    <section className="py-24 bg-bg">
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
              eyebrow="Use Cases"
              heading="7 Industry Verticals"
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

/* ─── Hardware Partners ──────────────────────────────────────────── */
function HardwarePartners() {
  return (
    <section className="py-24 bg-bg-deep border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-10 items-center text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel
              eyebrow="Hardware Ecosystem"
              heading="Best-in-Class Hardware Partners"
              description="Anavera selects hardware partners based on the highest standards of reliability, interoperability, and deployment suitability."
              align="center"
            />
          </motion.div>

          <motion.div variants={staggerContainer} className="grid sm:grid-cols-3 gap-6 w-full max-w-3xl">
            {hardwarePartners.map((partner) => (
              <motion.div key={partner.id} variants={fadeUp}>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-3 p-6 rounded-xl bg-card border border-border hover:border-teal/40 transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,168,181,0.15)] group"
                >
                  <div className="size-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center">
                    <span className="font-heading font-black text-teal text-xs">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-bold text-text text-sm group-hover:text-teal transition-colors">{partner.name}</p>
                    <p className="text-text-muted text-xs mt-1 leading-snug">{partner.tagline}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link href="/hardware-ecosystem">
              <Button variant="secondary" iconRight={<ArrowRight size={14} />}>
                Explore Hardware Ecosystem
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section className="py-32 bg-bg-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-teal pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
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
              <Button size="lg" iconRight={<ArrowRight size={16} />}>Talk to Us</Button>
            </Link>
            <Link href="/use-cases">
              <Button size="lg" variant="secondary">Browse Use Cases</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
