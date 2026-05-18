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
    name: "Tektelic Communications",
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
  {
    name: "Rochester Sensors",
    url: "https://rochestersensorseurope.com/",
    urlLabel: "rochestersensorseurope.com",
    logo: "/rochester-sensors-logo.png",
    desc: "Rochester Sensors delivers advanced ultrasonic, pressure, and radar level sensing solutions for industrial monitoring applications. With over 110 years of expertise, Rochester Sensors enables reliable real-time monitoring through wired and wireless connectivity technologies including LoRaWAN, cellular, and NB-IoT across oil & gas, water, chemicals, and industrial sectors.",
  },
  {
    name: "Sensaio",
    url: "https://sensa.io/",
    urlLabel: "sensa.io",
    logo: "/sensaio-logo.png",
    desc: "SENSAiO is an industrial IoT sensor brand created by Edge Technologies SAS, a French company at the forefront of Industry 4.0 innovation. They specialize in developing intelligent wireless sensors that make industrial operations safer, more efficient, and more sustainable.",
  },
];

export default function HardwareEcosystemPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-28 bg-bg-deep overflow-hidden">
        <div className="absolute inset-0 bg-radial-teal opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
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
              Anavera cooperates with hardware partners that meet the highest standards of reliability,
              interoperability, and suitability for diverse deployment environments, ensuring consistent
              performance across industrial use cases.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-border/50 aspect-video lg:aspect-[4/3]"
          >
            <Image src="/images/hardware_hero.png" alt="Hardware Ecosystem" fill sizes="(max-width: 1024px) 100vw, 50vw" loading="eager" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-bg-deep/80 via-transparent to-transparent pointer-events-none" />
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
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <h2 className="font-heading font-bold text-text text-xl tracking-tight">{partner.name}</h2>
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-teal text-sm font-heading hover:underline">{partner.urlLabel}</a>
                  </div>
                  <div className="rounded-lg bg-white flex items-center justify-center px-3 py-2 shrink-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={100}
                      height={40}
                      className="object-contain"
                      style={{ width: "100px", height: "auto", maxHeight: "32px" }}
                    />
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
