const steps = [
  {
    icon: "/images/icon-step-phone.svg",
    title: "Contactez-nous",
    description:
      "Remplissez notre formulaire en ligne ou appelez-nous directement pour nous faire part de vos besoins spécifiques.",
  },
  {
    icon: "/images/icon-step-eval.svg",
    title: "Évaluation",
    description:
      "Nous vous rencontrons sur place pour évaluer l\u2019installation et élaborer un plan d\u2019intervention personnalisé adapté à votre situation.",
  },
  {
    icon: "/images/icon-step-team.svg",
    title: "Intervention",
    description:
      "Nous déployons notre équipe d\u2019experts pour résoudre efficacement vos problèmes de chauffage, plomberie ou débouchage.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white px-[182px] py-24">
      <div className="flex flex-col items-center gap-[72px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-5">
            <span className="text-base font-semibold uppercase leading-[1.5] tracking-[0.32px] text-[#155dfc]">
              NOTRE APPROCHE
            </span>
            <h2 className="text-5xl font-semibold leading-[1.2] text-brand-950">
              Comment ça marche
            </h2>
          </div>
          <p className="max-w-[738px] text-base leading-[1.5] text-[#52525C]">
            Une approche simple et efficace pour répondre à tous vos besoins en
            chauffage, plomberie (Bruxelles, Brabant Wallon, Brabant Flamand) et
            débouchage (Namur).
          </p>
        </div>

        {/* Steps */}
        <div className="flex w-full items-start justify-center gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-1 flex-col items-center gap-6 px-4 text-center"
            >
              {/* Icon circle */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EFF6FF]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.icon} alt="" className="h-8 w-8" />
              </div>
              {/* Text */}
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-2xl font-semibold leading-[1.3] text-brand-950">
                  {step.title}
                </h3>
                <p className="text-base leading-[1.5] text-[#52525C]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
