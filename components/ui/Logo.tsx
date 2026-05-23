"use client"

import Image from "next/image"

interface LogoProps {
  className?: string
  priority?: boolean
}

export function Logo({ className = "relative w-full h-full", priority = false }: LogoProps) {
  return (
    <div className={className}>
      {/* 1. Emblem (Top 55%) - Always original colors (no filter) */}
      <Image
        src="/logo.png"
        alt="Rockman Logo Emblem"
        fill
        sizes="192px"
        className="object-contain"
        style={{ clipPath: "inset(0 0 45% 0)" }}
        priority={priority}
      />
      {/* 2. Text (Bottom 45%) - Filtered in light mode */}
      <Image
        src="/logo.png"
        alt="Rockman Logo Text"
        fill
        sizes="192px"
        className="object-contain"
        style={{ 
          clipPath: "inset(55% 0 0 0)",
          filter: "var(--logo-text-filter, none)" 
        }}
        priority={priority}
      />
    </div>
  )
}
