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
import CountdownReact from "./components/countdown";

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
  // function handleSubmit() {
  //   console.log(value);

  //   mutate({ email, phoneNumber: value?.toString() || "" });
  // }

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
      </Head>
      <Hotjar/>
        <header className="w-full flex items-center md:h-[5.0625rem] h-[3.5rem] border-b-[1px] border-solid border-[#18191A] z-10 sticky top-0 bg-[#020202]">
          <div className="lg:max-w-[80rem] xl:px-0 lg:px-4 mx-auto w-full flex items-center gap-4 justify-between lg:justify-start "> 
            <div className="md:w-[16rem] w-[8rem]">
              <Image
                  src="/logo-portrait.svg"
                  alt="logo"
                  width={250}
                  height={120}
                />
            </div>           
            {/* <CountdownReact /> */}
            <h1>Black Friday</h1>
          </div>
        </header >
        <div className="w-full text-xl bg-slate">
          <div className="max-w-[80rem] xl:px-0 px-4 mx-auto w-full flex flex-col items-center">
            <div className="flex lg:flex-row lg:items-start lg:gap-0 gap-[1.75rem] flex-col items-center justify-center pb-[5rem] lg:pt-[3.5rem] pt-[1.5rem]">
              <div className="max-w-[50rem] flex flex-col gap-2 justify-center items-center w-full text-slate-100">
                <div className="text-cream">

                  <h1 className="lg:text-[3.5rem] sm:text-[3rem] text-[2rem] text-cream lg:leading-[3.5rem] text-center leading-9 font-extrabold">
                    Falta pouco para você concluir seu cadastro na  <span className="bg-black p-2 text-green-bf">BLACKFRIDAY</span> <span className="text-green
                    "> LactoFlow</span>
                  </h1>
                  <p className="text-center">Entre no grupo de Whatsapp para concluir seu cadastro</p>
                  <div className="mt-2 p-2 rounded-sm flex flex-col items-center">
                        <a
                          target="_blank"
                          href={`https://chat.whatsapp.com/GGXqsev9zw9H3x2sv6gyte`}
                          >
                          <button
                            className="mx-auto flex items-center rounded-lg border-b-4 border-b-[#236C0F] bg-[#40C351] px-2 py-3 text-[13.6px] font-extrabold uppercase text-cream hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:py-5 lg:text-[22.6px]"
                            >
                            <span><Image width={60} height={60} alt="whats logo" src="/whatsapp-logo.svg" decoding="async" data-nimg="fill" /></span>Entrar no grupo Whatsapp
                          </button>
                        </a>
                      </div>
                    </div>
                      
              <Image width={300} height={0} alt="Carolina Procaci" className="rounded-md" src={"/carol.webp"}/>

            </div>
            
            </div>

          </div>

        </div>
          


    </>
        )
        }

        export default Home;
  