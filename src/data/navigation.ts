export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdownItem extends NavLink {
  description: string;
  icon: string;
}

export const useCaseDropdown: NavDropdownItem[] = [
  { label: "Power Efficiency Monitoring",      href: "/applications/power-efficiency",   description: "Real-time energy metering & AI demand forecasting",    icon: "Zap" },
  { label: "Tank Level Monitoring",            href: "/applications/tank-level-monitoring", description: "Real-time tank visibility & intelligent refill management", icon: "Gauge" },
  { label: "Oil & Gas Pipeline Monitoring",     href: "/applications/pipeline-monitoring",   description: "Real-time leak detection & pipeline integrity monitoring",  icon: "Pipeline" },
  { label: "Smart Irrigation & Agriculture",   href: "/applications/agriculture",        description: "Precision irrigation driven by soil sensors & ML",      icon: "Droplets" },
  { label: "Temperature Integrity Monitoring", href: "/applications/cold-chain",         description: "End-to-end temperature compliance for perishables",     icon: "Thermometer" },
  { label: "Smart Office",                     href: "/applications/smart-office",       description: "Occupancy, IAQ & energy intelligence for workplaces",   icon: "Building2" },
  { label: "Smart Hotel",                      href: "/applications/hotel",              description: "Guest-responsive room automation & predictive maint.",  icon: "BedDouble" },
  { label: "Smart Hospitals",                  href: "/applications/hospital",           description: "Clinical environment monitoring & asset tracking",      icon: "HeartPulse" },
];

export const mainNav: NavLink[] = [
  { label: "About us",           href: "/about-us" },
  { label: "Platform",           href: "/platform" },
  { label: "Hardware Ecosystem", href: "/hardware-ecosystem" },
  { label: "Contact",            href: "/contact" },
];
