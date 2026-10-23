'use client'

import { motion } from 'framer-motion'
import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from 'lucide-react'

import { SectionHeading } from './section-heading'

type Step = {
  no: string
  icon: typeof Search
  title: string
  duration: string
  description: string
  outputs: string[]
}

const STEPS: Step[] = [
  {
    no: '01',
    icon: Search,
    title: 'Diskusi & Riset',
    duration: '3 — 5 hari',
    description:
      'Kita gali tujuan bisnis, audiens, dan tantangan yang ingin diselesaikan. Saya pelajari kompetitor serta mengumpulkan referensi visual yang relevan.',
    outputs: ['Brief proyek', 'Riset kompetitor', 'Moodboard'],
  },
  {
    no: '02',
    icon: PenTool,
    title: 'Desain & Prototipe',
    duration: '1 — 2 minggu',
    description:
      'Saya buat wireframe, lalu visual desain berbasis riset. Anda bisa mencoba prototipe interaktif dan memberi masukan sebelum implementasi dimulai.',
    outputs: ['Wireframe', 'UI desain final', 'Prototipe Figma'],
  },
  {
    no: '03',
    icon: Code2,
    title: 'Implementasi',
    duration: '2 — 4 minggu',
    description:
      'Saya menerjemahkan desain menjadi kode bersih, responsif, dan siap produksi. Komunikasi berjalan tiap sprint agar progres tetap transparan.',
    outputs: ['Kode produksi', 'Komponen reusable', 'Dokumentasi'],
  },
  {
    no: '04',
    icon: Rocket,
    title: 'Peluncuran & Dukungan',
    duration: '1 minggu +',
    description:
      'Setelah peluncuran, saya bantu monitoring, perbaikan bug, dan sesi pelatihan agar tim Anda bisa mengelola produk secara mandiri.',
    outputs: ['Deploy & QA', 'Panduan pengelolaan', 'Garansi revisi minor'],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Process() {
  return (
    <section id="proses" className="relative py-20 sm:py-28 scroll-mt-20 overflow-hidden">
      {/* Soft background tint */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{ background: 'color-mix(in oklch, var(--muted) 7%, transparent)' }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cara Kerja"
          title="Proses yang transparan, dari brief hingga peluncuran"
          description="Anda tahu apa yang sedang terjadi di setiap tahap. Tidak ada kejutan, hanya kolaborasi yang terstruktur."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative"
        >
          {/* Connector line on desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px -z-0"
            style={{
              background:
                'linear-gradient(to right, transparent, color-mix(in oklch, var(--primary) 50%, transparent), transparent)',
            }}
            aria-hidden
          />

          {STEPS.map((s) => (
            <motion.div
              key={s.no}
              variants={item}
              className="relative rounded-2xl border border-border/70 bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              {/* Number badge */}
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30 relative z-10"
                >
                  <s.icon className="h-5 w-5" />
                </span>
                <span
                  className="font-mono text-3xl font-bold opacity-10"
                  aria-hidden
                >
                  {s.no}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <h3 className="font-semibold leading-tight">{s.title}</h3>
              </div>
              <p className="mt-1 text-xs font-medium text-primary">{s.duration}</p>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>

              <div className="mt-4 pt-4 border-t border-border/60">
                <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  Hasil
                </p>
                <ul className="space-y-1">
                  {s.outputs.map((o) => (
                    <li
                      key={o}
                      className="flex items-center gap-2 text-xs text-foreground/80"
                    >
                      <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
