'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Testimonials } from '@/types/strapi'
import { Star } from 'lucide-react'

type TestimonialsSectionProps = {
  testimonials?: Testimonials
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const testimonialCards = testimonials?.TestimonialsCard || []

  if (!testimonialCards || testimonialCards.length === 0) {
    return (
      <section id="depoimentos" className="pt-[72px] h-screen w-full bg-white text-black">
        <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 pb-16">
          <div className="flex-1 flex items-center justify-center">
            <p className="text-center text-black">Nenhum depoimento disponível</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black">
            depoimentos
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="depoimentos" className="pt-[72px] h-screen w-full bg-white text-black">
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 gap-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonialCards.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="bg-[#f9c57b] rounded-2xl p-4 h-80 flex flex-col justify-between">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={`w-5 h-5 ${index < testimonial.rating
                              ? 'fill-black text-black'
                              : 'fill-[#f9c57b] text-black'
                              }`}
                          />
                        ))}
                      </div>

                      <div className="mb-4">
                        <h3 className="font-bold text-black text-lg mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role === "Mentee" ? "Mentorado" : "Mentor"}
                        </p>
                      </div>

                      <p className="text-black text-sm leading-relaxed flex-1">
                        {testimonial.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-8 sm:-left-10 md:-left-12 top-1/2 -translate-y-1/2 text-black border-none w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              <CarouselNext className="absolute -right-8 sm:-right-10 md:-right-12 top-1/2 -translate-y-1/2 text-black border-none w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </Carousel>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black">
          depoimentos
        </h2>
      </div>
    </section>
  );
} 
