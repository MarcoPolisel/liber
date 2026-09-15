// pages/index.js
import Head from 'next/head'
import Fania from '../../../public/customers/fania.png'
import Arteb from '../../../public/customers/arteb.png'
import Cabovel from '../../../public/customers/cabovel.png'
import ARayumond from '../../../public/customers/raymond.png'
import BrasiLux from '../../../public/customers/braslux.png'
import Cofran from '../../../public/customers/cofan.png'
import Dura from '../../../public/customers/dura.png'
import Ficosa from '../../../public/customers/fecosa.png'
import JapaFlex from '../../../public/customers/jepaflex.png'
import HtIllu from '../../../public/customers/lantermax.png'
import Nino from '../../../public/customers/ninof.png'
import Orgus from '../../../public/customers/orgus.png'
import Welcon from '../../../public/customers/welcon.png'

import Image from 'next/image'
export default function Customers() {
  const clientes = [
    { nome: 'Fania', imagem: Fania },
    { nome: 'Cabovel', imagem: Cabovel },
    { nome: 'ARaymond', imagem: ARayumond },
    { nome: 'Arteb', imagem: Arteb },
    { nome: 'Braslux', imagem: BrasiLux },
    { nome: 'Cofran', imagem: Cofran },
    { nome: 'Dura', imagem: Dura },
    { nome: 'Ficosa', imagem: Ficosa },
    { nome: 'Japaflex', imagem: JapaFlex },
    { nome: 'HT Illuminated', imagem: HtIllu },
    { nome: 'Nino Faróis', imagem: Nino },
    { nome: 'Orgus', imagem: Orgus },
    { nome: 'Welcon', imagem: Welcon }
  ]

  return (
    <div>
      <Head>
        <title>Nossos Clientes</title>
        <meta
          name="description"
          content="Numerosas empresas de diversos setores confiam na nossa qualidade."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <div className="bg-gray-600 text-white p-8 rounded-lg w-full lg:w-1/3 lg:h-[600px] text-center lg:text-left mb-8 lg:mb-0">
            <div className="flex flex-col items-center text-2xl font-bold mb-4">
              <span className="inline-block  text-gray-600 rounded-full p-2">
                ⭐
              </span>{' '}
              <h1 className="text-3xl"> Nossos Clientes</h1>
            </div>
            <p className="text-mb text-gray-300">
              Inúmeras empresas de diversos setores confiam na LIBER INDUSTRIAL
              para fornecer parafusos e fixadores de alta qualidade. Veja
              algumas das empresas que escolhem nossos produtos para seus
              projetos.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full lg:w-2/3">
            {clientes.map(cliente => (
              <div
                key={cliente.nome}
                className="flex items-center justify-center h-24"
              >
                <Image
                  src={cliente.imagem}
                  alt={cliente.nome}
                  className="max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
