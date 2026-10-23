'use client'

import * as React from 'react'
import { useInView, useMotionValue, useSpring, animate } from 'framer-motion'

/**
 * Mengembalikan nilai angka yang teranimasi dari 0 ke `target`
 * ketika elemen ref masuk viewport.
 */
export function useCountUp(target: number, duration = 1.6) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = React.useState(0)

  React.useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, target, duration])

  return { ref, value: display }
}
