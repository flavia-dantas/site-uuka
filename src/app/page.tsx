import { Footer } from "@/components/Footer/footer";
import { Header } from "@/components/Header/header";
import { strapiFetch } from "@/connection/api";
import { AboutSection } from "@/sections/About/about-section";
import { ContactSection } from "@/sections/Contact/contact-section";
import { HeroSection } from "@/sections/Hero/hero-section";
import { LeadershipSection } from "@/sections/Leadership/leadership-section";
import { MissionVisionValuesSection } from "@/sections/MissionVisionValues/mission-vision-values-section";
import { PartnershipsSection } from "@/sections/Partnerships/partnerships-section";
import { ScheduleMethodologySection } from "@/sections/ScheduleMethodology/schedule-methodology-section";
import { SupportersSection } from "@/sections/Supporters/supporters-section";
import { TestimonialsSection } from "@/sections/Testimonials/testimonials-section";
import { VirtuousCycleLeadershipSection } from "@/sections/VirtuousCycleLeadership/virtuous-cycle-leadership-section";
import { ApiResponse } from "@/types/strapi";
import { ErrorMessage } from "@/utils/error-message";
import ScrollToTopButton from "@/utils/scroll-to-top-button";

type LandingPageData = ApiResponse["data"] | null;

async function fetchLandingPage(): Promise<LandingPageData> {
  const params = new URLSearchParams({
    "populate[Header]": "*",
    "populate[About][populate][imageHero][populate]": "image",
    "populate[About][populate][MissionVisionValues][populate]": "image",
    "populate[Testimonials][populate]": "*",
    "populate[Supporters][populate]": "*",
    "populate[Contact][populate][ContactList][populate]": "icon",
    "populate[Partnerships]": "*",
    "populate[Leadership][populate][LeadershipCard][populate]": "photo",
  });

  try {
    const data = await strapiFetch<ApiResponse>("landing-page", params);
    return data?.data ?? null;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    return null;
  }
}

export default async function Home() {
  const landingPage = await fetchLandingPage();

  if (!landingPage) {
    return (
      <div className="p-6">
        <ErrorMessage
          title="Ops! Algo deu errado."
          message="Não foi possível carregar os dados da página. Tente novamente mais tarde."
        />
      </div>
    );
  }

  const headerData = landingPage.Header;
  const imageHeroItems = landingPage.About.imageHero || [];
  const supportersData = landingPage.Supporters || undefined;
  const testimonialsData = landingPage.Testimonials;
  const leadershipData = landingPage.Leadership || [];
  const contactData = landingPage.Contact;
  const partnershipsData = landingPage.Partnerships;

  return (
    <div className="relative">
      <Header header={headerData} />

      <main className="w-full overflow-y-scroll h-screen custom-scrollbar">
        <HeroSection items={imageHeroItems} />
        <AboutSection />
        <MissionVisionValuesSection />
        <ScheduleMethodologySection />
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
