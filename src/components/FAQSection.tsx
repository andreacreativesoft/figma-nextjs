"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I use FlowBite in open-source projects?",
    answer: [
      "Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.",
      "With that being said, feel free to use this design kit for your open-source projects.",
    ],
  },
  {
    question: "Where can I access my download files?",
    answer: [],
  },
  {
    question: "Is Flowbite compatible with popular frontend frameworks?",
    answer: [],
  },
  {
    question: "What are the main features of Flowbite?",
    answer: [],
  },
  {
    question: "Does Flowbite offer pre-built components?",
    answer: [],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-5 w-5 shrink-0 transition-transform ${open ? "" : "rotate-180"}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        fill="#162455"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[292px] py-24">
        <div className="flex flex-col items-center gap-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-5 text-center">
            <span className="text-base font-semibold uppercase leading-[1.5] tracking-[0.32px] text-[#155dfc]">
              FAQ
            </span>
            <h2 className="text-5xl font-semibold leading-[1.2] text-brand-950">
              Foire aux questions
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex w-full flex-col">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="border-b border-[#E4E4E7]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="flex w-full items-center gap-6 py-5"
                >
                  <span className="flex-1 text-left text-xl font-semibold leading-[1.3] text-brand-950">
                    {faq.question}
                  </span>
                  <ChevronIcon open={openIndex === i} />
                </button>
                {openIndex === i && faq.answer.length > 0 && (
                  <div className="flex flex-col gap-3 pb-5 text-base leading-[1.5] text-[#52525C]">
                    {faq.answer.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
