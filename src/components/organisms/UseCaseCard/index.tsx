"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Gauge, Droplets, Thermometer, Building2, BedDouble, HeartPulse } from "lucide-react";
import { PipelineIcon } from "@/components/atoms";
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
  Pipeline:    <PipelineIcon size={20} />,
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
      className={cn("group h-full", className)}
    >
      <Link
        href={`/applications/${useCase.slug}`}
        className="flex flex-col h-full rounded-xl bg-card border border-border transition-colors duration-300 group-hover:border-teal/40 overflow-hidden"
      >
        <div className="relative w-full h-48 overflow-hidden bg-bg-deep">
          {useCase.heroImage && (
            <Image
              src={useCase.heroImage}
              alt={useCase.shortTitle}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
        <div className="flex flex-col p-6 flex-1">
          {/* Icon + industry */}
          <div className="flex items-start justify-between mb-4">
            <div className="size-11 rounded-xl bg-white border border-border flex items-center justify-center text-teal group-hover:border-teal/40 shadow-sm transition-colors z-10 -mt-10">
              {iconMap[useCase.icon]}
            </div>
            <span className="text-xs font-heading font-medium text-text-subtle uppercase tracking-wider z-10">
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
          <div className="flex items-center gap-1.5 text-text-muted group-hover:text-teal transition-colors text-sm font-heading font-medium mt-4">
            Explore
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
