'use client'

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { MethodologySection } from "./methodology-section";
import { ScheduleSection } from "./schedule-section";

export function ScheduleMethodologySection() {
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
              <ScheduleSection />
            </CarouselItem>
            <CarouselItem className="pl-0 h-[calc(100vh-72px)]">
              <MethodologySection />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}