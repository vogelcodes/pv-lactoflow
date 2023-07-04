import Image from "next/image"

type CtaProps = {
  openModal: ()=> void,
  price?: boolean
}

const CTA = ({ openModal, price=false }: CtaProps) => {
    return (
        <div className="mt-5 w-full text-center">
                {/* <a href="https://instagram.com/carolina.procaci"> */}
                <button onClick={openModal} className="hover:scale-[104%] w-auto rounded-lg border-b-4 text-cream border-b-[#236C0F] bg-[#46B21E] my-2 py-3 text-[13.6px] font-extrabold uppercase text-white hover:border-b-[#44972d] hover:bg-[#236C0F] px-2 lg:py-5 lg:text-[22.6px]">
                  Quero aumentar minha <br/> produção de leite</button>

                {/* </a> */}
                {price ? 
                <p>12x 
                  <span className="uppercase font-extrabold text-[25px] lg:text-[31.25px] text-center mt-6 leading-[29.17px] tracking-[-25] mb-[14.4px]">
                    R$49,70</span> <br/> ou R$497,00 à vista
                </p> : <></>
                }
                <Image className="mx-auto h-10 px-4" alt="Meios de Pagamento" src="/pagamentos.svg" width={340} height={20} ></Image>
              </div>
             
    )
}

export default CTA