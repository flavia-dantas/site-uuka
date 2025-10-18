'use client'

import { Button } from "@/components/ui/button";

export function PartnershipsSection() {
  return (
    <section id="parcerias" className="pt-[72px] min-h-screen w-full bg-[#F59F23] text-black snap-start">
      <div className="min-h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">

          <div className="flex-1 lg:flex-2">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              A UUKA é uma associação sem fins lucrativos que aplica mentorias gratuitas para a carreira de pessoas negras e indígenas. Fundada em 2020, promove o protagonismo profissional com base na escuta ativa, apoio mútuo e combate prático ao racismo.
              <br />
              <br />
              A nossa abordagem consiste em parcerias com empresas que se conectam com esse objetivo e desejam apoiar nossos projetos.
              <br />
              <br />
              Temos opções de contrapartidas personalizadas de acordo com as nossas cotas de parcerias.
              <br />
              <br />
              Acreditamos que esse modelo de relação direta e comprometida é essencial para o enfrentamento das desigualdades e do racismo estrutural.
            </p>
          </div>

          <div className="w-full lg:flex-1 flex items-center justify-center">
            <div className="bg-[#f9c57b] rounded-2xl p-6 sm:p-8 lg:p-10 w-full lg:max-w-xl text-center flex flex-col justify-center gap-4">
              <p className="text-sm sm:text-base md:text-lg font-medium text-black mb-4 sm:mb-6">
                Você ou a sua empresa pode nos apoiar!
              </p>
              <Button
                className="rounded-xl bg-[#F59F23] text-black px-3 md:px-4 py-2 hover:bg-white transition text-xs md:text-sm font-bold whitespace-nowrap w-full"
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black mt-6 lg:mt-2">
          parcerias
        </h2>
      </div>
    </section>
  );
}