"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Image from "next/image"
import { MagneticButton } from "./MagneticButton"
import { Logo } from "./Logo"

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark"
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.className = savedTheme
      document.documentElement.style.colorScheme = savedTheme
    } else {
      setTheme("light")
      document.documentElement.className = "light"
      document.documentElement.style.colorScheme = "light"
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    document.documentElement.className = nextTheme
    document.documentElement.style.colorScheme = nextTheme
    localStorage.setItem("theme", nextTheme)
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 6.5 : 600
    if (latest > threshold) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-accent-metal/15" 
          : "py-8 bg-transparent force-dark"
      }`}
    >
      <div 
        className={`absolute inset-0 -z-10 bg-gradient-to-b from-black/95 via-black/50 to-transparent transition-opacity duration-500 pointer-events-none h-[160%] ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="w-full mx-auto px-8 md:px-16 flex items-center justify-between">
        <MagneticButton>
          <div className="relative w-48 h-12 transition-transform duration-300 hover:scale-105 hover:brightness-110">
            <Logo priority />
          </div>
        </MagneticButton>

        <nav className="hidden md:flex items-center gap-12 text-sm uppercase tracking-widest font-medium">
          <MagneticButton><a href="#hero" className="text-foreground hover:text-accent-orange transition-colors">Home</a></MagneticButton>
          <MagneticButton><a href="#capabilities" className="text-foreground hover:text-accent-orange transition-colors">Capabilities</a></MagneticButton>
          <MagneticButton><a href="#products" className="text-foreground hover:text-accent-orange transition-colors">Products</a></MagneticButton>
          <MagneticButton><a href="#about" className="text-foreground hover:text-accent-orange transition-colors">About</a></MagneticButton>
          <MagneticButton><a href="#partners" className="text-foreground hover:text-accent-orange transition-colors">Partners</a></MagneticButton>
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton>
            <button className="hidden md:block px-6 py-3 border border-accent-metal/30 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 uppercase tracking-widest text-xs font-bold">
              Contact Us
            </button>
          </MagneticButton>

          {/* Theme Switcher Toggle */}
          <MagneticButton>
            <button 
              onClick={toggleTheme}
              className="p-3 border border-accent-metal/30 rounded-full hover:bg-foreground/5 hover:border-accent-orange/50 transition-all duration-300 flex items-center justify-center text-foreground cursor-pointer z-50"
              aria-label="Toggle Theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? (
                  // Sun icon for switching to light
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.96-8.96h-2.25M4.14 12H1.89m14.73-6.73l-1.59 1.59M6.73 17.27l-1.59 1.59m11.94 0l-1.59-1.59m-11.94-11.94l-1.59-1.59M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                  </svg>
                ) : (
                  // Moon icon for switching to dark
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </motion.div>
            </button>
          </MagneticButton>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-px bg-foreground block" />
            <span className="w-6 h-px bg-foreground block" />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
