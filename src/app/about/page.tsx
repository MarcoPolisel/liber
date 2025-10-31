import Image from 'next/image'
import LiberAbout from '../../../public/about/liberabout.png'
import OriginOne from '../../../public/about/origin1.png'
import OriginTwo from '../../../public/about/origin2.png'
import Mission from '../../../public/about/mission.svg'
import Vision from '../../../public/about/vision.svg'
import Values from '../../../public/about/values.svg'

const OurValues = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl flex flex-col md:flex-row">
        <div className="lg:mr-4 flex flex-col items-center text-center mb-8 md:w-1/2">
          <Mission />
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Missão</h1>
          <p>
            Produzir e fornecer parafusos especiais de alta qualidade, com
            excelência no atendimento ao cliente, garantindo soluções confiáveis
            e inovadoras que atendam às necessidades específicas de cada
            projeto, contribuindo para o sucesso dos nossos parceiros e a
            evolução do setor.
          </p>
        </div>

        <div className="flex flex-col items-center text-center mb-8 md:w-1/2">
          <Vision />
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Visão</h1>
          <p>
            Ser reconhecida como a principal referência em parafusos especiais
            no mercado nacional e internacional, destacando-se pela qualidade
            incomparável de nossos produtos, inovação contínua e um compromisso
            inabalável com a satisfação do cliente.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center mb-8">
        <Values />
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Valores</h1>
        <ul className="text-left space-y-4">
          <li>
            <strong>Qualidade:</strong> Compromisso com a excelência em cada
            etapa do processo, desde a produção até a entrega final.
          </li>
          <li>
            <strong>Satisfação do Cliente:</strong> Priorizar as necessidades
            dos clientes, oferecendo atendimento personalizado e soluções sob
            medida.
          </li>
          <li>
            <strong>Tradição e Experiência:</strong> Valorizar nossa história e
            expertise no mercado, utilizando nosso conhecimento para oferecer
            produtos de confiança.
          </li>
          <li>
            <strong>Colaboração:</strong> Fomentar um ambiente de trabalho
            colaborativo, onde o respeito e a valorização dos colaboradores são
            primordiais.
          </li>
          <li>
            <strong>Inovação:</strong> Busca constante por novas tecnologias e
            soluções que aprimorem nossos produtos e serviços.
          </li>
          <li>
            <strong>Integridade:</strong> Manter uma conduta ética e
            transparente em todas as relações comerciais.
          </li>
          <li>
            <strong>Sustentabilidade:</strong> Promover práticas responsáveis e
            sustentáveis que minimizem o impacto ambiental.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900 lg:mt-20 max-sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="flex flex-col md:flex-row mb-12 w-full h-full">
          <div className="w-full md:w-1/2 h-full mr-4">
            <div className="flex flex-col w-full">
              <h2 className="uppercase text-gray-500 font-medium mb-2">
                Sobre nós
              </h2>
              <h1 className="text-3xl font-bold mb-4 w-full">
                Uma História de Excelência e Inovação na Indústria de Fixadores
              </h1>
            </div>

            <p className="text-lg">
              A LIBER INDUSTRIAL LTDA tem suas raízes em uma das primeiras
              empresas fabricantes de parafusos no Brasil. Hoje, sob a
              administração da terceira geração, a paixão pelos parafusos
              continua e honra as velhas eras da família Polisel. Desde a visão
              do Liberale Polisel, que nasceu em Monte Alegre do Sul em 1909,
              até os dias de hoje, a empresa evoluiu mantendo o legado de
              criatividade, inovação e dedicação técnica.
            </p>
            <p className="text-lg mt-4">
              Liberale, filho de imigrantes italianos, começou sua jornada como
              empreiteiro, mas rapidamente se destacou por seu enorme talento em
              mecânica, idealizando e aperfeiçoando máquinas agrícolas ainda na
              juventude. Seu espírito empreendedor o levou a fundar várias
              fábricas de parafusos ao longo de sua vida, cada uma contribuindo
              significativamente para a progressão industrial do Brasil.
            </p>
          </div>

          <div className="w-full md:w-1/2 h-full mt-8 md:mt-0">
            <Image
              src={LiberAbout}
              alt="Liber Industrial"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              src={OriginOne}
              alt="Fábrica Original"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div>
              <Image
                src={OriginTwo}
                alt="Fábrica Original 2"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="mt-6 flex flex-col md:flex-row">
                <div className="w-[18px] h-[100px] md:h-[200px] m-4 md:m-6 bg-red-500   max-sm:w-10/12 max-sm:h-[12px]" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    A Fábrica Original
                  </h2>
                  <p className="text-lg">
                    Nossa jornada começou em 1942, quando Liberale Polisel e
                    seus irmãos instalaram uma pequena fábrica de parafusos. Com
                    máquinas projetadas e construídas pelo próprio Liberale,
                    essa pequena fábrica marcou o início de uma tradição de
                    excelência na fabricação de fixadores metálicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <OurValues />
    </div>
  )
}
