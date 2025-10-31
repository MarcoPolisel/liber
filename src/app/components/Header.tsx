'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/Liber Parafusos.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const pathname = usePathname()
  const isActive = (actualPath: string) => pathname === actualPath

  return (
    <>
      <nav
        className={`
          lg:bg-black
      lg:bg-opacity-30 lg:backdrop-filter lg:backdrop-blur-lg lg:backdrop-brightness-50
          fixed top-0 w-full sm:fixed  px-2 sm:px-4 py-2.5 rounded  shadow z-50`}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center w-[68px] h-[68px]">
            <Image
              src={Logo}
              width={68}
              height={68}
              alt="Menu de navegação do site"
            />
          </a>

          <div className="flex items-center md:hidden">
            <button
              id="menu-toggle"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMenu}
            >
              <span className="sr-only">Abrir menu principal</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? '' : 'hidden'
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  href="/"
                  className={`lg:text-xl block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/')
                        ? ' lg:text-red-500 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-white lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`lg:text-xl block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/about')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/about')
                        ? ' lg:text-red-500 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-white lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`lg:text-xl block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/products')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/products')
                        ? ' lg:text-red-500 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-white lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`lg:text-xl block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/contact')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/contact')
                        ? ' lg:text-red-500 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-white lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/control"
                  className={`lg:text-xl  block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/control')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/control')
                        ? ' lg:text-red-500 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-white lg:bg-transparent lg: md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Controle de Qualidade
                </Link>
              </li>
              <li>
                <Link
                  href="/documents"
                  className={`lg:text-xl block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/documents')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/documents')
                        ? ' lg:text-red-500 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-white lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Documentos
                </Link>
              </li>
              <li>
                <Link
                  href="/budget"
                  className={`lg:text-xl block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/budget')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/budget')
                        ? ' lg:text-red-500 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-white lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Orçamento
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className={`lg:text-xl block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0
                    
                    ${
                      isActive('/jobs')
                        ? 'text-red-700 bg-transparent max-sm:bg-red-700 max-sm:text-white'
                        : 'text-gray-700 bg-transparent max-sm:bg-white max-sm:text-black'
                    }
                    
                    ${
                      isActive('/jobs')
                        ? ' lg:text-red-500 lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-white sm:bg-red-700'
                        : 'lg:text-white lg:bg-transparent md:text-red-700 md:bg-transparent sm:text-black sm:bg-white'
                    }`}
                  aria-current="page"
                >
                  Trabalhe conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-16">{/* Conteúdo da página */}</div>
    </>
  )
}

export default Navbar
