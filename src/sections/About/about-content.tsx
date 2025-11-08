'use client'


export default function AboutContent() {
  return (
    <section id="somos" className="pt-[72px] h-screen w-full bg-black text-white">
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 pb-16">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base lg:text-lg mb-4 leading-relaxed">
            Somos pessoas inconformadas com a dissonância social e racismo estrutural no Brasil.
            <br />
            <br />
            Reconhecendo os privilégios a pessoas brancas concedidos por esta estrutura, nós incomodamos de trabalhar em meio a apenas privilegiados e
            gostaríamos de mudar essa realidade, estendendo estes privilégios, que estruturalmente são exclusivos à não-negros no Brasil.
            <br />
            <br />
            Faremos isso ajudando na potencialização e formação de novas lideranças negras nas empresas do brasil e do mundo, para que através
            de uma metodologia de mentoria, tenham mais ferramentas para furar os bloqueios impostos pela estrutura.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#F59F23]">
          somos
        </h2>
      </div>
    </section>
  );
}