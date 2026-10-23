'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { SectionHeading } from './section-heading'

type Testi = {
  quote: string
  name: string
  role: string
  org: string
  rating: number
}

const TESTIMONIALS: Testi[] = [
  {
    quote:
      'Arya berhasil menerjemahkan kebutuhan kami yang rumit menjadi antarmuka yang sederhana dan intuitif. Kolaborasinya lancar, komunikasinya jelas, dan hasilnya melampaui ekspektasi tim.',
    name: 'Sarah Wijaya',
    role: 'Product Manager',
    org: 'Nexa Digital',
    rating: 5,
  },
  {
    quote:
      'Detail kecil yang diperhatikan Arya membuat produk kami terasa premium. Dia tidak hanya menjalankan brief, tapi ikut berpikir tentang dampak bisnisnya.',
    name: 'Reza Mahendra',
    role: 'CEO & Founder',
    org: 'Bumi Teknologi',
    rating: 5,
  },
  {
    quote:
      'Saya pernah bekerja dengan banyak desainer, tapi jarang menemukan yang paham batasan developer seperti Arya. Handoff-nya rapi sekali, sampai kode bisa langsung kami pakai.',
    name: 'Linda Kusuma',
    role: 'Lead Engineer',
    org: 'EduConnect',
    rating: 5,
  },
  {
    quote:
      'Proses riset pengguna yang dipimpin Arya membuka mata kami tentang banyak asumsi yang selama ini kami pegang. Hasil redesign menaikkan retensi pengguna kami.',
    name: 'Bayu Santoso',
    role: 'Head of Growth',
    org: 'Wanderlust',
    rating: 5,
  },
  {
    quote:
      'Brand baru yang Arya rancang membuat kafe kami terasa lebih dewasa dan konsisten. Tamu sering kali memfoto kemasannya sebelum minum — itu pencapaian besar!',
    name: 'Dewi Anjani',
    role: 'Owner',
    org: 'Kopi Senja',
    rating: 5,
  },
  {
    quote:
      'Bekerja dengan Arya terasa seperti punya partner strategis, bukan sekadar vendor. Dia memberi masukan jujur dan membantu kami mengambil keputusan yang lebih baik.',
    name: 'Hendra Pratama',
    role: 'COO',
    org: 'FinPulse',
    rating: 5,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function Testimonials() {
  return (
    <section id="testimoni" className="relative py-20 sm:py-28 scroll-mt-20">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{ background: 'color-mix(in oklch, var(--muted) 8%, transparent)' }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Apa kata mereka yang pernah bekerja sama"
          description="Kepercayaan klien adalah aset terbesar. Berikut sebagian cerita dari mereka."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={item}>
              <Card className="h-full border-border/70 hover:border-primary/30 hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/30" />
                    <div className="flex gap-0.5 text-amber-500">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/90 flex-1">
                    “{t.quote}”
                  </p>

                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border/60">
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                        {initials(t.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{t.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {t.role} · {t.org}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
