import { type NextPage } from "next";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ptBR from "react-phone-number-input/locale/pt-BR.json";
import flags from "react-phone-number-input/flags";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { api } from "@/utils/api";
import CTA from "@/pages/components/cta";
import { useRouter } from "next/router";

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

  function handleSubmit() {
    console.log(value);
    console.log(router.asPath);

    mutate({
      ctaOption: cta,
      url: router.asPath,
      name,
      email,
      phoneNumber: value?.toString() || "",
      location: userIP,
    });
  }
  const router = useRouter();
  const ytUrlOptions: Record<string, string> = {
    saciedade: "H6iB3jTKPW8",
    "baixa-producao": "L9IrS6AY2DY",

    // Add other possible keys and values as needed
  };

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
    void fetch("/api/get-ip")
      .then((res) => res.json())
      .then((data: ApiResponse) => {
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
                  <Dialog.Panel className="bg-white mt-16 w-full max-w-md transform overflow-hidden rounded-2xl bg-green p-6 text-left align-middle shadow-xl transition-all">
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
                      <form className="mb-8  flex flex-col text-blue">
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="maeincrivel@email.com"
                        />
                        <label htmlFor="celular">Celular</label>
                        <PhoneInput
                          className="bg-cream"
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
                        }&name=${name}`}
                      >
                        <button
                          onClick={handleSubmit}
                          className="mx-auto rounded-lg border-b-4 border-b-[#236C0F] bg-[#40C351] px-2 py-3 text-[13.6px] font-extrabold uppercase text-cream hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:py-5 lg:text-[22.6px]"
                        >
                          Quero aumentar minha produção de leite
                        </button>
                      </a>
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
      {userIP}
    </div>
  );
}