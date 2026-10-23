'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Counter } from './counter'

const STATS = [
  { to: 5, suffix: '+', label: 'Tahun Pengalaman' },
  { to: 40, suffix: '+', label: 'Proyek Selesai' },
  { to: 28, suffix: '', label: 'Klien Puas' },
  { to: 12, suffix: '', label: 'Penghargaan' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-radial-accent" aria-hidden />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl -z-10 opacity-30"
        style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div variants={item} className="flex justify-center lg:justify-start">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Tersedia untuk proyek baru
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
            >
              Halo, saya <span className="gradient-text">Arya Pratama</span>
              <br className="hidden sm:block" /> Designer & Developer
              <br className="hidden sm:block" /> yang Membangun Karya Digital.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance"
            >
              Saya menggabungkan estetika desain dengan kekuatan kode untuk menghadirkan
              pengalaman digital yang berkesan, fungsional, dan berdampak bagi setiap
              penggunanya.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Button asChild size="lg" className="group">
                <Link href="#proyek">
                  Lihat Karya Saya
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#kontak">
                  <Download className="mr-1.5 h-4 w-4" />
                  Unduh CV
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.dl
              variants={item}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto lg:mx-0"
            >
              {STATS.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <dt className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    <Counter to={s.to} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right visual */}
          <motion.div
            variants={item}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Decorative gradient ring */}
              <div
                className="absolute -inset-4 rounded-[2.5rem] -z-10 blur-2xl opacity-25"
                style={{
                  background:
                    'conic-gradient(from 180deg, var(--primary), var(--chart-2), var(--chart-3), var(--primary))',
                }}
                aria-hidden
              />

              {/* Main card */}
              <div className="relative rounded-[2rem] border border-border/70 bg-card p-6 shadow-xl shadow-primary/5">
                <div className="flex items-center gap-3">
                  <Avatar className="h-14 w-14 border border-border">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      AP
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-semibold leading-tight truncate">Arya Pratama</p>
                    <p className="text-xs text-muted-foreground truncate">
                      Product Designer · Web Engineer
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-1 text-amber-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-1.5 text-xs text-muted-foreground">
                    4.9 / 5 · 28 ulasan
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    { k: 'Lokasi', v: 'Jakarta, ID' },
                    { k: 'Status', v: 'Freelance' },
                    { k: 'Fokus', v: 'UI/UX · Web' },
                    { k: 'Respons', v: '< 24 jam' },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="rounded-xl border border-border/60 bg-muted/30 p-3"
                    >
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {x.k}
                      </p>
                      <p className="mt-0.5 text-sm font-medium">{x.v}</p>
                    </div>
                  ))}
                </div>

                {/* Floating tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 rounded-full border border-border/70 bg-card px-3 py-1.5 text-xs font-medium shadow-lg"
                >
                  ✨ Sedang mengerjakan proyek SaaS
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
