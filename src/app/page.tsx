import Header from "@/components/Header/header";
import { AboutSection } from "@/sections/About/about-section";
import { ContactSection } from "@/sections/Contact/contact-section";
import HeroSection from "@/sections/Hero/hero-section";
import { LeadershipSection } from "@/sections/Leadership/leadership-section";
import { LeadershipSelfAwareness } from "@/sections/LeadershipSelfAwareness/leadership-self-awareness-section";
import { MethodologySection } from "@/sections/Methodology/methodology-section";
import { PartnershipsSection } from "@/sections/Partnerships/partnerships-section";
import { SupportersSection } from "@/sections/Supporters/supporters-section";
import { TestimonialsSection } from "@/sections/Testimonials/testimonials-section";
import { ApiResponse } from "@/types/strapi";

async function fetchLandingPage(): Promise<ApiResponse['data']> {
  const params = new URLSearchParams({
    'populate[Header]': '*',
    'populate[About][populate][imageHero][populate]': 'image',
    'populate[About][populate][MissionVisionValues][populate]': 'image',
    'populate[Testimonials][populate]': '*',
    'populate[Supporters][populate]': '*',
    'populate[Contact][populate]': '*',
    'populate[Partnerships]': '*',
    'populate[Leadership][populate]': '*',
  });

  const url = `${process.env.STRAPI_URL}/api/landing-page?${params.toString()}`;

  console.log('Fetching from:', url); // Debug

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Erro na API:', errorText);
    throw new Error(`Erro ao buscar dados: ${res.status}`);
  }

  const json = await res.json();
  console.log('Resposta completa:', JSON.stringify(json, null, 2)); // Debug
  return json.data;
}

export default async function Home() {
  const landingPage = await fetchLandingPage();
  const imageHeroItems = landingPage.About.imageHero || [];

  return (
    <div className="relative">
      <Header />

      <main className="w-full snap-y snap-mandatory overflow-y-scroll h-screen">
        <HeroSection items={imageHeroItems} />
        <AboutSection />
        <MethodologySection />
        <LeadershipSelfAwareness />
        <LeadershipSection />
        <PartnershipsSection />
        <SupportersSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}