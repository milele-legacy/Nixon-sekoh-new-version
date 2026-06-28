const pillars = [
  {
    icon: "🌟",
    name: "Transforming Lives and Raising a Generation of Leaders",
    desc: "Having navigated significant personal challenges, Nixon understands firsthand the transformative power of healing, forgiveness, and the courage to move on. His story is a testament to the fact that one's past does not have to dictate one's destiny. Passionate about inspiring personal growth and restoration, he empowers men to rise above adversity, embrace their potential, and lead lives of purpose, impact, and positive change.",
  },
  {
    icon: "🌉",
    name: "Building Bridges",
    desc: "Widely recognized for his ability to bring people and institutions together, Nixon excels at building strategic partnerships that turn shared vision into meaningful action. By fostering intergenerational dialogue and strengthening collaboration across sectors, he creates platforms where diverse perspectives converge to drive innovation, inspire collective ownership, and deliver sustainable solutions that leave a lasting legacy for future generations.",
  },
  {
    icon: "🎯",
    name: "Resource Mobilization",
    desc: "Nixon is widely recognized for his successful approach to resource mobilization, helping organizations and individuals unlock funding opportunities that drive meaningful and lasting impact. Through creative storytelling, innovative fundraising strategies, and data-driven decision-making, he equips NGOs with the tools to craft compelling value propositions, attract strategic partners, and secure the resources they need to grow, thrive, and achieve their mission.",
  },
  {
    icon: "💬",
    name: "Intergenerational Dialogues",
    desc: "Nixon possesses a rare ability to unite different generations in safe, meaningful spaces where honest conversations lead to understanding, healing, and action. He bridges generational divides and fosters mutual respect by connecting the wisdom of older generations with the creativity of younger voices—enabling families, leaders, and communities to move beyond misunderstanding toward collaboration and lasting social cohesion.",
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
          Four <span className="text-gold">Core Pillars</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
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
