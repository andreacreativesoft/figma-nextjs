const services = [
  {
    image: "/images/service-chauffagiste.jpg",
    title: "Chauffagiste",
    description:
      "Chauffagiste agréé - Bruxelles, Brabant Wallon, Brabant Flamand",
    href: "#",
  },
  {
    image: "/images/service-plombier.jpg",
    title: "Plombier",
    description:
      "Plombier professionnel - Bruxelles, Brabant Wallon, Brabant Flamand",
    href: "#",
  },
  {
    image: "/images/service-deboucheur.jpg",
    title: "Déboucheur",
    description: "Débouchage expert - Namur",
    href: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F4F4F5] px-[182px] py-24">
      <div className="flex flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="text-base font-semibold uppercase tracking-[0.32px] text-[#155dfc]">
            NOS SERVICES
          </span>
          <h2 className="text-5xl font-semibold leading-[1.2] text-brand-950">
            Notre expertise - nos services
          </h2>
          <p className="max-w-3xl text-base leading-6 text-[#52525C]">
            Que ce soit pour un entretien de chaudière, un dépannage urgent, le
            placement d&apos;équipements sanitaires ou des canalisations
            bouchées, nous répondons à tous vos besoins en chauffage et
            plomberie (Bruxelles, Brabant Wallon, Brabant Flamand) et
            débouchage (Namur)
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-1 flex-col gap-6 rounded-lg border border-[#E4E4E7] bg-white p-6 shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full rounded-xl object-cover"
              />
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold leading-[1.3] text-brand-950">
                  {service.title}
                </h3>
                <p className="text-base leading-6 text-[#52525C]">
                  {service.description}
                </p>
              </div>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1447E6] hover:underline"
              >
                Read more
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icon-arrow-right.svg"
                  alt=""
                  className="h-[7px] w-[11px]"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
