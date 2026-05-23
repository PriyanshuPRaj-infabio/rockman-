"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ProductItem {
  id: string
  name: string
  category: string
  description: string
  specs: {
    capacity: string
    process: string
    material: string
    applications: string
  }
  imagePlaceholder: string
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "01",
    name: "Alloy Wheels",
    category: "WHEEL_DIVISION",
    description: "High-performance aluminium alloy wheels engineered for global two-wheeler and four-wheeler OEMs. Delivering lightweight durability, structural integrity, and precision balancing.",
    specs: {
      capacity: "17 Million+ Units Annually",
      process: "Low Pressure Die Casting (LPDC) / Gravity Die Casting (GDC)",
      material: "A356.2 Aluminium Alloy",
      applications: "Motorcycles, Scooters, Passenger Electric Vehicles"
    },
    imagePlaceholder: "alloy_wheels.png"
  },
  {
    id: "02",
    name: "Drive & Cam Chains",
    category: "CHAIN_DIVISION",
    description: "Heavy-duty motorcycle drive chains, cam chains, and silent timing chains built to withstand high tension and extreme operational environments.",
    specs: {
      capacity: "O.E.M. Kits & Individual Links",
      process: "Precision Link Punching & Induction Heat Treatment",
      material: "High-Tensile Carbon Steel Alloys",
      applications: "Two-Wheeler Transmission, Industrial Assemblies"
    },
    imagePlaceholder: "drive_chain.png"
  },
  {
    id: "03",
    name: "Aluminium Castings",
    category: "CASTING_DIVISION",
    description: "Complex structural castings, cylinder heads, crankcases, and engine mounts engineered under tight tolerances for weight reduction and thermal efficiency.",
    specs: {
      capacity: "240,000+ Tons Aluminium Processing",
      process: "High Pressure (HPDC) & LPDC Casting",
      material: "High-Grade Virgin & Recycled Aluminium",
      applications: "Automotive Engines, Structural Sub-Frames"
    },
    imagePlaceholder: "Aluminium-Casting.png"
  },
  {
    id: "04",
    name: "Braking Components",
    category: "SAFETY_SYSTEMS",
    description: "Premium disc brake pads, master cylinders, caliper assemblies, and brake hoses supplying responsive safety systems.",
    specs: {
      capacity: "O.E.M. Certified Safety Benchmarks",
      process: "Precision Machining & Hydraulic Testing",
      material: "Semi-Metallic Friction Alloys & Cast Aluminium",
      applications: "Two-Wheeler Disc Brake Systems"
    },
    imagePlaceholder: "breaking_components.png"
  },
  {
    id: "05",
    name: "Advanced Composites",
    category: "LIGHTWEIGHT_DIVISION",
    description: "Through Rockman Advanced Composites (RAC), we design and fabricate high-strength, ultra-lightweight carbon fibre structures.",
    specs: {
      capacity: "Custom Aerospace & EV Prototypes",
      process: "Autoclave Moulding & Resin Transfer Moulding (RTM)",
      material: "Prepreg Carbon Fibre / Epoxy Matrix",
      applications: "Aerospace, Defense, EV Panels, High-End Motorsports"
    },
    imagePlaceholder: "advance-composites.png"
  }
]

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const activeProduct = PRODUCTS_DATA[activeTab]

  return (
    <section id="products" className="relative py-32 md:py-48 bg-background overflow-hidden border-t border-accent-metal/20">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:30px_30px] opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="mb-20">
          <span className="block text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-accent-orange mb-3">
            [ 03 // MANUFACTURING CAPABILITIES ]
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Product Divisions
          </h2>
          <div className="h-px bg-accent-metal/20 w-32 mt-4" />
        </div>

        {/* Section Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left Column - Product selector */}
          <div className="w-full lg:w-5/12 flex flex-col gap-2">
            {PRODUCTS_DATA.map((item, index) => {
              const isActive = index === activeTab
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-lg flex items-center justify-between group glass-card interactive-card ${isActive
                    ? "border-accent-orange/50! bg-accent-orange/10! text-foreground shadow-[0_0_25px_rgba(255,119,0,0.15)]!"
                    : "text-muted"
                    }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-sm font-mono transition-colors duration-500 ${isActive ? "text-accent-orange" : "text-muted"
                      }`}>
                      [{item.id}]
                    </span>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold uppercase tracking-wide group-hover:text-foreground transition-colors duration-500">
                        {item.name}
                      </h4>
                      <span className="text-[10px] font-mono text-muted tracking-widest block mt-1">
                        // {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Indicator Arrow */}
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isActive
                    ? "border-accent-orange bg-accent-orange text-foreground"
                    : "border-accent-metal/20 text-muted group-hover:border-accent-metal/40"
                    }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className={`w-4 h-4 transition-transform duration-500 ${isActive ? "translate-x-0" : "-translate-x-0.5 group-hover:translate-x-0"
                        }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column - Spec Telemetry Card */}
          <div className="w-full lg:w-7/12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card card-lift interactive-card rounded-xl p-8 md:p-10 relative overflow-hidden"
              >
                {/* Tech Corner Crosshairs */}
                <div className="absolute top-2 left-2 text-accent-metal/30 font-mono text-[9px] pointer-events-none">+</div>
                <div className="absolute top-2 right-2 text-accent-metal/30 font-mono text-[9px] pointer-events-none">+</div>
                <div className="absolute bottom-2 left-2 text-accent-metal/30 font-mono text-[9px] pointer-events-none">+</div>
                <div className="absolute bottom-2 right-2 text-accent-metal/30 font-mono text-[9px] pointer-events-none">+</div>

                {/* Subtitle tag */}
                <div className="flex justify-between items-center mb-6 border-b border-accent-metal/10 pb-4">
                  <span className="text-xs font-mono text-accent-orange uppercase tracking-widest">
                    [ ACTIVE DIVISION SPECIFICATION ]
                  </span>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
                    SYS_REF: {activeProduct.category}
                  </span>
                </div>

                {/* Product Image Container */}
                <div className="relative w-full aspect-[16/10] bg-black/60 rounded-lg overflow-hidden border border-accent-metal/20 group mb-8">
                  {/* Subtle Grid overlay inside container */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-10" />

                  {/* Actual product image */}
                  <Image
                    src={`/clients/${activeProduct.imagePlaceholder}`}
                    alt={activeProduct.name}
                    fill
                    className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />

                  {/* High-tech telemetry overlay tag */}
                  <div className="absolute bottom-4 left-4 z-20 px-2 py-0.5 bg-black/85 backdrop-blur-md rounded border border-accent-metal/15 text-[8px] font-mono text-accent-orange tracking-widest uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-ping" />
                    <span>SYS_IMG // {activeProduct.imagePlaceholder}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-foreground/90 font-light leading-relaxed mb-8">
                  {activeProduct.description}
                </p>

                {/* Specs Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Capacity */}
                  <div className="p-5 border border-accent-metal/10 bg-black/20 rounded">
                    <span className="text-[9px] font-mono text-accent-orange uppercase tracking-wider block mb-1">
                      // Capacity
                    </span>
                    <span className="text-sm md:text-base font-bold text-foreground">
                      {activeProduct.specs.capacity}
                    </span>
                  </div>

                  {/* Material */}
                  <div className="p-5 border border-accent-metal/10 bg-black/20 rounded">
                    <span className="text-[9px] font-mono text-accent-orange uppercase tracking-wider block mb-1">
                      // Material Grade
                    </span>
                    <span className="text-sm md:text-base font-bold text-foreground">
                      {activeProduct.specs.material}
                    </span>
                  </div>

                  {/* Process */}
                  <div className="p-5 border border-accent-metal/10 bg-black/20 rounded">
                    <span className="text-[9px] font-mono text-accent-orange uppercase tracking-wider block mb-1">
                      // Technology Process
                    </span>
                    <span className="text-sm md:text-base font-bold text-foreground">
                      {activeProduct.specs.process}
                    </span>
                  </div>

                  {/* Applications */}
                  <div className="p-5 border border-accent-metal/10 bg-black/20 rounded">
                    <span className="text-[9px] font-mono text-accent-orange uppercase tracking-wider block mb-1">
                      // Core Applications
                    </span>
                    <span className="text-sm md:text-base font-bold text-foreground">
                      {activeProduct.specs.applications}
                    </span>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
