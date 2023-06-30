import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { api } from "@/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
          <h1 className="sm:w-1/2 font-extrabold text-cream text-[25px] lg:text-[31.25px] text-center mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px]">
            Aprenda como aumentar a sua produção de leite e ofereça o melhor alimento do mundo ao seu bebê.
          </h1>
          <p className="mt-7 lg:mt-5 font-bold text-[16.67px] lg:text-[18.75px] leading-[22.9px] tracking-[-25] text-center">
            Nesse vídeo eu te ensino como aumentar a sua produção de leite hoje mesmo.</p>
          <p className="mt-7 lg:mt-5 font-bold text-[16.67px] lg:text-[18.75px] leading-[22.9px] tracking-[-25] text-center">
            E mais:</p>
            <div className="mx-2">
            <div className="flex items-center gap-x-4 mt-6 lg:mt-4">
              <div><div className="relative w-[36px] h-[36px] ">
                <Image src="/1.svg" alt="One" height={36} width={36} />
              </div></div>
              <p className="font-medium text-[15.67px] lg:text-[16.75px] leading-[22.9px] tracking-[-25]">
                Como fazer uma ordenha manual?</p>
            </div>
            <div className="flex items-center gap-x-4 mt-6 lg:mt-4">
              <div><div className="relative w-[36px] h-[36px] ">
              <Image src="/2.svg" alt="two" height={36} width={36} />
              </div></div>
              <p className="font-medium text-[15.67px] lg:text-[16.75px] leading-[22.9px] tracking-[-25]">
                Quais os benefícios da amamentação?</p>
            </div>
            <div className="flex items-center gap-x-4 mt-6 lg:mt-4">
              <div><div className="relative w-[36px] h-[36px] ">
              <Image src="/3.svg" alt="three" height={36} width={36} />
              </div></div>
              <p className="font-medium text-[15.67px] lg:text-[16.75px] leading-[22.9px] tracking-[-25]">
                As melhores técnicas para aumentar sua coleta de leite</p>
            </div>
            </div>
            <iframe className="w-full aspect-video rounded-md mt-8 mx-auto max-w-[22rem] lg:max-w-[53.25rem]" src="https://www.youtube.com/embed/EdrQPJZ77vY"></iframe>
            <div className="mx-auto max-w-[19.875rem] lg:max-w-[53.25rem] ">
              <div className="mt-5 w-full text-center">
                <a href="https://instagram.com/carolina.procaci">
                <button className="hover:scale-[104%] w-auto rounded-lg border-b-4 border-b-[#236C0F] bg-[#46B21E] py-3 text-[13.6px] font-extrabold uppercase text-white hover:border-b-[#44972d] hover:bg-[#236C0F] px-2 lg:py-5 lg:text-[22.6px]">
                  Quero aumentar minha <br/> produção de leite</button>

                </a>
                <Image className="mx-auto bg-cream h-10 px-4" alt="Meios de Pagamento" src="/pagamentos.svg" width={340} height={20} ></Image>
              </div>
            </div>
                  

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
