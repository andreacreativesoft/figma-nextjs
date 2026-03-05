"use client";

import { useState, useEffect } from "react";

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-1 flex-col gap-6 rounded-lg border border-[#E4E4E7] bg-white p-6 shadow-md">
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
  );
}

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/api/services")
      .then((r) => r.json())
      .then(setServices);
  }, []);

  if (services.length === 0) return null;

  return (
    <section className="bg-[#F4F4F5]">
      <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-8 lg:px-[182px]">
      <div className="flex flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="text-base font-semibold uppercase tracking-[0.32px] text-[#155dfc]">
            NOS SERVICES
          </span>
          <h2 className="text-3xl font-semibold leading-[1.2] text-brand-950 md:text-5xl">
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

        {/* Cards - carousel if more than 3 */}
        {services.length <= 3 ? (
          <div className="flex flex-col gap-6 md:flex-row">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex animate-scroll items-center gap-6" style={{ width: "max-content" }}>
              {[...services, ...services].map((service, i) => (
                <div key={`${service.id}-${i}`} className="w-[340px] shrink-0">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
