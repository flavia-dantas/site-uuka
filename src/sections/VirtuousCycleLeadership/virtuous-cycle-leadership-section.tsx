'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { LeadershipSection } from './leadership-section';
import { VirtuousCycleSection } from './virtuous-cycle-section';

export function VirtuousCycleLeadershipSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="w-full">
      <div className="w-full overflow-hidden">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[plugin.current]}
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
