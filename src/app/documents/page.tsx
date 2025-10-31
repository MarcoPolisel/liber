// pages/documentation.js

import React from 'react'
import ManualDiametro from '../../../public/documents/diametro.png'
import ManualFixação from '../../../public/documents/fixação.png'
import DDPSFP from '../../../public/documents/ddpsfp.png'
import DDPMFP from '../../../public/documents/ddpmfp.png'
import CEF from '../../../public/documents/cef.png'
import TALP from '../../../public/documents/talp.png'
import TRLM from '../../../public/documents/trlm.png'
import DDPSPR from '../../../public/documents/ddpspr.png'
import DDPSIPR from '../../../public/documents/ddpsipr.png'
import DDPMP from '../../../public/documents/ddpmp.png'
import TDPM from '../../../public/documents/tdpm.png'
import TDC from '../../../public/documents/tdc.png'
import DDPSFPP from '../../../public/documents/ddpsfpp.png'
import TDALP from '../../../public/documents/tdalp.png'
import TDPP from '../../../public/documents/tdpp.png'
import CCNE from '../../../public/documents/ccne.png'
import DDPRS from '../../../public/documents/ddprs.png'
import TRMP from '../../../public/documents/trmp.png'

import Image from 'next/image'

const documents = [
  {
    title: 'IMPOL-9001',
    downloadLink: '/pdfsliber/IMPOL-9001.pdf'
  }
  // {
  //   title: 'Licença de Operação',
  //   downloadLink: '/pdfsliber/LICENCA-DE-OPERACAO-17-12-2024-1.pdf'
  // }
]

const manuals = [
  {
    title: 'Diâmetros dos parafusos sextavados internos e passo de rosca',
    downloadLink: '/pdfsliber/diametroparafusosextavado.pdf',
    image: ManualDiametro
  },
  {
    title: 'Elementos de Fixação',
    downloadLink: '/pdfsliber/elementofixacao.pdf',
    image: ManualFixação
  },
  {
    title: 'Diâmetros dos parafusos sextavados e fios por polegada',
    downloadLink: '/pdfsliber/dinternossextavadosfiospolegada.pdf',
    image: DDPSFP
  },
  {
    title: 'Diâmetros dos parafusos máquina e fios por polegada',
    downloadLink: '/pdfsliber/diametroparafusomaquinafio.pdf',
    image: DDPMFP
  },
  {
    title: 'Categorias de elementos de fixação',
    downloadLink: '/pdfsliber/catelementofixacao.pdf',
    image: CEF
  },
  {
    title: 'Tamanho das arruelas lisas em polegada',
    downloadLink: '/pdfsliber/tamanhoaruelaslisaempolegada.pdf',
    image: TALP
  },
  {
    title: 'Diâmetros dos parafusos sextavados internos e passo de rosca',
    downloadLink: '/pdfsliber/diametroparafuso.pdf',
    image: DDPSIPR
  },
  {
    title: 'Tamanho das arruelas lisas em milímetro',
    downloadLink: '/pdfsliber/arruelasmilimetro.pdf',
    image: TRLM
  },
  {
    title: 'Diâmetros dos parafusos sextavados e passos de rosca',
    downloadLink: '/pdfsliber/sextavadopassoroca.pdf',
    image: DDPSPR
  },
  {
    title: 'Tipos de Chave',
    downloadLink: '/pdfsliber/tiposchaves.pdf',
    image: TDC
  },
  {
    title: 'Tamanho das porcas métricas',
    downloadLink: '/pdfsliber/tamanhoporcas.pdf',
    image: TDPM
  },
  {
    title: 'Diâmetros dos parafusos máquinas e passos',
    downloadLink: '/pdfsliber/diametroparafusomaquinapassos.pdf',
    image: DDPMP
  },

  {
    title: 'Tamanho das porcas polegadas',
    downloadLink: '/pdfsliber/tamanhoporcaspolegada.pdf',
    image: TDPP
  },
  {
    title: 'Tamanho das arruelas lisas em polegada',
    downloadLink: '/pdfsliber/tamanhoaruelaslisaempolegada.pdf',
    image: TDALP
  },
  {
    title: 'Diâmetros dos parafusos sextavados e fios por polegada',
    downloadLink: '/pdfsliber/diametroparafusosextavado.pdf',
    image: DDPSFPP
  },
  // DIIVER

  {
    title: 'Tabela de Roscas Métricas e Polegadas',
    downloadLink: '/pdfsliber/tabelaroscas.pdf',
    image: TRMP
  },
  {
    title: 'Diâmetro dos parafusos rosca soberba',
    downloadLink: '/pdfsliber/diametroparafusoroscasoberba.pdf',
    image: DDPRS
  },
  {
    title:
      'Como é construído o nome de um elemento de fixação: Segue um exemplo:',
    downloadLink: '/pdfsliber/comoeconstruido.pdf',
    image: CCNE
  }
]

const Documentation = () => {
  return (
    <div className="container mx-auto p-6 mt-6 lg:mt-20 max-sm:mt-20">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Documentação e Autorizações
      </h1>
      <p className="text-lg mb-8">
        Acesse nossos documentos técnicos, manuais e autorizações. Clique nos
        links abaixo para fazer o download dos arquivos em PDF.
      </p>

      <div className="mb-12">
        {documents.map((doc, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">{doc.title}</h2>
            <a
              href={doc.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-red-600 mb-4">Manuais</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {manuals.map((manual, index) => (
          <div key={index} className="border rounded p-4 text-center">
            <Image
              src={manual.image}
              alt={manual.title}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{manual.title}</h3>
            <a
              href={manual.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Documentation
