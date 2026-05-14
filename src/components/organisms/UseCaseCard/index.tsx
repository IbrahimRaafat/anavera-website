"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Gauge, Droplets, Thermometer, Building2, BedDouble, HeartPulse } from "lucide-react";
import { cn } from "@/lib/cn";
import { cardHover } from "@/design-system/animations";
import type { UseCase } from "@/data/useCases";

const iconMap: Record<string, React.ReactNode> = {
  Zap:         <Zap size={20} />,
  Gauge:       <Gauge size={20} />,
  Droplets:    <Droplets size={20} />,
  Thermometer: <Thermometer size={20} />,
  Building2:   <Building2 size={20} />,
  BedDouble:   <BedDouble size={20} />,
  HeartPulse:  <HeartPulse size={20} />,
};

const industryLabel: Record<UseCase["industry"], string> = {
  industrial:   "Industrial",
  healthcare:   "Healthcare",
  hospitality:  "Hospitality",
  agriculture:  "Agriculture",
  commercial:   "Commercial",
};

interface UseCaseCardProps {
  useCase: UseCase;
  className?: string;
}

export function UseCaseCard({ useCase, className }: UseCaseCardProps) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className={cn("group", className)}
    >
      <Link
        href={`/use-cases/${useCase.slug}`}
        className="flex flex-col h-full p-6 rounded-xl bg-card border border-border transition-colors duration-300 group-hover:border-teal/40"
      >
        {/* Icon + industry */}
        <div className="flex items-start justify-between mb-4">
          <div className="size-11 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal group-hover:bg-teal/20 transition-colors">
            {iconMap[useCase.icon]}
          </div>
          <span className="text-xs font-heading font-medium text-text-subtle uppercase tracking-wider">
            {industryLabel[useCase.industry]}
          </span>
        </div>

        {/* Title + tagline */}
        <h3 className="font-heading font-semibold text-text text-base mb-2 group-hover:text-teal transition-colors">
          {useCase.shortTitle}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed flex-1">
          {useCase.tagline}
        </p>

        {/* Explore link */}
        <div className="flex items-center gap-1.5 text-text-muted group-hover:text-teal transition-colors text-sm font-heading font-medium">
          Explore
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
