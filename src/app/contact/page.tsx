import type { Metadata } from "next";
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Contact - AZ Pro Services | Chauffage, Plomberie & Débouchage",
  description:
    "Contactez AZ Pro Services pour vos besoins en chauffage, plomberie et débouchage à Bruxelles, Brabant Wallon et Brabant Flamand. Appelez le 0465877248 ou remplissez notre formulaire.",
  alternates: {
    canonical: "/contact",
  },
};

function PhoneIcon() {
  return (
    <svg
      className="h-6 w-6"
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
  );
}

function MailIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m22 6-10 7L2 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <NavbarSection />

      {/* Hero banner */}
      <section className="relative">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/contact-bg.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(10,53,87,0.85)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-20 text-center md:px-8 md:py-28">
          <span className="text-base font-semibold uppercase tracking-[0.32px] text-[#155dfc]">
            CONTACT
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-[1.2] text-white md:text-5xl">
            Contactez-nous
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.5] text-[#F4F4F5]/80">
            Besoin d&apos;un chauffagiste, plombier ou déboucheur ? Remplissez
            le formulaire ci-dessous ou appelez-nous directement. Nous
            intervenons rapidement à Bruxelles, Brabant Wallon, Brabant Flamand
            et Namur.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 lg:px-[182px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-[#E4E4E7] bg-white p-6 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#155dfc]/10 text-[#155dfc]">
                <PhoneIcon />
              </div>
              <h3 className="text-lg font-semibold text-brand-950">
                Téléphone
              </h3>
              <a
                href="tel:0465877248"
                className="text-base text-[#52525C] hover:text-[#155dfc]"
              >
                0465877248
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-[#E4E4E7] bg-white p-6 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#155dfc]/10 text-[#155dfc]">
                <MailIcon />
              </div>
              <h3 className="text-lg font-semibold text-brand-950">Email</h3>
              <a
                href="mailto:info@azproservices.be"
                className="text-base text-[#52525C] hover:text-[#155dfc]"
              >
                info@azproservices.be
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-[#E4E4E7] bg-white p-6 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#155dfc]/10 text-[#155dfc]">
                <MapPinIcon />
              </div>
              <h3 className="text-lg font-semibold text-brand-950">Adresse</h3>
              <p className="text-base text-[#52525C]">
                Chaussée de Ninove 307/1,
                <br />
                1070 Anderlecht
              </p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-[#E4E4E7] bg-white p-6 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#155dfc]/10 text-[#155dfc]">
                <ClockIcon />
              </div>
              <h3 className="text-lg font-semibold text-brand-950">Horaires</h3>
              <p className="text-base text-[#52525C]">
                Lun - Ven: 8h - 18h
                <br />
                Sam: 9h - 14h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map section */}
      <section className="bg-[#F4F4F5]">
        <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-8 lg:px-[182px]">
          <div className="flex flex-col gap-16">
            {/* Header */}
            <div className="flex flex-col items-center gap-5 text-center">
              <span className="text-base font-semibold uppercase tracking-[0.32px] text-[#155dfc]">
                FORMULAIRE
              </span>
              <h2 className="text-3xl font-semibold leading-[1.2] text-brand-950 md:text-5xl">
                Envoyez-nous un message
              </h2>
              <p className="max-w-3xl text-base leading-[1.5] text-[#52525C]">
                Remplissez le formulaire ci-dessous et notre équipe vous
                recontactera dans les plus brefs délais.
              </p>
            </div>

            {/* Form + Map card */}
            <div className="flex flex-col gap-8 rounded-2xl border border-[#E4E4E7] bg-white p-6 shadow-sm lg:flex-row lg:gap-10 lg:p-10">
              {/* Form */}
              <div className="flex flex-1 flex-col gap-6">
                <form
                  action="https://formsubmit.co/info@azproservices.be"
                  method="POST"
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium leading-5 text-brand-950">
                      Nom complet
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-3 text-sm text-gray-900 placeholder-[#9F9FA9] outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium leading-5 text-brand-950">
                      Adresse email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="nom@exemple.com"
                      className="w-full rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-3 text-sm text-gray-900 placeholder-[#9F9FA9] outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium leading-5 text-brand-950">
                      Numéro de téléphone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="04XX XXX XXX"
                      className="w-full rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-3 text-sm text-gray-900 placeholder-[#9F9FA9] outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium leading-5 text-brand-950">
                      Sujet
                    </label>
                    <select
                      name="subject"
                      className="w-full rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="chauffage">Chauffage</option>
                      <option value="plomberie">Plomberie</option>
                      <option value="debouchage">Débouchage</option>
                      <option value="devis">Demande de devis</option>
                      <option value="urgence">Dépannage urgent</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium leading-5 text-brand-950">
                      Votre message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Décrivez votre besoin..."
                      className="w-full resize-none rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-3 text-sm text-gray-900 placeholder-[#9F9FA9] outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#155dfc] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1447e6]"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="min-h-[400px] flex-1 overflow-hidden rounded-xl lg:min-h-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.0!2d4.3!3d50.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUwJzI0LjAiTiA0wrAxOCcwMC4wIkU!5e0!3m2!1sfr!2sbe!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AZ Pro Services - Anderlecht"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#155dfc]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 text-center md:px-8">
          <h2 className="text-2xl font-semibold leading-[1.3] text-white md:text-3xl">
            Besoin d&apos;une intervention rapide ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.5] text-white/80">
            Notre équipe est disponible pour un dépannage urgent en chauffage,
            plomberie et débouchage.
          </p>
          <a
            href="tel:0465877248"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#155dfc] shadow-sm transition hover:bg-gray-50"
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
        </div>
      </section>

      <FooterSection />
    </>
  );
}
