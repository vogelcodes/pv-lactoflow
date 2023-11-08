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
import { useRouter, usePathname } from "next/navigation";
import  Link  from "next/link";
import { type FormEvent } from 'react'


const Home: NextPage = () => {
  type E164Number = string | undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<E164Number | undefined>();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cta, setCta] = useState("");
  const { mutate } = api.example.saveLead.useMutation();
  const router = useRouter();
  const path = usePathname();


  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(value);
    console.log();

    mutate({
      ctaOption: cta,
      url: path,
      name,
      email,
      phoneNumber: value?.toString() || "",
    });
   
    router.push('/obrigado')

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
      </Head>
      <Hotjar/>
        <header className="w-full flex items-center md:h-[5.0625rem] h-[3.5rem] border-b-[1px] border-solid border-[#18191A] z-10 sticky top-0 bg-[#020202]">
          <div className="lg:max-w-[80rem] xl:px-0 lg:px-4 mx-auto w-full flex items-center gap-4 justify-center "> 
            <div className="md:w-[13rem] w-[8rem]">
              <Image
                  src="/logo-portrait-v2.svg"
                  alt="logo"
                  width={250}
                  height={120}
                />
            </div>           
          </div>
        </header >
        <div className="w-full text-xl bg-slate">
          <div className="max-w-[80rem] xl:px-0 px-4 mx-auto w-full flex flex-col md:flex-row items-center justify-center">
            <div className="flex lg:flex-row lg:items-center lg:gap-0 gap-[1.75rem] flex-col items-center justify-center pb-[5rem] lg:pt-[3.5rem] pt-[1.5rem]">
              <div className="max-w-[50rem] flex flex-col gap-2 justify-center items-center w-full text-slate-100">
                <div className="text-cream">

                  <h1 className="lg:text-[3.5rem] sm:text-[3rem] text-[1.5rem] text-cream lg:leading-[3.5rem] text-center leading-9 font-bold">
                    Todas as fases<br/> da sua <span className="uppercase text-green
                    ">amamentação</span><br/> em um 
                    <span className="text-[1.5rem] sm:text-[3rem] text-red-400"> ÚNICO CURSO</span>
                  </h1>
                  <div className="flex w-full justify-center">

                          <Image
                              src="/bf-cc-2.webp"
                              alt="logo"
                              width={250}
                              height={120}
                              />
                              </div>
                  
                  <p className="text-center">Inscreva-se agora para garantir essa oferta</p>
                  <div className="mt-2 bg-green p-2 max-w-[420px] rounded-md flex w-[95%] mx-auto flex-col items-center">
                        <form onSubmit={(e)=> handleSubmit(e)} className="p-2 w-full md:w-[25rem]  text-blue flex flex-col">
                          <label htmlFor="celular">Email</label>
                          <input
                            className="pl-2 bg-neutral-50 rounded-md"
                            type="text"
                            name="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="maeincrivel@email.com"
                            />
                          <label htmlFor="celular">Celular</label>
                          <PhoneInput
                          className="bg-neutral-50 dark:text-cream rounded-md"
                            labels={ptBR}
                            flags={flags}
                            value={value}
                            defaultCountry="BR"
                            onChange={setValue}
                            placeholder="(11)11111-1111"
                            

                            />
                        
                          <button
                            type="submit"
                            className="mt-2 w-full mx-auto rounded-lg border-b-4 border-b-[#236C0F] bg-[#40C351] px-2 py-2 text-[13.6px] font-extrabold uppercase text-cream hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:py-5 lg:text-[22.6px]"
                            >
                            Quero Participar
                          </button>
                        
                        </form>
                        <h3 className="text-blue w-full text-center text-sm">SEUS DADOS ESTÃO SEGUROS</h3>
                      </div>
                    </div>
                      
              


            </div>
            {/* <div className="h-full">

            <Image width={300} height={0} alt="Carolina Procaci" className="rounded-md h-full" src={"/carol.webp"}/>
            </div> */}
            
            </div>

          </div>

        </div>
          


    </>
        )
        }

        export default Home;
  