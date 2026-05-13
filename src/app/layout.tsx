import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Anavera — Connectivity to Clarity",
    template: "%s | Anavera",
  },
  description:
    "Anavera delivers intelligent IoT platform applications for industrial and enterprise environments. From sensor data to operational clarity.",
  keywords: ["IoT", "IIoT", "LoRaWAN", "smart building", "industrial IoT", "monitoring platform", "Anavera"],
  openGraph: {
    title: "Anavera — Connectivity to Clarity",
    description: "Intelligent IoT platform solutions for industrial and enterprise environments.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
