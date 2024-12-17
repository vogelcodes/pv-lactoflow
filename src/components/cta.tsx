import Image from "next/image";
import { useState, useEffect } from "react";

type CtaProps = {
  ctaOption?: string;
  openModal: (option: string) => void;
  price?: boolean;
  label?: string;
};

const CTA = ({
  openModal,
  price = false,
  label = "Quero aumentar minha produção de leite",
  ctaOption = "0",
}: CtaProps) => {
  // const calculateTimeLeft = () => {
  //   const targetDate = new Date("2024-11-29T21:00:00-03:00").getTime();
  //   const now = new Date().getTime();
  //   const difference = targetDate - now;
  //   let timeLeft: { hours: number; minutes: number; seconds: number } = {
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //   };
  //   if (difference > 0) {
  //     timeLeft = {
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   } else {
  //     timeLeft = { hours: 0, minutes: 0, seconds: 0 };
  //   }
  //   return timeLeft;
  // };
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);
  return (
    <div className="flex w-full flex-col items-center rounded-sm bg-cream text-blue">
      <div className="mt-5 w-full text-center">
        {/* <a href="https://instagram.com/carolina.procaci"> */}
        {/* <a href="https://pay.hotmart.com/O84147403X"> */}

        {/* </a> */}

        {/* </a> */}
        <button
          id={"CTA-" + ctaOption}
          onClick={(e) => openModal(ctaOption)}
          data-umami-event={`cta-${ctaOption}-click`}
          className="text-white my-2 max-w-[250px] rounded-lg border-b-4 border-b-[#236C0F] bg-[#40C351] px-4 py-3 text-[13.6px] font-extrabold uppercase text-cream hover:scale-[104%] hover:border-b-[#44972d] hover:bg-[#236C0F] lg:max-w-md lg:py-5 lg:text-[22.6px]"
        >
          {label}
        </button>
        <div className="">
          <Image
            className="mx-auto h-10 px-4"
            alt="Meios de Pagamento"
            src="/pagamentos2.svg"
            width={529}
            height={30}
          ></Image>
        </div>
      </div>
      {price ? (
        <p className="pt-4">
          12x
          <span className="mb-[14.4px] ml-1 mt-6 text-center text-[25px] font-extrabold uppercase leading-[29.17px] tracking-[-25] lg:text-[31.25px]">
            R$24,65
          </span>{" "}
          <br /> ou R$247,00 à vista
        </p>
      ) : (
        <></>
      )}
      <div className="m-4 grid w-full max-w-sm grid-cols-3 px-4 lg:max-w-3xl">
        <div className="flex flex-col items-center">
          <Image
            alt="acesso-imediato"
            height={58.6}
            width={58.6}
            src={"/calendario2.svg"}
          ></Image>
          <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">
            2 anos de acesso
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="zoom"
            width={58.6}
            src={"/zoom.svg"}
            height={58.6}
          ></Image>
          <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">
            Suporte quinzenal no ZOOM
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="garantia"
            width={44}
            src={"/garantia2.svg"}
            height={58.6}
          ></Image>
          <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">
            Garantia de 21 DIAS
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
