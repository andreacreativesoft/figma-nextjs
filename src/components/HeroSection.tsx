"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-0 lg:min-h-[775px]">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero-bg-desktop.webp 1x, /images/hero-bg-desktop-2x.webp 2x"
            type="image/webp"
          />
          <source
            srcSet="/images/hero-bg-mobile.webp 1x, /images/hero-bg-mobile-2x.webp 2x"
            type="image/webp"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-bg.jpg"
            alt="AZ Pro Services - Plombier professionnel"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-950/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center justify-between px-4 py-12 md:px-8 lg:flex-row lg:px-[72px] lg:py-[85px] lg:min-h-[775px]">
      {/* Left content */}
      <div className="flex w-full flex-col gap-[52px] lg:w-[636px]">
        <div className="flex flex-col gap-5">
          <p className="text-base font-semibold uppercase tracking-[0.32px] text-[#51a2ff]">
            AZ Pro Services
          </p>
          <h1 className="text-3xl font-semibold leading-[1.2] text-white md:text-4xl lg:text-[60px]">
            Vos experts en chauffage, plomberie &amp; débouchage
          </h1>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-5">
          {/* Avatar stack */}
          <div className="flex items-center -space-x-4 pr-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={`/images/avatar-${i}.jpg`}
                alt={`Client ${i}`}
                width={44}
                height={44}
                className="rounded-full border-2 border-[#1c398e]"
              />
            ))}
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 text-[13px] font-semibold leading-[1.3] md:text-xl">
              <span className="text-[#51a2ff]">1K+</span>
              <span className="text-white">clients satisfaits</span>
            </div>
            <p className="text-[13px] font-semibold leading-[1.5] text-white md:text-base">
              Profitez de notre expertise reconnue
            </p>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="w-full shrink-0 overflow-hidden rounded-lg border border-[#1c398e] bg-brand-950 p-8 shadow-md lg:w-[493px]">
        <div className="flex flex-col gap-8">
          {/* Form header */}
          <div className="flex flex-col gap-2.5">
            <h2 className="text-2xl font-semibold leading-[1.3] text-white">
              Formulaire de contact
            </h2>
            <p className="text-base font-normal leading-[1.5] text-[#f4f4f5]">
              Remplissez le formulaire ci-dessous afin qu&apos;un membre de
              notre équipe puisse vous recontacter.
            </p>
          </div>

          {/* Form fields */}
          <form action="https://formsubmit.co/info@azproservices.be" method="POST" className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-5 text-white"
              >
                Your email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@flowbite.com"
                className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-sm leading-5 text-white placeholder-[#9f9fa9] shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="subject"
                className="text-sm font-medium leading-5 text-white"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Enter your subject"
                className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-sm leading-5 text-white placeholder-[#9f9fa9] shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-5 text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-xl border border-white/15 bg-white/10 p-3.5 text-sm leading-5 text-white placeholder-[#9f9fa9] shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
              />
              <p className="text-xs leading-5 text-[#9f9fa9]">4/500 words</p>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#155dfc] px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] hover:bg-[#1447e6]"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
