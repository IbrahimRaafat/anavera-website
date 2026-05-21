import type { Metadata } from "next";
import { HardwareClient } from "./HardwareClient";

export const metadata: Metadata = {
  title: "Verified IoT Hardware & Gateways | Anavera",
  description:
    "Browse Anavera's certified hardware ecosystem. Featuring top-tier LoRaWAN sensors and industrial gateways from Milesight, TEKTELIC, and Agatel.",
  openGraph: {
    title: "Verified IoT Hardware & Gateways | Anavera",
    description: "Discover our partners that meet the highest standards of reliability and interoperability for diverse deployment environments.",
  },
};

export default function HardwareEcosystemPage() {
  return <HardwareClient />;
}
