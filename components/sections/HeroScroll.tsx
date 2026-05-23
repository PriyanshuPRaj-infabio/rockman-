"use client"

import { useEffect, useRef, useCallback } from "react"
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion"
import { useImagePreloader } from "@/hooks/useImagePreloader"

const FRAME_COUNT_1 = 150
const FRAME_COUNT_2 = 200

export function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef1 = useRef<HTMLCanvasElement>(null)
  const canvasRef2 = useRef<HTMLCanvasElement>(null)

  const pathGenerator1 = useCallback(
    (index: number) => `/sequence-hero/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`,
    []
  )

  const pathGenerator2 = useCallback(
    (index: number) => `/sequence 2/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`,
    []
  )

  const { imagesPreloaded: preloaded1, imagesRef: imagesRef1 } = useImagePreloader(FRAME_COUNT_1, pathGenerator1)
  const { imagesPreloaded: preloaded2, imagesRef: imagesRef2 } = useImagePreloader(FRAME_COUNT_2, pathGenerator2)

  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Frame index calculations (clamped by Framer Motion by default)
  const frameIndex1 = useTransform(scrollYProgress, [0, 0.5], [0, FRAME_COUNT_1 - 1])
  const frameIndex2 = useTransform(scrollYProgress, [0.5, 1.0], [0, FRAME_COUNT_2 - 1])

  const renderFrame = useCallback(
    (canvas: HTMLCanvasElement | null, img: HTMLImageElement | undefined) => {
      if (!canvas || !img) return
      const context = canvas.getContext("2d")
      if (!context) return

      // Calculate the scaling and positioning to cover the canvas (object-fit: cover)
      const hRatio = canvas.width / img.width
      const vRatio = canvas.height / img.height
      const ratio = Math.max(hRatio, vRatio)
      const centerShift_x = (canvas.width - img.width * ratio) / 2
      const centerShift_y = (canvas.height - img.height * ratio) / 2

      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      )
    },
    []
  )

  const renderCanvas1 = useCallback(
    (index: number) => {
      renderFrame(canvasRef1.current, imagesRef1.current[index])
    },
    [imagesRef1, renderFrame]
  )

  const renderCanvas2 = useCallback(
    (index: number) => {
      renderFrame(canvasRef2.current, imagesRef2.current[index])
    },
    [imagesRef2, renderFrame]
  )

  // Initial resize and render
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef1.current) {
        canvasRef1.current.width = window.innerWidth
        canvasRef1.current.height = window.innerHeight
        if (preloaded1) {
          renderCanvas1(Math.round(frameIndex1.get()))
        }
      }
      if (canvasRef2.current) {
        canvasRef2.current.width = window.innerWidth
        canvasRef2.current.height = window.innerHeight
        if (preloaded2) {
          renderCanvas2(Math.round(frameIndex2.get()))
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [preloaded1, preloaded2, frameIndex1, frameIndex2, renderCanvas1, renderCanvas2])

  // Update frame on scroll
  useMotionValueEvent(frameIndex1, "change", (latest) => {
    if (preloaded1) {
      renderCanvas1(Math.round(latest))
    }
  })

  useMotionValueEvent(frameIndex2, "change", (latest) => {
    if (preloaded2) {
      renderCanvas2(Math.round(latest))
    }
  })

  // Canvas Opacity Transitions: Soft cross-fade between 45% and 55% of the scroll
  const canvas1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [1, 1, 0, 0])
  const canvas2Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 0, 1, 1])

  // Scene 1: Opening title (fades on absolute scrollY)
  const titleOpacity = useTransform(scrollY, [0, 200, 400], [1, 1, 0])
  const titleY = useTransform(scrollY, [0, 400], [0, -100])
  const titleBlur = useTransform(scrollY, [0, 200, 400], [0, 0, 10])

  // Scene 2: Auto Chain Division description
  const scene2Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.5], [0, 1, 1, 0])
  const scene2Y = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.5], [50, 0, 0, -20])

  // Scene 3: Alloy Wheels & Die Casting description
  const scene3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.85, 0.95], [0, 1, 1, 0])
  const scene3Y = useTransform(scrollYProgress, [0.5, 0.55, 0.85, 0.95], [50, 0, 0, -20])

  return (
    <section id="hero" ref={containerRef} className="relative h-[750vh] bg-background force-dark">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas 1 (Sequence 1) */}
        <motion.canvas
          ref={canvasRef1}
          style={{ opacity: canvas1Opacity, filter: "var(--canvas-filter)" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Canvas 2 (Sequence 2) */}
        <motion.canvas
          ref={canvasRef2}
          style={{ opacity: canvas2Opacity, filter: "var(--canvas-filter)" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cinematic Vignette and Dark Overlay to enhance text/navigation contrast */}
        <div 
          className="absolute inset-0 pointer-events-none z-[1]" 
          style={{
            background: "linear-gradient(to bottom, var(--hero-overlay-start) 0%, transparent 50%, var(--hero-overlay-start) 100%)"
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none z-[1]" 
          style={{
            backgroundColor: "var(--hero-overlay-solid)"
          }}
        />

        {/* Scene 1 */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY, filter: `blur(${titleBlur}px)` }}
          className="absolute inset-0 flex items-center justify-start pointer-events-none z-10 px-6 md:px-24"
        >
          <div className="max-w-4xl border-l-2 border-accent-orange pl-6 md:pl-10">
            {/* Split Header */}
            <h1 className="flex flex-col gap-1 md:gap-2">
              <span className="text-xl md:text-4xl font-light uppercase tracking-[0.15em] text-foreground/80">
                Shaping the
              </span>
              <span className="text-6xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tight text-foreground leading-none">
                Future
              </span>
              <span className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[0.15em] text-accent-orange leading-none mt-1">
                of Automotive
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Scene 2 */}
        <motion.div
          style={{ opacity: scene2Opacity, y: scene2Y }}
          className="absolute inset-0 flex items-end justify-start pointer-events-none p-8 md:p-20 z-10"
        >
          <div className="max-w-2xl text-left border-l-2 border-accent-orange pl-6 md:pl-8 bg-gradient-to-r from-background/90 via-background/60 to-transparent p-6 md:p-8 rounded-r-lg backdrop-blur-md">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-orange font-bold block mb-3">
              Auto Chain Division
            </span>
            <p className="text-2xl md:text-[2rem] font-light text-foreground leading-relaxed tracking-wide">
              Complete and competent in-house auto chains manufacturing capability drives the country's two-wheeler production and assembly.
            </p>
          </div>
        </motion.div>

        {/* Scene 3 */}
        <motion.div
          style={{ opacity: scene3Opacity, y: scene3Y }}
          className="absolute inset-0 flex items-end justify-end pointer-events-none p-8 md:p-20 z-10"
        >
          <div className="max-w-2xl text-right border-r-2 border-accent-orange pr-6 md:pr-8 bg-gradient-to-l from-background/90 via-background/60 to-transparent p-6 md:p-8 rounded-l-lg backdrop-blur-md">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-orange font-bold block mb-3">
              Alloy Wheels & Die Casting Division
            </span>
            <p className="text-2xl md:text-[2rem] font-light text-foreground leading-relaxed tracking-wide">
              Advanced HPDC, LPDC & GDC casting processes delivering over 17 million high-performance alloy wheels annually for global automotive leaders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

