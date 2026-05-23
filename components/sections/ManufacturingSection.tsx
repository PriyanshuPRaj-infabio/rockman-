"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManufacturingSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section id="capabilities" ref={containerRef} className="relative py-32 md:py-48 bg-background overflow-hidden">
      {/* Background Grid & Glow */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-widest text-foreground mb-12">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-metal via-foreground to-accent-metal">The Future</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed mb-8">
            Across 9 state-of-the-art facilities, we specialise in high-precision casting and machining to supply key components like alloy wheels, engine parts, and auto drive chains.
          </p>

          <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-accent-orange/50 to-transparent mt-12 rounded-lg card-lift">
            <div className="glass-card interactive-card px-8 py-6 rounded-lg">
              <p className="text-lg md:text-xl font-medium tracking-wide text-foreground">
                <span className="text-accent-orange">PRECISION ENGINEERING</span> ensures we maintain extreme quality, safety, and high-performance manufacturing standards globally.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
