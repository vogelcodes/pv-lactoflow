import Image from "next/image";

import LiteYouTubeEmbed from "react-lite-youtube-embed";

const Depos = () => {
  return (
    <section className="my-2">
      <h1 className="mb-[14.4px] mt-6 px-4 text-center text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
        Depoimentos das alunas que seguiram o método LactoFlow®️:
      </h1>
      <div className="mx-auto my-4 flex max-w-[40rem] flex-col items-center gap-2 text-cream">
        <div className="card bg-cream shadow-lg">
          <div className="card-body flex flex-col items-center">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="h-[350px] w-[206px]">
                <LiteYouTubeEmbed
                  id="eVpBHlpupu0"
                  title="Método LactoFlow®️"
                  poster="maxresdefault"
                  thumbnail="/depoimentos/depo-raquel.webp"
                  aspectHeight={350}
                  aspectWidth={206}
                />
              </div>
              <p className="text-blue md:w-1/2">
                O bebê da Raquel precisou ficar internado na UTI durante 12 dias
                com bronquiolite. Com as estratégias do LactoFlow, ela conseguiu
                tirar a cada 2 a 3 horas 100 ml de leite para que ele não
                precisasse de fórmula e ouviu da equipe médica: “Mamãe, você é a
                única que está conseguindo tirar leite aqui. Você é a única que
                está conseguindo dar 100% de leite materno pro seu filho.”
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-cream shadow-lg">
          <div className="card-body flex flex-col items-center">
            <div className="flex flex-col items-center gap-6 md:flex-row-reverse md:items-start">
              <div className="h-[350px] w-[206px]">
                <LiteYouTubeEmbed
                  id="PzxmWmJLjz8"
                  title="Método LactoFlow®️"
                  poster="maxresdefault"
                  thumbnail="/depoimentos/depo-priscila.webp"
                  aspectHeight={350}
                  aspectWidth={206}
                />
              </div>
              <p className="text-blue md:w-1/2">
                O LactoFlow foi libertador para a Priscila, com o curso ela
                aprendeu as técnicas corretas para aumentar a sua produção de
                leite. “Se eu tivesse conhecido a Carol antes, eu tinha evitado
                tanto estresse!”
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {/*<div className="w-[340px]">
    <LiteYouTubeEmbed
        id="eVpBHlpupu0"
        title="Método LactoFlow®️"
        poster="maxresdefault"
        thumbnail="/depoimentos/depo-raquel.webp"
        aspectHeight={500}
        aspectWidth={280}
                    />

          </div>
      <div className="w-[340px]">
    <LiteYouTubeEmbed
        id="PzxmWmJLjz8"
        title="Método LactoFlow®️"
        poster="maxresdefault"
        thumbnail="/depoimentos/depo-priscila.webp"
        aspectHeight={500}
        aspectWidth={280}
/>

          </div>*/}
        {[1, 2].map((number) => {
          return (
            <div className="" key={number}>
              <Image
                className="mx-auto rounded-xl"
                key={number}
                width={340}
                height={500}
                src={`/depoimentos/metodo/${number}.webp`}
                alt="depoimento"
              />
            </div>
          );
        })}
        {[3, 4, 5, 6, 7, 8, 9].map((number) => {
          return (
            <div className="" key={number}>
              <Image
                className="mx-auto rounded-xl"
                key={number}
                width={340}
                height={500}
                src={`/depoimentos/metodo/${number}.webp`}
                alt="depoimento"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Depos;
