'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Jobs = () => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    resume: null as File | null
  })
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, resume: e.target.files[0] })
    }
  }

  const handleAttachClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Prevent multiple submissions
    if (isSubmitting) return
    setIsSubmitting(true)

    const data = new FormData()
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('interest', formData.interest)
    data.append('message', formData.message)
    if (formData.resume) {
      data.append('file', formData.resume)
    }

    try {
      const response = await axios.post('/api/hello', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (response.status === 200) {
        toast.success('Currículo enviado com sucesso!')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          message: '',
          resume: null
        })
        // Redirect to home page after 2 seconds
        setTimeout(() => {
          router.push('/')
        }, 2000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Erro ao enviar currículo. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto p-6 mt-6 lg:mt-20 max-sm:mt-20">
      <Toaster position="top-right" />
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold">Trabalhe Conosco</h1>
        <p className="mt-2 text-gray-600">
          Estamos sempre em busca de novos talentos para crescer junto com a
          gente. Se você é comprometido, busca desafios e deseja fazer parte de
          uma equipe dinâmica e inovadora, envie seu currículo e venha construir
          o futuro conosco!
        </p>

        <h2 className="mt-4 text-lg font-semibold">Como se candidatar?</h2>
        <p className="text-gray-600">
          Preencha o formulário abaixo e anexe seu currículo. Nossa equipe de
          recrutamento analisará seu perfil e, caso haja uma oportunidade
          compatível, entraremos em contato.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome Completo"
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefone"
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            name="interest"
            placeholder="Área de interesse"
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            className="w-full p-3 border border-gray-300 rounded-lg h-24"
            onChange={handleChange}
          ></textarea>
          <input
            ref={fileInputRef}
            type="file"
            name="file"
            className="hidden" // Hide the default file input
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx" // Optional: restrict file types
          />

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
            <button
              type="button"
              onClick={handleAttachClick}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg w-full sm:w-auto"
            >
              <span className="text-xl">+</span>
              {formData.resume ? formData.resume.name : 'Anexar Currículo'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 text-white rounded-lg w-full sm:w-auto ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Jobs
