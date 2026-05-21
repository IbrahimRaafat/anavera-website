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
  metadataBase: new URL("https://www.anavera.com"),
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN_HERE",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anavera",
    "url": "https://www.anavera.com",
    "logo": "https://www.anavera.com/Anavera-Logo.png",
    "description": "Anavera delivers intelligent IoT platform applications for industrial and enterprise environments.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6th floor, First Central 200, 2 Lakeside Drive, Park Royal",
      "addressLocality": "London",
      "postalCode": "NW10 7FQ",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+447507609922",
      "contactType": "sales",
      "email": "info@anavera.com"
    }
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
