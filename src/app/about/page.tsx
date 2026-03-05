import type { Metadata } from "next";
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "À propos - AZ Pro Services | Chauffage, Plomberie & Débouchage",
  description:
    "Découvrez AZ Pro Services, votre expert en chauffage, plomberie et débouchage à Bruxelles, Brabant Wallon, Brabant Flamand et Namur. Une équipe qualifiée à votre service.",
  alternates: {
    canonical: "/about",
  },
};

const benefits = [
  {
    icon: "/images/icon-benefit-1.svg",
    text: "Chauffagistes qualifiés, travail de qualité",
  },
  {
    icon: "/images/icon-benefit-2.svg",
    text: "Service fiable, rapide et efficace",
  },
  {
    icon: "/images/icon-benefit-3.svg",
    text: "Entreprise assurée et certifiée",
  },
  {
    icon: "/images/icon-benefit-4.svg",
    text: "Tarifs abordables, sans surprises",
  },
];

const values = [
  {
    icon: "/images/icon-why-1.svg",
    title: "Expertise reconnue",
    description:
      "Des professionnels qualifiés avec des années d\u2019expérience dans le chauffage, la plomberie et le débouchage.",
  },
  {
    icon: "/images/icon-why-2.svg",
    title: "Innovation continue",
    description:
      "Nous utilisons des techniques et équipements modernes pour des résultats optimaux et durables.",
  },
  {
    icon: "/images/icon-why-3.svg",
    title: "Service client exceptionnel",
    description:
      "Une assistance dédiée et réactive pour répondre à tous vos besoins, même en urgence.",
  },
  {
    icon: "/images/icon-why-4.svg",
    title: "Engagement éthique",
    description:
      "Des pratiques transparentes, des tarifs honnêtes et un respect total de votre domicile.",
  },
];

const steps = [
  {
    icon: "/images/icon-step-phone.svg",
    title: "Contactez-nous",
    description:
      "Remplissez notre formulaire en ligne ou appelez-nous directement pour nous faire part de vos besoins spécifiques.",
  },
  {
    icon: "/images/icon-step-eval.svg",
    title: "Évaluation",
    description:
      "Nous vous rencontrons sur place pour évaluer l\u2019installation et élaborer un plan d\u2019intervention personnalisé.",
  },
  {
    icon: "/images/icon-step-team.svg",
    title: "Intervention",
    description:
      "Nous déployons notre équipe d\u2019experts pour résoudre efficacement vos problèmes de chauffage, plomberie ou débouchage.",
  },
];

export default function AboutPage() {
  return (
    <>
      <NavbarSection />

      {/* Hero banner */}
      <section className="relative">
        <div className="absolute inset-0">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/contact-bg-desktop.webp"
              type="image/webp"
            />
            <source
              srcSet="/images/contact-bg-mobile.webp 1x, /images/contact-bg-mobile-2x.webp 2x"
              type="image/webp"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/contact-bg.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </picture>
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
            AZ Pro Services est votre partenaire de confiance pour tous vos
            besoins en chauffage, plomberie et débouchage à Bruxelles, Brabant
            Wallon, Brabant Flamand et Namur.
          </p>
        </div>
      </section>

      {/* About section - image + content */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-8 lg:px-[72px]">
          <div className="flex flex-col gap-[72px]">
            {/* Top: Image + Content */}
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-[132px]">
              {/* Image */}
              <div className="h-[300px] w-full shrink-0 overflow-hidden rounded-lg lg:h-[520px] lg:w-[526px]">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="/images/about-image-desktop.webp 1x, /images/about-image-desktop-2x.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcSet="/images/about-image-mobile.webp 1x, /images/about-image-mobile-2x.webp 2x"
                    type="image/webp"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about-image.jpg"
                    alt="AZ Pro Services"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </div>

              {/* Content */}
              <div className="flex w-full flex-col gap-[51px] lg:w-[636px]">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-5">
                    <span className="text-base font-semibold uppercase leading-[1.5] tracking-[0.32px] text-[#155dfc]">
                      NOTRE HISTOIRE
                    </span>
                    <h2 className="text-3xl font-semibold leading-[1.2] text-brand-950 md:text-5xl">
                      Solutions complètes pour votre maison
                    </h2>
                  </div>
                  <div className="text-base leading-[1.5] text-[#52525C]">
                    <p>
                      Chez AZ Pro Services, notre mission est de fournir des
                      services de chauffage, plomberie et débouchage rapides,
                      fiables et de haute qualité, adaptés aux besoins uniques
                      de nos clients.
                    </p>
                    <p className="mt-4">
                      Des fuites mineures aux urgences de chauffage majeures,
                      entretien de chaudière ou dépannage urgent, notre équipe
                      d&apos;experts est prête à vous offrir des solutions
                      rapides, fiables et abordables.
                    </p>
                    <p className="mt-4">
                      Nous intervenons rapidement dans les régions de Bruxelles,
                      Brabant Wallon et Brabant Flamand pour le chauffage et la
                      plomberie, ainsi qu&apos;à Namur pour le débouchage.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="tel:0465877248"
                  className="inline-flex w-fit items-center justify-center gap-1.5 rounded-xl bg-[#155dfc] px-6 py-3.5 text-base font-medium leading-6 text-white shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] hover:bg-[#1447e6]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/icon-phone-white-lg.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  0465877248
                </a>
              </div>
            </div>

            {/* Bottom: Benefits */}
            <div className="flex flex-col gap-6">
              <hr className="border-t border-[#E4E4E7]" />
              <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.text}
                    className="flex items-center gap-4 lg:flex-1"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={benefit.icon}
                      alt=""
                      className="h-8 w-8 shrink-0"
                    />
                    <span className="text-sm font-semibold leading-[1.5] text-brand-950 lg:text-base">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="relative bg-brand-950">
        <div className="absolute inset-y-0 right-0 hidden w-[47%] lg:block">
          <picture>
            <source
              srcSet="/images/why-choose-us-desktop.webp 1x, /images/why-choose-us-desktop-2x.webp 2x"
              type="image/webp"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/why-choose-us.jpg"
              alt="Pourquoi choisir AZ Pro Services"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div className="flex w-full shrink-0 flex-col justify-center gap-[34px] px-4 py-24 md:px-8 lg:w-[762px] lg:pl-[72px] lg:pr-[164px]">
            <div className="flex flex-col gap-5">
              <span className="text-base font-semibold uppercase leading-[1.5] tracking-[0.32px] text-[#51a2ff]">
                NOS VALEURS
              </span>
              <h2 className="text-3xl font-semibold leading-[1.2] text-white md:text-5xl">
                Pourquoi choisir AZ Pro Services
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 rounded-lg"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={value.icon}
                      alt=""
                      className="h-5 w-5"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-xl font-semibold leading-[1.3] text-white">
                      {value.title}
                    </h3>
                    <p className="text-lg leading-[1.5] text-[#E4E4E7]">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="tel:0465877248"
              className="inline-flex w-fit items-center justify-center gap-1.5 rounded-xl bg-[#155dfc] px-6 py-3.5 text-base font-medium leading-6 text-white shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] hover:bg-[#1447e6]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/icon-phone-white-lg.svg"
                alt=""
                className="h-5 w-5"
              />
              0465877248
            </a>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-8 lg:px-[182px]">
          <div className="flex flex-col items-center gap-[72px]">
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="flex flex-col items-center gap-5">
                <span className="text-base font-semibold uppercase leading-[1.5] tracking-[0.32px] text-[#155dfc]">
                  NOTRE APPROCHE
                </span>
                <h2 className="text-3xl font-semibold leading-[1.2] text-brand-950 md:text-5xl">
                  Comment ça marche
                </h2>
              </div>
              <p className="max-w-[738px] text-base leading-[1.5] text-[#52525C]">
                Une approche simple et efficace pour répondre à tous vos besoins
                en chauffage, plomberie (Bruxelles, Brabant Wallon, Brabant
                Flamand) et débouchage (Namur).
              </p>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-8 md:flex-row md:gap-6">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-1 flex-col items-center gap-6 px-4 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EFF6FF]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.icon} alt="" className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="text-2xl font-semibold leading-[1.3] text-brand-950">
                      {step.title}
                    </h3>
                    <p className="text-base leading-[1.5] text-[#52525C]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#155dfc]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 text-center md:px-8">
          <h2 className="text-2xl font-semibold leading-[1.3] text-white md:text-3xl">
            Besoin d&apos;un service professionnel ?
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
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
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
