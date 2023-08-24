import Image from 'next/image'
import Header1 from './h1'

const Furadeira = ()=> {
    return (
        <section>
            <h1 className="mb-[14.4px] mt-6 px-4 text-center text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
              O método LactoFlow®️ se divide em 3 pilares:
            </h1>
            <div className="mx-2 sm:p-2">
              
              <div className="ml-6 flex max-w-3xl flex-col  gap-2 md:ml-8">
                          <div className='-ml-6 mx-auto '>
                      <Image
                          alt='metodo'
                          src={'/furadeira/furadeira-crop.webp'}
                          width={600}
                          height={600}
                          />
                          </div>
                {[
                  [
                    "C",
                    "/conhecimento2.svg",
                    "Conhecimento de Base",
                    'Conhecendo todo o funcionamento da "Fantástica Fábrica de Leite Materno" para uma produção de leite abundante.',
                    "Bê-a-bá da amamentação",
                    "Base sólida da Fantástica Fábrica de Leite Materno",
                    "bg-blue-fura"
                  ],
                  [
                    "D",
                    "/defesa.svg",
                    "Defesa Infalível",
                    'Identificando e eliminando todos os sabotadores da "Fantástica Fábrica de Leite Materno".',
                    "Os sabotadores da Fantástica Fábrica de Leite Materno",
                    "Oferta segura fora do peito da mãe",
                    "bg-red-fura"
                  ],
                  [
                    "A",
                    "/acao.svg",
                    "Ação Estratégica",
                    'Aprendendo as estratégias eficientes para maximizar a ação da "Fantástica Fábrica de Leite Materno" e ter uma produção de leite abundante.',
                    "Passo a passo para o aumento da produção de leite materno",
                    "O fluxo de uma amamentação segura",
                    "bg-green-fura"
                  ],
                ].map((i) => (
                  <div key={i[0]} className=" -ml-2 flex items-stretch">
                    <div className="flex w-1/5 items-center justify-center">
                      {/* <div className="w-12 z-10 h-12 xs:w-16 xs:h-16 md:w-32 md:h-32"> */}
                      <div className="z-10 h-[min(10vw,32)] w-[min(10vw,32)]">
                        <Image
                          className=""
                          src={`${i[1] || ""}`}
                          alt="D"
                          width={128}
                          height={128}
                        />
                      </div>
                    </div>
                    <div className="-z-0 -ml-6 min-h-[8rem] w-4/5 rounded-l-md bg-cream p-2 pl-4 text-blue md:-ml-8">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <h1 className=" text-left font-extrabold uppercase">
                          {i[2]}
                        </h1>
                        <p className="ml-1 text-left font-normal">{i[3]}</p>
                        {/* <ul className="text-center">
                          <li>{i[4]}</li>
                          <li>{i[5]}</li>
                        </ul> */}
                      </div>
                    </div>
                    <div className={`relative ${i[6]||""} brightness-[80%] w-3 rounded-r-md`}></div>
                  </div>
                ))}
              </div>
            </div>
            
          </section>
    )
}
export default Furadeira