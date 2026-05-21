import type { Metadata } from "next";
import { PlatformClient } from "./PlatformClient";

export const metadata: Metadata = {
  title: "Core IoT Platform Features & Architecture | Anavera",
  description:
    "Discover Anavera's enterprise-grade IoT platform. Learn about secure sensor data ingestion, real-time rules engine, custom dashboards, and SCADA integration.",
  openGraph: {
    title: "Core IoT Platform Features & Architecture | Anavera",
    description: "Explore the secure, standards-based Anavera platform deployable in both cloud and on-premises environments.",
  },
};

export default function PlatformPage() {
  return <PlatformClient />;
}
