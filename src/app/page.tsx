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
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AZ Pro Services",
  description:
    "Experts en chauffage, plomberie et débouchage à Bruxelles, Brabant Wallon et Brabant Flamand.",
  url: "https://azproservices.be",
  telephone: "+32465877248",
  email: "info@azproservices.be",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chaussée de Ninove 307/1",
    addressLocality: "Anderlecht",
    postalCode: "1070",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8467,
    longitude: 4.3144,
  },
  areaServed: [
    { "@type": "City", name: "Bruxelles" },
    { "@type": "AdministrativeArea", name: "Brabant Wallon" },
    { "@type": "AdministrativeArea", name: "Brabant Flamand" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1000",
  },
  serviceType: ["Chauffage", "Plomberie", "Débouchage"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      <ContactSection />
      <FooterSection />
    </>
  );
}
