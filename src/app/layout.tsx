import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Navbar from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsButton'
import Head from 'next/head'

const serrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Liber Parafusos',
  description: 'Empresa especializada em parafusos',
  keywords: 'parafusos, ferramentas, acessórios, construção, fixação',
  openGraph: {
    title: 'Liber Parafusos',
    description: 'Empresa especializada em parafusos',
    url: 'https://www.liberindustrial.com.br'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <link
        rel="shortcut icon"
        href="/Liber Parafusos 1.svg"
        type="image/x-icon"
      />

      <Head>
        <title>Pagina principal | Liber</title>
        <meta
          name="description"
          content="Bem-vindo à Liber Parafusos. Descubra nossa vasta gama de parafusos e fixadores de alta qualidade para todas as suas necessidades de construção e montagem."
        />
        <meta
          name="keywords"
          content="parafusos, fixadores, construção, montagem, Liber Parafusos, acessórios para parafusos"
        />
        <meta property="og:title" content="Home | Liber Parafusos" />
        <meta
          property="og:description"
          content="Bem-vindo à Liber Parafusos. Descubra nossa vasta gama de parafusos e fixadores de alta qualidade para todas as suas necessidades de construção e montagem."
        />
        <meta property="og:url" content="https://www.liberindustrial.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <body className={`${serrat.className} m-0 p-0 w-full h-full box-border `}>
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
