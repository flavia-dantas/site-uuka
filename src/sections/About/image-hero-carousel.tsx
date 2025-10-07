import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ImageHeroItem } from "@/types/strapi";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

type ImageHeroCarouselProps = {
  items: ImageHeroItem[];
}

export default function ImageHeroCarousel({ items }: ImageHeroCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  if (!items || items.length === 0) {
    return <p className="text-center py-20">Nenhuma imagem disponível</p>;
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full h-full"
    >
      <CarouselContent className="h-full -ml-0">
        {items.map((item) => {
          const image = item.image;
          const imageUrl = `${process.env.NEXT_PUBLIC_URL}${image.url}`;
          const alt = image.alternativeText || image.name;

          return (
            <CarouselItem key={item.id} className="pl-0 h-full">
              <div className="relative flex items-center overflow-hidden lg:max-h-[calc(100vh-4rem)] xl:max-h-[calc(100vh-5rem)] h-full w-full">
                <Image
                  src={imageUrl}
                  alt={alt}
                  width={image.width}
                  height={image.height}
                  priority={item.id === items[0].id}
                  className="w-full"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel >
  );
}