'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const contacts = [
  { label: 'RH', phone: '551140598909', display: '(11) 4059-8909' },
  { label: 'Compras', phone: '5511996066759', display: '(11) 99606-6759' },
  { label: 'Vendas', phone: '5511916011694', display: '(11) 91601-1694' },
]

const WhatsAppButton: React.FC = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir opções de contato no WhatsApp"
        className="fixed bottom-4 right-4 z-50 bg-transparent p-4 rounded-full"
      >
        <Image
          src="/zap zap.svg"
          alt="WhatsApp"
          width={48}
          height={48}
          className="shadow-md"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fale conosco pelo WhatsApp"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 p-4"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Fale conosco
                </h2>
                <p className="text-sm text-gray-500">
                  Escolha um setor para conversar no WhatsApp
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="ml-4 text-2xl leading-none text-gray-400 hover:text-gray-600"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {contacts.map(contact => (
                <a
                  key={contact.label}
                  href={`https://wa.me/${contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 transition-colors hover:border-green-500 hover:bg-green-50"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                    <Image
                      src="/zap zap.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-gray-900">
                      {contact.label}
                    </span>
                    <span className="text-sm text-gray-500">
                      {contact.display}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WhatsAppButton
