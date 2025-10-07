'use client'
import { ImageHeroItem } from "@/types/strapi";
import ImageHeroCarousel from "./image-hero-carousel";

type AboutSectionProps = {
  items: ImageHeroItem[];
};

export function AboutSection({ items }: AboutSectionProps) {
  return (
    <section className="scroll-mt-[72px]">

      <div className="h-[calc(100vh-72px)] w-full">
        <ImageHeroCarousel items={items} />
      </div>
    </section>
  );
}