"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Smooth scroll parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  const principles = [
    {
      num: "01",
      title: "Respect for Individuals",
      desc: "We treat all people with fairness, dignity and respect, fostering a collaborative and supportive environment."
    },
    {
      num: "02",
      title: "Integrity",
      desc: "We are open, honest, and ethical in all of our dealings, building long-term trust with our global partners."
    },
    {
      num: "03",
      title: "Customer Focus",
      desc: "We ensure customer requirements are precisely identified and met, delivering cost-effective and innovative solutions."
    },
    {
      num: "04",
      title: "Learning Organization",
      desc: "Rockman empowers employees with the liberty to think, question existing systems, and drive continuous improvement."
    }
  ]

  return (
    <>
      <section id="about" ref={containerRef} className="relative py-32 md:py-48 bg-surface-dark overflow-hidden border-t border-accent-metal/20">
        {/* Background Ambient Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column - Sticky Title */}
            <div className="w-full lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <span className="block text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-accent-orange mb-3">
                  [ COMPANY LEGACY ]
                </span>
                <motion.h2 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6 leading-none"
                >
                  Precision <br />
                  Engineering <br />
                  For Global <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-accent-metal">Mobility</span>
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="h-px bg-accent-orange/30 w-full mb-8"
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-muted font-mono text-xs uppercase tracking-widest leading-relaxed"
                >
                  ESTABLISHED 1960 // SIX DECADES OF INDUSTRIAL EXCELLENCE
                </motion.p>
              </div>
            </div>

            {/* Right Column - Scrolling Story & Values */}
            <motion.div 
              style={{ y: y1, opacity }}
              className="w-full lg:w-2/3 flex flex-col gap-16 md:gap-20"
            >
              {/* Story Paragraphs */}
              <div className="flex flex-col gap-8">
                <p className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed text-balance">
                  For over six decades, Rockman Industries has built large-scale manufacturing capabilities across alloy wheels, auto chains, aluminium die-casting, and advanced composites for leading automotive brands.
                </p>
                <p className="text-lg md:text-xl font-light text-muted leading-relaxed text-balance">
                  With multiple facilities across India and advanced testing infrastructure, we focus on precision engineering, dependable quality, and high-performance manufacturing. Through Rockman Advanced Composites, we also deliver lightweight carbon fibre solutions for automotive, EV, aerospace, and industrial applications.
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card card-lift interactive-card p-8 rounded-lg group"
                >
                  <span className="text-xs font-mono text-accent-orange uppercase tracking-widest block mb-4">// Mission</span>
                  <h4 className="text-xl font-bold uppercase tracking-wide text-foreground mb-4 group-hover:text-accent-orange transition-colors">Built on Trust</h4>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Set the highest standards in business practices and be partners in the growth of customers by delivering engineering products, services, and solutions in innovative and cost-effective ways.
                  </p>
                </motion.div>

                {/* Vision */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card card-lift interactive-card p-8 rounded-lg group"
                >
                  <span className="text-xs font-mono text-accent-orange uppercase tracking-widest block mb-4">// Vision</span>
                  <h4 className="text-xl font-bold uppercase tracking-wide text-foreground mb-4 group-hover:text-accent-orange transition-colors">For Tomorrow</h4>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    We shape the next era of transport by pushing for better engineering honesty and helping our global partners grow over the long term.
                  </p>
                </motion.div>
              </div>

              {/* Guiding Principles Grid */}
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-xs font-mono text-muted uppercase tracking-widest block mb-2">[ GUIDING PRINCIPLES ]</span>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-foreground">The Values That Define Us</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {principles.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="glass-card card-lift interactive-card p-6 rounded-lg group"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="text-base font-bold uppercase tracking-wide text-foreground group-hover:text-accent-orange transition-colors">{item.title}</h5>
                        <span className="text-xs font-mono text-muted group-hover:text-accent-orange transition-colors">[{item.num}]</span>
                      </div>
                      <p className="text-xs text-muted leading-relaxed font-light">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Cinematic Full-Screen Video Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden border-t border-b border-accent-metal/15 bg-black">
        <video
          src="/about-us.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Dark Vignette Overlays for Cinema Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-[1]" />
        
        {/* Telemetry HUD overlays on top of video */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16 z-10 pointer-events-none">
          {/* Top Row */}
          <div className="flex justify-between items-start">
            <span className="text-[10px] md:text-xs font-mono text-accent-orange uppercase tracking-[0.3em]">
              [ VIDEO FEED // PLANT_CAM_01 ]
            </span>
            <span className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-[0.2em]">
              SYS_REF: 1960_LEGACY
            </span>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-wider text-white mb-3 leading-none">
                INDUSTRIAL SCALE
              </h3>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-lg">
                Engineering excellence at peak capacity across our major casting and manufacturing divisions.
              </p>
            </div>
            <div className="text-[10px] md:text-xs font-mono text-white/50 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-ping" />
              <span>LIVE TRANSMISSION</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
