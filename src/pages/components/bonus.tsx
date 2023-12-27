import Image from "next/image";

import Header1 from "./h1";

const Bonus = () => {
  return (
    <section className="w-full bg-cream p-2 text-2xl mt-2 text-blue">
      <p className="text-center font-semibold">
        Além de todas as aulas gravadas, você ainda tem acesso a:
      </p>
      <div className="mx-auto my-4 flex max-w-[40rem] flex-col items-center gap-2 text-cream">
        <div className="card bg-blue shadow-lg">
          <div className="card-body flex flex-col items-center">
            <div className="flex flex-row items-center gap-2">
              <Image
                alt="zoom"
                width={44}
                src={"/zoom.svg"}
                height={44}
              ></Image>
              <p className="text-2xl">Suporte quinzenal no Zoom</p>
            </div>
            <Image
              alt="telegram-comunidade"
              width={500}
              height={500}
              src={"/zoom-call.webp"}
              className="rounded-md"
            />
            <p className="text-lg text-justify">
              Todos os meses, temos dois encontros marcados onde você tem a
              oportunidade de ligar sua câmera e conversar diretamente comigo
              para tirar todas as suas dúvidas sobre o método.
            </p>
            <div className="flex flex-row items-center gap-2 pt-4">
              <Image
                alt="zoom"
                width={44}
                src={"/zoom.svg"}
                height={44}
              ></Image>
              <p className="text-2xl">Oficina mensal no Zoom</p>
            </div>
            <Image
              alt="telegram-comunidade"
              width={500}
              height={500}
              src={"/oficina.webp"}
              className="rounded-md"
            />

            <p className="text-lg text-justify">
              Em um desses encontros eu faço uma Oficina sobre os mais diversos
              temas da maternidade a partir de propostas das próprias alunas.
            </p>
          </div>
        </div>

        <div className="card bg-blue px-0.5 shadow-lg">
          <div className="card-body p-1 pt-4">
            <div className="flex flex-col items-center gap-2">
              {/* <Image
        alt="wpp"
        width={44}
        src={"/telegram-2.svg"}
        height={44}
        ></Image> */}
              <p className="p-3 text-center">
                🌿Guia de Ervas Amigas da Amamentação🌿
              </p>
              <Image
                alt="telegram-comunidade"
                width={400}
                height={600}
                src={"/ervas.webp"}
                className="rounded-md"
              />
              <p className="p-4 text-lg break-words text-justify">
                Quando usadas da forma correta, as ervas galactagogas podem sim
                dar um bom gás no seu resultado. E para te ajudar com
                orientações sobre as funções de cada erva, misturas
                recomendadas, doses corretas, efeitos colaterais e
                contraindicações, eu criei um e-book prático com o resumo de
                todas essas informações. Um verdadeiro guia com tudo o que você
                precisa saber sobre o mundo das ervas.
              </p>
              <p className="text-center">
                👩‍🍳E-book - Receitas Amigas da Amamentação🧁
              </p>
              <Image
                alt="telegram-comunidade"
                width={300}
                height={500}
                src={"/receitas.webp"}
                className="rounded-md"
              />
              <p className="p-4 text-lg text-justify">
                A estratégia para aumentar sua produção de leite também pode ser
                gostosa! Eu juntei em um e-book as receitas lactogênicas mais
                saborosas e fáceis que eu conheço. Nenhum alimento sozinho faz
                milagre para a sua produção, mas os alimentos corretos podem sim
                fazer diferença nesse resultado.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-blue shadow-lg">
          <div className="card-body">
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row items-center gap-2 pt-2">
                <Image
                  alt="wpp"
                  width={44}
                  src={"/telegram-2.svg"}
                  height={44}
                ></Image>
                <p className="">Comunidade exclusiva de alunas</p>
              </div>
              <Image
                alt="telegram-comunidade"
                width={260}
                height={500}
                src={"/telegram-ve.webp"}
                className="rounded-md"
              />
              <p className="text-lg text-justify">
                No Telegram temos a comunidade da família LactoFlow onde você
                encontra acolhimento, um espaço para desabafos e também para
                tirar dúvidas práticas sobre o método no dia a dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Bonus;
