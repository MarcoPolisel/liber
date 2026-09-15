'use client'
import React, { useState } from 'react'

function Budget() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    produto: '',
    quantidade: '',
    especificacoes: '',
    prazo: '',
    mensagem: ''
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const enviarOrcamento = () => {
    const textoOrcamento = `*Orçamento*%0A
    *Nome:* ${formData.nome}%0A
    *Email:* ${formData.email}%0A
    *Telefone:* ${formData.telefone}%0A
    *Empresa:* ${formData.empresa}%0A
    *Produto:* ${formData.produto}%0A
    *Quantidade:* ${formData.quantidade}%0A
    *Especificações:* ${formData.especificacoes}%0A
    *Prazo de Entrega:* ${formData.prazo}%0A
    *Mensagem:* ${formData.mensagem}`

    const whatsappNumber = '5511916011694' // Coloque o número de WhatsApp aqui
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${textoOrcamento}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <div
      className="lg:mt-20  flex flex-row items-center justify-center min-h-screen p-4 
      max-sm:mt-20 max-sm:overflow-hidden max-sm:mx-2 max-sm:w-full max-sm:h-full
      "
    >
      <div className="bg-white  rounded-lg p-6 max-w-xl w-full max-sm:w-full max-sm:h-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Faça Seu Orçamento
        </h2>
        <p className="text-gray-600 mb-6">
          Na LIBER INDUSTRIAL LTDA, entendemos que cada projeto é único.
          Preencha o formulário abaixo com os detalhes do seu pedido e nossa
          equipe de especialistas entrará em contato com uma cotação
          personalizada.
        </p>
        <div className="mb-4">
          <label className="block text-gray-700">Nome Completo</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telefone</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Empresa</label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Produto ou Serviço Necessário
          </label>
          <div className="flex space-x-2 max-sm:flex-col  max-sm:gap-4 max-sm:space-x-0">
            <button
              onClick={() => setFormData({ ...formData, produto: 'Parafusos' })}
              className={`max-sm:w-full  flex-1 p-2 border border-gray-300 rounded ${
                formData.produto === 'Parafusos' ? 'bg-gray-300' : ''
              }`}
            >
              Parafusos
            </button>

            <button
              onClick={() => setFormData({ ...formData, produto: 'Pinos' })}
              className={`max-sm:w-full  flex-1 p-2 border border-gray-300 rounded ${
                formData.produto === 'Pinos' ? 'bg-gray-300' : ''
              }`}
            >
              Pinos
            </button>

            <button
              onClick={() => setFormData({ ...formData, produto: 'Fixadores' })}
              className={`max-sm:w-full  flex-1 p-2 border border-gray-300 rounded ${
                formData.produto === 'Fixadores' ? 'bg-gray-300' : ''
              }`}
            >
              Fixadores
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantidade Necessária</label>
          <input
            type="text"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Especificações Técnicas</label>
          <input
            type="text"
            name="especificacoes"
            value={formData.especificacoes}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Prazo de Entrega desejado
          </label>
          <input
            type="text"
            name="prazo"
            value={formData.prazo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensagem adicional</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></textarea>
        </div>
        <button
          onClick={enviarOrcamento}
          className="w-full p-3 bg-red-600 text-white rounded"
        >
          Solicitar Orçamento
        </button>
      </div>
    </div>
  )
}

export default Budget
