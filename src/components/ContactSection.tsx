"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/contact-bg-desktop.webp"
            type="image/webp"
          />
          <source
            srcSet="/images/contact-bg-mobile.webp 1x, /images/contact-bg-mobile-2x.webp 2x"
            type="image/webp"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/contact-bg.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-[rgba(10,53,87,0.8)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-24 md:px-8 lg:px-[182px]">
        <div className="flex flex-col items-start gap-16">
          {/* Title */}
          <h2 className="w-full text-center text-3xl font-semibold leading-[1.2] text-[#F4F4F6] md:text-5xl">
            Contactez-nous pour
            <br />
            commander nos services
          </h2>

          {/* Card: Form + Map */}
          <div className="flex w-full flex-col gap-8 rounded-lg border border-white/20 bg-brand-950 p-8 lg:flex-row lg:gap-[104px]">
            {/* Form */}
            <div className="flex flex-1 flex-col gap-8">
              {/* Form Header */}
              <div className="flex flex-col gap-2.5">
                <h3 className="text-2xl font-semibold leading-[1.3] text-white">
                  Formulaire de contact
                </h3>
                <p className="text-base leading-[1.5] text-[#F4F4F5]">
                  Remplissez le formulaire ci-dessous afin qu&apos;un membre de
                  notre équipe puisse vous recontacter.
                </p>
              </div>

              {status === "sent" ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20">
                    <svg className="h-7 w-7 text-green-400" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-white">Message envoyé !</p>
                  <p className="text-sm text-[#F4F4F5]/70">Nous vous recontacterons rapidement.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 rounded-xl border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Email */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-sm font-medium leading-5 text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@flowbite.com"
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-sm leading-5 text-white placeholder-[#9F9FA9] shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] outline-none focus:border-white/30"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-sm font-medium leading-5 text-white">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Enter your subject"
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-sm leading-5 text-white placeholder-[#9F9FA9] shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] outline-none focus:border-white/30"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-sm font-medium leading-5 text-white">
                      Your message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/10 p-3.5 text-sm leading-5 text-white placeholder-[#9F9FA9] shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] outline-none focus:border-white/30"
                    />
                    <span className="text-xs leading-5 text-[#9F9FA9]">
                      4/500 words
                    </span>
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">Une erreur est survenue. Veuillez réessayer.</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-xl bg-[#155dfc] px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] hover:bg-[#1447e6] disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="min-h-[300px] flex-1 self-stretch overflow-hidden rounded lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.0!2d4.3!3d50.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUwJzI0LjAiTiA0wrAxOCcwMC4wIkU!5e0!3m2!1sfr!2sbe!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AZ Pro Services location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
