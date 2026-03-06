import type { Metadata } from "next";
import NavbarSection from "@/components/NavbarSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "À propos - AZ Pro Services | Chauffage, Plomberie & Débouchage",
  description:
    "Découvrez AZ Pro Services, votre expert certifié en chauffage, plomberie et débouchage à Bruxelles, Brabant Wallon, Brabant Flamand et Namur. Plus de 1000 clients satisfaits.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <NavbarSection />

      {/* Hero banner */}
      <section className="relative">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-image.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(10,53,87,0.85)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-20 text-center md:px-8 md:py-28">
          <span className="text-base font-semibold uppercase tracking-[0.32px] text-[#155dfc]">
            QUI NOUS SOMMES
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-[1.2] text-white md:text-5xl">
            À propos de nous
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.5] text-[#F4F4F5]/80">
            Depuis notre création, AZ Pro Services s&apos;engage à fournir des
            services de chauffage, plomberie et débouchage de la plus haute
            qualité à Bruxelles et ses environs.
          </p>
        </div>
      </section>

      {/* Reuse existing sections */}
      <AboutSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <TestimonialsSection />

      {/* CTA Banner */}
      <section className="bg-[#155dfc]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 text-center md:px-8">
          <h2 className="text-2xl font-semibold leading-[1.3] text-white md:text-3xl">
            Prêt à travailler avec nous ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.5] text-white/80">
            Contactez-nous dès maintenant pour un devis gratuit ou un dépannage
            urgent en chauffage, plomberie et débouchage.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:0465877248"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#155dfc] shadow-sm transition hover:bg-gray-50"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Appelez le 0465877248
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
            >
              Formulaire de contact
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
