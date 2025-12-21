"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Supporters } from "@/types/strapi";
import Autoplay from "embla-carousel-autoplay";
import { CircleX } from "lucide-react";
import Image from "next/image";
import React from "react";

type SupportersSectionProps = {
  supporters?: Supporters;
};

export function SupportersSection({ supporters }: SupportersSectionProps) {
  const images = supporters?.imageLogo || [];

  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  if (!images || images.length === 0) {
    return (
      <section
        id="apoiadores"
        className="pt-[72px] h-screen w-full bg-black text-white"
      >
        <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 pb-16">
          <div className="flex-1 flex items-center justify-center gap-2">
            <CircleX />
            <p className="text-center text-white">
              Nenhuma imagem de parceiro disponível no momento.
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#F59F23]">
            apoiadores
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section
      id="apoiadores"
      className="pt-[72px] h-screen w-full bg-black text-white"
    >
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin]}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image) => {
                  const imageUrl = image.url;
                  const alt = image.alternativeText || image.name;

                  return (
                    <CarouselItem
                      key={image.id}
                      className="basis-full md:basis-1/2 lg:basis-1/4"
                    >
                      <div className="flex items-center justify-center h-16 md:h-20">
                        <Image
                          src={imageUrl}
                          alt={alt}
                          width={image.width}
                          height={image.height}
                          className="max-h-16 md:max-h-20 max-w-full object-contain"
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-8 sm:-left-10 md:-left-12 top-1/2 -translate-y-1/2 text-white border-none w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70" />
              <CarouselNext className="absolute -right-8 sm:-right-10 md:-right-12 top-1/2 -translate-y-1/2 text-white border-none w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70" />
            </Carousel>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#F59F23]">
          apoiadores
        </h2>
      </div>
    </section>
  );
}
