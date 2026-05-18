"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, Menu, X,
  Zap, Gauge, Droplets, Thermometer, Building2, BedDouble, HeartPulse,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Button, GlowDot, PipelineIcon } from "@/components/atoms";
import { useCaseDropdown } from "@/data/navigation";
import { slideDown } from "@/design-system/animations";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={14} />, Gauge: <Gauge size={14} />, Droplets: <Droplets size={14} />,
  Thermometer: <Thermometer size={14} />, Building2: <Building2 size={14} />,
  BedDouble: <BedDouble size={14} />, HeartPulse: <HeartPulse size={14} />,
  Pipeline: <PipelineIcon size={14} />,
};

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-white border-b border-border",
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/Anavera-Logo.png"
              alt="Anavera — Connectivity to Clarity"
              width={200}
              height={58}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/about-us"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium font-heading transition-colors",
                isActive("/about-us") ? "text-teal" : "text-text-muted hover:text-text",
              )}
            >
              About us
            </Link>
            <Link
              href="/platform"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium font-heading transition-colors",
                isActive("/platform") ? "text-teal" : "text-text-muted hover:text-text",
              )}
            >
              Platform
            </Link>

            {/* Use Cases dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/applications"
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium font-heading transition-colors",
                  isActive("/applications") ? "text-teal" : "text-text-muted hover:text-text",
                )}
              >
                Applications
                <ChevronDown
                  size={14}
                  className={cn("transition-transform duration-200", dropdownOpen && "rotate-180")}
                />
              </Link>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    variants={slideDown}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] rounded-xl bg-white border border-border shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-2 origin-top"
                  >
                    <div className="grid grid-cols-2 gap-0.5">
                      {useCaseDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-start gap-3 p-3 rounded-lg transition-colors group",
                            pathname === item.href ? "bg-teal/8" : "hover:bg-bg-deep",
                          )}
                        >
                          <span className="size-7 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0 mt-0.5 group-hover:bg-teal/20 transition-colors">
                            {iconMap[item.icon]}
                          </span>
                          <span>
                            <span className="block text-sm font-heading font-semibold text-text">{item.label}</span>
                            <span className="block text-xs text-text-muted mt-0.5 leading-snug">{item.description}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/applications"
                      className="flex items-center justify-center gap-1.5 mt-2 pt-2 border-t border-border text-xs text-text-muted hover:text-teal transition-colors font-heading"
                    >
                      View all Applications →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/hardware-ecosystem"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium font-heading transition-colors",
                isActive("/hardware-ecosystem") ? "text-teal" : "text-text-muted hover:text-text",
              )}
            >
              Hardware Ecosystem
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button size="sm" variant="primary">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-text-muted hover:text-text transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-white/98 backdrop-blur-md border-b border-border shadow-sm lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {[{ label: "About us", href: "/about-us" }, { label: "Platform", href: "/platform" }, { label: "Hardware Ecosystem", href: "/hardware-ecosystem" }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-heading font-medium transition-colors",
                    isActive(link.href) ? "text-teal bg-teal/8" : "text-text-muted hover:text-text hover:bg-bg-deep",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-1">
                <p className="px-4 text-xs text-text-subtle font-heading uppercase tracking-widest mb-1">Applications</p>
                {useCaseDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm transition-colors",
                      pathname === item.href ? "text-teal" : "text-text-muted hover:text-text",
                    )}
                  >
                    <span className="text-teal">{iconMap[item.icon]}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="pt-2 pb-1">
                <Link href="/contact">
                  <Button className="w-full" size="md">Contact Us</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
