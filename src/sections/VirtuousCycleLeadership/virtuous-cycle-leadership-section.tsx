'use client'

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { LeadershipSection } from "./leadership-section";
import { VirtuousCycleSection } from "./virtuous-cycle-section";

export function VirtuousCycleLeadershipSection() {
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
              <VirtuousCycleSection />
            </CarouselItem>
            <CarouselItem className="pl-0 h-[calc(100vh-72px)]">
              <LeadershipSection />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
