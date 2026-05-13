export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdownItem extends NavLink {
  description: string;
  icon: string;
}

export const useCaseDropdown: NavDropdownItem[] = [
  { label: "Power Management",           href: "/use-cases/power-efficiency",   description: "Real-time energy metering & AI demand forecasting",    icon: "Zap" },
  { label: "Fuel Monitoring",            href: "/use-cases/fuel-monitoring",    description: "Theft detection & predictive refill for remote tanks",  icon: "Gauge" },
  { label: "Smart Irrigation & Agriculture", href: "/use-cases/agriculture",    description: "Precision irrigation driven by soil sensors & ML",      icon: "Droplets" },
  { label: "Cold Chain Monitoring",      href: "/use-cases/cold-chain",         description: "End-to-end temperature compliance for perishables",     icon: "Thermometer" },
  { label: "Smart Offices",             href: "/use-cases/smart-office",        description: "Occupancy, IAQ & energy intelligence for workplaces",   icon: "Building2" },
  { label: "Smart Hotel",               href: "/use-cases/hotel",               description: "Guest-responsive room automation & predictive maint.",  icon: "BedDouble" },
  { label: "Smart Hospital",            href: "/use-cases/hospital",            description: "Clinical environment monitoring & asset tracking",      icon: "HeartPulse" },
];

export const mainNav: NavLink[] = [
  { label: "About us",           href: "/about-us" },
  { label: "Platform",           href: "/platform" },
  { label: "Hardware Ecosystem", href: "/hardware-ecosystem" },
  { label: "Contact",            href: "/contact" },
];
