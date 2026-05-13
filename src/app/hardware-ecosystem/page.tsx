"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageLayout } from "@/components/templates/PageLayout";
import { Badge } from "@/components/atoms";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";

const partners = [
  {
    name: "Milesight IoT",
    url: "https://www.milesight.com",
    urlLabel: "milesight.com",
    logo: "/Milesight-Logo (3)(1).png",
    desc: "Milesight is a global leader in IoT sensing and LoRaWAN connectivity products.",
  },
  {
    name: "TEKTELIC Communications",
    url: "https://www.tektelic.com",
    urlLabel: "tektelic.com",
    logo: "/2- TEKTELIC logotype.png",
    desc: "TEKTELIC is a carrier-grade LoRaWAN hardware manufacturer with 15+ years of wireless expertise.",
  },
  {
    name: "Agatel",
    url: "https://www.agatel.co.uk",
    urlLabel: "agatel.co.uk",
    logo: "/3- Agatel-new logo-RGB.png",
    desc: "Agatel specializes in protocol conversion, connectivity bridging, and industrial IoT integration products. Their solutions enable Anavera to integrate legacy wired sensor infrastructure with modern LoRaWAN and cellular networks — making Anavera solutions backward-compatible with existing client investments. Key capabilities include Modbus/BACnet to LoRaWAN protocol converters, LTE-M and NB-IoT cellular gateways, and industrial IoT edge devices for harsh environments.",
  },
];

export default function HardwareEcosystemPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-28 bg-bg-deep overflow-hidden">
        <div className="absolute inset-0 bg-radial-teal opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="teal" className="mb-6">Hardware Ecosystem</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl sm:text-5xl text-text leading-tight tracking-tight mb-6"
            >
              Hardware Ecosystem
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-muted text-lg leading-relaxed">
              Anavera selects hardware partners based on the highest standards of reliability,
              interoperability, and suitability for each deployment environment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                variants={fadeUp}
                className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:border-teal/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="h-12 w-36 rounded-lg bg-white flex items-center justify-center px-3 py-2 shrink-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-heading font-bold text-text text-lg">{partner.name}</h2>
                    </div>
                    <span className="text-teal text-sm font-heading">{partner.urlLabel}</span>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed">{partner.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
