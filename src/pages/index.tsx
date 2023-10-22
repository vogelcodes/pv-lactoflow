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
          <div className="max-w-[80rem] xl:px-0 px-4 mx-auto w-full">
            <div className="flex lg:flex-row  lg:gap-0 gap-[1.75rem] flex-col items-center justify-center pb-[5rem] lg:pt-[3.5rem] pt-[1.5rem]">
              <div className="max-w-[50rem] justify-center w-full text-slate-100">
                <h1 className="lg:text-[2.5rem] text-[2rem] text-[#FFF] lg:leading-[3rem] leading-9 font-extrabold">
                  Sua amamentação da gestação ao desmame
                  <span className="text-[#03CBD1]"> em um único Curso</span>
                </h1>
                <div className="grid gap-2 lg:grid-cols-2 pt-4 justify-center">
                  <div className="bg-slate-50 w-[18rem] text-slate-700  rounded-md p-2">
                      <h2 className="text-center pb-2">Oferta Normal</h2>
                    
                <ul className="text-sm">
                  <li className="text-slate-700"><div className="flex justify-between">LactoFlow <span className="text-left w-[3.75rem]">R$298</span></div></li>
                        <li className="pl-2 text-slate-600">
                          <div className="flex justify-between">WS Gestante <span className="text-slate-600 text-left w-[3.75rem]">R$200</span></div>
                        </li>
                        <li className="pl-2 text-slate-600">
                          <div className="flex justify-between">WS Intro Alimentar  <span className="text-slate-600 text-left w-[3.75rem]">R$200</span></div>
                        </li>
                        <li className="pl-2 text-slate-600">
                          <div className="flex justify-between">WS Desmame  <span className="text-slate-600 text-left w-[3.75rem]">R$200</span></div>
                        </li>
                        <li className="pt-4">
                          <div className="flex justify-between">Total: <span className="text-lg">R$1.097,00</span></div>
                        </li>
                </ul>

                  </div>
                  <div className="bg-gray-950 w-[18rem] text-slate-50  rounded-md p-2">
                      <h2 className="text-center pb-2">Oferta <span className="text-[#0f0]">Black Friday</span></h2>
                    
                <ul className="text-sm">
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
                        <li className="pt-4">
                          <div className="flex justify-between">Total: <span className="text-lg text-[#0f0]">R$298</span></div>
                        </li>
                </ul>

                  </div>
                </div>
              </div>
              <Image width={300} height={0} alt="Carolina Procaci" className="rounded-md" src={"/carol.webp"}/>

            </div>
            <div className="card bg-cream max-w-2xl shadow-lg text-blue">
  <div className="card-body">
            <h1 className="text-left mb-[14.4px] mt-3 px-4 text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
                LactoFlow               
            </h1>

            <ul className="flex flex-col text-xl gap-2 m-2">
            <div className="flex gap-2">🎓 <li>Carolina Procaci é biomédica formada na Universidade Federal do Estado do Rio de Janeiro</li></div>
            <div className="flex gap-2">🏥 <li>Consultora em amamentação pelo único curso reconhecido pelo MEC</li></div>
            <div className="flex gap-2">👩‍👧‍👦 <li>Mãe de 2 filhos e lactante há mais de 5 anos.</li></div>
            </ul>
            </div>
            </div>

          </div>

        </div>
          


    </>
        )
        }

        export default Home;
  