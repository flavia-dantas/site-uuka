'use client'

export function VirtuousCycleSection() {
  return (
    <section id="ciclo-virtuoso" className="h-full w-full bg-[#F59F23] text-black">
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16">
        <div className="max-w-sm">
          <p className="text-sm md:text-base lg:text-lg mb-4 leading-relaxed py-12">
            As pessoas mentoradas se comprometem a mentorar ao menos uma pessoa nos próximos ciclos.
          </p>
        </div>


        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black">
          ciclo virtuoso
        </h2>
      </div>
    </section>
  );
}
