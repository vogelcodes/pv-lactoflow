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
        <title>LactoFlow</title>
        <meta
          name="description"
          content="Método para aumentar a produção de leite materno"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.cdnfonts.com/css/gotham-6" rel="stylesheet" /> */}
      </Head>
      <Script
        id="hj"
        dangerouslySetInnerHTML={{
          __html: `
                  (function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:3570841,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ""});
            fbq('track', 'PageView');
            `,
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6T6HHESNG2"
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

           gtag('config', 'G-6T6HHESNG2');`,
        }}
      />
        <div className="flex flex-col items-center justify-center bg-blue py-2 text-cream sm:py-4">
          <div className="w-[180px] sm:w-[300px]">
            <Image
              src="/logo-portrait.svg"
              alt="logo"
              width={300}
              height={120}
            />
          </div>
          <h4 hidden className="text-center text-3xl text-[#fcfaef]">
            Conheça o Método
          </h4>
          <h1
            hidden
            className="text-center text-5xl font-extrabold tracking-tight text-cream sm:text-[5rem]"
          >
            Lacto<span className="text-green">Flow</span>{" "}
          </h1>
          <h1 className="mb-[14.4px] mt-6 px-4 text-center text-[18px] font-extrabold uppercase leading-[29px] tracking-[-25] text-cream sm:w-2/3 sm:px-0 sm:text-[31.25px] sm:leading-[36px]">
            Aprenda como{" "}
            <span className="text-[25px] text-red sm:text-[35px]">
              aumentar a sua produção
            </span>{" "}
            de leite e ofereça o{" "}
            <span className="text-[25px] text-green sm:text-[35px]">
              melhor alimento do mundo
            </span>{" "}
            ao seu bebê.
          </h1>
          <p className="mx-auto w-[80%] max-w-[600px] text-center text-[16.67px] font-bold leading-[22.9px] tracking-[-25] sm:mt-7 sm:px-2 lg:mt-5 lg:text-[18.75px]">
            Nesse vídeo eu te ensino estratégias para começar a aumentar a sua
            produção de leite{" "}
            <span className="text-[24px] uppercase text-red">hoje mesmo.</span>
          </p>
          <div className="flex  flex-col lg:flex-row items-center lg:items-baseline">
            <div className="flex items-center">

            <p className="mt-4 text-center text-[16.67px] font-bold leading-[22.9px] tracking-[-25] sm:mt-7 lg:text-[18.75px]">
              <span className="text-[35px] uppercase text-green">E mais: </span>
            </p>
            <div className="lg:-rotate-90 lg:-mb-4 m-2">

            <Image
              className="ml-2 animate-bounce"
              src="/arrow-down.svg"
              alt="one"
              height={36}
              width={36}
              />
              </div>
              </div>

          <div className="mx-auto w-[70%] max-w-[400px]">
            <div className="mt-4 flex items-center gap-x-4 lg:mt-6">
              <div>
                <div className="relative h-[36px] w-[36px] ">
                  <Image src="/1.svg" alt="one" height={36} width={36} />
                </div>
              </div>
              <p className="text-[15.67px] font-medium leading-[22.9px] tracking-[-25] lg:text-[16.75px]">
                Como amamentar protege a saúde do seu bebê?
              </p>
            </div>
            <div className="mt-6 flex items-center gap-x-4 lg:mt-4">
              <div>
                <div className="relative h-[36px] w-[36px] ">
                  <Image src="/2.svg" alt="Two" height={36} width={36} />
                </div>
              </div>
              <p className="text-[15.67px] font-medium leading-[22.9px] tracking-[-25] lg:text-[16.75px]">
                Como fazer uma ordenha manual da forma correta e não precisar de uma bomba tira-leite?
              </p>
            </div>
            <div className="mt-6 flex items-center gap-x-4 lg:mt-4">
              <div>
                <div className="relative h-[36px] w-[36px] ">
                  <Image src="/3.svg" alt="three" height={36} width={36} />
                </div>
              </div>
              <p className="text-[15.67px] font-medium leading-[22.9px] tracking-[-25] lg:text-[16.75px]">
              Como uma meia velha pode aumentar a sua produção de leite (e mais 3 estratégias infalíveis).
              </p>
            </div>
            </div>
          </div>
          {/* <iframe className="w-full aspect-video rounded-md mt-8 mx-auto max-w-[22rem] lg:max-w-[53.25rem]" src="https://youtube.com/embed/IVKkQA9p7go"></iframe> */}
          <div className="mx-auto my-8 aspect-video w-full max-w-[22rem] lg:max-w-[53.25rem]">
            <LiteYouTubeEmbed
              id="eXp3-bclWPs"
              title="Método LactoFlow"
              poster="maxresdefault"
            />
          </div>

          <CTA openModal={openModal} />
          {/* <Image alt="checklist" src={"/checklist.png"} height={762} width={623}></Image> */}

          <section>
            <h1 className="mb-[14.4px] mt-6 px-4 text-center text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
              O método LactoFlow se divide em 3 pilares:
            </h1>
            <div className="mx-2 sm:p-2">
              <div className=" hidden flex-col gap-2">
                <Image src={"/defesa.svg"} alt="D" width={44} height={44} />
                {[
                  [
                    "C",
                    "bg-[#14A3FE]",
                    "Conhecimento de Base",
                    'Conhecendo todo o funcionamento da "Fantástica Fábrica de Leite Materno" para uma produção de leite abundante.',
                  ],
                  [
                    "D",
                    "bg-[#FF3131]",
                    "Defesa Infalível",
                    'Identificando e eliminando todos os sabotadores da "Fantástica Fábrica de Leite Materno".',
                  ],
                  [
                    "A",
                    "bg-[#2ADCAA]",
                    "Ação Estratégica",
                    'Aprendendo as estratégias eficientes para maximizar a ação da "Fantástica Fábrica de Leite Materno" e ter uma produção de leite abundante.',
                  ],
                ].map((i) => (
                  <div key={i[0]} className=" flex items-center">
                    <div className="flex w-1/5 items-center justify-center">
                      <div
                        className={`${
                          i[1] || ""
                        } dro flex h-12 w-12 items-center justify-center self-center rounded-full text-center text-4xl font-extrabold drop-shadow-lg
                     xs:h-16 xs:w-16 md:h-32 md:w-32 md:text-6xl`}
                        key={i[0]}
                      >
                        <span className="-translate-x-0.1 w-1/2 -translate-y-0.5 text-center leading-tight">
                          {i[0]}
                        </span>
                      </div>
                    </div>
                    <div className="ml-3 min-h-[8rem] w-4/5 rounded-md bg-cream p-2 text-blue">
                      <h1 className=" font-bold uppercase">{i[2]}</h1>
                      <p className="ml-1">{i[3]}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-6 flex max-w-3xl flex-col  gap-2 md:ml-8">
                {[
                  [
                    "C",
                    "/conhecimento2.svg",
                    "Conhecimento de Base",
                    'Conhecendo todo o funcionamento da "Fantástica Fábrica de Leite Materno" para uma produção de leite abundante.',
                    "Bê-a-bá da amamentação",
                    "Base sólida da Fantástica Fábrica de Leite Materno",
                    "bg-green"
                  ],
                  [
                    "D",
                    "/defesa.svg",
                    "Defesa Infalível",
                    'Identificando e eliminando todos os sabotadores da "Fantástica Fábrica de Leite Materno".',
                    "Os sabotadores da Fantástica Fábrica de Leite Materno",
                    "Oferta segura fora do peito da mãe",
                    "bg-red"
                  ],
                  [
                    "A",
                    "/acao.svg",
                    "Ação Estratégica",
                    'Aprendendo as estratégias eficientes para maximizar a ação da "Fantástica Fábrica de Leite Materno" e ter uma produção de leite abundante.',
                    "Passo a passo para o aumento da produção de leite materno",
                    "O fluxo de uma amamentação segura",
                    "bg-cream"
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
          {/* <section>

<h1 className="font-extrabold text-[25px] lg:text-[31.25px] text-center mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px] ">
Explicação do método
</h1>
</section> */}
          <section>
            <h1 className="mb-[14.4px] mt-6 px-4 text-center text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
              Depoimento das alunas que seguiram o método LactoFlow:
            </h1>
            <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((number) => {
                return (
                  <div className="w-[90%] md:w-full" key={number}>
                    <Image
                      className="w-full rounded-xl"
                      key={number}
                      width={300}
                      height={500}
                      src={`/depoimentos/metodo/${number}.jpg`}
                      alt="depoimento"
                    />
                  </div>
                );
              })}
            </div>
          </section>
          <CTA
            openModal={openModal}
            label="Também quero esses resultados"
            price
          />
          {/* <div className="mx-auto max-w-[19.875rem] lg:max-w-[53.25rem] ">
              <div className="w-full border-2 border-[#4E859E] bg-[#EDF4FA] lg:bg-[#EDF4FA] rounded-lg flex gap-x-4 py-9 lg:py-6 px-3 mt-10 items-center justify-center"><div className="relative w-[32px] h-[30px]"><span><img alt="" src="https://vendatodosantodia.com.br//imgPg/icon-alert-blue.svg?auto=format&amp;fit=max&amp;w=3840" decoding="async" data-nimg="fill"  loading="lazy"/></span></div><p className="text-[16.17px] text-[#4E859E] font-regular max-w-[80%]">Com o Appbumper é mais fácil fazer o que tem que ser feito e do jeito que tem que ser feito. É quase impossível errar e você nunca fica perdido, sem saber o que fazer.</p>
              </div>
          </div> */}
          {/* <CTA openModal={openModal} price /> */}
              <div onClick={openModal} className=" fixed right-5 bottom-5 cursor-pointer"><div className="relative w-[60px] h-[60px]"><span><Image width={60} height={60} alt="whats logo" src="/whatsapp-logo.svg" decoding="async" data-nimg="fill" /></span></div></div>
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
                <div className="bg-black fixed inset-0 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-start justify-center bg-blue bg-opacity-70 p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="bg-white mt-16 w-full max-w-md transform overflow-hidden rounded-2xl bg-green p-6 text-left align-middle shadow-xl transition-all">
                      <span
                        className="absolute right-5 top-3 cursor-pointer font-extrabold text-blue"
                        onClick={closeModal}
                      >
                        ✖
                      </span>
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-medium leading-6 text-blue"
                      >
                        Cadastre-se para receber nosso suporte especializado
                      </Dialog.Title>
                      <div className="mt-2">
                        <form className="mb-8 flex flex-col">
                          <label htmlFor="celular">Email</label>
                          <input
                            className="pl-2"
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="maeincrivel@email.com"
                          />
                          <label htmlFor="celular">Celular</label>
                          <PhoneInput
                            labels={ptBR}
                            flags={flags}
                            value={value}
                            defaultCountry="BR"
                            onChange={setValue}
                          />
                        </form>
                        <a
                          target="_blank"
                          href={`https://pay.hotmart.com/O84147403X?email=${email}&phoneac=${
                            value?.toString() || ""
                          }`}
                        >
                          <button
                            onClick={handleSubmit}
                            className="w-auto rounded-lg border-b-4 border-b-[#236C0F] bg-[#46B21E] px-2 py-3 text-[13.6px] font-extrabold uppercase text-cream hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:py-5 lg:text-[22.6px]"
                          >
                            Quero aumentar minha produção de leite
                          </button>
                        </a>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
    </>
  );
};

export default Home;
