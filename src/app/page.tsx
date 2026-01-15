import { strapiFetch } from "@/connection/api";
import { ApiResponse } from "@/types/strapi";
import { ErrorMessage } from "@/utils/error-message";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";
import { HomeContent } from "./_components/home-content";

type LandingPageData = ApiResponse["data"] | null;

async function fetchLandingPage(): Promise<LandingPageData> {
  const params = new URLSearchParams({
    "populate[Header]": "*",
    "populate[About][populate][imageHero][populate]": "image",
    "populate[About][populate][Schedule]": "*",
    "populate[About][populate][impact][populate]": "*",
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

export const metadata: Metadata = {
  title: "UUKA",
  openGraph: {
    title: "UUKA",
    type: "website",
  },
};

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

  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <Loader2 className="w-14 h-14 text-[#F59F23] animate-spin" />
        </div>
      }
    >
      <HomeContent landingPage={landingPage} />
    </Suspense>
  );
}
