'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle2,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from './section-heading'
import { useToast } from '@/hooks/use-toast'

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'halo@aryapratama.id', href: 'mailto:halo@aryapratama.id' },
  { icon: Phone, label: 'Telepon', value: '+62 812 3456 7890', href: 'tel:+6281234567890' },
  { icon: MapPin, label: 'Lokasi', value: 'Jakarta, Indonesia', href: '#' },
]

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
]

export function Contact() {
  const { toast } = useToast()
  const [submitting, setSubmitting] = React.useState(false)
  const [done, setDone] = React.useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // Simulasi pengiriman
    await new Promise((r) => setTimeout(r, 1100))
    setSubmitting(false)
    setDone(true)
    toast({
      title: 'Pesan terkirim!',
      description: 'Terima kasih sudah menghubungi. Saya akan membalas dalam 24 jam.',
    })
    ;(e.target as HTMLFormElement).reset()
    setTimeout(() => setDone(false), 4000)
  }

  return (
    <section id="kontak" className="relative py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kontak"
          title="Punya proyek atau ide? Mari bicara"
          description="Ceritakan kebutuhan Anda, dan saya akan membalas dalam 24 jam dengan langkah berikutnya."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            <Card className="border-border/70">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Informasi kontak</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pilih saluran yang paling nyaman untuk Anda.
                  </p>
                </div>
                <ul className="space-y-3">
                  {CONTACTS.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        className="group flex items-center gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:bg-accent/40 transition-all"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <c.icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">{c.label}</p>
                          <p className="text-sm font-medium truncate">{c.value}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-gradient-to-br from-primary/10 via-accent/30 to-transparent">
              <CardContent className="p-6">
                <h4 className="font-semibold">Jam aktif</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Senin — Jumat, 09.00 — 18.00 WIB
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Akhir pekan: terbatas, sesuai kesepakatan proyek.
                </p>
                <div className="mt-4 flex gap-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:-translate-y-0.5"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <Card className="border-border/70">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-5" onSubmit={onSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama lengkap</Label>
                      <Input id="name" name="name" placeholder="Nama Anda" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@contoh.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Topik</Label>
                      <Select name="subject" defaultValue="">
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Pilih topik" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="project">Proyek baru</SelectItem>
                          <SelectItem value="collab">Kolaborasi</SelectItem>
                          <SelectItem value="hire">Recruitment</SelectItem>
                          <SelectItem value="other">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Perkiraan anggaran</Label>
                      <Select name="budget" defaultValue="">
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Pilih rentang" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lt5">&lt; Rp5 juta</SelectItem>
                          <SelectItem value="5-15">Rp5 — 15 juta</SelectItem>
                          <SelectItem value="15-50">Rp15 — 50 juta</SelectItem>
                          <SelectItem value="gt50">&gt; Rp50 juta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Ceritakan kebutuhan, tujuan, dan tenggat waktu Anda..."
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                    <Button type="submit" disabled={submitting || done} className="group">
                      {done ? (
                        <>
                          <CheckCircle2 className="mr-1.5 h-4 w-4" />
                          Terkirim
                        </>
                      ) : submitting ? (
                        <>
                          <span className="mr-1.5 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="mr-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          Kirim pesan
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Dengan mengirim, Anda menyetujui kami menyimpan data ini untuk membalas.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
