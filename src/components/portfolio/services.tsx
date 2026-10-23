'use client'

import { motion } from 'framer-motion'
import {
  PenTool,
  Code2,
  Rocket,
  Layers,
  Check,
  ArrowUpRight,
} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeading } from './section-heading'

type Service = {
  icon: typeof PenTool
  title: string
  tagline: string
  description: string
  features: string[]
  price: string
  unit: string
  popular?: boolean
  color: string
}

const SERVICES: Service[] = [
  {
    icon: PenTool,
    title: 'Desain UI/UX',
    tagline: 'Riset hingga prototipe',
    description:
      'Merancang antarmuka yang berbasis kebutuhan nyata pengguna. Saya mulai dari riset, persona, wireframe, hingga prototipe interaktif siap handoff.',
    features: [
      'Riset & wawancara pengguna',
      'Wireframe & user flow',
      'Prototipe interaktif Figma',
      'Dokumen handoff developer',
    ],
    price: 'Rp8jt',
    unit: '/ proyek',
    color: 'var(--chart-1)',
  },
  {
    icon: Code2,
    title: 'Web Development',
    tagline: 'Frontend modern & cepat',
    description:
      'Implementasi antarmuka dengan Next.js + TypeScript yang responsif, aksesibel, dan siap produksi. Fokus pada performa serta SEO.',
    features: [
      'Next.js & TypeScript',
      'Responsive & aksesibel',
      'Optimasi performa (Lighthouse 90+)',
      'Integrasi CMS & API',
    ],
    price: 'Rp15jt',
    unit: '/ proyek',
    popular: true,
    color: 'var(--primary)',
  },
  {
    icon: Layers,
    title: 'Design System',
    tagline: 'Skala untuk tim',
    description:
      'Membangun sistem komponen yang konsisten dan terdokumentasi agar tim Anda bisa berkembang tanpa kehilangan kualitas visual.',
    features: [
      'Design tokens & variant',
      'Library komponen Figma',
      'Panduan penggunaan merek',
      'Audit konsistensi visual',
    ],
    price: 'Rp20jt',
    unit: '/ paket',
    color: 'var(--chart-4)',
  },
  {
    icon: Rocket,
    title: 'Konsultasi Produk',
    tagline: 'Validasi ide & strategi',
    description:
      'Sesi pendampingan untuk memetakan prioritas fitur, menguji asumsi, dan menyusun roadmap yang realistis untuk peluncuran produk.',
    features: [
      'Audit UX & kompetitor',
      'Workshop prioritas fitur',
      'Roadmap MVP 90 hari',
      'Sesi follow-up bulanan',
    ],
    price: 'Rp2jt',
    unit: '/ sesi',
    color: 'var(--chart-3)',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Services() {
  return (
    <section id="layanan" className="relative py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Layanan"
          title="Solusi yang bisa Anda pilih, sesuai kebutuhan"
          description="Setiap paket dirancang fleksibel. Anda bisa mulai dari satu layanan atau menggabungkan beberapa untuk hasil yang menyeluruh."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((s) => (
            <motion.div key={s.title} variants={item} className="h-full">
              <Card
                className={`group relative h-full overflow-hidden border-border/70 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 ${
                  s.popular ? 'ring-2 ring-primary/60 shadow-lg shadow-primary/10' : ''
                }`}
              >
                {s.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[11px] font-semibold px-3 py-1 rounded-bl-xl">
                    Populer
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `color-mix(in oklch, ${s.color} 14%, transparent)`,
                      color: s.color,
                    }}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>

                  <div className="mt-4 flex items-center gap-2">
                    <h3 className="font-semibold text-lg leading-tight">{s.title}</h3>
                  </div>
                  <Badge variant="secondary" className="mt-1.5 w-fit text-xs font-normal">
                    {s.tagline}
                  </Badge>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span
                          className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                          style={{
                            backgroundColor: `color-mix(in oklch, ${s.color} 16%, transparent)`,
                            color: s.color,
                          }}
                        >
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span className="text-foreground/85">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold tracking-tight">{s.price}</span>
                      <span className="text-xs text-muted-foreground">{s.unit}</span>
                    </div>
                    <Button
                      asChild
                      variant={s.popular ? 'default' : 'outline'}
                      size="sm"
                      className="mt-3 w-full group"
                    >
                      <a href="#kontak">
                        Pilih paket
                        <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Butuh paket kustom atau kombinasi layanan?{' '}
          <a href="#kontak" className="font-medium text-primary hover:underline">
            Mari diskusikan
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
