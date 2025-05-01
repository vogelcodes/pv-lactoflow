/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextPage } from "next";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import "react-phone-number-input/style.css";
import { formatPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import ptBR from "react-phone-number-input/locale/pt-BR.json";
import flags from "react-phone-number-input/flags";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { api } from "@/utils/api";
import CTA from "@/components/cta";
import About from "../components/about";
import Furadeira from "../components/furadeira-completa";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Bonus from "../components/bonus";
import { useRouter } from "next/router";
import Depos from "../components/depos";
import { NextRequest } from "next/server";

export default function Home() {
  //   {
  //   repo,
  // }: InferGetServerSidePropsType<typeof getServerSideProps>
  type E164Number = string | undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<E164Number>();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  // const [version, setVersion] = useState<string | null>();
  const [cta, setCta] = useState("");
  const [userIP, setUserIP] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const { mutate } = api.example.saveLead.useMutation();
  const router = useRouter();
  const utmParams = useSearchParams();
  const utmTags = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];
  const sckValues = utmTags.reduce((acc, curr) => {
    if (utmParams.get(curr)) {
      acc = acc + (utmParams.get(curr) || "") + "-";
    }
    return acc;
  }, "");
  console.log(sckValues.slice(0, sckValues.length - 1));

  // useEffect(() => {
  //   setVersion(!versionParam ? "" : versionParam);
  //   console.log(version);
  // }, [versionParam]);
  type ApiResponse = {
    message: string;
    locationInfo: string;
    userAgent: string;
    // other properties
  };

  useEffect(() => {
    void fetch("https://pv1.lactoflow.com.br/api/get-ip", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setUserIP(data.message);
        setUserLocation(data.locationInfo);
        setUserAgent(data.userAgent);
      });
  }, []);

  useEffect(() => {
    router.push("https://prog.lactoflow.com.br/promo-25-05");
  }, [router]);

  // console.log(version);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(option: string) {
    setCta(option);
    console.log(cta);
    setIsOpen(true);
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    console.log(formatPhoneNumber(value || ""));
    console.log(router.asPath);

    mutate({
      ctaOption: cta,
      url: router.asPath,
      name,
      email,
      phoneNumber: value?.toString() || "",
      location: userLocation,
      ip: userIP,
      agent: userAgent,
    });
    setTimeout(() => {
      router.push(
        `https://pay.hotmart.com/O84147403X?off=w49bayjs&checkoutMode=10&email=${email}&phoneac=${
          formatPhoneNumber(value ?? "") || ""
          // value
        }&name=${name}&sck=${sckValues}&${utmParams.toString()}`
      );
    }, 1200);
    // window.open(
    //   `https://pay.hotmart.com/O84147403X?checkoutMode=10&email=${email}&phoneac=${
    //     formatPhoneNumber(value ?? "") || ""
    //     // value
    //   }&name=${name}&${utmParams.toString()}`
    // );
  }

  // useEffect(() => {
  //   const fetchIP = async () => {
  //     try {
  //       const response = await fetch('/api/getIP');
  //       const data = await response.json();
  //       setUserIP(data.message);
  //     } catch (error) {
  //       console.error('Error fetching IP:', error);
  //     }
  //   };

  //   fetchIP();
  // }, []);

  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>LactoFlow®️</title>
        <meta
          name="description"
          content="Método para aumentar a produção de leite materno"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        id="hotmart_launcher_script"
        dangerouslySetInnerHTML={{
          __html: `(function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){
			(l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),
			e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)
			})(window,document,'script','//launcher.hotmart.com/launcher.js','hot');

			hot('account','32aba353-3c4c-3d94-9d63-eb652a9ca8ee');`,
        }}
      />

      <div className="flex flex-col items-center justify-center bg-blue py-2 text-cream sm:py-4">
        <div className="w-[180px] sm:w-[300px]">
          <Image
            src="/logo-portrait-v2.svg"
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
        <h1 className="mb-[14.4px] mt-6 px-4 text-center text-[18px] font-extrabold uppercase leading-[29px] tracking-[-25] text-cream sm:w-2/3 sm:px-0 sm:text-[24px] sm:leading-[36px]">
          Aprenda como{" "}
          <span className="text-[25px] text-red-400 sm:text-[35px]">
            aumentar a sua produção
          </span>{" "}
          de leite e ofereça o{" "}
          <span className="text-[25px] text-green sm:text-[35px]">
            melhor alimento do mundo
          </span>{" "}
          ao seu bebê.
        </h1>

        <p className="mx-auto w-[80%] max-w-[600px] text-center text-[16.67px] font-bold leading-[22.9px] tracking-[-25] sm:mt-7 sm:px-2 lg:mt-5 lg:text-[18.75px]">
          Assista a essa aula gratuita e comece a aumentar a sua produção de
          leite HOJE MESMO
        </p>
        <div className="flex  flex-col items-center lg:flex-row">
          <div className="flex items-center">
            <div className="m-2">
              <Image
                className="ml-2 animate-bounce"
                src="/arrow-down.svg"
                alt="one"
                height={36}
                width={36}
              />
            </div>
          </div>

          {/* <div className="mx-auto grid grid-cols-2 gap-3 px-2 uppercase text-green lg:grid-cols-1">
            <div className="mt-1 flex items-center gap-x-2 lg:mt-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-green">
                <span className="text-2xl text-cream ">1</span>
              </div>
              <p className="text-[15.67px] font-medium leading-[22.9px] tracking-[-25] lg:text-[16.75px]">
                Meia Velha
              </p>
            </div>
            <div className=" flex items-center gap-x-2 lg:mt-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-green">
                <span className="text-2xl text-cream">2</span>
              </div>
              <p className="text-[15.67px] font-medium leading-[22.9px] tracking-[-25] lg:text-[16.75px]">
                Distração
              </p>
            </div>
            <div className=" flex items-center gap-x-2 lg:mt-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-green">
                <span className="text-2xl text-cream">3</span>
              </div>
              <p className="text-[15.67px] font-medium leading-[22.9px] tracking-[-25] lg:text-[16.75px]">
                5-5
              </p>
            </div>
            <div className=" flex items-center gap-x-2 lg:mt-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-green">
                <span className="text-2xl text-cream">4</span>
              </div>
              <p className="text-[15.67px] font-medium leading-[22.9px] tracking-[-25] lg:text-[16.75px]">
                20-max
              </p>
            </div>
          </div> */}
        </div>
        {/* <iframe className="w-full aspect-video rounded-md mt-8 mx-auto max-w-[22rem] lg:max-w-[53.25rem]" src="https://youtube.com/embed/IVKkQA9p7go"></iframe> */}
        <div
          data-umami-event="Watch Video"
          className="mx-auto mb-4 aspect-video w-full lg:max-w-[53.25rem]"
        >
          <LiteYouTubeEmbed
            data-umami-event="Watch Video"
            id="eXp3-bclWPs"
            title="Método LactoFlow®️"
            poster="maxresdefault"
          />
        </div>

        {/* <Image alt="checklist" src={"/checklist.png"} height={762} width={623}></Image> */}

        {/* <section>

<h1 className="font-extrabold text-[25px] lg:text-[31.25px] text-center mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px] ">
Explicação do método
</h1>
</section> */}
        <CTA ctaOption="1" openModal={openModal} />
        <Depos />
        <CTA
          ctaOption="2"
          openModal={openModal}
          label="Você também pode aumentar a sua produção"
          price
        />
        <Furadeira />

        <Bonus />
        <CTA
          ctaOption="3"
          openModal={openModal}
          label="Tenha acesso a tudo isso agora"
          price
        />
        <About />
        <Faq />
        <CTA
          ctaOption="4"
          openModal={openModal}
          label="Quero aumentar minha produção de leite"
          price
        />
        <Footer>
          <div className="flex flex-col text-center sm:flex-row sm:text-left">
            <span>Copyright © {new Date().getFullYear()}</span>
            <span className="mx-3 hidden sm:block">|</span>
            <span>Todos os direitos reservados.</span>
          </div>
        </Footer>
        {/* <div className="mx-auto max-w-[19.875rem] lg:max-w-[53.25rem] ">
              <div className="w-full border-2 border-[#4E859E] bg-[#EDF4FA] lg:bg-[#EDF4FA] rounded-lg flex gap-x-4 py-9 lg:py-6 px-3 mt-10 items-center justify-center"><div className="relative w-[32px] h-[30px]"><span><img alt="" src="https://vendatodosantodia.com.br//imgPg/icon-alert-blue.svg?auto=format&amp;fit=max&amp;w=3840" decoding="async" data-nimg="fill"  loading="lazy"/></span></div><p className="text-[16.17px] text-[#4E859E] font-regular max-w-[80%]">Com o Appbumper é mais fácil fazer o que tem que ser feito e do jeito que tem que ser feito. É quase impossível errar e você nunca fica perdido, sem saber o que fazer.</p>
              </div>
          </div> */}
        {/* <CTA openModal={openModal} price /> */}
        <div className=" fixed bottom-5 right-5 cursor-pointer">
          <div className="relative h-[60px] w-[60px]">
            <a
              target="_blank"
              href="https://wa.me/5521978001294?text=Oi%2C+tudo+bem%3F+Eu+tenho+uma+pergunta+sobre+o+curso+LactoFlow."
            >
              <span>
                <Image
                  width={60}
                  height={60}
                  alt="whats logo"
                  src="/whatsapp-logo.svg"
                  decoding="async"
                  data-nimg="fill"
                />
              </span>
            </a>
          </div>
        </div>
        <div className="">
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
                    <Dialog.Panel className="bg-white mt-4 w-full max-w-md transform overflow-hidden rounded-2xl bg-green p-6 text-left align-middle shadow-xl transition-all">
                      <span
                        className="absolute right-5 top-3 cursor-pointer font-extrabold text-blue"
                        onClick={closeModal}
                      >
                        ✖
                      </span>
                      <Dialog.Title
                        as="h3"
                        className="text-2xl leading-6 text-blue"
                      >
                        Preencha esse formulário e entre para o LactoFlow
                      </Dialog.Title>
                      <div className="mt-2">
                        <form
                          id="lead-pv-lf"
                          onSubmit={(e) => handleSubmit(e)}
                          className="flex flex-col text-blue"
                        >
                          <label htmlFor="celular">Nome</label>
                          <input
                            className="pl-2 dark:bg-cream"
                            id="lead-name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome"
                          />
                          <label htmlFor="celular">Email</label>
                          <input
                            className="pl-2 dark:bg-cream"
                            type="text"
                            name="email"
                            id="lead-email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="maeincrivel@email.com"
                          />
                          <label htmlFor="celular">Celular</label>
                          <PhoneInput
                            className="bg-cream"
                            id="lead-phone"
                            type="phone"
                            required
                            labels={ptBR}
                            flags={flags}
                            value={value}
                            defaultCountry="BR"
                            onChange={setValue}
                          />
                          {/* <a
                          target="_blank"
                          href={`https://pay.hotmart.com/O84147403X?email=${email}&phoneac=${
                            formatPhoneNumber(value ?? "") || ""
                          }&name=${name}&${utmParams.toString()}`}
                          > */}
                          <button
                            type="submit"
                            className="mx-auto mt-4 w-full rounded-lg border-b-4 border-b-[#236C0F] bg-[#40C351] px-2 py-3 text-[13.6px] font-extrabold uppercase text-cream hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:py-5 lg:text-[22.6px]"
                          >
                            {loading
                              ? "Enviando..."
                              : "Quero aumentar minha produção de leite"}
                          </button>
                        </form>
                        {/* </a> */}
                        <h3 className="text-center text-base text-blue">
                          SEUS DADOS ESTÃO SEGUROS
                        </h3>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  );
}
type Repo = {
  name: string;
  stargazers_count: number;
};

// export const getServerSideProps = (async () => {
//   // Fetch data from external API
//   const github = await fetch("https://api.github.com/repos/vercel/next.js");
//   const repo: Repo = await github.json();
//   console.log(repo);

//   // Pass data to the page via props
//   return { props: { repo } };
// }) satisfies GetServerSideProps<{ repo: Repo }>;
