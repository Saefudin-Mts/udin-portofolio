import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio — Karya & Kreativitas Digital",
  description:
    "Landing page portfolio profesional. Menampilkan hasil pekerjaan, proyek unggulan, keahlian, dan pengalaman dalam dunia desain & pengembangan digital.",
  keywords: [
    "portfolio",
    "landing page",
    "karya",
    "proyek",
    "desain",
    "pengembangan web",
    "kreatif",
  ],
  authors: [{ name: "Portfolio" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Portfolio — Karya & Kreativitas Digital",
    description:
      "Jelajahi hasil pekerjaan dan proyek unggulan dalam satu landing page modern.",
    siteName: "Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Karya & Kreativitas Digital",
    description:
      "Jelajahi hasil pekerjaan dan proyek unggulan dalam satu landing page modern.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
