import ExploreCountries from "@/components/ExploreCountries";
import FourStepProcess from "@/components/FourStepProcess";
import HeroSection from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <LogoCarousel />
      <FourStepProcess />
      <ExploreCountries />
      <Testimonials />
    </div>
  );
}
