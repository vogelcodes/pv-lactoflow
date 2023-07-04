import Image from "next/image"

type CtaProps = {
  openModal: ()=> void,
  price?: boolean,
  label?: string
}

const CTA = ({ openModal, price=false, label="Quero aumentar minha produção de leite" }: CtaProps) => {
    return (
      <div className="flex flex-col items-center w-full rounded-sm bg-cream text-blue mt-2">

        <div className="mt-5 w-full text-center">
                {/* <a href="https://instagram.com/carolina.procaci"> */}
                <button onClick={openModal} className="hover:scale-[104%] max-w-[250px] lg:max-w-md rounded-lg border-b-4 text-cream border-b-[#236C0F] bg-[#46B21E] my-2 py-3 text-[13.6px] font-extrabold uppercase text-white hover:border-b-[#44972d] hover:bg-[#236C0F] px-2 lg:py-5 lg:text-[22.6px]">
                  {label}</button>

                {/* </a> */}
                {price ? 
                <p>12x 
                  <span className="uppercase font-extrabold text-[25px] lg:text-[31.25px] text-center ml-1 mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px]">
                    R$49,60</span> <br/> ou R$497,00 à vista
                </p> : <></>
                }
                <div className="">
                <Image className="mx-auto h-10 px-4" alt="Meios de Pagamento" src="/pagamentos.svg" width={529} height={30} ></Image>
                </div>
              </div>
            <div className="w-full max-w-sm lg:max-w-3xl flex justify-between m-4 px-4">
            <div className="flex flex-col items-center">
              <Image alt="acesso-imediato" width={44} src={"/call-center-desk.svg"} height={44}></Image>
              <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">Acesso Imediato</p>
              
            </div>
            <div className="flex flex-col items-center">

              <Image alt="zoom" width={44} src={"/zoom-desk.svg"} height={44}></Image>
              <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">Suporte ao vivo no ZOOM</p>
            </div>
              <div className="flex flex-col items-center">

              <Image alt="garantia" width={44} src={"/garantia-desk.svg"} height={44}></Image>
              <p className="text-center text-[9.79px] font-bold lg:text-[20.6px]">Garantia de 21 DIAS</p>
            </div>
        </div>
      </div>
             
    )
}

export default CTA