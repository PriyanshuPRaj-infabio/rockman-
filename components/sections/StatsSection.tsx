"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

function Counter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [hasStarted, setHasStarted] = useState(false)
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration: duration * 1000,
  })

  useEffect(() => {
    if (inView && !hasStarted) {
      springValue.set(value)
      setHasStarted(true)
    }
  }, [inView, hasStarted, springValue, value])

  const display = useTransform(springValue, (current) => 
    Math.round(current).toLocaleString() + suffix
  )

  return <motion.span ref={ref}>{display}</motion.span>
}

export function StatsSection() {
  const stats = [
    {
      value: 240000,
      suffix: "+",
      label: "Tons Of Aluminium Processing"
    },
    {
      value: 17,
      suffix: "mn+",
      label: "Installed Capacity Of Alloy Wheels Annually"
    },
    {
      value: 3,
      suffix: "",
      label: "Casting Processes- HPDC, LPDC & GDC"
    },
    {
      value: 9,
      suffix: "",
      label: "Plants Located At Ludhiana, Haridwar, Bawal, Mangli, Chennai (2), Tirupati, Halol & Surat"
    }
  ]

  return (
    <section id="stats" className="relative py-32 bg-background border-t border-accent-metal/20">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col border-l border-accent-metal/30 pl-6"
            >
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="text-sm md:text-base text-muted uppercase tracking-widest leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
