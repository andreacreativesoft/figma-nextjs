"use client";

import { useState } from "react";

export default function ContactForm() {
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

  if (status === "sent") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-brand-950">Message envoyé !</h3>
        <p className="text-sm text-[#52525C]">
          Merci pour votre message. Notre équipe vous recontactera dans les plus brefs délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-xl border border-[#E4E4E7] px-6 py-2.5 text-sm font-medium text-brand-950 transition hover:bg-gray-50"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium leading-5 text-brand-950">
            Nom complet
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Votre nom"
            className="w-full rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-3 text-sm text-gray-900 placeholder-[#9F9FA9] outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium leading-5 text-brand-950">
            Adresse email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="nom@exemple.com"
            className="w-full rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-3 text-sm text-gray-900 placeholder-[#9F9FA9] outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium leading-5 text-brand-950">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="04XX XXX XXX"
            className="w-full rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-3 text-sm text-gray-900 placeholder-[#9F9FA9] outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium leading-5 text-brand-950">
            Sujet
          </label>
          <select
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="chauffage">Chauffage</option>
            <option value="plomberie">Plomberie</option>
            <option value="debouchage">Débouchage</option>
            <option value="devis">Demande de devis</option>
            <option value="urgence">Dépannage urgent</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium leading-5 text-brand-950">
            Votre message
          </label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Décrivez votre besoin..."
            className="w-full resize-none rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-3 text-sm text-gray-900 placeholder-[#9F9FA9] outline-none transition focus:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc]/10"
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600">
            Une erreur est survenue. Veuillez réessayer.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-[#155dfc] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1447e6] disabled:opacity-50"
        >
          {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </form>
    </div>
  );
}
