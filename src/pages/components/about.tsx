import Image from "next/image";

import Header1 from "./h1";

const About = () => {
    return (
        <section className="p-4">
            <div className="flex flex-col gap-3 items-center">
            <Image width={720} height={0} alt="Carolina Procaci" className="rounded-md" src={"/seo-2.webp"}/>
            <div className="card bg-cream max-w-2xl shadow-lg text-blue">
  <div className="card-body">
            <Header1>
                Quem é Carolina Procaci?               
            </Header1>

            <ul className="flex flex-col gap-2 m-2">
            <div className="flex gap-2">🎓 <li>Carolina Procaci é biomédica formada na Universidade Federal do Estado do Rio de Janeiro</li></div>
            <div className="flex gap-2">🏥 <li>Consultora em amamentação pelo único curso reconhecido pelo MEC</li></div>
            <div className="flex gap-2">👩‍👧‍👦 <li>Mãe de 2 filhos e lactante há mais de 5 anos.</li></div>
            </ul>
            </div>
            </div>

                         
            <div className="card bg-cream max-w-2xl shadow-lg text-blue">
  <div className="card-body">
            <div className="max-w-2xl m-2 flex flex-col gap-4">
            <p>
Desde a sua primeira experiência com a amamentação, em 2018, desenvolveu estratégias pessoais para aumentar a sua produção de leite. E assim, enquanto amamentava de forma exclusiva seu filho, conseguiu montar um estoque de leite materno para ele e ainda doar <span className="text-red underline underline-offset-1 decoration-dashed">semanalmente</span> cerca de 1 litro para um banco de leite humano.

            </p>             
            <p>
Com as estratégias pessoais desenvolvidas e com a capacitação profissional na área de baixa produção de leite, desenvolveu  o Método LactoFlow: um passo a passo estratégico e simples do que é necessário fazer para aumentar a produção de leite e não precisar de fórmula infantil.
            </p> 
            </div>
            </div>
            </div>            
            </div>
        </section>
    )
}
export default About;