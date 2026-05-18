import React from "react";

interface PipelineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function PipelineIcon({ size = 24, className, ...props }: PipelineIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <g transform="translate(12 12) scale(1.05) translate(-12 -12)">
        {/* Left Pipe */}
        <path d="M5 14H2v4h3" />
        
        {/* Right Pipe */}
        <path d="M19 14h3v4h-3" />
        
        {/* Top Pipe */}
        <path d="M10 7V2h4v5" />
        
        {/* Left Flange */}
        <rect x="5" y="12" width="3" height="8" rx="1" />
        
        {/* Right Flange */}
        <rect x="16" y="12" width="3" height="8" rx="1" />
        
        {/* Top Flange */}
        <rect x="8" y="7" width="8" height="3" rx="1" />
        
        {/* T-junction Body */}
        <path d="M8 18h8" />
        <path d="M8 14h2v-4" />
        <path d="M16 14h-2v-4" />
      </g>
    </svg>
  );
}
