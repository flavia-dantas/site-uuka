'use client'

export function ValuesSection() {
  return (
    <section id="valores" className="h-full w-full bg-white text-black">
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 pt-14 md:p-12 lg:p-16">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 mb-8">
            <div className="space-y-4 md:space-y-12">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">Inconformismo</h3>
                <p className="text-sm md:text-base text-black">Questionamos padrões.</p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">Coletividade</h3>
                <p className="text-sm md:text-base text-black">
                  Acreditamo no poder da comunidade e incentivamos os avanços coletivos.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">Equidade</h3>
                <p className="text-sm md:text-base text-black">
                  Reconhecemos a existência do racismo estrutural e
                  trabalhamos ativamente para reduzir desigualdades que derivam dele.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">Protagonismo</h3>
                <p className="text-sm md:text-base text-black">
                  Buscamos colocar pessoas negras em posições de destaque.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#F59F23]">
          valores
        </h2>
      </div>
    </section>
  );
}
