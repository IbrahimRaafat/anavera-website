import type { Metadata } from "next";
import { AboutUsClient } from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | Anavera - Industrial IoT Automation Partner",
  description:
    "Founded in the UK, Anavera delivers intelligent automation and data monitoring platform applications that help organizations improve operational visibility, efficiency, and decision-making.",
  openGraph: {
    title: "About Us | Anavera - Industrial IoT Automation Partner",
    description: "Learn how Anavera simplifies connectivity to operational clarity through intelligent IIoT applications.",
  },
};

export default function AboutPage() {
  return <AboutUsClient />;
}
