"use client";

import PercentageCounter from "@/utils/percentage-counter";

export function MethodologySection() {
  return (
    <section
      id="metodologia"
      className="h-screen w-full bg-[#F59F23] text-black"
    >
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 lg:gap-16">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-sm md:max-w-md flex flex-col items-center text-center gap-4">
            <div className="gap-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                <PercentageCounter to={100} />
              </h1>

              <h4 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
                online e sem custo
              </h4>
            </div>

            <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-2">
              Todo processo de mentoria será sem custo para a pessoa mentorada,
              precisando apenas comprometer-se a mentorar pelo menos uma pessoa
              depois que terminar o processo da sua mentoria.
            </p>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black lg:mt-10">
          metodologia
        </h2>
      </div>
    </section>
  );
}
