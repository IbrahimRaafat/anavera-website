"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft,
  Zap, Gauge, Droplets, Thermometer, Building2, BedDouble, HeartPulse,
  TrendingDown, TrendingUp, Settings2, Leaf, BrainCircuit,
  ShieldCheck, CircleDollarSign, Clock, ClipboardCheck,
  Users, Maximize2, Package, Route,
  Heart, LayoutGrid, Star, Shield, MapPin,
} from "lucide-react";
import { Button, Badge } from "@/components/atoms";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";
import type { UseCase } from "@/data/useCases";

const iconMap: Record<string, React.ReactNode> = {
  Zap:               <Zap size={28} />,
  Gauge:             <Gauge size={28} />,
  Droplets:          <Droplets size={28} />,
  Thermometer:       <Thermometer size={28} />,
  Building2:         <Building2 size={28} />,
  BedDouble:         <BedDouble size={28} />,
  HeartPulse:        <HeartPulse size={28} />,
  TrendingDown:      <TrendingDown size={18} />,
  TrendingUp:        <TrendingUp size={18} />,
  Settings2:         <Settings2 size={18} />,
  Leaf:              <Leaf size={18} />,
  BrainCircuit:      <BrainCircuit size={18} />,
  ShieldCheck:       <ShieldCheck size={18} />,
  CircleDollarSign:  <CircleDollarSign size={18} />,
  Clock:             <Clock size={18} />,
  ClipboardCheck:    <ClipboardCheck size={18} />,
  Users:             <Users size={18} />,
  Maximize2:         <Maximize2 size={18} />,
  Package:           <Package size={18} />,
  Route:             <Route size={18} />,
  Heart:             <Heart size={18} />,
  LayoutGrid:        <LayoutGrid size={18} />,
  Star:              <Star size={18} />,
  Shield:            <Shield size={18} />,
  MapPin:            <MapPin size={18} />,
};

const hardwareInfo: Record<string, { label: string; logo: string }> = {
  milesight: { label: "Milesight IoT", logo: "/Milesight-Logo (3)(1).png" },
  tektelic:  { label: "TEKTELIC",      logo: "/2- TEKTELIC logotype.png" },
  agatel:    { label: "Agatel",        logo: "/3- Agatel-new logo-RGB.png" },
};

export function UseCaseDetail({ useCase }: { useCase: UseCase }) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-bg-deep overflow-hidden">
        <div className="absolute inset-0 bg-radial-teal opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-2 text-text-muted hover:text-teal text-sm font-heading mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Use Cases
          </Link>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="size-14 rounded-2xl bg-teal/15 border border-teal/30 flex items-center justify-center text-teal">
                {iconMap[useCase.icon]}
              </div>
              <Badge variant="teal" className="capitalize">{useCase.industry}</Badge>
            </motion.div>
            <motion.p variants={fadeUp} className="text-teal text-sm font-heading font-semibold mb-2 tracking-wide">
              {useCase.number} | {useCase.title}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl sm:text-5xl text-text leading-tight tracking-tight mb-4"
            >
              {useCase.tagline}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-6">
            <motion.div variants={fadeUp}>
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-teal mb-3">Overview</p>
              <p className="text-text-muted text-lg leading-relaxed">{useCase.overview}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Challenges */}
      <section className="py-16 bg-bg-deep border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-6">
            <motion.p variants={fadeUp} className="text-xs font-heading font-semibold uppercase tracking-widest text-teal">
              Business Challenges
            </motion.p>
            <motion.ul variants={fadeUp} className="flex flex-col gap-3">
              {useCase.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="size-1.5 rounded-full bg-teal mt-2.5 shrink-0" />
                  <p className="text-text-muted leading-relaxed">{c}</p>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Anavera IoT Solution */}
      <section className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-6">
            <motion.div variants={fadeUp}>
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-teal mb-3">Anavera IoT Solution</p>
              <p className="text-text-muted text-lg leading-relaxed">{useCase.solution}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Platform Features */}
      <section className="py-16 bg-bg-deep border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-6">
            <motion.p variants={fadeUp} className="text-xs font-heading font-semibold uppercase tracking-widest text-teal">
              Key Platform Features
            </motion.p>
            <motion.ul variants={fadeUp} className="flex flex-col gap-3">
              {useCase.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="size-1.5 rounded-full bg-teal mt-2.5 shrink-0" />
                  <p className="text-text-muted leading-relaxed">{f}</p>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-8">
            <motion.p variants={fadeUp} className="text-xs font-heading font-semibold uppercase tracking-widest text-teal">
              Measurable Impact
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
              {useCase.impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 p-5 rounded-xl bg-card border border-border hover:border-teal/40 transition-colors duration-300"
                >
                  <span className="font-heading font-bold text-2xl sm:text-3xl text-gradient-teal">{stat.value}</span>
                  <span className="text-text-muted text-sm leading-tight">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-16 bg-bg-deep border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-6">
            <motion.p variants={fadeUp} className="text-xs font-heading font-semibold uppercase tracking-widest text-teal">
              Dashboard — Live Platform View
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src={useCase.dashboardImage}
                  alt={`${useCase.title} dashboard`}
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-text-muted text-sm text-center italic">{useCase.dashboardCaption}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Devices & Technology Used */}
      <section className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-6">
            <motion.div variants={fadeUp}>
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-teal mb-3">Devices & Technology Used</p>
              <p className="text-text-muted text-lg leading-relaxed">{useCase.devices}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {useCase.hardware.map((hw) => {
                const info = hardwareInfo[hw];
                return (
                  <Link
                    key={hw}
                    href="/hardware-ecosystem"
                    className="flex items-center rounded-xl bg-card border border-border hover:border-teal/40 transition-colors group p-2"
                  >
                    <div className="h-9 w-28 bg-white rounded flex items-center justify-center px-2 py-1.5 shrink-0">
                      <Image
                        src={info.logo}
                        alt={info.label}
                        width={96}
                        height={32}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Delivered */}
      <section className="py-16 bg-bg-deep border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-8">
            <motion.p variants={fadeUp} className="text-xs font-heading font-semibold uppercase tracking-widest text-teal">
              Value Delivered
            </motion.p>
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
              {useCase.valueDelivered.map((item) => (
                <div key={item.title} className="flex flex-col gap-3 p-5 rounded-xl bg-card border border-border hover:border-teal/40 transition-colors duration-300">
                  <div className="size-9 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-text mb-1">{item.title}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-teal opacity-50 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8 items-center"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-3 items-center">
              <p className="font-heading font-bold text-3xl sm:text-4xl text-text">Interested in This Use Case?</p>
              <p className="text-text-muted leading-relaxed max-w-xl">
                Contact Anavera to discuss your specific requirements and discover how this solution can deliver measurable results for your operation.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" iconRight={<ArrowRight size={16} />}>Talk to Us</Button>
              </Link>
              <Link href="/use-cases">
                <Button size="lg" variant="secondary">All Use Cases</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
