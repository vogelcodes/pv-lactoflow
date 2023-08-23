import Image from "next/image";

import Header1 from "./h1";

const Bonus = () => {
    return (
        <section className="px-4 w-full bg-cream text-blue mt-4">
            <Header1>
                Bônus              
            </Header1>
            <p className="text-center">
            Além de todas as aulas gravadas, você ainda ganha 2 bônus:
            </p>
<div className="flex flex-col items-center gap-2 my-4">

<div className="card bg-base-100 shadow-xl">
  <div className="card-body">

<div className="flex items-center gap-2">
    <Image
        alt="zoom"
        width={44}
        src={"/zoom-desk.svg"}
        height={44}
        ></Image>
    <p>2 encontros ao vivo todos os meses</p>
</div>
    <p className="ml-2">Uma Oficina com os mais diversos temas da maternidade
     e um encontro para tiras dúvidas do método</p>

  </div>
</div>

<div className="card bg-base-100 shadow-xl">
  <div className="card-body">

     <div className="flex items-center gap-1">
    <Image
        alt="wpp"
        width={44}
        src={"/whatsapp-svgrepo-com.svg"}
        height={44}
        ></Image>
<p>Comunidade exclusiva de alunas onde você tem contato direto a mim e às demais alunas do método</p>
</div>
</div>
        </div>
</div>

        </section>
    )
}
export default Bonus;