'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Leadership } from "@/types/strapi";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useState } from "react";

interface LeadershipSectionProps {
  leadership: Leadership;
}

export function LeadershipSection({ leadership }: LeadershipSectionProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [tappedId, setTappedId] = useState<number | null>(null);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  function toggleTapped(id: number) {
    setTappedId((prev) => (prev === id ? null : id));
  }

  function handleKeyToggle(e: React.KeyboardEvent, id: number) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTapped(id);
    }
  }

  return (
    <section
      id="diretoria"
      className="pt-[72px] min-h-screen w-full bg-black text-white"
    >
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between px-4 md:px-12 lg:px-16 pb-14 gap-8">
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-full max-w-5xl relative overflow-visible"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 gap-1">
                {leadership.LeadershipCard.map((member) => {
                  const imageUrl = `${process.env.NEXT_PUBLIC_URL}${member.photo.url}`;
                  const alt = member.photo.alternativeText || member.photo.name;

                  return (
                    <CarouselItem key={member.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                      <div
                        className="relative group cursor-pointer"
                        onClick={() => toggleTapped(member.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => handleKeyToggle(e, member.id)}
                        aria-pressed={tappedId === member.id}
                      >
                        <div className="relative w-full h-80 rounded-lg overflow-hidden">
                          <Image
                            src={imageUrl}
                            alt={alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            quality={100}
                            className={cn(
                              "object-cover transition-all duration-700",
                              tappedId === member.id
                                ? "grayscale-0"
                                : "grayscale group-hover:grayscale-0"
                            )}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-700" />

                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="bg-black/30 rounded-lg p-3 group-hover:bg-black/40 transition-all duration-700">
                              <h3 className="text-sm sm:text-base font-bold uppercase text-white drop-shadow-lg">
                                {member.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-white/90 uppercase drop-shadow-lg">
                                {member.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 sm:-left-10 md:-left-12 top-1/2 -translate-y-1/2 text-white border-none w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 lg:hidden" />
              <CarouselNext className="absolute right-2 sm:-right-10 md:-right-12 top-1/2 -translate-y-1/2 text-white border-none w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 lg:hidden" />
            </Carousel>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#F59F23] lowercase">
          diretoria
        </h2>
      </div>
    </section>
  );
}
