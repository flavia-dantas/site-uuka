"use client";

export function LeadershipSection() {
  return (
    <section id="lideranca" className="h-screen w-full bg-white text-black">
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 lg:gap-24">
        <div className="max-w-2xl pt-14">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-4">
            O processo de mentoria é composto por 12 sessões (10 individuais e 2
            coletivas) ao longo de 5 meses e é baseada em metodologia
            desenvolvida pelo time executivo de Uuka, sendo que todas as sessões
            de monitoria possuem roteiros padrões para serem seguidos.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#F59F23] max-w-2xl lg:mt-10">
          liderança e autoconhecimento
        </h2>
      </div>
    </section>
  );
}
