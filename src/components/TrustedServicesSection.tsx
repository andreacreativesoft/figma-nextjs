const features = [
  {
    title: "Services de confiance avec attention personnalisée",
    description:
      "Nous croyons en la fourniture de plus que de simples services experts - nous nous efforçons de fournir une expérience personnalisée pour chaque client.",
  },
  {
    title: "Système de réservation et de planification",
    description:
      "Réservez facilement vos services en ligne. Choisissez une date et une heure convenables, consultez les disponibilités.",
  },
];

export default function TrustedServicesSection() {
  return (
    <section className="relative bg-brand-950">
      {/* Right side background image */}
      <div className="absolute inset-y-0 right-0 w-[47%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/trusted-services.jpg"
          alt="Service de confiance"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="flex w-[762px] shrink-0 flex-col justify-center gap-[34px] py-24 pl-[72px] pr-[164px]">
          {/* Title */}
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-semibold leading-[1.2] text-white">
              Service de confiance personnalisé
            </h2>
            <p className="text-base leading-[1.5] text-[#E4E4E7]">
              Nous nous efforçons de fournir une expérience personnalisée pour
              chaque client. Dès le moment où vous nous contactez.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-8 border-t border-white/20 pt-[30px]">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icon-check-blue.svg"
                  alt=""
                  className="mt-0.5 h-8 w-8 shrink-0"
                />
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-xl font-semibold leading-[1.3] text-white">
                    {feature.title}
                  </h3>
                  <p className="text-lg leading-[1.5] text-[#E4E4E7]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
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
    </section>
  );
}
