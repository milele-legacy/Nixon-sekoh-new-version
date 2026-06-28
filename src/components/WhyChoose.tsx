const reasons = [
  {
    num: "01",
    title: "Unique Blend of Expertise",
    text: "Drawing on both personal conviction and professional excellence, Nixon brings a distinctive perspective to social transformation. His deep understanding of human potential, coupled with his success in forging strategic partnerships and mobilizing resources, allows him to champion innovative initiatives that turn vision into action and create sustainable impact at scale.",
  },
  {
    num: "02",
    title: "Inspiring Personal Story",
    text: "Nixon's remarkable journey from adversity to impact captivates and inspires audiences wherever he speaks. Drawing from lived experience, he demonstrates that challenges can become catalysts for growth and transformation. His message ignites hope, fuels determination, and empowers individuals to rise above limitations, pursue their aspirations, and create meaningful change in their lives and communities.",
  },
  {
    num: "03",
    title: "Actionable Insights",
    text: "Nixon's presentations are designed to spark transformation, not just inspiration. By blending compelling storytelling with practical wisdom, he provides audiences with powerful tools, actionable strategies, and fresh perspectives that empower them to take immediate action and achieve sustainable, real-world results.",
  },
  {
    num: "04",
    title: "Engaging Speaker",
    text: "A compelling communicator and engaging thought leader, Nixon combines charisma, wisdom, and practical experience to create unforgettable audience experiences. His presentations are rich with actionable insights, fresh perspectives, and powerful lessons that resonate across generations, inspiring individuals and organizations to embrace change, unlock potential, and pursue purposeful impact.",
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
