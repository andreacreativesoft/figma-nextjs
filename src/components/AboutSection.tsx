const benefits = [
  {
    icon: "/images/icon-benefit-1.svg",
    text: "Chauffagistes qualifiés,\ntravail de qualité",
  },
  {
    icon: "/images/icon-benefit-2.svg",
    text: "Service fiable, rapide et\nefficace",
  },
  {
    icon: "/images/icon-benefit-3.svg",
    text: "Entreprise assurée\net certifiée",
  },
  {
    icon: "/images/icon-benefit-4.svg",
    text: "Tarifs abordables, sans\nsurprises",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[72px] py-24">
      <div className="flex flex-col gap-[72px]">
        {/* Top: Image + Content */}
        <div className="flex items-center gap-[132px]">
          {/* Image */}
          <div className="h-[520px] w-[526px] shrink-0 overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-image.jpg"
              alt="AZ Pro Services"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex w-[636px] flex-col gap-[51px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <span className="text-base font-semibold uppercase leading-[1.5] tracking-[0.32px] text-[#155dfc]">
                  QUI NOUS SOMMES
                </span>
                <h2 className="text-5xl font-semibold leading-[1.2] text-brand-950">
                  Solutions complètes pour votre maison
                </h2>
              </div>
              <div className="text-base leading-[1.5] text-[#52525C]">
                <p>
                  Chez AZ Pro Services, notre mission est de fournir des
                  services de chauffage, plomberie et débouchage rapides,
                  fiables et de haute qualité, adaptés aux besoins uniques de
                  nos clients.
                </p>
                <p className="mt-4">
                  Des fuites mineures aux urgences de chauffage majeures,
                  entretien de chaudière ou dépannage urgent, notre équipe
                  d&apos;experts est prête à vous offrir des solutions rapides,
                  fiables et abordables.
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
          {/* Divider */}
          <hr className="border-t border-[#E4E4E7]" />

          {/* Benefits list */}
          <div className="flex items-center gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex w-[306px] items-center gap-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={benefit.icon}
                  alt=""
                  className="h-8 w-8 shrink-0"
                />
                <span className="whitespace-pre-wrap text-base font-semibold leading-[1.5] text-brand-950">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
