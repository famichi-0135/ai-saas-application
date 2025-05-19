"use client"

import {  useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

export function useParallax(distance: number = 100) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const springValue = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const y = useTransform(springValue, [0, 1], [distance, distance * -1])

  return { ref, y }
}

export function useParallaxScroll(direction: "up" | "down" = "up") {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const multiplier = direction === "up" ? -200 : 200

  const y = useTransform(scrollYProgress, [0, 1], [0, multiplier])
  
  return { ref, y }
}

export function useScrollOpacity() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  
  return { ref, opacity }
}

export function useHorizontalScroll(
  offset: [
    | "start start" | "start end" | "start center"
    | "end start" | "end end" | "end center"
    | "center start" | "center end" | "center center"
    | `${number} ${number}` | `${number} start` | `${number} end` | `${number} center`
    | `${number} ${number}px` | `${number} ${number}vw` | `${number} ${number}vh` | `${number} ${number}%`
    | `start ${number}` | `end ${number}` | `center ${number}`
    | "start" | "end" | "center"
  ,
    | "start start" | "start end" | "start center"
    | "end start" | "end end" | "end center"
    | "center start" | "center end" | "center center"
    | `${number} ${number}` | `${number} start` | `${number} end` | `${number} center`
    | `${number} ${number}px` | `${number} ${number}vw` | `${number} ${number}vh` | `${number} ${number}%`
    | `start ${number}` | `end ${number}` | `center ${number}`
    | "start" | "end" | "center"
  ] = ["start end", "end start"]
) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  
  return { ref, x }
}