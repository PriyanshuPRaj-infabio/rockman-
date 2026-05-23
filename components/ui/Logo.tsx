"use client"

import Image from "next/image"

interface LogoProps {
  className?: string
  priority?: boolean
}

export function Logo({ className = "relative w-full h-full", priority = false }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="/logo.png"
        alt="Rockman Logo"
        fill
        sizes="192px"
        className="object-contain"
        priority={priority}
      />
    </div>
  )
}
