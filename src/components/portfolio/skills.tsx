'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Palette,
  Server,
  LayoutDashboard,
  PenTool,
  Smartphone,
} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from './section-heading'

const SKILL_GROUPS = [
  {
    icon: Palette,
    title: 'Desain UI/UX',
    description:
      'Riset pengguna, wireframing, prototyping, hingga handoff yang rapi untuk tim developer.',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Tokens'],
    color: 'var(--chart-1)',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Implementasi antarmuka yang responsif, aksesibel, dan cepat dengan komponen reusable.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'var(--chart-2)',
  },
  {
    icon: Server,
    title: 'Backend & Integrasi',
    description:
      'API stabil dan terdokumentasi, otentikasi aman, serta integrasi layanan pihak ketiga.',
    skills: ['Node.js', 'Prisma', 'PostgreSQL', 'REST API', 'NextAuth'],
    color: 'var(--chart-3)',
  },
  {
    icon: LayoutDashboard,
    title: 'Design System',
    description:
      'Membangun sistem komponen terstruktur agar produk konsisten dan mudah dikembangkan.',
    skills: ['Storybook', 'Design Tokens', 'Variants', 'Accessibility'],
    color: 'var(--chart-4)',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description:
      'Mendesain dan mengembangkan pengalaman yang optimal di semua ukuran layar perangkat.',
    skills: ['Responsive', 'PWA', 'Touch UX', 'Performance'],
    color: 'var(--chart-5)',
  },
  {
    icon: PenTool,
    title: 'Branding & Visual',
    description:
      'Identitas visual yang konsisten, dari logo, palet warna, hingga panduan penggunaan merek.',
    skills: ['Logo Design', 'Illustrator', 'Color Theory', 'Typography'],
    color: 'var(--primary)',
  },
]

const TOOLS = [
  'Figma', 'Sketch', 'Photoshop', 'Illustrator', 'VS Code',
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'Prisma',
  'Node.js', 'Vercel', 'Git', 'Notion', 'Linear',
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Skills() {
  return (
    <section id="keahlian" className="relative py-20 sm:py-28 scroll-mt-20">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10 bg-bg-soft/40" aria-hidden style={{ background: 'color-mix(in oklch, var(--muted) 8%, transparent)' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Keahlian"
          title="Berkat kombinasi desain dan kode, ide bisa sampai ke pengguna utuh"
          description="Saya bekerja melintasi siklus produk — mulai dari riset, desain, hingga implementasi — sehingga tidak ada makna yang hilang di tengah jalan."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SKILL_GROUPS.map((g) => (
            <motion.div key={g.title} variants={item}>
              <Card className="group h-full border-border/70 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
                      style={{
                        backgroundColor: `color-mix(in oklch, ${g.color} 14%, transparent)`,
                        color: g.color,
                      }}
                    >
                      <g.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-tight">{g.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {g.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border/60 bg-muted/40 px-2 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/30"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Perkakas yang Saya Pakai Sehari-hari
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {TOOLS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/70 bg-card px-4 py-1.5 text-sm font-medium text-foreground/80 transition-all hover:border-primary/40 hover:text-primary hover:-translate-y-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
