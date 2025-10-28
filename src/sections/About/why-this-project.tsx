'use client'

export default function WhyThisProject() {
  return (
    <section id="por-que" className="pt-[72px] h-screen w-full bg-white text-black">
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 pb-16">
        <div className="max-w-2xl">
          <p className="text-sm md:text-base lg:text-lg mb-4 leading-relaxed">
            Em Dezembro de 2020, decidimos que nosso nome precisaria traduzir
            o grande sonho, que contasse o porquê de nos juntarmos e pra onde
            queríamos ir. Depois de algumas pesquisas, compreensão histórica e
            brainstorming com todos os participantes da associação, decidimos
            por Uuka, que significa “Surja e apareça”, trazendo conexão ao nosso
            projeto, que quer preparar profissionais negros e negras para que se
            destaquem e concorram a vagas de empresa com igualdade, desenvolvendo
            habilidades técnicas e emocionais.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#F59F23]">
          por que?
        </h2>
      </div>
    </section>
  );
}
