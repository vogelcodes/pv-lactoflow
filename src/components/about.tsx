import Image from "next/image";

import Header1 from "./h1";

const About = () => {
    return (
        <section className="p-2">
            <div className="flex max-w-2xl flex-col gap-3 items-center">
            <Image width={720} height={0} alt="Carolina Procaci" className="rounded-md" src={"/carol-close-md.webp"}/>
            <div className="card bg-cream max-w-2xl shadow-lg text-blue">
  <div className="card-body">
            <Header1>
                Quem é Carolina Procaci?               
            </Header1>

            <ul className="flex flex-col text-xl gap-2 m-2">
            <div className="flex gap-2">🎓 <li>Carolina Procaci é biomédica formada na Universidade Federal do Estado do Rio de Janeiro</li></div>
            <div className="flex gap-2">🏥 <li>Consultora em amamentação pelo único curso reconhecido pelo MEC</li></div>
            <div className="flex gap-2">👩‍👧‍👦 <li>Mãe de 2 filhos e lactante há mais de 5 anos.</li></div>
            </ul>
            </div>
            </div>

               <div className="flex gap-2 flex-col md:flex-row md:gap-1">
            <Image width={320} height={0} alt="Carolina Procaci" className="rounded-md" src={"/carol-amamentando.webp"}/>
            <Image width={320} height={0} alt="Carolina Procaci" className="rounded-md" src={"/carol-coletando.webp"}/>
                </div>          
            <div className="card text-xl bg-cream max-w-2xl shadow-lg text-blue">
  <div className="card-body">
            <div className="max-w-2xl m-2 flex flex-col gap-4">
            <p className="text-justify">
Desde a sua primeira experiência com a amamentação, em 2018, desenvolveu estratégias pessoais para aumentar a sua produção de leite. E assim, enquanto amamentava de forma exclusiva seu filho, conseguiu montar um estoque de leite materno para ele e ainda doar <span className="uppercase underline underline-offset-4 decoration-dashed">semanalmente</span> cerca de 1 litro para um banco de leite humano.

            </p>     
            <Image width={320} height={0} alt="Carolina Procaci" className="rounded-md mx-auto" src={"/pote-leite.webp"}/>

            <p className="text-justify">
Com as estratégias pessoais desenvolvidas e com a capacitação profissional na área de baixa produção de leite, desenvolveu  o <span className="text-2xl text-red">Método LactoFlow®️</span>: um passo a passo estratégico e simples do que é necessário fazer para aumentar a produção de leite e não precisar de fórmula infantil.
            </p> 
            </div>
            </div>
            </div>            
            </div>
        </section>
    )
}
export default About;