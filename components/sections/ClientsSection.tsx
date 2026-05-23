"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useAnimationFrame } from "framer-motion"

const clients = [
  "Ford-logo.png",
  "Hero-v2.png",
  "Hyundai-Logo.png",
  "Stanad-logo.png",
  "TVS-logo.png",
  "ather-logo.png",
  "borg-warner-logo.png",
  "bosch-logo.png",
  "continental-logo.png",
  "dana-logo.png",
  "honda-logo.png",
  "java-logo.jpg",
  "kia-logo.png",
  "mahindra-logo.png",
  "nemak-logo.png",
  "ola-logo.png",
  "revolt-logo.png",
  "royal-enfield-logo.png",
  "tata-logo.png",
  "ultaviolette-logo.jpg"
]

export function ClientsSection() {
  // Duplicate array to create seamless loop
  const duplicatedClients = [...clients, ...clients]

  const marqueeRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useAnimationFrame(() => {
    if (!marqueeRef.current) return
    const marqueeRect = marqueeRef.current.getBoundingClientRect()
    const centerPoint = marqueeRect.left + marqueeRect.width / 2

    itemRefs.current.forEach((item) => {
      if (!item) return
      const itemRect = item.getBoundingClientRect()
      const itemCenter = itemRect.left + itemRect.width / 2
      const distance = Math.abs(itemCenter - centerPoint)

      // Color transition range (250px from center)
      const maxDistance = 250
      const ratio = Math.max(0, 1 - distance / maxDistance)

      // Smooth interpolation curve
      const smoothRatio = ratio * ratio * (3 - 2 * ratio)

      const grayscaleVal = 100 - (smoothRatio * 100)
      const opacityVal = 0.35 + (smoothRatio * 0.65)
      const scaleVal = 1.0 + (smoothRatio * 0.15)

      // Direct DOM mutation for smooth performance without React re-renders
      item.style.filter = `grayscale(${grayscaleVal}%)`
      item.style.opacity = `${opacityVal}`
      item.style.transform = `scale(${scaleVal})`
    })
  })

  return (
    <section id="partners" className="py-24 bg-surface-dark border-t border-accent-metal/10 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <h3 className="text-sm md:text-base tracking-[0.3em] text-muted uppercase text-center">
          Trusted By Industry Leaders
        </h3>
      </div>

      {/* Marquee Container */}
      <div ref={marqueeRef} className="relative flex overflow-hidden group">
        
        {/* Fade Masks for edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap items-center gap-16 md:gap-24 px-8"
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div 
              key={index} 
              ref={(el) => { itemRefs.current[index] = el }}
              className="relative w-32 h-20 md:w-40 md:h-24 flex-shrink-0 cursor-pointer"
              style={{
                filter: "grayscale(100%)",
                opacity: 0.35,
                transform: "scale(1)"
              }}
            >
              <Image 
                src={`/clients/${client}`} 
                alt={`Client ${index}`} 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 8rem, 10rem"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
