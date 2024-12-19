import { CTA } from "@/components/Homepage/cta";
import { DomainSelection } from "@/components/Homepage/Domain_Selection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Homepage/Hero";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 bg-[#0d1217] text-white">
      <Hero />
      <DomainSelection />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
