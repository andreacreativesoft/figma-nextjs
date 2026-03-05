const logos = [
  { src: "/images/logo-honda.svg", alt: "Honda", w: 129 },
  { src: "/images/logo-elastic.svg", alt: "Elastic", w: 128 },
  { src: "/images/logo-paypal.svg", alt: "PayPal", w: 143 },
  { src: "/images/logo-atlassian.svg", alt: "Atlassian", w: 178 },
  { src: "/images/logo-hubspot.svg", alt: "HubSpot", w: 114 },
  { src: "/images/logo-tesla.svg", alt: "Tesla", w: 153 },
  { src: "/images/logo-adobe.svg", alt: "Adobe", w: 133 },
];

export default function CustomersLogos() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 overflow-hidden py-14">
        <h2 className="px-4 text-center text-lg font-semibold leading-[1.3] text-brand-950 md:px-0 md:text-2xl">
          Expert certifié multi-marques de{" "}
          <span className="text-[#155dfc]">chauffage et plomberie</span>
        </h2>

        {/* Infinite scroll carousel */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-scroll items-center gap-12">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex h-12 shrink-0 items-center justify-center"
                style={{ width: logo.w }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
