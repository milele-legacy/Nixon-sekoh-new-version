const reasons = [
  {
    num: "01",
    title: "Unique Blend of Expertise",
    text: "He combines his passion for empowering men with professional skills in partnerships and funds mobilization, offering a unique perspective on building impactful initiatives.",
  },
  {
    num: "02",
    title: "Inspiring Personal Story",
    text: "Having overcome challenges himself, Nixon's story resonates with audiences and inspires them to overcome their own obstacles with courage and determination.",
  },
  {
    num: "03",
    title: "Actionable Insights",
    text: "He doesn't just motivate — he equips his audience with practical tools and strategies they can implement immediately to create real, positive change.",
  },
  {
    num: "04",
    title: "Engaging Speaker",
    text: "Nixon's passion and charisma captivate audiences, making his presentations informative, insightful, and truly inspiring from start to finish.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-28 px-8 md:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              The Value Proposition
            </span>
            <span className="h-0.5 w-10 bg-gold inline-block" />
          </div>
          <h2
            className="font-black text-navy leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            Why Choose <span className="text-gold">Nixon Sekoh</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.num}
              className="bg-white flex gap-5 p-8 rounded-sm shadow-sm border border-navy/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="text-gold font-black leading-none flex-shrink-0 min-w-[2rem]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.6rem",
                }}
              >
                {r.num}
              </div>
              <div>
                <div className="text-navy font-bold text-base mb-2">
                  {r.title}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
