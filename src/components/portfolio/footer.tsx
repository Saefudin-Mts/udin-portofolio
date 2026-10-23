'use client'

import Link from 'next/link'
import { Sparkles, ArrowUpRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Proses', href: '#proses' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="#" className="group inline-flex items-center gap-2.5 font-semibold">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-base">
                Arya Pratama<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Designer & developer yang membantu brand dan startup menghadirkan produk
              digital yang berdampak. Terima kasih sudah berkunjung.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigasi
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Mulai proyek
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Punya ide atau tantangan? Saya siap mendengarkan dan membantu.
            </p>
            <a
              href="#kontak"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2 transition-all"
            >
              Hubungi saya
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Arya Pratama. Dibuat dengan rasa dan rincian.
          </p>
          <p className="text-xs text-muted-foreground">
            Dibangun dengan Next.js · Tailwind CSS · shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}
