import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import AllInOneSection from "@/components/all-in-one-section";
import JetonCardSection from "@/components/jeton-card-section";
import CurrencyExchangeSection from "@/components/currency-exchange-section";
import TestimonialsSection from "@/components/testimonials-section";
import StatisticsSection from "@/components/statistics-section";
import Footer from "@/components/footer";
import FloatingChat from "@/components/floating-chat";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AllInOneSection />
      <JetonCardSection />
      <CurrencyExchangeSection />
      <TestimonialsSection />
      <StatisticsSection />
      <Footer />
      <FloatingChat />
    </div>
  );
}
