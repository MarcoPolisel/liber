import Carrousel from './components/Carrousel'
import AboutUs from './components/AboutUs'
import OurProducts from './components/OurProducts'
import GradientSections from './components/GradientSections'
import Segments from './components/Segments'
import Customers from './components/Customer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
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
        <meta name="twitter:title" content="Home | Liber Parafusos" />
        <meta
          name="twitter:description"
          content="Bem-vindo à Liber Parafusos. Descubra nossa vasta gama de parafusos e fixadores de alta qualidade para todas as suas necessidades de construção e montagem."
        />
      </Head>
      <main className="flex flex-col w-full h-full ">
        {/* <Header /> */}

        {/* <Carrousel /> */}
        <Carrousel />

        {/* <About us /> */}
        <AboutUs />

        {/* Our products /> */}
        <OurProducts />

        {/* Gradient Sections /> */}
        <GradientSections />

        {/* Segments Section /> */}
        <Segments />

        {/* Customers Section /> */}
        <Customers />

        {/* Footer Sections /> */}
      </main>
    </>
  )
}
