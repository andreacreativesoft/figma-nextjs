import NavbarSection from "@/components/NavbarSection";
import HeroSection from "@/components/HeroSection";
import CustomersLogos from "@/components/CustomersLogos";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedServicesSection from "@/components/TrustedServicesSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <CustomersLogos />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <TrustedServicesSection />
      <FAQSection />
    </>
  );
}
