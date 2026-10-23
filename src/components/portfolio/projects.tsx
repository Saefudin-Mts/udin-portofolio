'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

type Project = {
  title: string
  category: 'Web App' | 'Mobile' | 'Branding' | 'Dashboard'
  description: string
  tags: string[]
  year: string
  featured?: boolean
  gradient: string
  icon: string
}

const PROJECTS: Project[] = [
  {
    title: 'Nusantara E-Commerce',
    category: 'Web App',
    description:
      'Platform belanja modern dengan checkout cepat, rekomendasi cerdas, dan integrasi multi-pembayaran. Dirancang untuk konversi tinggi di pasar Asia Tenggara.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'Prisma'],
    year: '2024',
    featured: true,
    gradient: 'linear-gradient(135deg, #0f9d7a 0%, #1ec8a0 100%)',
    icon: '🛍️',
  },
  {
    title: 'FinPulse Dashboard',
    category: 'Dashboard',
    description:
      'Dasbor analitik keuangan realtime untuk startup fintech. Memvisualkan ribuan transaksi per detik dengan grafik interaktif dan peringatan otomatis.',
    tags: ['React', 'D3.js', 'WebSocket', 'Recharts'],
    year: '2024',
    featured: true,
    gradient: 'linear-gradient(135deg, #f0a93b 0%, #f5b755 100%)',
    icon: '📊',
  },
  {
    title: 'Wanderlust Travel App',
    category: 'Mobile',
    description:
      'Aplikasi perencanaan perjalanan dengan rekomendasi berbasis lokasi, itinerary cerdas, dan komunitas traveler yang aktif di seluruh Indonesia.',
    tags: ['React Native', 'Maps', 'Firebase'],
    year: '2023',
    gradient: 'linear-gradient(135deg, #e8553f 0%, #ff7a5c 100%)',
    icon: '✈️',
  },
  {
    title: 'Kopi Senja Branding',
    category: 'Branding',
    description:
      'Identitas visual lengkap untuk jaringan kafe spesialti. Mencakup logo, kemasan, signage, hingga panduan merek yang konsisten di 12 cabang.',
    tags: ['Identity', 'Packaging', 'Illustration'],
    year: '2023',
    gradient: 'linear-gradient(135deg, #6b4226 0%, #a06840 100%)',
    icon: '☕',
  },
  {
    title: 'EduConnect LMS',
    category: 'Web App',
    description:
      'Sistem manajemen pembelajaran untuk sekolah daring. Memfasilitasi 50.000+ siswa dengan kelas live, kuis interaktif, dan pelacakan progres.',
    tags: ['Next.js', 'tRPC', 'Prisma', 'WebRTC'],
    year: '2023',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
    icon: '🎓',
  },
  {
    title: 'Pulse Health Tracker',
    category: 'Mobile',
    description:
      'Aplikasi pelacak kesehatan dengan sinkronisasi wearables, analisis tidur, dan laporan mingguan yang mudah dipahami oleh pengguna awam.',
    tags: ['Flutter', 'HealthKit', 'AI Insight'],
    year: '2022',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
    icon: '❤️',
  },
]

const CATEGORIES = ['Semua', 'Web App', 'Mobile', 'Dashboard', 'Branding'] as const

type Category = (typeof CATEGORIES)[number]

export function Projects() {
  const [filter, setFilter] = React.useState<Category>('Semua')

  const filtered = React.useMemo(() => {
    if (filter === 'Semua') return PROJECTS
    return PROJECTS.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section id="proyek" className="relative py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Portofolio"
            title="Karya pilihan yang saya banggakan"
            description="Setiap proyek di bawah ini diselesaikan dengan kolaborasi nyata, dari konsep hingga peluncuran."
            align="left"
          />
          <Button variant="outline" asChild className="self-start lg:self-auto shrink-0">
            <a href="#kontak" className="group">
              Lihat semua karya
              <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                filter === c
                  ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/30'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60'
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={cn(p.featured && 'lg:col-span-1')}
              >
                <Card className="group h-full overflow-hidden border-border/70 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 p-0">
                  {/* Cover */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{ background: p.gradient }}
                  >
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-grid" aria-hidden />
                    <span className="absolute inset-0 grid place-items-center text-5xl sm:text-6xl drop-shadow-lg">
                      {p.icon}
                    </span>
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-foreground hover:bg-white border-0 backdrop-blur"
                      >
                        {p.category}
                      </Badge>
                      {p.featured && (
                        <Badge className="bg-amber-500/90 text-white border-0 hover:bg-amber-500 backdrop-blur">
                          ★ Unggulan
                        </Badge>
                      )}
                    </div>
                    <span className="absolute top-3 right-3 rounded-full bg-black/30 text-white text-xs font-medium px-2.5 py-1 backdrop-blur">
                      {p.year}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-0" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-muted/50 border border-border/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border/60">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Kode
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-10 text-center text-muted-foreground py-16">
            Belum ada proyek pada kategori ini.
          </div>
        )}
      </div>
    </section>
  )
}
