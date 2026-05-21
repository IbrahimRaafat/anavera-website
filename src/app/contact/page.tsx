import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Our IoT Experts & Schedule Demo | Anavera",
  description:
    "Contact Anavera's engineering and sales team today to request a custom IoT platform demo or query customized solutions for your operational requirements.",
  openGraph: {
    title: "Contact Our IoT Experts & Schedule Demo | Anavera",
    description: "Connect with the Anavera team in the UK. Let's discuss your industrial IoT or enterprise automation requirements.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
