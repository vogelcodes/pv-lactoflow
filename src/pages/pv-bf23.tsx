import { type NextPage } from "next";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
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
import CTABF from "./components/cta-bf";
import About from "./components/about";
import Furadeira from "./components/furadeira";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Bonus from "./components/bonus";
import Hotjar from "./components/tags/hotjar";
import Header1 from "./components/h1";
import CountdownReact from "./components/countdown";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  type E164Number = string | undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<E164Number | undefined>();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { mutate } = api.example.saveLead.useMutation();
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function handleSubmit() {
    console.log(value);

    mutate({       url: router.asPath,
      name, email, phoneNumber: value?.toString() || "" });
  }

  const date = new Date(Date.now())
  const lcto = new Date('2023-11-20T12:00:00.000Z')
  console.log(date,lcto)

  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  // return (
  //   <header className="sticky top-0 z-10 flex h-[3.5rem] w-full items-center border-b-[1px] border-solid border-[#18191A] bg-[#020202] md:h-[5.0625rem]">
  //     <div className="mx-auto flex w-full items-center justify-center gap-4 lg:max-w-[80rem] lg:px-4 xl:px-0 ">
  //       <div className="w-[8rem] md:w-[16rem]">
  //         <Image src="/logo-portrait-v2.svg" alt="logo" width={250} height={120} />
  //       </div>
  //     </div>
  //   </header>
  // );
  
    return (
      <>
      <Head>
        <title>Black Friday-LactoFlow®️</title>
        <meta
          name="description"
          content="40%OFF Método para aumentar a produção de leite materno"
          media=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hotjar />
      <header className="sticky top-0 z-10 flex h-[3.5rem] w-full items-center border-b-[1px] border-solid border-[#18191A] bg-[#020202] md:h-[5.0625rem]">
        <div className="mx-auto flex w-full items-center justify-between gap-4 lg:max-w-[80rem] lg:justify-start lg:px-4 xl:px-0 ">
          <div className="w-[8rem] md:w-[16rem]">
            <Image
              src="/logo-portrait-v2.svg"
              alt="logo"
              width={250}
              height={120}
            />
          </div>
          <CountdownReact />
        </div>
      </header>
      <div className="bg-slate w-full text-xl">
        <div className="mx-auto flex w-full max-w-[80rem] flex-col items-center xl:px-0">
          <div className="flex flex-col items-center justify-center gap-[1.75rem] pb-4 pt-2 lg:items-start lg:gap-0 lg:pt-[3.5rem]">
            <div className="flex w-full max-w-[60rem] flex-col items-center justify-center text-slate-100">
              <h1 className="text-center text-[2rem] px-4 font-extrabold leading-9 text-cream sm:text-[3rem] md:w-[70%] lg:text-[3.5rem] lg:leading-[3.5rem]">
                Sua amamentação da
                <span
                  className="text-green
                  "
                >
                  {" "}
                  gestação ao desmame
                </span>{" "}
                em um
                <span className="text-red-400"> único curso</span>
              </h1>
              <div className="flex flex-col items-center justify-center gap-2 py-2 lg:flex-row">
                <div className="w-[18rem] rounded-md bg-cream  p-2 text-slate-700">
                  <h2 className="pb-4 text-center">Preço Normal</h2>

                  <ul className="flex flex-col gap-2 text-sm">
                    <li className="text-slate-700">
                      <div className="flex justify-between">
                        LactoFlow®️{" "}
                        <span className="w-[3.75rem] text-left">R$497</span>
                      </div>
                    </li>
                    <li className="text-slate-600">
                      <div className="flex justify-between">
                        Workshops ao vivo:{" "}
                        <span className="w-[3.75rem] text-left text-slate-600"></span>
                      </div>
                    </li>
                    <li className="pl-2 text-slate-600">
                      <div className="flex justify-between">
                        A Amamentação
                        <br /> começa na Gestação
                        <span className="w-[3.75rem] text-left text-slate-600">
                          R$200
                        </span>
                      </div>
                    </li>
                    <li className="pl-2 text-slate-600">
                      <div className="flex justify-between">
                        Como fica o mamá,
                        <br /> depois do papá
                        <span className="w-[3.75rem] text-left text-slate-600">
                          R$200
                        </span>
                      </div>
                    </li>
                    <li className="pl-2 text-slate-600">
                      <div className="flex justify-between">
                        Toda Amamentação
                        <br /> tem seu fim{" "}
                        <span className="w-[3.75rem] text-left text-slate-600">
                          R$200
                        </span>
                      </div>
                    </li>
                    <hr className="mx-auto border-dashed border-stone-800 px-28" />
                    <li className="text-slate-700">
                      <div className="flex justify-center">
                        Acesso por 2 anos
                      </div>
                    </li>
                    <hr className="mx-auto border-dashed border-stone-800 px-28" />

                    <li className="pt-4">
                      <div className="flex justify-center pb-2">
                      <div className="flex items-center">
            <div className="m-2 lg:-rotate-90">
              <Image
                className="ml-2 animate-bounce"
                src="/arrow-down.svg"
                alt="one"
                height={36}
                width={36}
              />
            </div>
          </div><span className="text-2xl line-through">R$1.097,00</span><div className="flex items-center">
            <div className="m-2 lg:-rotate-90">
              <Image
                className="ml-2 animate-bounce"
                src="/arrow-down.svg"
                alt="one"
                height={36}
                width={36}
              />
            </div>
          </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-[18rem] rounded-md bg-stone-900  p-2 text-slate-50">
                  <h2 className="pb-4 text-center">
                    Oferta <span className="text-[#4dca64]">Black Friday</span>
                  </h2>

                  <ul className="flex flex-col gap-2 text-sm">
                    <li className="text-slate-50">
                      <div className="flex items-center justify-between">
                        LactoFlow®️{" "}
                      <div className="flex items-center"><span className="w-[3.75rem] text-left text-slate-400 line-through">R$497</span><span className="w-[3.75rem] text-[#4dca64] text-xl text-left">R$298</span></div>
                      </div>
                    </li>
                    <li className="text-slate-50">
                      <div className="flex justify-between">
                        Workshops ao vivo:{" "}
                        <span className="w-[3.75rem] text-left text-slate-400 line-through"></span>
                      </div>
                    </li>
                    <li className="pl-2 text-slate-50">
                      <div className="flex justify-between">
                        A Amamentação
                        <br /> começa na Gestação
                        <span className="w-[3.75rem] text-left text-slate-400 line-through">
                          R$200
                        </span>
                      </div>
                    </li>
                    <li className="pl-2 text-slate-50">
                      <div className="flex justify-between">
                        Como fica o mamá
                        <br /> depois do papá
                        <span className="w-[3.75rem] text-left text-slate-400 line-through">
                          R$200
                        </span>
                      </div>
                    </li>
                    <li className="pl-2 text-slate-50">
                      <div className="flex justify-between">
                        Toda Amamentação
                        <br /> tem seu fim
                        <span className="w-[3.75rem] text-left text-slate-400 line-through">
                          R$200
                        </span>
                      </div>
                    </li>
                    <hr className="mx-auto border-dashed px-28" />

                    <li className="text-slate-50">
                      <div className="flex justify-center text-lg">
                        Acesso Vitalício
                      </div>
                    </li>
                    <hr className="mx-auto border-dashed px-28" />
                    <li className="pt-4">
                      <div className="flex justify-center pb-2">
                        <span className="text-2xl text-[#4dca64]">R$298</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          <CTABF
            openModal={openModal}
            label="Quero aumentar minha produção de leite"
            price
            />
          </div>
          <div className="card bg-cream text-blue shadow-lg lg:w-full lg:max-w-[60rem]">
            <div className="card-body text-base lg:text-lg">
              <h1 className="pt-3 text-left text-[18px] font-extrabold leading-[29.17px] tracking-[-25] lg:text-[31.25px]">
                LactoFlow®️
              </h1>
              <hr />
              <p>
                Método comprovado para aumento de produção de leite com mais de
                200 alunas, incluindo todo o conhecimento necessário para não
                cair nas armadilhas do desmame precoce.
              </p>
              <div className='mx-auto '>
                      <Image
                          className=''
                          alt='metodo'
                          src={'/furadeira/furadeira-crop.webp'}
                          width={600}
                          height={600}
                          />
                          </div>

              <h1 className="pt-3  text-left text-[18px] font-extrabold leading-[29.17px] tracking-[-25] lg:text-[31.25px]">
                Workshop - A Amamentação começa na Gestação
              </h1>
              <hr />
              <p className="">
                Amamentar <span className="uppercase underline underline-offset-4 decoration-dashed">não é intuitivo</span>, apesar de ser natural. A falta de
                informações corretas sobre a amamentação é a principal causa de:
              </p>
              <ul className="list-disc py-2 pl-6">
                <li>dor e fissuras no momento da mamada;</li>
                <li>baixa produção de leite;</li>
                <li>desmame precoce.</li>
              </ul>
              <h1 className="pt-3  text-left text-[18px] font-extrabold leading-[29.17px] tracking-[-25] lg:text-[31.25px]">
                Workshop - Como fica o mamá depois do papá
              </h1>
              <hr />
              <p>
                Há menos de 1 mês a OMS liberou o novo guia de Introdução
                Alimentar para crianças entre 6 a 23 meses. E no Workshop
                Introdução Alimentar eu vou te mostrar quais são as mais
                recentes e atualizadas orientações para essa fase e também te
                mostrar o que muda na sua amamentação depois da introdução de
                alimentos na rotina do bebê.
              </p>
              <div className='mx-auto '>
                      <Image
                          className=''
                          alt='metodo'
                          src={'/intro-alimentar.webp'}
                          width={600}
                          height={600}
                          />
                          </div>
              <h1 className="pt-3  text-left text-[18px] font-extrabold leading-[29.17px] tracking-[-25] lg:text-[31.25px]">
                Workshop - Toda Amamentação tem seu fim
              </h1>
              <hr />
              <p>
                É normal chegar em um momento em que a amamentação se torna
                pesada e a gente se pega frequentemente pensando em um desmame.
                Ao mesmo tempo, diversas vezes nos arrependemos de desejarmos
                isso. Afinal, lutamos tanto para que nossos filhos pudessem ser
                amamentados! E, olha, se esse momento ainda não chegou pra você…
                Calma que provavelmente ele ainda vai chegar.
              </p>
              <p>
              A livre demanda
                não precisa ser pra sempre e existe um meio do caminho para
                reencontrar o prazer em amamentar. Existem estratégias para você
                achar um respiro e assim até decidir amamentar um pouco mais
                (quem sabe?).
                
              </p>
              <p>No Workshop Desmame Gentil eu vou te ensinar o passo a passo para
              que você consiga:</p>
              <ul className="flex list-disc flex-col gap-2 py-2 pl-6">
                <li>
                  Sair da livre demanda sem enlouquecer e regular as mamadas do
                  dia;
                </li>
                <li>
                  Conduzir um desmame noturno de uma forma lúdica e cheia de
                  acolhimento;
                </li>
                <li>
                  Encerrar a sua amamentação de uma forma leve e com lembranças
                  positivas (para você e para o seu bebê).
                </li>
              </ul>
              
              <p>
                Toda história de amamentação tem seu fim e esse fim não precisar
                ser negando o peito com o seu bebê chorando desesperado querendo
                mamar e nem mentindo para ele ao colocar band-aids dizendo que o
                mamá está machucado… Você e seu bebê merecem um fim respeitoso e
                gentil para esse vínculo tão incrível que é a amamentação.
              </p>
            </div>
          </div>
          <section className="my-2">
          <h1 className="mb-[14.4px] mt-6 px-4 text-cream text-center text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
            Depoimento das alunas que seguiram o método LactoFlow®️:
          </h1>
          <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="w-[340px]">
          <LiteYouTubeEmbed
              id="PzxmWmJLjz8"
              title="Método LactoFlow®️"
              poster="maxresdefault"
              thumbnail="/depoimentos/depo-priscila.webp"
              aspectHeight={500}
              aspectWidth={280}
            />

                </div>
          <div className="w-[340px]">
          <LiteYouTubeEmbed
              id="HC6maLeH-iM"
              title="Método LactoFlow®️"
              poster="maxresdefault"
              thumbnail="/depoimentos/depo-raquel.webp"
              aspectHeight={500}
              aspectWidth={280}
            />

                </div>
            {[1, 2].map((number) => {
              return (
                <div className="" key={number}>
                  <Image
                    className="mx-auto rounded-xl"
                    key={number}
                    width={340}
                    height={500}
                    src={`/depoimentos/metodo/${number}.jpg`}
                    alt="depoimento"
                  />
                </div>
              );
            })}
            {[ 3, 4, 5, 6].map((number) => {
              return (
                <div className="" key={number}>
                  <Image
                    className="mx-auto rounded-xl"
                    key={number}
                    width={340}
                    height={500}
                    src={`/depoimentos/metodo/${number}.jpg`}
                    alt="depoimento"
                  />
                </div>
              );
            })}
          </div>
        </section>

          <CTABF
            openModal={openModal}
            label="Quero aumentar minha produção de leite"
            price
            />
            <div className="h-2"></div>
          <Bonus/>
          <Faq />
          <About/>
          <CTABF
            openModal={openModal}
            label="Quero aumentar minha produção de leite"
            price
            />

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
                    <Dialog.Panel className="mt-16 w-full max-w-md transform overflow-hidden rounded-2xl bg-green p-6 text-left align-middle shadow-xl transition-all">
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
                            name="email"
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
                          href={`https://pay.hotmart.com/O84147403X?off=cyafh50d?email=${email}&phoneac=${
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
        <Footer>          <div className="flex items-center justify-center flex-col sm:flex-row text-center">
            <span>Copyright © 2023</span><span className="hidden sm:block mx-3">|</span><span>Todos os direitos reservados.</span>
          </div>
</Footer>
      </div>
    </>
  );
                        
return <>      <Head>
<title>Black Friday-LactoFlow®️</title>
<meta
  name="description"
  content="Método para aumentar a produção de leite materno"
/>
<link rel="icon" href="/favicon.ico" />
</Head>
</>
  
};

export default Home;
