import Link from "next/link";
import Image from "next/image";
import { Divider } from "@/components/atoms";
import { useCaseDropdown } from "@/data/navigation";

const platformLinks = [
  { label: "Cloud Deployment",  href: "/platform#cloud" },
  { label: "On-Premises",       href: "/platform#on-premises" },
  { label: "API Integration",   href: "/platform#api" },
  { label: "AMC & Support",     href: "/platform#amc" },
];

const companyLinks = [
  { label: "About Anavera",      href: "/about-us" },
  { label: "Hardware Ecosystem", href: "/hardware-ecosystem" },
  { label: "Contact Us",         href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-border">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/Anavera-Logo.png"
                alt="Anavera"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-5">
              Intelligent IoT platform solutions for industrial and enterprise environments. Founded in the UK, 2023.
            </p>
            <div className="p-4 rounded-xl bg-white border border-border flex flex-col gap-1.5">
              <p className="text-text text-xs font-heading font-semibold mb-0.5">London Office</p>
              <p className="text-text-muted text-xs leading-relaxed">
                6th floor, First Central 200<br />
                2 Lakeside Drive, Park Royal<br />
                London NW10 7FQ, UK
              </p>
              <a href="mailto:info@anavera.com" className="text-teal hover:text-teal-light text-xs transition-colors">
                info@anavera.com
              </a>
              <a href="tel:+447507609922" className="text-text-muted hover:text-teal text-xs transition-colors">
                +44 7507 609922
              </a>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <p className="font-heading font-semibold text-text text-sm mb-4">Use Cases</p>
            <ul className="flex flex-col gap-2.5">
              {useCaseDropdown.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-text-muted hover:text-teal text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <p className="font-heading font-semibold text-text text-sm mb-4">Platform</p>
            <ul className="flex flex-col gap-2.5">
              {platformLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-text-muted hover:text-teal text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-heading font-semibold text-text text-sm mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-text-muted hover:text-teal text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider />

        <div className="flex items-center justify-center pt-8">
          <p className="text-text-subtle text-xs">
            © {new Date().getFullYear()} Anavera Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
