import Image from "next/image";

import Header1 from "./h1";

const Bonus = () => {
    return (
        <section className="px-4 w-full text-2xl bg-cream text-blue mt-4">
            <Header1>
                Bônus              
            </Header1>
            <p className="text-center">
            Além de todas as aulas gravadas, você ainda ganha 2 bônus:
            </p>
<div className="flex text-cream flex-col items-center mx-auto max-w-lg gap-2 my-4">

<div className="card bg-blue shadow-lg">
  <div className="card-body">

<div className="flex flex-col items-center gap-2">
    <Image
        alt="zoom"
        width={44}
        src={"/zoom.svg"}
        height={44}
        ></Image>
    <p className="text-2xl text-center">2 encontros ao vivo todos os meses no Zoom</p>
</div>
    <li className="text-lg">Uma Oficina com os mais diversos temas da maternidade</li>
     <li className="text-lg">Um encontro para tirar as dúvidas do método</li>


  </div>
</div>

<div className="card bg-blue shadow-lg">
  <div className="card-body">

     <div className="flex items-center flex-col gap-2">
    <Image
        alt="wpp"
        width={44}
        src={"/telegram-2.svg"}
        height={44}
        ></Image>
<p className="text-center">Comunidade exclusiva de alunas onde você tem contato direto a mim e às demais alunas do método</p>
<Image alt="telegram-comunidade"
    width={260}
    height={500}
    src={"/comunidade.webp"}
    />
</div>
</div>
        </div>
</div>

        </section>
    )
}
export default Bonus;