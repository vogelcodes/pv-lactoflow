import Image from "next/image";
import Header1 from "./h1";

const Furadeira = () => {
  return (
    <section>
      <h1 className="mb-[14.4px] mt-6 px-4 text-center text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
        O método LactoFlow® se divide em 3 pilares:
      </h1>
      <div className="mx-2 sm:p-2">
        <div className="flex max-w-3xl flex-col gap-4">
          <div className="mx-auto mb-2 ">
            <Image
              className=""
              alt="metodo"
              src={"/furadeira/furadeira-crop.webp"}
              width={600}
              height={600}
            />
          </div>

          <div className=" -ml-2 flex items-stretch">
            <div className="flex w-1/5 items-start justify-center">
              {/* <div className="w-12 z-10 h-12 xs:w-16 xs:h-16 md:w-32 md:h-32"> */}
              <div className="z-10 h-[min(10vw,32)] w-[min(10vw,32)]">
                <Image
                  className=""
                  src="/conhecimento2.svg"
                  alt="D"
                  width={128}
                  height={128}
                />
              </div>
            </div>
            <div className="-z-0 -ml-6 min-h-[8rem] w-4/5 rounded-l-md bg-cream p-2 pl-4 text-blue md:-ml-8">
              <div className="flex flex-col items-start justify-center gap-2">
                <h1 className=" text-left font-extrabold uppercase">
                  Conhecimento de Base
                </h1>
                <p className="ml-1 text-left font-bold">
                  Módulo 1 - O Beabá da Amamentação
                </p>
                <ul className="list-disc pl-4 text-left">
                  <li>Benefícios da Amamentação</li>
                  <li>Verdades e Mitos da Amamentação</li>
                  <li>Fases do Leite Materno</li>
                  <li>Leite Materno: Um Alimento VIVO?</li>
                  <li>A Fantástica Fábrica de Leite Materno</li>
                  <li>Teoria da Exterogestação</li>
                  <li>As Tão Temidas Cólicas do Bebê</li>
                  <li>Lidando com o Choro do Bebê</li>
                  <li>Como Saber que o Bebê Está Mamando Bem?</li>
                </ul>
                <p className="ml-1 text-left font-bold">
                  Módulo 2 - A Base Sólida da Fantástica Fábrica de Leite
                  Materno
                </p>
                <ul className="list-disc pl-4 text-left">
                  <li>A Cultura do Desmame</li>
                  <li>A Importância da Livre Demanda</li>
                  <li>Posições e Técnicas para Amamentar</li>
                </ul>
              </div>
            </div>
            <div
              className={`} relative
                w-3 rounded-r-md bg-blue-fura brightness-[80%]`}
            ></div>
          </div>

          <div className=" -ml-2 flex items-stretch">
            <div className="flex w-1/5 items-start justify-center">
              {/* <div className="w-12 z-10 h-12 xs:w-16 xs:h-16 md:w-32 md:h-32"> */}
              <div className="z-10 h-[min(10vw,32)] w-[min(10vw,32)]">
                <Image
                  className=""
                  src="/defesa.svg"
                  alt="D"
                  width={128}
                  height={128}
                />
              </div>
            </div>
            <div className="-z-0 -ml-6 min-h-[8rem] w-4/5 rounded-l-md bg-cream p-2 pl-4 text-blue md:-ml-8">
              <div className="flex flex-col items-start justify-center gap-2">
                <h1 className=" text-left font-extrabold uppercase">
                  Defesa Infalível
                </h1>
                <p className="ml-1 text-left font-bold">
                  Módulo 3 - Os Sabotadores da Fantástica Fábrica de Leite
                  Materno
                </p>
                <ul className="list-disc pl-4 text-left">
                  <li>Como Saber se o Ganho de Peso do Bebê Está Bom?</li>
                  <li>Buscando o Sabotador da sua Produção</li>
                  <li>Tenho Baixa Produção Mesmo. E Agora?</li>
                  <li>Posso Confiar no meu Pediatra?</li>
                </ul>
                <p className="ml-1 text-left font-bold">
                  Módulo 4 - Oferta Segura Fora do Peito da Mãe
                </p>
                <ul className="list-disc pl-4 text-left">
                  <li>Como Oferecer o Leite Sem Medo de um Desmame Precoce?</li>
                  <li>Treinando a Oferta de Leite</li>
                  <li>O Bebê Começou a Recusar o Peito e Agora?</li>
                  <li>E se Eu Preferir a Mamadeira?</li>
                </ul>
              </div>
            </div>
            <div
              className={`} relative
                w-3 rounded-r-md bg-red-fura brightness-[80%]`}
            ></div>
          </div>
          <div className=" -ml-2 flex items-stretch">
            <div className="flex w-1/5 items-start justify-center">
              {/* <div className="w-12 z-10 h-12 xs:w-16 xs:h-16 md:w-32 md:h-32"> */}
              <div className="z-10 h-[min(10vw,32)] w-[min(10vw,32)]">
                <Image
                  className=""
                  src="/acao.svg"
                  alt="D"
                  width={128}
                  height={128}
                />
              </div>
            </div>
            <div className="-z-0 -ml-6 min-h-[8rem] w-4/5 rounded-l-md bg-cream p-2 pl-4 text-blue md:-ml-8">
              <div className="flex flex-col items-start justify-center gap-2">
                <h1 className=" text-left font-extrabold uppercase">
                  Ação Estratégica
                </h1>
                <p className="ml-1 text-left font-bold">
                  Módulo 5 - O Passo a Passo Estratégico para o Aumento de
                  Produção
                </p>
                <ul className="list-disc pl-4 text-left">
                  <li>O que Aumenta a Produção de Leite?</li>
                  <li>O que é uma Rotina de Extração?</li>
                  <li>Os Erros mais Comuns na Rotina de Extração</li>
                  <li>Como Montar uma Rotina de Extração?</li>
                  <li>As Estratégias para Potencializar suas Ordenhas</li>
                  <li>Power Pump</li>
                  <li>Como Ordenhar com o Bebê Acordado?</li>
                  <li>
                    Bombas Tira-Leite: O que Eu Preciso Saber para Escolher uma?
                  </li>
                  <li>Já Escolhi a Bomba: Como Usar?</li>
                  <li>Chás e Ervas que Aumentam a Produção de Leite?</li>
                  <li>Alimentos que Aumentam a Produção de Leite</li>
                  <li>E-book de Receitas Lactogênicas</li>
                  <li>
                    Posso Tomar algum Remédio para Aumentar a Produção de Leite?
                  </li>
                </ul>
                <p className="ml-1 text-left font-bold">
                  Módulo 6 - Os Segredos de um Estoque de Leite Materno de
                  Sucesso
                </p>
                <ul className="list-disc pl-4 text-left">
                  <li>Como Guardar o Leite Materno?</li>
                  <li>Prazos de Validade do Leite Materno</li>
                  <li>Tipos de Estoque: Estratégico, Emergência e SOS</li>
                  <li>Segredos de um Estoque de Sucesso</li>
                  <li>Como Limpar as Peças da Bomba e Acessórios?</li>
                  <li>
                    É Possível Continuar Amamentando na Volta ao Trabalho?
                  </li>
                  <li>Calculando quanto Ter de Leite Materno em Estoque</li>
                  <li>Rotina de Extração: Antes e Após a Volta ao Trabalho</li>
                  <li>E se a Creche só Aceitar Mamadeiras?</li>
                  <li>Direitos Legais de quem Amamenta</li>
                  <li>Não Posso Amamentar Durante um Período: O que Fazer?</li>
                  <li>Como Acontece o Desmame do Complemento?</li>
                  <li>Como me Tornar Doadora de Leite?</li>
                </ul>
              </div>
            </div>
            <div
              className={`} relative
                w-3 rounded-r-md bg-green-fura brightness-[80%]`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Furadeira;
