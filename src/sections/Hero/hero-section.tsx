"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ImageHeroItem } from "@/types/strapi";
import Autoplay from "embla-carousel-autoplay";
import { CircleX } from "lucide-react";
import Image from "next/image";
import React from "react";

type HeroSectionProps = {
  items: ImageHeroItem[];
};

export function HeroSection({ items }: HeroSectionProps) {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: true }),
    []
  );

  if (!items || items.length === 0 || items[0].image === null) {
    return (
      <section className="pt-[72px] w-full">
        <div className="min-h-[calc(100vh-72px)] w-full flex items-center justify-center gap-2">
          <CircleX />
          <p className="text-center py-20">Imagem indisponível no momento.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="inicio" className="pt-[72px] w-full">
      <div className="relative w-full">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {items.map((item) => {
              const image = item.image;
              const imageUrl = image?.url ?? "";
              const alt = image?.alternativeText || image?.name || "Imagem";
              const overlayText = item.overlayText;

              return (
                <CarouselItem key={item.id} className="pl-0">
                  <div className="relative w-full">
                    <Image
                      src={imageUrl}
                      alt={alt}
                      width={image.width}
                      height={image.height}
                      priority={item.id === items[0].id}
                      className="w-full h-auto object-cover"
                      style={{ objectPosition: "top" }}
                    />

                    {overlayText && (
                      <div className="absolute bottom-2 md:top-96 lg:top-1/2 left-4 right-4 text-white p-4 rounded-lg max-w-full md:max-w-md">
                        <h3 className="text-xs md:text-2xl 2xl:text-3xl leading-snug whitespace-pre-line">
                          {overlayText}
                        </h3>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
