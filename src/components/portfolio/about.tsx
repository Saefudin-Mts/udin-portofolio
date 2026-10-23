'use client'

import { motion } from 'framer-motion'
import { Check, Coffee, Globe2, Heart, MapPin } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './section-heading'

const HIGHLIGHTS = [
  'Pendekatan desain berbasis data dan empati pengguna',
  'Kode bersih, terstruktur, dan mudah dirawat jangka panjang',
  'Kolaborasi transparan dengan komunikasi yang konsisten',
  'Mengutamakan performa, aksesibilitas, dan detail visual',
]

const FACTS = [
  { icon: MapPin, label: 'Basis', value: 'Jakarta, Indonesia' },
  { icon: Globe2, label: 'Bahasa', value: 'ID · EN' },
  { icon: Heart, label: 'Minat', value: 'UI · Web · Produk' },
  { icon: Coffee, label: 'Tahun aktif', value: 'Sejak 2019' },
]

export function About() {
  return (
    <section id="tentang" className="relative py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tentang Saya"
          title="Membangun produk digital dengan tujuan, bukan sekadar tampilan"
          description="Setiap proyek adalah kesempatan untuk menyelesaikan masalah nyata. Saya percaya karya terbaik lahir dari perpaduan rasa ingin tahu, ketelitian, dan keberanian mencoba hal baru."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 text-base leading-relaxed text-muted-foreground"
          >
            <p>
              Halo! Saya <span className="font-semibold text-foreground">Saefudin</span>,
              seorang desainer produk dan pengembang web yang bermarkas di Jakarta. Selama lebih
              dari lima tahun, saya membantu startup dan brand membangun produk digital yang
              tidak hanya terlihat menarik, tetapi juga terasa cepat, intuitif, dan dapat
              diandalkan oleh penggunanya.
            </p>
            <p>
              Perjalanan saya dimulai dari mendesain poster acara kampus, lalu menjelma menjadi
              kecintaan pada antarmuka yang fungsional. Saat ini fokus saya adalah membangun
              pengalaman produk end-to-end, mulai dari riset pengguna, wireframe, prototipe,
              hingga implementasi kode dengan stack modern seperti React, Next.js, dan
              Tailwind CSS.
            </p>
            <p>
              Di luar pekerjaan, saya menulis artikel teknis, berbagi proses desain di
              komunitas, serta eksplorasi fotografi urban. Saya percaya bahwa belajar
              sesuatu di luar keahlian utama justru membuat karya utama menjadi lebih kaya
              perspektif.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-foreground/90">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Facts card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-24"
          >
            <Card className="overflow-hidden border-border/70">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 via-accent/40 to-transparent p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Profil singkat
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold">Saefudin</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Product Designer & Web Engineer
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">UI/UX</Badge>
                    <Badge variant="secondary">Frontend</Badge>
                    <Badge variant="secondary">Design System</Badge>
                    <Badge variant="secondary">Branding</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-border/60 border-t border-border/60">
                  {FACTS.map((f, i) => (
                    <div
                      key={f.label}
                      className={`p-5 ${i >= 2 ? 'border-t border-border/60' : ''}`}
                    >
                      <f.icon className="h-4 w-4 text-primary" />
                      <p className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                        {f.label}
                      </p>
                      <p className="text-sm font-medium">{f.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
