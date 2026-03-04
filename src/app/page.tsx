import NavbarSection from "@/components/NavbarSection";
import HeroSection from "@/components/HeroSection";
import CustomersLogos from "@/components/CustomersLogos";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <CustomersLogos />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
    </>
  );
}
