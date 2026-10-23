'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './section-heading'

type Exp = {
  type: 'work' | 'education'
  role: string
  org: string
  period: string
  location: string
  description: string
  highlights: string[]
}

const TIMELINE: Exp[] = [
  {
    type: 'work',
    role: 'Senior Product Designer',
    org: 'Nexa Digital Studio',
    period: '2023 — Sekarang',
    location: 'Jakarta, ID',
    description:
      'Memimpin desain produk untuk klien perusahaan di sektor fintech dan e-commerce. Membangun design system yang dipakai lintas tim.',
    highlights: [
      'Menjalankan riset pengguna untuk 4 produk sekaligus',
      'Meningkatkan konversi onboarding sebesar 32%',
      'Membimbing 3 desainer junior dalam sprint mingguan',
    ],
  },
  {
    type: 'work',
    role: 'Frontend Developer',
    org: 'Bumi Teknologi',
    period: '2021 — 2023',
    location: 'Bandung, ID',
    description:
      'Mengembangkan antarmuka web untuk aplikasi SaaS B2B. Fokus pada performa, aksesibilitas, dan komponen reusable.',
    highlights: [
      'Memangkas waktu muat halaman utama hingga 45%',
      'Migrasi codebase ke TypeScript & Next.js',
      'Skor Lighthouse rata-rata 96 untuk seluruh halaman',
    ],
  },
  {
    type: 'work',
    role: 'UI/UX Designer (Freelance)',
    org: 'Berbagai klien',
    period: '2019 — 2021',
    location: 'Remote',
    description:
      'Bekerja dengan 20+ startup dan UMKM untuk merancang produk digital, mulai dari MVP hingga peluncuran publik.',
    highlights: [
      'Menyelesaikan 25+ proyek desain end-to-end',
      'Membangun alur kerja kolaborasi klien yang efisien',
      'Rata-rata kepuasan klien 4.9/5',
    ],
  },
  {
    type: 'education',
    role: 'S1 Teknik Informatika',
    org: 'Universitas Indonesia',
    period: '2015 — 2019',
    location: 'Depok, ID',
    description:
      'Lulus dengan predikat cum laude. Fokus pada interaksi manusia-komputer dan rekayasa perangkat lunak.',
    highlights: [
      'Tugas akhir: Sistem rekomendasi berbasis collaborative filtering',
      'Ketua komunitas desain kampus selama 2 periode',
      'Juara 1 lomba hackathon nasional (2018)',
    ],
  },
]

export function Experience() {
  return (
    <section id="pengalaman" className="relative py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Perjalanan"
          title="Pengalaman yang membentuk cara saya bekerja"
          description="Setiap babak memberi pelajaran berbeda — dari keterampilan teknis hingga seni berkolaborasi."
        />

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px -translate-x-1/2 sm:-translate-x-1/2"
            style={{
              background:
                'linear-gradient(to bottom, var(--primary), color-mix(in oklch, var(--primary) 20%, transparent))',
            }}
            aria-hidden
          />

          <div className="space-y-10">
            {TIMELINE.map((e, i) => {
              const isLeft = i % 2 === 0
              const Icon = e.type === 'work' ? Briefcase : GraduationCap
              return (
                <motion.div
                  key={e.role + e.org}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start gap-4 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Dot on the line */}
                  <span
                    className="absolute left-4 sm:left-1/2 top-1.5 z-10 -translate-x-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md ring-4 ring-background"
                    aria-hidden
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  {/* Empty spacer on desktop for alternating layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card */}
                  <div className="flex-1 sm:w-1/2 sm:px-6 pl-14 sm:pl-0">
                    <div
                      className={`rounded-2xl border border-border/70 bg-card p-5 shadow-sm hover:shadow-md transition-shadow ${
                        isLeft ? 'sm:text-right' : 'sm:text-left'
                      }`}
                    >
                      <div className={`flex items-center gap-2 ${isLeft ? 'sm:justify-end' : ''}`}>
                        <Badge variant="secondary" className="font-normal">
                          {e.period}
                        </Badge>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold leading-tight">{e.role}</h3>
                      <div
                        className={`mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground ${
                          isLeft ? 'sm:justify-end' : ''
                        }`}
                      >
                        <span className="font-medium text-foreground/90">{e.org}</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {e.location}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {e.description}
                      </p>
                      <ul
                        className={`mt-3 space-y-1.5 text-sm ${
                          isLeft ? 'sm:text-right' : ''
                        }`}
                      >
                        {e.highlights.map((h) => (
                          <li
                            key={h}
                            className={`flex items-start gap-2 ${
                              isLeft ? 'sm:flex-row-reverse' : ''
                            }`}
                          >
                            <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="text-foreground/80">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
