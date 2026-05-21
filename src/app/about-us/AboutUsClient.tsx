"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Factory, Lightbulb, Settings2 } from "lucide-react";
import { PageLayout } from "@/components/templates/PageLayout";
import { Badge } from "@/components/atoms";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";

const story = [
  {
    icon: <Building2 size={22} />,
    body: "Anavera is a software development house founded in the United Kingdom in 2023, focused on delivering intelligent automation and data monitoring platform applications that help organizations improve operational visibility, efficiency, and decision-making.",
  },
  {
    icon: <Factory size={22} />,
    body: "In 2025, Anavera expanded into the Industrial IoT (IIoT) space, introducing a standards-based IoT platform combined with adaptive, use case-driven applications designed to address real operational challenges across industrial and enterprise environments. Driven by the expertise of its engineering and development teams, Anavera launched multiple industry-focused applications targeting critical operational requirements within industrial environments.",
  },
  {
    icon: <Lightbulb size={22} />,
    body: "In 2026, the company further expanded its portfolio with specialized solutions for Agriculture, Hospitality, Medical Hospitality, and Building Management Systems (BMS), developed in collaboration with industry experts to deliver actionable insights, analytics, and operational intelligence tailored to modern business demands.",
  },
  {
    icon: <Settings2 size={22} />,
    body: "Beyond standard applications, Anavera is built with flexibility in mind. Our development team is equipped to deliver tailored enhancements and customizations that align with each customer's unique operational requirements, ensuring scalable solutions that adapt to evolving business needs.",
  },
];

export function AboutUsClient() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-28 bg-bg-deep overflow-hidden">
        <div className="absolute inset-0 bg-radial-teal opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-xl">
            <motion.div variants={fadeUp}>
              <Badge variant="teal" className="mb-6">About Anavera</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl sm:text-5xl text-text leading-tight tracking-tight mb-6"
            >
              About Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-muted text-lg leading-relaxed">
              We are focused on delivering intelligent automation and data monitoring platform applications that help organizations improve operational visibility, efficiency, and decision-making.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-border/50 aspect-video lg:aspect-[4/3]"
          >
            <Image src="/images/about_us_hero.png" alt="About Anavera" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-bg-deep/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Story cards */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid md:grid-cols-2 gap-6"
          >
            {story.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:border-teal/40 transition-colors duration-300"
              >
                <div className="size-11 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  {item.icon}
                </div>
                <p className="text-text-muted leading-relaxed text-justify">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
