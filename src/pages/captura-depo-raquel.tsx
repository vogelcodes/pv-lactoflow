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
import PreCountdownReact from "./components/preCountdown";
import { useRouter, usePathname } from "next/navigation";
import { useRouter as oldRouter } from "next/router";


import Link from "next/link";
import { type FormEvent } from "react";

const Home: NextPage = () => {
  type E164Number = string | undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<E164Number | undefined>();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cta, setCta] = useState("");
  const { mutate } = api.example.saveLead.useMutation();
  const router = useRouter();
  const pathRouter = oldRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);

    mutate({
      tag: 'depo-raquel',
      ctaOption: cta,
      url: pathRouter.asPath,
      name,
      email,
      phoneNumber: value?.toString() || "",
    });

    router.push("/obrigado");
  }

  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Black Friday-LactoFlow®️</title>
        <meta
          name="description"
          content="Oferta Black Friday - LactoFlow"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hotjar />
      <header className="sticky top-0 z-10 flex h-[3.5rem] w-full items-center border-b-[1px] border-solid border-[#18191A] bg-[#020202] md:h-[5.0625rem]">
        <div className="mx-auto flex w-full items-center justify-center gap-4 lg:max-w-[80rem] lg:px-4 xl:px-0 ">
          <div className="w-[8rem] md:w-[13rem]">
            <Image
              src="/logo-portrait-v2.svg"
              alt="logo"
              width={250}
              height={120}
            />
          </div>
          <PreCountdownReact />
        </div>
      </header>
      <div className="bg-slate w-full text-xl">
        <div className="mx-auto flex w-full max-w-[80rem] flex-col items-center justify-center px-1 md:flex-row xl:px-0">
          <div className="flex flex-col items-center justify-center gap-[1.75rem] pb-2 lg:flex-row lg:items-center lg:gap-0 lg:pt-[3.5rem]">
            <div className="flex w-full max-w-[50rem] flex-col items-center justify-center gap-2 text-slate-100">
              <div className="text-cream">
                <h1 className="text-center text-[1.5rem] font-bold leading-9 text-cream sm:text-[3rem] lg:text-[3.5rem] lg:leading-[3.5rem]">
                  A Raquel conseguiu
                  <br /> extrair{" "}
                  <span
                    className="uppercase text-green
                    "
                  >
                    800ml por dia
                  </span>
                  <br /> para alimentar seu bebê no
                  <span className="uppercase text-[1.5rem] text-red-400 sm:text-[3rem]">
                    {" "}
                    Hospital
                  </span>
                </h1>
                {/* <div className="flex w-full justify-center">

                          <Image
                              src="/bf-cc-2.webp"
                              alt="logo"
                              width={250}
                              height={120}
                              />
                              </div> */}
                <div className="flex flex-col sm:gap-4 items-center">
                <div className="mx-auto my-8 aspect-video w-full lg:max-w-[53.25rem]">
            <LiteYouTubeEmbed
              id="dWVVfW8e4f0"
              title="Método LactoFlow®️"
              poster="maxresdefault"
            />
          </div>

                <div>
                <p className="pt-2 text-center text-balance">
                  Emergências acontecem, faça seu estoque de leite.<br/> Aproveite nossa promoção de Black Friday:
                </p>
                <div className="mx-auto mt-2 flex w-[95%] max-w-[420px] flex-col items-center rounded-md bg-green p-2">
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="flex w-full flex-col gap-1  p-2 text-blue md:w-[25rem]"
                  >
                    <label htmlFor="celular">Nome</label>
                    <input
                      className="rounded-md bg-neutral-50 pl-2"
                      type="text"
                      name="name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nome"
                    />
                    <label htmlFor="celular">Email</label>
                    <input
                      className="rounded-md bg-neutral-50 pl-2"
                      type="text"
                      name="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="maeincrivel@email.com"
                    />
                    <label htmlFor="celular">Celular</label>
                    <PhoneInput
                      className="rounded-md bg-neutral-50 dark:text-cream"
                      labels={ptBR}
                      flags={flags}
                      value={value}
                      defaultCountry="BR"
                      onChange={setValue}
                      placeholder="(11)11111-1111"
                    />

                    <button
                      type="submit"
                      className="mx-auto mt-4 w-full rounded-lg border-b-4 border-b-[#236C0F] bg-[#40C351] px-2 py-2 text-[13.6px] font-extrabold uppercase text-cream hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:py-5 lg:text-[22.6px]"
                    >
                      Quero Participar
                    </button>
                  </form>
                  <h3 className="w-full text-center text-sm text-blue">
                    SEUS DADOS ESTÃO SEGUROS
                  </h3>
                </div>
                </div></div>
              </div>
            </div>
            {/* <div className="h-full">

            <Image width={300} height={0} alt="Carolina Procaci" className="rounded-md h-full" src={"/carol.webp"}/>
            </div> */}
          </div>
        </div>
        <Footer>          <div className="flex items-center justify-center flex-col sm:flex-row text-center">
            <span>Copyright © 2023</span><span className="hidden sm:block mx-3">|</span><span>Todos os direitos reservados.</span>
          </div>
</Footer>
      </div>
    </>
  );
};

export default Home;
