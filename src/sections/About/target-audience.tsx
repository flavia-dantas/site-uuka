"use client";

export default function TargetAudience() {
  return (
    <section
      id="publico-alvo"
      className="pt-[72px] h-screen w-full  bg-[#F59F23] text-black"
    >
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 pb-16">
        <div className="max-w-sm py-6">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-4">
            Pessoas pretas, pardas ou indígenas, baixa renda, potenciais líderes
            com competências em desenvolvimento, ao menos cursando a faculdade.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black">
          público-alvo
        </h2>
      </div>
    </section>
  );
}
