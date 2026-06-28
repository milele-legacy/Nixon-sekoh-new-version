import Image from "next/image";

const values = [
  {
    icon: "⚖️",
    name: "Integrity",
    desc: "Unwavering honesty and transparency in all engagements",
  },
  {
    icon: "🤝",
    name: "Inclusivity",
    desc: "Championing marginalized voices and equal opportunity",
  },
  {
    icon: "💪",
    name: "Resilience",
    desc: "Inspiring perseverance through lived experience",
  },
  {
    icon: "🌍",
    name: "Impact",
    desc: "Driving sustainable development across Africa",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-8 md:px-16 bg-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <div className="relative reveal">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold rounded-sm -z-10" />
          <Image
            src="/images/about.jpeg"
            alt="Nixon Sekoh"
            width={600}
            height={720}
            className="w-full rounded-sm shadow-2xl object-cover"
            style={{ maxHeight: "620px", objectPosition: "top" }}
          />
          <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-navy rounded-sm -z-10" />
        </div>

        {/* Text */}
        <div className="reveal reveal-delay-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              About Nixon
            </span>
            <span className="h-0.5 w-10 bg-gold inline-block" />
          </div>

          <h2
            className="font-black text-navy leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            A Catalyst for{" "}
            <span className="text-gold">Positive Change</span>
          </h2>

          <p className="text-[#4a4a6a] text-base leading-relaxed mb-4">
            Nixon Sekoh is a visionary changemaker, influential leader, and
            driving force behind transformative impact across Africa.
          </p>
          <p className="text-[#4a4a6a] text-base leading-relaxed mb-4">
            Renowned for building powerful partnerships and unlocking
            opportunities that uplift communities, Nixon has become a trusted
            catalyst for sustainable development and social transformation. He is
            also a passionate advocate for men navigating life&apos;s toughest
            challenges, using his voice and experience to inspire resilience,
            purpose, and growth.
          </p>
          <p className="text-[#4a4a6a] text-base leading-relaxed mb-8">
            Fueled by unwavering values, authentic leadership, and a deep
            commitment to creating lasting change, Nixon captivates audiences
            with compelling insights and actionable strategies. His remarkable
            journey of overcoming personal adversity is a powerful testament to
            perseverance, making him a highly sought-after speaker whose message
            motivates, empowers, and sparks meaningful action.
          </p>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-3">
            {values.map((v) => (
              <div
                key={v.name}
                className="flex items-start gap-3 bg-white p-4 rounded-sm border-l-4 border-gold"
              >
                <span className="text-xl">{v.icon}</span>
                <div>
                  <div className="text-navy font-bold text-sm uppercase tracking-wide">
                    {v.name}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                    {v.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
