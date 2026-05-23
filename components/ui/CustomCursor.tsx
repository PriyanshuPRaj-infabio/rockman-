"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  // Spring configuration for trailing lag
  const springConfig = { damping: 35, stiffness: 250, mass: 0.5 }
  const trailingX = useSpring(mouseX, springConfig)
  const trailingY = useSpring(mouseY, springConfig)

  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on devices that support hover (non-touch)
    const hasHover = window.matchMedia("(hover: hover)").matches
    if (!hasHover) return

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    // Detect hover on interactive elements to scale/glow the cursor
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return
      
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.closest(".interactive-card")
      
      setIsHovered(!!isInteractive)
    }

    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent-orange rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
      {/* Outer Ring with Glow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent-orange/40 bg-accent-orange/5 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(255,119,0,0.25)]"
        style={{
          x: trailingX,
          y: trailingY,
          width: isHovered ? 64 : 36,
          height: isHovered ? 64 : 36,
        }}
        animate={{
          scale: isHovered ? 1.25 : 1,
          borderColor: isHovered ? "rgba(255, 119, 0, 0.85)" : "rgba(255, 119, 0, 0.4)",
          backgroundColor: isHovered ? "rgba(255, 119, 0, 0.15)" : "rgba(255, 119, 0, 0.05)",
          boxShadow: isHovered ? "0 0 30px rgba(255, 119, 0, 0.5)" : "0 0 15px rgba(255, 119, 0, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  )
}
