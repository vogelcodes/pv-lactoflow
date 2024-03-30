import { type NextPage } from "next";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import "react-phone-number-input/style.css";
import PhoneInput, { formatPhoneNumber } from "react-phone-number-input";
import ptBR from "react-phone-number-input/locale/pt-BR.json";
import flags from "react-phone-number-input/flags";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { api } from "@/utils/api";
import CTA from "@/components/cta";
import { useRouter } from "next/router";
import Furadeira from "../../components/furadeira-completa";
import Bonus from "../../components/bonus";
import About from "../../components/about";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import Depos from "../../components/depos";

export default function Page() {
  type E164Number = string | undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [cta, setCta] = useState("");
  const [value, setValue] = useState<E164Number | undefined>();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userIP, setUserIP] = useState("");
  const { mutate } = api.example.saveLead.useMutation();

  function openModal(option: string) {
    setCta(option);
    console.log(cta);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formatPhoneNumber(value || ""));
    console.log(router.asPath);

    mutate({
      ctaOption: cta,
      url: router.asPath,
      name,
      email,
      phoneNumber: value?.toString() || "",
      location: userIP,
    });
    window.open(
      `https://pay.hotmart.com/O84147403X?email=${email}&phoneac=${
        formatPhoneNumber(value ?? "") || ""
        // value
      }&name=${name}&${utmParams.toString()}`
    );
  }
  const router = useRouter();
  const ytUrlOptions: Record<string, string> = {
    saciedade: "H6iB3jTKPW8",
    "baixa-producao": "L9IrS6AY2DY",
    oferta: "WKjycIVnNsE",

    // Add other possible keys and values as needed
  };
  const utmParams = useSearchParams();

  const aula = router.query.aula?.toString() || "saciedade";
  const ytUrl = ytUrlOptions[aula] || "";
  if (ytUrl == "") {
    void router.push("/");
  }
  type ApiResponse = {
    message: string;
    locationInfo: string;
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
        console.log(data);
        setUserIP(data.locationInfo);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-blue py-2 text-cream sm:py-4">
      <div className="flex items-center gap-2">
        <div className="w-[180px] sm:w-[120px]">
          <Image
            src="/logo-portrait-v2.svg"
            alt="logo"
            width={300}
            height={120}
          />
        </div>
        <p>Aula gratuita do método LactoFlow</p>
      </div>

      <div className="flex  flex-col items-center lg:flex-row">
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
        className="mx-auto mb-8 aspect-video w-full lg:max-w-[53.25rem]"
      >
        <LiteYouTubeEmbed
          id={ytUrl}
          title="Método LactoFlow®️"
          poster="maxresdefault"
        />
      </div>
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

      <CTA ctaOption="1" openModal={openModal} />
      <Depos />

      <Furadeira />

      <Bonus />
      <CTA
        ctaOption="2"
        openModal={openModal}
        label="Tenha acesso a tudo isso agora"
        price
      />
      <About />
      <Faq />
      <CTA
        ctaOption="3"
        openModal={openModal}
        label="Quero aumentar minha produção de leite"
        price
      />
      <Footer>
        <div className="flex flex-col text-center sm:flex-row sm:text-left">
          <span>Copyright © 2023</span>
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
            href="https://wa.me/5521986388688?text=Oi%2C+tudo+bem%3F+Eu+tenho+uma+pergunta+sobre+o+curso+LactoFlow."
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
                        onSubmit={(e) => handleSubmit(e)}
                        className="flex flex-col text-blue"
                      >
                        <label htmlFor="celular">Nome</label>
                        <input
                          className="pl-2 dark:bg-cream"
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
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="maeincrivel@email.com"
                        />
                        <label htmlFor="celular">Celular</label>
                        <PhoneInput
                          className="bg-cream"
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
                          className="mx-auto mt-4 rounded-lg border-b-4 border-b-[#236C0F] bg-[#40C351] px-2 py-3 text-[13.6px] font-extrabold uppercase text-cream hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:py-5 lg:text-[22.6px]"
                        >
                          Quero aumentar minha produção de leite
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
  );
}
