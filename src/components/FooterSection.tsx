"use client";

import { useState, useEffect } from "react";

interface SiteInfo {
  phone: string;
  email: string;
  address: string;
}

export default function FooterSection() {
  const [info, setInfo] = useState<SiteInfo>({
    phone: "0465877248",
    email: "info@azproservices.be",
    address: "Chaussée de Ninove 307/1, 1070 Anderlecht",
  });

  useEffect(() => {
    fetch("/api/site-info")
      .then((r) => r.json())
      .then(setInfo);
  }, []);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.address)}`;

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 lg:px-[72px]">
        <div className="flex flex-col gap-14">
          {/* Main content */}
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-0 lg:justify-between">
            {/* Left: Logo + Description */}
            <div className="flex flex-1 flex-col items-center gap-4 md:flex-row md:gap-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/footer-logo.svg"
                alt="AZ Pro Services"
                className="h-[100px] w-auto shrink-0"
              />
              <p className="w-full text-base leading-[1.5] text-[#52525C] lg:w-[382px]">
                Services professionnels de chauffage et plomberie (Bruxelles,
                Brabant Wallon, Brabant Flamand) et débouchage (Namur)
              </p>
            </div>

            {/* Right: Pages + Contacts */}
            <div className="flex flex-1 flex-col gap-8 md:flex-row md:gap-6 lg:justify-end">
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
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base leading-[1.5] text-[#52525C] hover:text-brand-950"
                    >
                      {info.address}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon-phone-gray.svg"
                      alt=""
                      className="h-5 w-5 shrink-0"
                    />
                    <a
                      href={`tel:${info.phone}`}
                      className="text-base leading-[1.5] text-[#52525C] hover:text-brand-950"
                    >
                      {info.phone}
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
                      href={`mailto:${info.email}`}
                      className="text-base leading-[1.5] text-[#52525C] hover:text-brand-950"
                    >
                      {info.email}
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
