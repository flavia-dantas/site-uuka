'use client'

import { ImageHeroItem } from "@/types/strapi";
import ImageHeroCarousel from "./image-hero-carousel";

type AboutSectionProps = {
  items: ImageHeroItem[];
};

export function AboutSection({ items }: AboutSectionProps) {
  return (
    <section className="pt-[72px] h-screen w-full">
      <div className="h-[calc(100vh-72px)] w-full overflow-hidden">
        <ImageHeroCarousel items={items} />
      </div>
    </section>
  );
}