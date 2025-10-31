import Image from 'next/image'
import GradientOne from '../../../../public/gradienteone.png'
import GradientTwo from '../../../../public/gradienttwo.png'
import GradientControl from '../../../../public/controlgradient.png'
import GradientBuild from '../../../../public/buildgradient.png'
import GradientTech from '../../../../public/techgradient.png'
import GradientPerson from '../../../../public/persongradient.png'

const GradientSections = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row h-auto md:h-[448px] w-full">
        <div className="w-full md:w-1/2 bg-custom-gray-gradient flex flex-col items-center justify-center p-4">
          <div className="mb-8 mr-2 ml-2">
            <div className="flex items-center mb-4">
              <Image
                src={GradientBuild}
                alt=""
                className="mr-4 w-12 h-12 md:w-16 md:h-16"
              />
              <h1 className="text-lg md:text-[28px] text-white font-bold">
                Fabricação de Parafusos e Fixadores Especiais
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-200 font-semibold text-justify mr-4 ml-4">
              Produzimos parafusos e fixadores customizados de acordo com as
              necessidades específicas de nossos clientes. Com nossa experiência
              em engenharia e fabricação, garantimos soluções de fixação que
              atendem às demandas mais exigentes, seja em termos de design,
              material ou funcionalidade.
            </p>
          </div>
          <div className=" mr-2 ml-2">
            <div className="flex items-center mb-4">
              <Image
                src={GradientControl}
                alt=""
                className="mr-4 w-12 h-12 md:w-16 md:h-16"
              />
              <h1 className="text-lg md:text-[28px] text-white font-bold">
                Controle Rigoroso de Qualidade
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-200 font-semibold text-justify mr-4 ml-4">
              Produzimos parafusos e fixadores customizados de acordo com as
              necessidades específicas de nossos clientes. Com nossa experiência
              em engenharia e fabricação, garantimos soluções de fixação que
              atendem às demandas mais exigentes, seja em termos de design,
              material ou funcionalidade.
            </p>
          </div>
        </div>

        <div className="hidden md:block w-full md:w-1/2 relative h-[200px] md:h-full">
          <Image
            src={GradientOne}
            alt=""
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-[448px] w-full mt-4 md:mt-0 max-sm:mt-0">
        <div className="hidden md:block w-full md:w-1/2 relative h-[200px] md:h-full">
          <Image
            src={GradientTwo}
            alt=""
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="w-full md:w-1/2 bg-custom-gray-gradient flex flex-col items-center justify-center p-4">
          <div className="mb-8 mr-2 ml-2">
            <div className="flex items-center mb-4">
              <Image
                src={GradientTech}
                alt=""
                className="mr-4 w-12 h-12 md:w-16 md:h-16"
              />
              <h1 className="text-lg md:text-[28px] text-white font-bold">
                Desenvolvimento e Inovação Tecnológica
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-200 font-semibold text-justify mr-4 ml-4">
              Investimos continuamente em pesquisa e desenvolvimento para manter
              nossos produtos na vanguarda da tecnologia. Nossa equipe de
              engenharia está sempre explorando novas técnicas e materiais para
              melhorar nossos processos de fabricação e a qualidade dos
              produtos.
            </p>
          </div>
          <div className=" mr-2 ml-2">
            <div className="flex items-center mb-4">
              <Image
                src={GradientPerson}
                alt=""
                className="mr-4 w-12 h-12 md:w-16 md:h-16"
              />
              <h1 className="text-lg md:text-[28px] text-white font-bold text-justify mr-4 ml-4">
                Parceria com Clientes e Atendimento Personalizado
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-200 font-semibold">
              Valorizamos cada relacionamento com nossos clientes, oferecendo um
              atendimento personalizado que vai além da simples entrega de
              produtos. Trabalhamos de perto com nossos parceiros para entender
              suas necessidades e oferecer soluções sob medida que impulsionam o
              sucesso de seus projetos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradientSections
