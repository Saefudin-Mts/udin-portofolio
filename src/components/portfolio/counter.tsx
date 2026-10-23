'use client'

import { useCountUp } from '@/hooks/use-count-up'

interface CounterProps {
  /** angka target */
  to: number
  /** akhiran seperti "+", "%", "k" */
  suffix?: string
  /** awalan seperti "$" */
  prefix?: string
  /** jumlah desimal di belakang koma */
  decimals?: number
  duration?: number
  className?: string
}

export function Counter({
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1.6,
  className,
}: CounterProps) {
  const { ref, value } = useCountUp(to, duration)
  const formatted = value.toLocaleString('id-ID', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
