'use client'

export function ScheduleSection() {
  return (
    <section id="cronograma" className="h-full w-full bg-white text-black">
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16">

        <div className="flex justify-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
            Ciclo 8
          </h1>
        </div>

        <div className="flex justify-center items-center flex-1">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 border-b border-gray-300 pb-2 px-8">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">Início</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black">Julho de 2025</span>
            </div>

            <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 border-b border-gray-300 pb-2 px-8">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">Fim</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black">Dezembro de 2025</span>
            </div>

            <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 border-b border-gray-300 pb-2 px-8">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">Encerramento</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black">17 de Janeiro de 2026</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#F59F23]">
            cronograma
          </h2>
        </div>
      </div>
    </section>
  );
}
