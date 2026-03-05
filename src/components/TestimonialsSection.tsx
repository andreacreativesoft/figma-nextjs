const testimonials = [
  {
    title: "Best for a SaaS application",
    quote:
      'Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"',
    name: "Jese Leos",
    role: "CEO Flowbite LLC",
    avatar: "/images/avatar-testimonial-1.jpg",
  },
  {
    title: "Solid foundation for any project",
    quote:
      'If you care for your time, I hands down would go with this."',
    name: "Thomas Lean",
    role: "Graphic Designer",
    avatar: "/images/avatar-testimonial-2.jpg",
  },
  {
    title: "Mindblowing workflow",
    quote:
      'You have many examples that can be used to create a fast prototype for your team."',
    name: "Lana Byrd",
    role: "Web designer",
    avatar: "/images/avatar-testimonial-1.jpg",
  },
  {
    title: "Efficient Collaborating",
    quote:
      'Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."',
    name: "Joseph McFall",
    role: "React Developer",
    avatar: "/images/avatar-testimonial-1.jpg",
  },
];

function StarIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="#F59E0B"
      className="h-3 w-3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 0L7.76336 3.57295L11.7063 4.1459L8.85317 6.92705L9.52671 10.8541L6 9L2.47329 10.8541L3.14683 6.92705L0.293661 4.1459L4.23664 3.57295L6 0Z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F4F4F5]">
      <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-8 lg:px-[182px]">
      <div className="flex flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          {/* Google rating bar */}
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/icon-google.svg"
              alt="Google"
              className="h-6 w-6"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.32px] text-[#155dfc]">
              Approuvé par +1 000 clients
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.14px] text-[#155dfc]">
              | 5.0
            </span>
            <div className="flex items-center gap-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <h2 className="text-3xl font-semibold leading-[1.2] text-[#27282C] md:text-5xl">
            Témoignages
          </h2>
        </div>

        {/* Testimonial Card Grid */}
        <div className="w-full overflow-hidden rounded-xl border border-[#E4E4E7] bg-white p-7 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`flex flex-col items-center gap-4 px-6 py-6 text-center ${
                  i % 2 === 0 ? "md:border-r md:border-[#E4E4E7]" : ""
                } ${i >= 1 ? "border-t border-[#E4E4E7]" : ""} ${i < 2 ? "md:border-t-0" : ""}`}
              >
                {/* Quote */}
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-lg font-semibold leading-[1.5] text-brand-950">
                    {t.title}
                  </h3>
                  <p className="text-base leading-[1.5] text-[#52525C]">
                    {t.quote}
                  </p>
                </div>
                {/* Avatar */}
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col items-start gap-1.5">
                    <span className="text-base font-semibold leading-[1.5] text-brand-950">
                      {t.name}
                    </span>
                    <span className="text-sm leading-[1.5] text-[#71717B]">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
