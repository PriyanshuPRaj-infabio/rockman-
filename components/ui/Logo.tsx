"use client"

import Image from "next/image"

interface LogoProps {
  className?: string
  priority?: boolean
}

export function Logo({ className = "relative w-full h-full", priority = false }: LogoProps) {
  return (
    <div className={`${className} flex flex-col`}>
      {/* 1. Emblem (Top 55%) - Always original colors */}
      <div className="relative w-full h-[55%] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[181.82%]">
          <Image
            src="/logo.png"
            alt="Rockman Logo Emblem"
            fill
            sizes="192px"
            className="object-contain"
            priority={priority}
          />
        </div>
      </div>
      {/* 2. Text (Bottom 45%) - Filtered in light mode */}
      <div className="relative w-full h-[45%] overflow-hidden" style={{ filter: "var(--logo-text-filter, none)" }}>
        <div className="absolute bottom-0 left-0 w-full h-[222.22%]">
          <Image
            src="/logo.png"
            alt="Rockman Logo Text"
            fill
            sizes="192px"
            className="object-contain"
            priority={priority}
          />
        </div>
      </div>
    </div>
  )
}
