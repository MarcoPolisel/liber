import NotDestruct from '../../../public/control/naodestrutivos.png'
import Destruct from '../../../public/control/destrutivos.png'
import Corrosao from '../../../public/control/corrosao.png'
import Metalo from '../../../public/control/metalografia.png'
import Qumica from '../../../public/control/quimica.png'
import Metro from '../../../public/control/metrologia.png'
import Image from 'next/image'
export default function Control() {
  return (
    <div
      className="p-8 mt-6 lg:mt-20 max-sm:mt-20
    max-sm:mx-2
    "
    >
      <h1 className="text-center text-2xl font-bold mb-2">
        Controle de Qualidade
      </h1>
      <h2 className="text-center text-lg font-semibold mb-8">
        Controle de Qualidade em Parafusos, Porcas e Fixadores
      </h2>
      <p className="mb-8 text-lg text-justify">
        Na LIBER INDUSTRIAL LTDA, acreditamos que a qualidade não é apenas uma
        característica dos nossos produtos, mas o pilar que sustenta toda a
        nossa operação. Em um mundo onde os parafusos são fundamentais para a
        integridade e segurança de diversos sistemas, desde simples utensílios
        domésticos até complexos equipamentos industriais, nosso compromisso é
        com a excelência inabalável.
      </p>
      <p className="mb-8 text-lg text-justify">
        Cada fixador que fabricamos é rigorosamente inspecionado e testado para
        garantir que atenda aos mais altos padrões de qualidade e segurança.
        Vamos explorar como nossos processos de controle de qualidade asseguram
        que cada peça que sai de nossa linha de produção esteja em conformidade
        com as especificações rigorosas e expectativas dos nossos clientes.
      </p>
      <p className="mb-8 text-lg text-justify">
        Política da Qualidade Buscar a melhoria contínua de nossos produtos e
        processos através da produção de parafusos e peças especiais, a fim de
        atender as necessidades de nossos clientes, proprietários, colaboradores
        e requisitos legais
      </p>
      <div className="flex flex-col gap-8">
        {/* LEFT IMG */}
        <div
          className="flex  items-center max-sm:flex-col  lg:h-[440px]
    
        "
        >
          <Image
            src={NotDestruct}
            alt="Ensaios Mecânicos - Não Destrutivos"
            className="w-1/2 lg:h-[440px] rounded-sm max-sm:hidden "
          />
          <div className="flex flex-col  justify-center  text-center w-1/2 p-6 ml-4  max-sm:w-full ">
            <div className="bg-red-600 text-white text-lg font-bold p-2 w-10 h-10 lg:w-14 lg:h-14 items-center justify-center text-center rounded-sm mb-2">
              1
            </div>
            <h3 className="text-2xl font-semibold mb-2  max-sm:w-full">
              Ensaios Mecânicos - Não Destrutivos (ENDs)
            </h3>
            <p className="text-xl text-justify mt-4 max-sm:text-sm">
              Os Ensaios Não Destrutivos (ENDs) são cruciais para garantir a
              integridade dos nossos fixadores sem comprometer sua
              funcionalidade. Utilizamos métodos avançados para detectar
              descontinuidades ou defeitos que possam afetar o desempenho dos
              produtos sob condições reais de uso. Esses testes são realizados
              usando princípios físicos que preservam as características
              originais dos materiais. Dessa forma, garantimos que os produtos
              atendam às demandas mais exigentes sem comprometer sua
              durabilidade ou segurança.
            </p>
          </div>
        </div>

        {/* RIGHT IMG*/}
        <div className="flex  items-center max-sm:flex-col lg:h-[440px]">
          <div className="flex flex-col  justify-center  text-center w-1/2 p-6 ml-4   max-sm:w-full">
            <div className="bg-red-600 text-white text-lg font-bold p-2 w-10 h-10 lg:w-14 lg:h-14 items-center justify-center text-center rounded-sm mb-2 ">
              2
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Ensaios Mecânicos - Destrutivos
            </h3>
            <p className="text-xl text-justify mt-4 max-sm:text-sm">
              Em contraste, os Ensaios Destrutivos envolvem submeter os
              fixadores a condições extremas para avaliar sua resistência e
              comportamento até o ponto de falha. Embora esses testes resultem
              em alterações permanentes nas propriedades dos materiais, eles
              fornecem informações críticas sobre os limites de resistência e a
              robustez estrutural dos nossos produtos. Isso nos permite
              assegurar que cada parafuso, porca e fixador possa suportar as
              condições mais rigorosas de operação.
            </p>
          </div>
          <Image
            src={Destruct}
            alt="Ensaios Mecânicos - Não Destrutivos"
            className="w-1/2 h-[440px] rounded-sm max-sm:hidden"
          />
        </div>

        <div className="flex  items-center max-sm:flex-col lg:h-[440px] ">
          <Image
            src={Corrosao}
            alt="Ensaios Mecânicos - Não Destrutivos"
            className="w-1/2 h-[440px] rounded-sm max-sm:hidden"
          />
          <div className="flex flex-col  justify-center  text-center w-1/2 p-6 ml-4 max-sm:w-full">
            <div className="bg-red-600 text-white text-lg font-bold p-2 w-10 h-10 lg:w-14 lg:h-14 items-center justify-center text-center rounded-sm mb-2">
              3
            </div>
            <h3 className="text-2xl font-semibold mb-2">Ensaios de Corrosão</h3>
            <p className="text-xl text-justify mt-4 max-sm:text-sm">
              Para garantir que nossos fixadores resistam ao teste do tempo e às
              condições ambientais adversas, realizamos ensaios de corrosão em
              câmaras especialmente projetadas. Essas câmaras simulam ambientes
              de alta umidade e outros fatores corrosivos para prever e mitigar
              os efeitos da corrosão nos materiais. Assim, nossos produtos são
              rigorosamente avaliados para garantir longevidade e desempenho
              confiável, mesmo em condições adversas.
            </p>
          </div>
        </div>

        <div className="flex  items-center max-sm:flex-col lg:h-[440px]">
          <div className="flex flex-col  justify-center  text-center w-1/2 p-6 max-sm:w-full ">
            <div className="bg-red-600 text-white text-lg font-bold p-2 w-10 h-10 lg:w-14 lg:h-14 items-center justify-center text-center rounded-sm mb-2">
              4
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Ensaios Metalográficos
            </h3>
            <p className="text-xl text-justify mt-4 max-sm:text-sm">
              A análise metalográfica é fundamental para entender a
              microestrutura dos materiais que utilizamos. Utilizando
              microscópios metalúrgicos de alta precisão, examinamos a
              composição interna e as características de cada peça. Isso nos
              permite identificar e solucionar potenciais causas de fraturas,
              desgastes prematuros ou outras falhas estruturais. O uso de
              sistemas de análise de imagem digitalizada nos ajuda a obter
              resultados precisos e confiáveis, assegurando que cada produto
              entregue seja de qualidade superior.
            </p>
          </div>
          <Image
            src={Metalo}
            alt="Ensaios Mecânicos - Não Destrutivos"
            className="w-1/2 h-[440px] rounded-sm max-sm:hidden"
          />
        </div>

        <div className="flex  items-center max-sm:flex-col lg:h-[440px] ">
          <Image
            src={Qumica}
            alt="Ensaios Mecânicos - Não Destrutivos"
            className="w-1/2 h-[440px] rounded-sm max-sm:hidden"
          />
          <div className="flex flex-col  justify-center  text-center w-1/2 p-6 max-sm:w-full">
            <div className="bg-red-600 text-white text-lg font-bold p-2 w-10 h-10 lg:w-14 lg:h-14 items-center justify-center text-center rounded-sm mb-2">
              5
            </div>
            <h3 className="text-2xl font-semibold mb-2">Análises Químicas</h3>
            <p className="text-xl text-justify mt-4 max-sm:text-sm">
              As análises químicas fornecem uma visão detalhada da composição
              dos materiais usados em nossos fixadores. Essas análises são
              cruciais para garantir que cada liga metálica esteja de acordo com
              as especificações necessárias para resistir aos tratamentos
              térmicos e às condições de uso a que serão submetidas. Com
              informações precisas sobre a composição química, podemos assegurar
              que nossos produtos mantenham sua integridade e desempenho ao
              longo do tempo.
            </p>
          </div>
        </div>
        <div className="flex  items-center max-sm:flex-col lg:h-[440px]">
          <div className="flex flex-col  justify-center  text-center w-1/2 p-6 max-sm:w-full">
            <div className="bg-red-600 text-white text-lg font-bold p-2 w-10 h-10 lg:w-14 lg:h-14 items-center justify-center text-center rounded-sm mb-2">
              6
            </div>
            <h3 className="text-2xl font-semibold mb-2">Metrologia</h3>
            <p className="text-xl text-justify mt-4 max-sm:text-sm">
              A precisão dimensional é um aspecto crítico da qualidade dos
              fixadores. Utilizamos equipamentos de medição de última geração
              para verificar as dimensões e tolerâncias de cada peça produzida.
              A metrologia nos permite assegurar que cada parafuso, porca e
              fixador se encaixe perfeitamente em sua aplicação específica,
              oferecendo segurança e funcionalidade excepcionais.
            </p>
          </div>
          <Image
            src={Metro}
            alt="Ensaios Mecânicos - Não Destrutivos"
            className="w-1/2 h-[440px] rounded-sm max-sm:hidden"
          />
        </div>
      </div>
    </div>
  )
}
