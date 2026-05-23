"use client"

import { useEffect, useRef, useState } from "react"

export function useImagePreloader(frameCount: number, pathGenerator: (index: number) => string) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false)
  const imagesRef = useRef<HTMLImageElement[]>([])

  useEffect(() => {
    let loadedCount = 0
    const images: HTMLImageElement[] = []

    console.log("Starting image preloading for", frameCount, "frames...")

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()
      img.src = pathGenerator(i)

      const handleLoad = () => {
        loadedCount++
        if (loadedCount === frameCount) {
          console.log("All frames preloaded successfully.")
          setImagesPreloaded(true)
        }
      }

      const handleError = () => {
        console.error(`Failed to load frame ${i}: ${img.src}`)
        loadedCount++
        if (loadedCount === frameCount) {
          console.log("Frames loading completed with errors.")
          setImagesPreloaded(true)
        }
      }

      img.onload = handleLoad
      img.onerror = handleError
      images.push(img)
    }

    imagesRef.current = images
  }, [frameCount, pathGenerator])

  return { imagesPreloaded, imagesRef }
}
