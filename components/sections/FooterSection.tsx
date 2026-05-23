"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FooterSection() {
  return (
    <footer className="relative bg-background pt-32 pb-12 overflow-hidden border-t border-accent-metal/20">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent-orange/5 rounded-t-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-64 h-16 md:w-[400px] md:h-[100px] lg:w-[480px] lg:h-[120px]"
          >
            <Image
              src="/logo.png"
              alt="Rockman Logo"
              fill
              className="object-contain"
              style={{ filter: "var(--logo-filter)" }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-accent-metal tracking-[0.2em] uppercase text-sm md:text-base"
          >
            Engineering The Future Since 1960
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-accent-metal/10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="text-foreground font-semibold uppercase tracking-widest mb-4">Explore</h4>
            <a href="#" className="text-muted hover:text-foreground transition-colors">About Us</a>
            <a href="#" className="text-muted hover:text-foreground transition-colors">Manufacturing</a>
            <a href="#" className="text-muted hover:text-foreground transition-colors">Sustainability</a>
            <a href="#" className="text-muted hover:text-foreground transition-colors">Careers</a>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="text-foreground font-semibold uppercase tracking-widest mb-4">Contact</h4>
            <a href="#" className="text-muted hover:text-foreground transition-colors">Corporate Office</a>
            <a href="#" className="text-muted hover:text-foreground transition-colors">Media Enquiries</a>
            <a href="#" className="text-muted hover:text-foreground transition-colors">Support</a>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left md:items-end">
            <h4 className="text-foreground font-semibold uppercase tracking-widest mb-4">Social</h4>
            <a href="#" className="text-muted hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="text-muted hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="text-muted hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-accent-metal/10 text-xs text-muted/60">
          <p>© {new Date().getFullYear()} Rockman Industries. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
        {/* POWERED BY */}
        <div className="mt-5 flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-lg border border-foreground/15 bg-foreground/5 px-3 py-2 transition-all duration-300 hover:bg-foreground/10">

            <a
              href="https://fabulousmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
              aria-label="FabulousMedia"
            >
              <img
                src="/fabulous-logo.png"
                alt="FabulousMedia"
                className="h-3 w-auto"
                style={{ filter: "var(--logo-filter)" }}
              />
            </a>

            <span className="h-3 w-px bg-foreground/20" />

            <a
              href="https://gocommercially.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
              aria-label="GoCommercially"
            >
              <img
                src="/go_tm logo white.png"
                alt="GoCommercially"
                className="h-3 w-auto"
                style={{ filter: "var(--logo-filter)" }}
              />
            </a>

          </div>
        </div>
      </div>
    </footer>
  )
}
