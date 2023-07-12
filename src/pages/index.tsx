import { type NextPage } from "next";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ptBR from 'react-phone-number-input/locale/pt-BR.json'
import flags from 'react-phone-number-input/flags'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { api } from "@/utils/api";
import CTA from "./components/cta";



const Home: NextPage = () => {
  type E164Number = string | undefined;

  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<E164Number | undefined>()
  const [email, setEmail] = useState("")
  const { mutate } = api.example.saveLead.useMutation()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  function handleSubmit() {
    console.log(value)
    
    mutate({email, phoneNumber: value?.toString() || ""})
    
  }

  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>LactoFlow</title>
        <meta name="description" content="Método para aumentar a produção de leite materno" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
        {/* <Script id="facebook-pixel" dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ""}');
            fbq('track', 'PageView');
          
          `,}} /> */}
          <Script id='hj' dangerouslySetInnerHTML={{
                        __html: `
                  (function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:3570841,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
                }} />
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
          

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6T6HHESNG2"></Script>        
        <Script id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6T6HHESNG2');`,}} />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#122e49] to-[#15162c]">
        <div className="bg-blue flex text-cream flex-col items-center justify-center py-2 sm:py-10">
          <div className="w-[180px] sm:w-[300px]">

          <Image src="/logo3.svg" alt="logo" width={300} height={120}/>
          </div>
          <h4 hidden className="text-center text-3xl text-[#fcfaef]">Conheça o Método</h4>
          <h1 hidden className="text-center text-5xl font-extrabold tracking-tight text-cream sm:text-[5rem]">
            Lacto<span className="text-green">Flow</span>{" "}
          </h1>
          <h1 className="sm:w-2/3 uppercase font-extrabold text-cream text-[18px] sm:text-[31.25px] text-center mt-6 leading-[29px] sm:leading-[36px] tracking-[-25] mb-[14.4px] px-4 sm:px-0">
            Aprenda como <span className="text-red-300 text-[25px] sm:text-[35px]">aumentar a sua produção</span> de leite e ofereça o <span className="text-green text-[25px] sm:text-[35px]">melhor alimento do mundo</span> ao seu bebê.
          </h1>
          <p className="sm:mt-7 lg:mt-5 font-bold text-[16.67px] lg:text-[18.75px] leading-[22.9px] tracking-[-25] text-center px-4 sm:px-2">
            Nesse vídeo eu te ensino estratégias para começar a aumentar a sua produção de leite <span className="text-red-300 uppercase text-[18px]">hoje mesmo.</span></p>
          <p className="mt-4 sm:mt-7 font-bold text-[16.67px] lg:text-[18.75px] leading-[22.9px] tracking-[-25] text-center">
          <span className="text-green text-[35px] uppercase">E mais:</span></p>
            <div className="ml-4">
            <div className="flex items-center gap-x-4 mt-4 lg:mt-6">
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
                As melhores técnicas para aumentar sua produção de leite materno</p>
            </div>
            </div>
            {/* <iframe className="w-full aspect-video rounded-md mt-8 mx-auto max-w-[22rem] lg:max-w-[53.25rem]" src="https://youtube.com/embed/IVKkQA9p7go"></iframe> */}
            <div className="w-full aspect-video max-w-[22rem] lg:max-w-[53.25rem] rounded-md my-8 mx-auto">

            <LiteYouTubeEmbed
                id="TV9ZvW6x3Jg"
                title="Método LactoFlow"
                poster="maxresdefault"
                />
                </div>
            
              <CTA openModal={openModal} />
              {/* <Image alt="checklist" src={"/checklist.png"} height={762} width={623}></Image> */}
              
                
            
            <section>
              <h1 className="font-extrabold text-[25px] lg:text-[31.25px] text-center mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px] ">
                Depoimento das alunas que seguiram o método LactoFlow:
              </h1>
              <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-2">
                {[1,2,3,4,5,6].map(number=>{
                  return <Image key={number} width={300} height={500} src={`/depoimentos/metodo/${number}.jpg`} alt="depoimento"/>
                })}
              </div>
            </section>
            <CTA openModal={openModal} label="Também quero esses resultados" price/>
            <section>

              {/* <h1 className="font-extrabold text-[25px] lg:text-[31.25px] text-center mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px] ">
                Argumentos Incontestáveis
              </h1>
            </section>
            <section>

              <h1 className="font-extrabold text-[25px] lg:text-[31.25px] text-center mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px] ">
                Explicação do método
              </h1> */}
            </section>
            {/* <CTA openModal={openModal} price /> */}



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
            <div className="flex min-h-full items-start bg-blue bg-opacity-70 justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md mt-16 bg-green transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <span className="absolute top-3 right-5 text-blue font-extrabold cursor-pointer" onClick={closeModal}>✖</span>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-blue"
                  >
                    Cadastre-se para receber nosso suporte especializado
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="flex flex-col mb-8">
                      <label htmlFor="celular">Email</label>
                      <input className="pl-2" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="maeincrivel@email.com"/>
                      <label htmlFor="celular">Celular</label>
                      <PhoneInput labels={ptBR} flags={flags} value={value} defaultCountry="BR" onChange={setValue}/>
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
