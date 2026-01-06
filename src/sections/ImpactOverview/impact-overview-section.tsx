"use client";

import { instrumentSans } from "@/app/layout";
import { Impact } from "@/types/strapi";
import PercentageCounter from "@/utils/percentage-counter";
import Image from "next/image";

type ImpactOverviewSectionProps = {
  impact: Impact;
};

export function ImpactOverviewSection({ impact }: ImpactOverviewSectionProps) {
  const mentors = impact?.mentorsTrained ?? 0;
  const mentees = impact?.menteesInCurrentCycle ?? 0;
  const hours = impact?.totalMentoringHours ?? 0;
  const cycles = impact?.totalCyclesCompleted ?? 0;
  const map = impact?.impactMapImage ?? null;

  // const formattedHours = new Intl.NumberFormat("pt-BR").format(hours);

  return (
    <section
      id="uuka-em-numeros"
      className="pt-[72px] w-full bg-white text-black min-h-screen"
    >
      <div className="min-h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:px-12 md:py-8 lg:p-14 gap-8 lg:gap-12">
        <div className="flex flex-col lg:flex-row flex-1 gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl">
                O que já alcançamos?
              </h3>

              <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Mentoria de carreira para profissionais negros
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10 max-w-2xl w-full">
              <div className="flex flex-col items-start">
                <PercentageCounter
                  to={mentors}
                  suffix=""
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1] font-bold"
                />
                <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  pessoas mentoras capacitadas gratuitamente pela Uuka.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <PercentageCounter
                  to={mentees}
                  suffix=""
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1] font-bold"
                />
                <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  pessoas mentoradas no{" "}
                  <span className="font-semibold">
                    ciclo {impact?.currentCycleNumber ?? ""}
                  </span>
                </p>
              </div>

              <div className="flex flex-col items-start">
                <PercentageCounter
                  to={hours}
                  suffix=""
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1] font-bold"
                />
                <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  horas de mentorias realizadas desde o início do projeto.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <PercentageCounter
                  to={cycles}
                  suffix=""
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1] font-bold"
                />
                <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  ciclos de mentorias desde a fundação
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full lg:w-1/2 lg:items-center justify-center">
            {map ? (
              <div className="w-full max-w-[550px]">
                <Image
                  src={map.url}
                  alt={map.alternativeText || map.name}
                  width={map.width}
                  height={map.height}
                  className="w-full h-auto object-contain"
                />
              </div>
            ) : (
              <div className="w-full max-w-[600px] h-64 sm:h-96 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Mapa indisponível</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-start">
          <h2
            className={`${instrumentSans.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#F59F23] whitespace-nowrap`}
          >
            Uuka em números
          </h2>
        </div>
      </div>
    </section>
  );
}
