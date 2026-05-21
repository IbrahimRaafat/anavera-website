import type { Metadata } from "next";
import { ApplicationsClient } from "./ApplicationsClient";

export const metadata: Metadata = {
  title: "Industry Applications & IoT Solutions | Anavera",
  description:
    "Explore Anavera's diverse portfolio of intelligent LoRaWAN monitoring and analytics applications built for industrial, healthcare, hospitality, and commercial sites.",
  openGraph: {
    title: "Industry Applications & IoT Solutions | Anavera",
    description: "Learn how Anavera translates raw sensor telemetry into actionable operational clarity for multiple industries.",
  },
};

export default function ApplicationsPage() {
  return <ApplicationsClient />;
}
