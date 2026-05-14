export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdownItem extends NavLink {
  description: string;
  icon: string;
}

export const useCaseDropdown: NavDropdownItem[] = [
  { label: "Power Efficiency Monitoring",      href: "/use-cases/power-efficiency",   description: "Real-time energy metering & AI demand forecasting",    icon: "Zap" },
  { label: "Tank level & pipeline monitoring", href: "/use-cases/fuel-monitoring",    description: "Theft detection & predictive refill for remote tanks",  icon: "Gauge" },
  { label: "Smart Irrigation & Agriculture",   href: "/use-cases/agriculture",        description: "Precision irrigation driven by soil sensors & ML",      icon: "Droplets" },
  { label: "Temp. Supply Chain",               href: "/use-cases/cold-chain",         description: "End-to-end temperature compliance for perishables",     icon: "Thermometer" },
  { label: "Smart Office",                     href: "/use-cases/smart-office",       description: "Occupancy, IAQ & energy intelligence for workplaces",   icon: "Building2" },
  { label: "Hotel Environment Monitoring",     href: "/use-cases/hotel",              description: "Guest-responsive room automation & predictive maint.",  icon: "BedDouble" },
  { label: "Hospital Environment Monitoring",  href: "/use-cases/hospital",           description: "Clinical environment monitoring & asset tracking",      icon: "HeartPulse" },
];

export const mainNav: NavLink[] = [
  { label: "About us",           href: "/about-us" },
  { label: "Platform",           href: "/platform" },
  { label: "Hardware Ecosystem", href: "/hardware-ecosystem" },
  { label: "Contact",            href: "/contact" },
];
