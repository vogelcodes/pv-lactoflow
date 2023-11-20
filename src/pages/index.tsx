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
import { useRouter } from "next/navigation";

export const getServerSideProps = ( () => {
  const date = new Date(Date.now())
  return { props: { date: date.getTime() } }
})

const Home = (props: {date: number}) => {
  type E164Number = string | undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<E164Number | undefined>();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { mutate } = api.example.saveLead.useMutation();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function handleSubmit() {
    console.log(value);

    mutate({ name, email, phoneNumber: value?.toString() || "" });
  }
  const router = useRouter();

  const date = new Date(props.date)
  const lcto = new Date('2023-11-20T12:00:00.000Z')
  console.log(date,lcto)
  useEffect(() => {
    if ((date < lcto)){
      
      router.push("captura");
    } else {
      router.push("/pv-bf23")
    }
    
  }, []);

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
  if (date > lcto) {

  
    return (
    <>
    </>
  );
                        }
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
