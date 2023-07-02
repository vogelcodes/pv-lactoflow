import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { api } from "@/utils/api";


const Home: NextPage = () => {
  type E164Number = string | undefined;

  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<E164Number | undefined>()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  function handleSubmit() {
    console.log(value)
  }

  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>LactoFlow</title>
        <meta name="description" content="Método para aumentar a produção de leite materno" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#122e49] to-[#15162c]">
        <div className="container bg-blue flex text-cream flex-col items-center justify-center px-2 py-10">
          <div className="w-[128px] sm:w-[256px]">

          <Image src="/logo.svg" alt="logo" width={256} height={256}/>
          </div>
          <h4 hidden className="text-center text-3xl text-[#fcfaef]">Conheça o Método</h4>
          <h1 hidden className="text-center text-5xl font-extrabold tracking-tight text-cream sm:text-[5rem]">
            Lacto<span className="text-green">Flow</span>{" "}
          </h1>
          <h1 className="sm:w-1/2 uppercase font-extrabold text-cream text-[25px] lg:text-[31.25px] text-center mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px]">
            Aprenda como <span className="text-red text-[35px]">aumentar a sua produção</span> de leite e ofereça o <span className="text-green text-[35px]">melhor alimento do mundo</span> ao seu bebê.
          </h1>
          <p className="mt-7 lg:mt-5 font-bold text-[16.67px] lg:text-[18.75px] leading-[22.9px] tracking-[-25] text-center">
            Nesse vídeo eu te ensino estratégias para aumentar a sua produção de leite <span className="text-red uppercase text-[18px]">hoje mesmo.</span></p>
          <p className="mt-7 lg:mt-5 font-bold text-[16.67px] lg:text-[18.75px] leading-[22.9px] tracking-[-25] text-center">
          <span className="text-green text-[35px] uppercase">E mais:</span></p>
            <div className="mx-2">
            <div className="flex items-center gap-x-4 mt-6 lg:mt-4">
              <div><div className="relative w-[36px] h-[36px] ">
              <Image src="/1.svg" alt="one" height={36} width={36} />
              </div></div>
              <p className="font-medium text-[15.67px] lg:text-[16.75px] leading-[22.9px] tracking-[-25]">
                Quais os benefícios da amamentação?</p>
            </div>
            <div className="flex items-center gap-x-4 mt-6 lg:mt-4">
              <div><div className="relative w-[36px] h-[36px] ">
                <Image src="/2.svg" alt="Two" height={36} width={36} />
              </div></div>
              <p className="font-medium text-[15.67px] lg:text-[16.75px] leading-[22.9px] tracking-[-25]">
                Como fazer uma ordenha manual?</p>
            </div>
            <div className="flex items-center gap-x-4 mt-6 lg:mt-4">
              <div><div className="relative w-[36px] h-[36px] ">
              <Image src="/3.svg" alt="three" height={36} width={36} />
              </div></div>
              <p className="font-medium text-[15.67px] lg:text-[16.75px] leading-[22.9px] tracking-[-25]">
                As melhores técnicas para aumentar sua coleta de leite</p>
            </div>
            </div>
            <iframe className="w-full aspect-video rounded-md mt-8 mx-auto max-w-[22rem] lg:max-w-[53.25rem]" src="https://youtube.com/embed/IVKkQA9p7go"></iframe>
            <div className="mx-auto max-w-[19.875rem] lg:max-w-[53.25rem] ">
              <div className="mt-5 w-full text-center">
                {/* <a href="https://instagram.com/carolina.procaci"> */}
                <button onClick={openModal} className="hover:scale-[104%] w-auto rounded-lg border-b-4 border-b-[#236C0F] bg-[#46B21E] py-3 text-[13.6px] font-extrabold uppercase text-white hover:border-b-[#44972d] hover:bg-[#236C0F] px-2 lg:py-5 lg:text-[22.6px]">
                  Quero aumentar minha <br/> produção de leite</button>

                {/* </a> */}
                <p>12x 
                  <span className="uppercase font-extrabold text-cream text-[25px] lg:text-[31.25px] text-center mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px]">
                    R$49,70</span> <br/> ou R$497,00 à vista
                </p>
                <Image className="mx-auto bg-cream h-10 px-4" alt="Meios de Pagamento" src="/pagamentos.svg" width={340} height={20} ></Image>
              </div>
              {/* <Image alt="checklist" src={"/checklist.png"} height={762} width={623}></Image> */}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center bg-blue bg-opacity-70 justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md bg-green transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-blue"
                  >
                    Cadastre-se para receber nosso suporte especializado
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="flex flex-col mb-8">
                      <label htmlFor="celular">Email</label>
                      <input type="text" name="email" placeholder="maeincrivel@gmail.com"/>
                      <label htmlFor="celular">Celular</label>
                      <PhoneInput placeholder="11 2345678" value={value} defaultCountry="BR" onChange={setValue}/>
                    </form>
                      <a href="https://pay.hotmart.com/O84147403X">
                      <button onClick={handleSubmit} className="hover:scale-[104%] w-auto rounded-lg border-b-4 border-b-[#236C0F] bg-[#46B21E] py-3 text-[13.6px] font-extrabold uppercase text-cream hover:border-b-[#44972d] hover:bg-[#236C0F] px-2 lg:py-5 lg:text-[22.6px]">
                        Quero aumentar minha produção de leite</button>
                      </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
                  

        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
