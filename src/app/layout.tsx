import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'Trio Labs - A Primeira Casa de Marcas e Marketing com Alma Japonesa',
  description: 'Transformamos marcas em experiências inesquecíveis através do Método Toriê. Branding, posicionamento e marketing digital com estratégia e ousadia.',
  keywords: 'branding, marketing digital, posicionamento de marca, trio labs, método toriê, agência de marketing, branding estratégico',
  authors: [{ name: 'Trio Labs' }],
  creator: 'Trio Labs',
  publisher: 'Trio Labs',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://triolabs.com.br',
    siteName: 'Trio Labs',
    title: 'Trio Labs - A Primeira Casa de Marcas e Marketing com Alma Japonesa',
    description: 'Transformamos marcas em experiências inesquecíveis através do Método Toriê.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Trio Labs',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trio Labs',
    description: 'Transformamos marcas em experiências inesquecíveis através do Método Toriê.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-black text-white`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}