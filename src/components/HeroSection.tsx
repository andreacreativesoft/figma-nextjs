"use client";

import { Button, Label, TextInput, Textarea } from "flowbite-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[775px] items-center justify-between px-[72px] py-[85px]">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="AZ Pro Services - Plombier professionnel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-950/80" />
      </div>

      {/* Left content */}
      <div className="relative z-10 flex w-[636px] flex-col gap-[52px]">
        <div className="flex flex-col gap-5">
          <p className="text-base font-semibold uppercase tracking-wider text-[#51a2ff]">
            AZ Pro Services
          </p>
          <h1 className="text-[60px] font-semibold leading-[1.2] text-white">
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
            <div className="flex items-center gap-2 text-xl font-semibold">
              <span className="text-[#51a2ff]">1K+</span>
              <span className="text-white">clients satisfaits</span>
            </div>
            <p className="text-base font-semibold text-white">
              Profitez de notre expertise reconnue
            </p>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="relative z-10 w-[493px] shrink-0 overflow-hidden rounded-lg border border-[#1c398e] bg-brand-950 p-8 shadow-md">
        <div className="flex flex-col gap-8">
          {/* Form header */}
          <div className="flex flex-col gap-2.5">
            <h2 className="text-2xl font-semibold leading-[1.3] text-white">
              Formulaire de contact
            </h2>
            <p className="text-base text-gray-100">
              Remplissez le formulaire ci-dessous afin qu&apos;un membre de
              notre équipe puisse vous recontacter.
            </p>
          </div>

          {/* Form fields */}
          <form className="flex flex-col gap-4">
            <div>
              <Label
                htmlFor="email"
                className="mb-2.5 text-sm font-medium text-white"
              >
                Your email
              </Label>
              <TextInput
                id="email"
                type="email"
                placeholder="name@flowbite.com"
                className="[&_input]:rounded-xl [&_input]:border-white/15 [&_input]:bg-white/10 [&_input]:text-white [&_input]:placeholder-[#9f9fa9]"
              />
            </div>

            <div>
              <Label
                htmlFor="subject"
                className="mb-2.5 text-sm font-medium text-white"
              >
                Subject
              </Label>
              <TextInput
                id="subject"
                type="text"
                placeholder="Enter your subject"
                className="[&_input]:rounded-xl [&_input]:border-white/15 [&_input]:bg-white/10 [&_input]:text-white [&_input]:placeholder-[#9f9fa9]"
              />
            </div>

            <div>
              <Label
                htmlFor="message"
                className="mb-2.5 text-sm font-medium text-white"
              >
                Your message
              </Label>
              <Textarea
                id="message"
                rows={5}
                placeholder=""
                className="rounded-xl border-white/15 bg-white/10 text-white placeholder-[#9f9fa9]"
              />
              <p className="mt-2.5 text-xs text-[#9f9fa9]">4/500 words</p>
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl bg-[#155dfc] font-medium"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
