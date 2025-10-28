'use client'

export function VisionSection() {
  return (
    <section id="visao" className="h-screen w-full bg-[#F59F23] text-black">
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 pt-14 md:p-12 lg:p-16">
        <div className="max-w-md">
          <p className="text-sm md:text-base lg:text-lg mb-4 leading-relaxed">
            Mentorar o maior número de pessoas negras
            para que ocupem lugares de destaque no mercado
            de trabalho, formando pessoas multiplicadoras
            de conhecimento e fomentando a equidade
            de forma intencional.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black">
          visão
        </h2>
      </div>
    </section>
  );
}
