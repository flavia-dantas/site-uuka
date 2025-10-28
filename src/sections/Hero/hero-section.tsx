'use client'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ImageHeroItem } from "@/types/strapi";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

type HeroSectionProps = {
  items: ImageHeroItem[];
}

export default function HeroSection({ items }: HeroSectionProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  if (!items || items.length === 0) {
    return (
      <section className="pt-[72px] w-full">
        <div className="h-[calc(100vh-72px)] w-full flex items-center justify-center">
          <p className="text-center py-20">Nenhuma imagem disponível</p>
        </div>
      </section>
    );
  }

  return (
    <section id="inicio" className="pt-[72px] w-full">
      <div className="h-[calc(100vh-72px)] w-full overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full h-[calc(100vh-72px)]"
        >
          <CarouselContent className="h-[calc(100vh-72px)] -ml-0">
            {items.map((item) => {
              const image = item.image;
              const imageUrl = `${process.env.NEXT_PUBLIC_URL}${image.url}`;
              const alt = image.alternativeText || image.name;

              return (
                <CarouselItem key={item.id} className="pl-0 h-[calc(100vh-72px)]">
                  <div className="relative h-[calc(100vh-72px)] w-full">
                    <Image
                      src={imageUrl}
                      alt={alt}
                      width={image.width}
                      height={image.height}
                      priority={item.id === items[0].id}
                      className="w-full h-[calc(100vh-72px)] object-cover"
                      style={{ objectPosition: 'center' }}
                    />
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