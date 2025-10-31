import Image from 'next/image'
import LogoLiber from '../../../public/LogoLiber.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center md:h-[482px] p-4 md:p-0">
      <Image
        src={LogoLiber}
        alt="Logo Liber"
        className="mb-4 md:mb-0 md:mr-16 w-[150px] h-auto md:w-auto"
      />
      <div className="flex flex-col w-full md:w-[482px] md:h-[368px]">
        <div className="w-full flex flex-col md:flex-row justify-between items-center p-4">
          <div className="flex flex-col items-center gap-2 mb-4 md:mb-0">
            <h3 className="text-lg font-medium">Explorar</h3>
            <ul className="p-4">
              <li className="text-md font-medium m-2">
                <Link href="/">Inicio</Link>
              </li>
              <li className="text-md font-medium m-2">
                <Link href="/about">Sobre nós</Link>
              </li>

              <li className="text-md font-medium m-2">
                <Link href="/products">Produtos</Link>
              </li>
              <li className="text-md font-medium m-2">
                <Link href="/control">Controle de Qualidade</Link>
              </li>
              <li className="text-md font-medium m-2">
                <Link href="/budget">Orçamento</Link>
              </li>
              <li className="text-md font-medium m-2">
                <Link href="/contact">Contato</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="p-4">
              <li className="text-md font-medium m-2">
                <Link href="/documents">Termos</Link>
              </li>
              <li className="text-md font-medium m-2">
                <Link href="/documents">Documentação</Link>
              </li>
              <li className="text-md font-medium m-2">
                <Link href="/control">Política de Privacidade</Link>
              </li>
            </ul>
          </div>
        </div>
        <span className="text-center text-lg text-zinc-900 font-semibold mt-4 md:mt-0">
          Copyright © Liber Industrial 2024. All rights reserved.
        </span>
      </div>
    </div>
  )
}
