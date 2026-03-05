const features = [
  {
    icon: "/images/icon-why-1.svg",
    title: "Expertise reconnue",
    description: "Des professionnels pour des solutions sûres et efficaces.",
  },
  {
    icon: "/images/icon-why-2.svg",
    title: "Innovation continue",
    description: "Des solutions à la pointe de la technologie.",
  },
  {
    icon: "/images/icon-why-3.svg",
    title: "Service client exceptionnel",
    description: "Une assistance dédiée pour répondre à vos besoins.",
  },
  {
    icon: "/images/icon-why-4.svg",
    title: "Engagement éthique",
    description: "Des pratiques durables et responsables.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-brand-950">
      <div className="mx-auto flex max-w-[1440px]">
      {/* Left Content */}
      <div className="flex w-[762px] shrink-0 flex-col justify-center gap-[34px] overflow-hidden py-24 pl-[72px] pr-[164px]">
        {/* Title */}
        <div className="flex flex-col gap-5">
          <span className="text-base font-semibold uppercase leading-[1.5] tracking-[0.32px] text-[#51a2ff]">
            CE QUI NOUS RENDS DIFFÉRENT
          </span>
          <h2 className="text-5xl font-semibold leading-[1.2] text-white">
            Pourquoi choisir AZ Pro Services
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-lg"
            >
              {/* Icon */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.icon}
                  alt=""
                  className="h-5 w-5"
                />
              </div>
              {/* Text */}
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

      {/* Right Image */}
      <div className="h-[797px] w-[678px] shrink-0 overflow-hidden bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/why-choose-us.jpg"
          alt="Pourquoi choisir AZ Pro Services"
          className="h-full w-full object-cover"
        />
      </div>
      </div>
    </section>
  );
}
