'use client'

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { MissionSection } from "./mission-section";
import { ValuesSection } from "./values-section";
import { VisionSection } from "./vision-section";

export function MissionVisionValuesSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section className="w-full">
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
            <CarouselItem className="pl-0 h-[calc(100vh-72px)]">
              <MissionSection />
            </CarouselItem>
            <CarouselItem className="pl-0 h-[calc(100vh-72px)]">
              <VisionSection />
            </CarouselItem>
            <CarouselItem className="pl-0 h-[calc(100vh-72px)]">
              <ValuesSection />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
