const pillars = [
  {
    icon: "👨‍👦",
    name: "Empowering Men",
    desc: "Nixon's personal story, marked by a challenging upbringing, fuels his unwavering commitment to empowering men who have faced similar struggles. He believes every man deserves the opportunity to rise above his circumstances and become a force for good in his community.",
  },
  {
    icon: "🌉",
    name: "Building Bridges",
    desc: "Nixon's expertise in forging strategic partnerships between NGOs and financial institutions is unparalleled. He bridges the gap between sectors, creating collaborations that drive sustainable development and lasting community impact.",
  },
  {
    icon: "🎯",
    name: "Mobilizing Resources",
    desc: "Nixon's skills in effective funds mobilization are crucial for NGOs seeking to make a real difference. He teaches organizations to craft compelling narratives, leverage data-driven strategies, and secure the resources they need to thrive.",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-28 px-8 md:px-16 bg-navy text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Core Focus Areas
          </span>
          <span className="h-0.5 w-10 bg-gold inline-block" />
        </div>

        <h2
          className="font-black text-white leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
          }}
        >
          Three <span className="text-gold">Core Pillars</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {pillars.map((p, i) => (
            <div
              key={p.name}
              className="bg-white/5 border border-gold/20 border-t-[3px] border-t-gold rounded-sm p-10 text-left hover:-translate-y-2 hover:bg-gold/10 transition-all duration-300 reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <span className="text-4xl mb-5 block">{p.icon}</span>
              <h3
                className="text-gold font-bold text-xl mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {p.name}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
