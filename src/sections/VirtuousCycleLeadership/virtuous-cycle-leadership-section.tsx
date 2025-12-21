"use client";

import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo, useState } from "react";
import { LeadershipSection } from "./leadership-section";
import { VirtuousCycleSection } from "./virtuous-cycle-section";

export function VirtuousCycleLeadershipSection() {
  const plugin = useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: true }),
    []
  );

  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const map: Record<string, number> = {
      "#ciclo-virtuoso": 0,
      "#lideranca": 1,
    };

    function handleHash() {
      const idx = map[window.location.hash];
      if (idx === undefined) return;

      const targetId = window.location.hash.replace("#", "");
      const targetEl = document.getElementById(targetId);
      const carouselRegion = targetEl?.closest(
        '[role="region"][data-slot="carousel"]'
      ) as HTMLElement | undefined;

      if (carouselRegion)
        carouselRegion.scrollIntoView({ behavior: "smooth", block: "start" });

      const currentApi = api!;
      setTimeout(() => currentApi.scrollTo(idx), 700);
    }

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [api]);

  return (
    <section className="w-full">
      <div className="w-full overflow-hidden">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            <CarouselItem className="pl-0">
              <VirtuousCycleSection />
            </CarouselItem>
            <CarouselItem className="pl-0">
              <LeadershipSection />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
