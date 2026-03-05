export default function FooterSection() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[72px] py-14">
        <div className="flex flex-col gap-14">
          {/* Main content */}
          <div className="flex items-start justify-between">
            {/* Left: Logo + Description */}
            <div className="flex flex-1 items-center gap-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/footer-logo.svg"
                alt="AZ Pro Services"
                className="h-[100px] w-auto shrink-0"
              />
              <p className="w-[382px] text-base leading-[1.5] text-[#52525C]">
                Services professionnels de chauffage et plomberie (Bruxelles,
                Brabant Wallon, Brabant Flamand) et débouchage (Namur)
              </p>
            </div>

            {/* Right: Pages + Contacts */}
            <div className="flex flex-1 justify-end gap-6">
              {/* Pages */}
              <div className="flex w-[196px] flex-col gap-8">
                <h4 className="text-lg font-semibold leading-[1.5] text-[#155dfc]">
                  Pages
                </h4>
                <nav className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="text-base leading-[1.5] text-[#52525C] hover:text-brand-950"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-base leading-[1.5] text-[#52525C] hover:text-brand-950"
                  >
                    À propos de nous
                  </a>
                  <a
                    href="#"
                    className="text-base leading-[1.5] text-[#52525C] hover:text-brand-950"
                  >
                    Nos services
                  </a>
                  <a
                    href="#"
                    className="text-base leading-[1.5] text-[#52525C] hover:text-brand-950"
                  >
                    Contact
                  </a>
                </nav>
              </div>

              {/* Contacts */}
              <div className="flex w-[306px] flex-col gap-8">
                <h4 className="text-lg font-semibold leading-[1.5] text-[#155dfc]">
                  Contacts
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon-map-pin.svg"
                      alt=""
                      className="h-5 w-5 shrink-0"
                    />
                    <span className="text-base leading-[1.5] text-[#52525C]">
                      Chaussée de Ninove 307/1, 1070 Anderlecht
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon-phone-gray.svg"
                      alt=""
                      className="h-5 w-5 shrink-0"
                    />
                    <a
                      href="tel:0465877248"
                      className="text-base leading-[1.5] text-[#52525C] hover:text-brand-950"
                    >
                      0465877248
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon-envelope.svg"
                      alt=""
                      className="h-5 w-5 shrink-0"
                    />
                    <a
                      href="mailto:info@azproservices.be"
                      className="text-base leading-[1.5] text-[#52525C] hover:text-brand-950"
                    >
                      info@azproservices.be
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider + Copyright */}
          <div className="flex flex-col items-center gap-8 overflow-hidden">
            <div className="h-px w-full bg-[#E4E4E7]" />
            <p className="text-center text-base leading-[1.5] text-[#71717B]">
              Copyright © 2020. LogoIpsum. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
