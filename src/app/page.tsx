import HomePageOverviewSection from "@/pages/indexPage/HomePageOverviewSection";
import IndexPageHeroSection from "@/pages/indexPage/IndexPageHeroSection";
import PartnerToolsSection from "@/pages/indexPage/PartnerToolsSection";
import QuoteSection from "@/pages/indexPage/QuoteSection";

export default function Home() {
  return (
    <div className="relative">
      <IndexPageHeroSection />
      <HomePageOverviewSection />
      <QuoteSection />
      <PartnerToolsSection />
    </div>
  );
}
