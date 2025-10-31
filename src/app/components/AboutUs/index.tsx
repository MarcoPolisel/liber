import './index.css'
import React from 'react'

const AboutUs = () => {
  const Texts = [
    {
      textOne: 'Fabricação de Parafusos e',
      textTwo: 'Fixadores Especiais'
    },
    {
      textOne: 'Controle Rigoroso de',
      textTwo: 'Qualidade'
    },
    {
      textOne: 'Desenvolvimento e Inovação',
      textTwo: 'Tecnológica'
    },
    {
      textOne: 'Parceria com Clientes e',
      textTwo: 'Atendimento Personalizado'
    }
  ]
  return (
    <div className="about ">
      <div className="div-maior">
        <div className="w-full h-full flex lg:skew-x-12 max-sm:">
          <div
            className=" text-white  flex-1 flex flex-col justify-center ml-14
            max-sm:m-0 max-sm:p-4
          "
          >
            <h1 className="md:text-[68px] font-bold max-sm:text-2xl">
              O que Fazemos
            </h1>
            <p className="text-custom-text-white mt-2 md:text-[48px]">
              Fixadores Especiais para Suas Necessidades
            </p>
            <div className="flex max-md:flex-col max-md:overflow-hidden">
              {Texts.map(text => (
                <React.Fragment key={text.textOne}>
                  <div className="flex flex-col mr-3 mt-2">
                    <p className="text-gray-300 text-lg">{text.textOne}</p>
                    <p className="text-white text-lg">{text.textTwo}</p>
                  </div>
                  <div className="w-px h-14 m-4 bg-gray-300  max-md:h-[2px] max-md:w-full" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="div-menor">
        <div className="filha"></div>
      </div>
    </div>
  )
}

export default AboutUs
