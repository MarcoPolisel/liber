// pages/index.js
import Head from 'next/head'
import GridConstruction from '../../../public/GridConstruction.png'
import GridInfra from '../../../public/gridInfra.png'
import GridAero from '../../../public/gridaero.png'
import GridAgro from '../../../public/gridagro.png'
import GridRobo from '../../../public/gridrobotica.png'
import GridEnergy from '../../../public/gridenergy.png'
import GridIndu from '../../../public/gridindustrial.png'
import GridMovel from '../../../public/gridmoveis.png'
import GridNaval from '../../../public/gridnaval.png'
import GridEletro from '../../../public/grideletros.png'

import Image from 'next/image'

export default function Segments() {
  const segmentos = [
    {
      titulo: 'Construção e Infraestrutura',
      descricao:
        'Seja em guindastes ou em grandes projetos de construção, nossos fixadores são projetados para garantir segurança e eficiência em cada aplicação.',
      imagem: GridConstruction
    },
    {
      titulo: 'Infraestrutura Urbana',
      descricao:
        'Suportamos projetos urbanos com fixadores que asseguram a integridade e a durabilidade de vias, pontes e sistemas de transporte.',
      imagem: GridInfra
    },
    {
      titulo: 'Aeroespacial',
      descricao:
        'Oferecemos fixadores de alta precisão para a indústria aeroespacial, garantindo segurança e desempenho superior em todas as operações de voo.',
      imagem: GridAero
    },
    {
      titulo: 'Agronegócio e Equipamentos Agrícolas',
      descricao:
        'Nossos fixadores robustos são essenciais para a operação eficiente de máquinas agrícolas em ambientes desafiadores.',
      imagem: GridAgro
    },
    {
      titulo: 'Automação e Robótica',
      descricao:
        'Desenvolvemos soluções de fixação para sistemas automatizados e robôs, proporcionando precisão e confiabilidade em cada movimento.',
      imagem: GridRobo
    },
    {
      titulo: 'Energia e Utilities',
      descricao:
        'Atendemos ao setor de energia com fixadores que suportam as demandas de instalações elétricas e sistemas de transmissão.',
      imagem: GridEnergy
    },
    {
      titulo: 'Indústria de Máquinas e Equipamentos',
      descricao:
        'Fabricamos fixadores de alta resistência para máquinas industriais, garantindo desempenho seguro e eficiente.',
      imagem: GridIndu
    },
    {
      titulo: 'Móveis e Design de Interiores',
      descricao:
        'Nossos fixadores combinam funcionalidade e estética para a montagem de móveis de alta qualidade.',
      imagem: GridMovel
    },
    {
      titulo: 'Marítimo e Naval',
      descricao:
        'Oferecemos fixadores que resistem à corrosão e garantem confiabilidade em ambientes marítimos.',
      imagem: GridNaval
    },
    {
      titulo: 'Tecnologia e Eletrônicos',
      descricao:
        'Desenvolvemos fixadores de alta precisão para a montagem de componentes eletrônicos e equipamentos de tecnologia.',
      imagem: GridEletro
    }
  ]

  return (
    <div>
      <Head>
        <title>Atendemos todos os segmentos</title>
        <meta
          name="description"
          content="Oferecemos soluções de fixação para uma ampla gama de indústrias."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center">
          Atendemos todos os segmentos
        </h1>
        <p className="text-center text-lg mt-4 mb-12">
          Oferecemos soluções de fixação para uma ampla gama de indústrias
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segmentos.map(segmento => (
            <div
              key={segmento.titulo}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                className="w-full h-48 object-cover"
                src={segmento.imagem}
                alt={segmento.titulo}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  {segmento.titulo}
                </h2>
                <p className="text-gray-700">{segmento.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
