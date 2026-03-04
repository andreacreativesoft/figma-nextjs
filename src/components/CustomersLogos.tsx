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
    <section className="flex flex-col items-center gap-10 bg-white py-14">
      <h2 className="text-2xl font-semibold leading-[1.3] text-brand-950">
        Expert certifié multi-marques de{" "}
        <span className="text-[#155dfc]">chauffage et plomberie</span>
      </h2>
      <div className="flex items-center gap-12">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex h-12 items-center justify-center"
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
    </section>
  );
}
