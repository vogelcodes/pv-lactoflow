import Image from "next/image";

import Header1 from "./h1";

const Bonus = () => {
    return (
        <section className="p-2 w-full text-2xl bg-cream text-blue">
            <p className="text-center">
            Além de todas as aulas gravadas, você ainda tem acesso a:
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
    <p className="text-2xl text-center">Suporte mensal no Zoom</p>
</div>
    <Image alt="telegram-comunidade"
    width={500}
    height={500}
    src={"/zoom-call.webp"}
    className="rounded-md"
    />
    <p className="text-lg">Todos os meses, temos um encontro marcado para você poder ligar sua câmera e conversar diretamente comigo para tirar todas as suas dúvidas sobre o método.</p>
<div className="flex flex-col items-center gap-2 pt-4">
    <Image
        alt="zoom"
        width={44}
        src={"/zoom.svg"}
        height={44}
        ></Image>
    <p className="text-2xl text-center">Oficina mensal no Zoom</p>
</div>
    <Image alt="telegram-comunidade"
    width={500}
    height={500}
    src={"/oficina.webp"}
    className="rounded-md"
    />

    <p className="text-lg">Uma vez ao mês eu faço Oficinas sobre os mais diversos temas da maternidade a partir de propostas das próprias alunas.</p>


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
      <p className="text-lg">No telegram temos a nossa comunidade da família LactoFlow onde você encontra acolhimento, um espaço para desabafos e também para tirar dúvidas práticas sobre o método no dia a dia.</p>
      <Image alt="telegram-comunidade"
          width={260}
          height={500}
          src={"/telegram-ve.webp"}
          className="rounded-md"
      
          />
      </div>
      </div>
              </div>
<div className="card px-0.5 bg-blue shadow-lg">
  <div className="card-body p-1">

     <div className="flex items-center flex-col gap-2">
    {/* <Image
        alt="wpp"
        width={44}
        src={"/telegram-2.svg"}
        height={44}
        ></Image> */}
<p className="p-3 text-center">E-book sobre as diversas Ervas Galactagogas</p>
<Image alt="telegram-comunidade"
    width={400}
    height={600}
    src={"/ervas.webp"}
    className="rounded-md"
    />
    <p className="p-4 text-base">Quando usadas da forma correta, as ervas galactagogas podem sim dar um bom gás no seu resultado. E para te ajudar com orientações sobre as funções de cada erva, misturas recomendadas, doses corretas, efeitos colaterais e contraindicações, eu criei um e-book prático com o resumo de todas essas informações. Um verdadeiro guia com tudo o que você precisa saber sobre o mundo das ervas.</p>
<p className="text-center">E-book com diversas Receitas Lactogênicas</p>
<Image alt="telegram-comunidade"
    width={300}
    height={500}
    src={"/receitas.webp"}
    className="rounded-md"
    />
    <p className="p-4 text-base">A estratégia para aumentar sua produção de leite também pode ser gostosa! Eu juntei em um e-book as receitas lactogênicas mais saborosas e fáceis que eu conheço. Nenhum alimento sozinho faz milagre para a sua produção, mas os alimentos corretos podem sim fazer diferença nesse resultado.</p>

</div>
</div>
        </div>
</div>

        </section>
    )
}
export default Bonus;