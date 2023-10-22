import { type NextPage } from "next";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ptBR from "react-phone-number-input/locale/pt-BR.json";
import flags from "react-phone-number-input/flags";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { api } from "@/utils/api";
import CTA from "./components/cta";
import About from "./components/about";
import Furadeira from "./components/furadeira";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Bonus from "./components/bonus";
import Hotjar from "./components/tags/hotjar";
import Header1 from "./components/h1";

const Home: NextPage = () => {
  type E164Number = string | undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<E164Number | undefined>();
  const [email, setEmail] = useState("");
  const { mutate } = api.example.saveLead.useMutation();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function handleSubmit() {
    console.log(value);

    mutate({ email, phoneNumber: value?.toString() || "" });
  }

  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (

    <>
            <Head>
        <title>Black Friday-LactoFlow®️</title>
        <meta
          name="description"
          content="Método para aumentar a produção de leite materno"
          />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.cdnfonts.com/css/gotham-6" rel="stylesheet" /> */}
      </Head>
      <Hotjar/>
        <header className="w-full flex items-center h-[5.0625rem] border-b-[1px] border-solid border-[#18191A] sticky top-0 bg-[#020202]">
          <div className="max-w-[80rem] xl:px-0 lg:px-4 mx-auto w-full flex justify-center lg:justify-start ">            
          <Image
              src="/logo-portrait.svg"
              alt="logo"
              width={250}
              height={120}
            />
          </div>
        </header >
        <div className="w-full text-xl bg-slate">
          <div className="max-w-[80rem] xl:px-0 px-4 mx-auto w-full flex flex-col items-center">
            <div className="flex lg:flex-row lg:items-start lg:gap-0 gap-[1.75rem] flex-col items-center justify-center pb-[5rem] lg:pt-[3.5rem] pt-[1.5rem]">
              <div className="max-w-[50rem] flex flex-col justify-center items-center w-full text-slate-100">
                <h1 className="lg:text-[4rem] sm:text-[3rem] text-[2rem] lg:w-[70%] text-[#FFF] lg:leading-[4rem] text-center leading-9 font-extrabold">
                  Sua <span className="text-green
                  ">amamentação</span>  da gestação ao desmame
                  <span className="text-red-400"> em um único curso</span>
                </h1>
                <div className="flex gap-4 items-center flex-col lg:flex-row pt-4 justify-center">
                  <div className="bg-cream w-[18rem] text-slate-700  rounded-md p-2">
                      <h2 className="text-center pb-4">Oferta Normal</h2>
                    
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="text-slate-700"><div className="flex justify-between">LactoFlow <span className="text-left w-[3.75rem]">R$497</span></div></li>
                  <li className="pl-2 text-slate-600">
                  <div className="flex justify-between">WS Gestante <span className="text-slate-600 text-left w-[3.75rem]">R$200</span></div>
                  </li>
                  <li className="pl-2 text-slate-600">
                  <div className="flex justify-between">WS Intro Alimentar  <span className="text-slate-600 text-left w-[3.75rem]">R$200</span></div>
                  </li>
                  <li className="pl-2 text-slate-600">
                  <div className="flex justify-between">WS Desmame  <span className="text-slate-600 text-left w-[3.75rem]">R$200</span></div>
                  </li>
                  <li className="text-slate-700"><div className="flex justify-center">Acesso por 2 anos</div></li>
                  <li className="pt-4">
                  <div className="flex justify-center"><span className="text-2xl">R$1.097,00</span></div>
                  </li>
                  </ul>
                  
                  </div>
                  <div className="bg-stone-900 w-[18rem] text-slate-50  rounded-md p-2">
                      <h2 className="text-center pb-4">Oferta <span className="text-[#4dca64]">Black Friday</span></h2>
                    
                <ul className="flex flex-col gap-2 text-sm">
                  <li className="text-slate-50"><div className="flex justify-between">LactoFlow <span className="text-left w-[3.75rem]">R$298</span></div></li>
                        <li className="pl-2 text-slate-50">
                          <div className="flex justify-between">WS Gestante <span className="line-through text-slate-400 text-left w-[3.75rem]">R$200</span></div>
                        </li>
                        <li className="pl-2 text-slate-50">
                          <div className="flex justify-between">WS Intro Alimentar  <span className="line-through text-slate-400 text-left w-[3.75rem]">R$200</span></div>
                        </li>
                        <li className="pl-2 text-slate-50">
                          <div className="flex justify-between">WS Desmame  <span className="line-through text-slate-400 text-left w-[3.75rem]">R$200</span></div>
                        </li>
                  <li className="text-slate-50"><div className="flex justify-center">Acesso Vitalício</div></li>

                        <li className="pt-4">
                          <div className="flex justify-center"><span className="text-2xl text-[#4dca64]">R$298</span></div>
                        </li>
                </ul>

                  </div>
                </div>
              </div>
              <Image width={300} height={0} alt="Carolina Procaci" className="rounded-md" src={"/carol.webp"}/>

            </div>
            <div className="card lg:w-full lg:max-w-[77rem] bg-cream shadow-lg text-blue">
  <div className="lg:text-lg text-base card-body">
            <h1 className="text-left mb-[14.4px] mt-3 px-4 text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
                LactoFlow               
            </h1>
            <p>Método para aumento de produção de leite comprovado com mais de 200 alunas, incluindo todo o conhecimento necessário para não cair nas armadilhas do desmame precoce.</p>
            <h1 className="text-left mb-[14.4px] mt-3 px-4 text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
                Workshop - Gestante               
            </h1>
            <p className="text-base">Amamentar não é intuitivo, apesar de ser natural.

A falta de informações corretas sobre a amamentação é a principal causa de:</p>
<ul>
<li>- dor e fissuras no momento da mamada;</li>
<li>- baixa produção de leite;</li>
<li>- desmame precoce.</li>


</ul>
            <h1 className="text-left mb-[14.4px] mt-3 px-4 text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
            Workshop - Introdução alimentar            
            </h1>
            <p>Há menos de 1 mês a OMS liberou o novo guia de Introdução Alimentar para crianças entre 6 a 23 meses. 

E no Workshop Introdução Alimentar eu vou te mostrar quais são as mais recentes e atualizadas orientações para essa fase e também te mostrar o que muda na sua amamentação depois da introdução de alimentos na rotina do bebê.</p>
            <h1 className="text-left mb-[14.4px] mt-3 px-4 text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
            Workshop - Desmame Gentil          
            </h1>
            <p>É normal chegar em um momento em que a amamentação se torna pesada e a gente se pega frequentemente pensando em um desmame. Ao mesmo tempo, diversas vezes nos arrependermos de desejarmos isso. Afinal, lutamos tanto para que nossos filhos pudessem ser amamentados!

E, olha, se esse momento ainda não chegou pra você… Calma que provavelmente ele ainda vai chegar.

A livre demanda não precisa ser pra sempre e existe um meio do caminho para reencontrar o prazer em amamentar.

Existem estratégias para você achar um respiro e assim até decidir amamentar um pouco mais (quem sabe?).

  
</p>
<ul>
  <li>1. Sair da livre demanda sem enlouquecer e regular as mamadas do dia; e</li>
  <li>2. Conduzir um desmame noturno de uma forma lúdica e cheia de acolhimento;</li>
  <li>3. Encerrar a sua amamentação de uma forma leve e com lembranças positivas (para você e para o seu bebê).</li>



</ul>
No Workshop Desmame Gentil eu vou te ensinar o passo a passo para que você consiga:<p>


Toda história de amamentação tem seu fim e esse fim não precisar ser negando o peito com o seu bebê chorando desesperado querendo mamar e nem mentindo para ele ao colocar band-aids dizendo que o mamá está machucado… Você e seu bebê merecem um fim respeitoso e gentil para esse vínculo tão incrível que é a amamentação.</p>
            </div>
            </div>

          </div>

        </div>
          


    </>
        )
        }

        export default Home;
  