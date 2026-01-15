"use client";

import { Footer } from "@/components/Footer/footer";
import { Header } from "@/components/Header/header";
import { AboutSection } from "@/sections/About/about-section";
import { ContactSection } from "@/sections/Contact/contact-section";
import { HeroSection } from "@/sections/Hero/hero-section";
import { ImpactOverviewSection } from "@/sections/ImpactOverview/impact-overview-section";
import { LeadershipSection } from "@/sections/Leadership/leadership-section";
import { MissionVisionValuesSection } from "@/sections/MissionVisionValues/mission-vision-values-section";
import { PartnershipsSection } from "@/sections/Partnerships/partnerships-section";
import { ScheduleMethodologySection } from "@/sections/ScheduleMethodology/schedule-methodology-section";
import { SupportersSection } from "@/sections/Supporters/supporters-section";
import { TestimonialsSection } from "@/sections/Testimonials/testimonials-section";
import { VirtuousCycleLeadershipSection } from "@/sections/VirtuousCycleLeadership/virtuous-cycle-leadership-section";
import { ApiResponse } from "@/types/strapi";
import ScrollToTopButton from "@/utils/scroll-to-top-button";

type HomeContentProps = {
  landingPage: ApiResponse["data"];
};

export function HomeContent({ landingPage }: HomeContentProps) {
  const headerData = landingPage.Header;
  const imageHeroItems = landingPage.About.imageHero || [];
  const supportersData = landingPage.Supporters || undefined;
  const testimonialsData = landingPage.Testimonials;
  const leadershipData = landingPage.Leadership || [];
  const contactData = landingPage.Contact;
  const partnershipsData = landingPage.Partnerships;
  const impactData = landingPage.About.impact || undefined;

  return (
    <div className="relative">
      <Header header={headerData} />

      <main className="w-full overflow-y-scroll h-screen custom-scrollbar">
        <HeroSection items={imageHeroItems} />
        <AboutSection />
        <MissionVisionValuesSection />
        <ScheduleMethodologySection about={landingPage.About} />
        <ImpactOverviewSection impact={impactData} />
        <VirtuousCycleLeadershipSection />
        <LeadershipSection leadership={leadershipData} />
        <PartnershipsSection partnerships={partnershipsData} />
        <SupportersSection supporters={supportersData} />
        <TestimonialsSection testimonials={testimonialsData} />
        <ContactSection contact={contactData} />
        <Footer contact={contactData} />
      </main>

      <ScrollToTopButton />
    </div>
  );
}
