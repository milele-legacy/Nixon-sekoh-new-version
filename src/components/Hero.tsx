import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid md:grid-cols-2 bg-navy relative overflow-hidden"
    >
      {/* Background diagonal pattern */}
      <div className="stripe-pattern absolute inset-0 pointer-events-none" />

      {/* Left — Content */}
      <div className="flex flex-col justify-center px-8 md:px-16 pt-32 pb-16 relative z-10">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-sm px-3 py-1.5 w-fit mb-7">
          <span className="w-2 h-2 rounded-full bg-gold inline-block" />
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Speaker · Leader · Change Maker
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-black text-white leading-none mb-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
          }}
        >
          Nixon
          <br />
          <span className="text-gold">Sekoh</span>
        </h1>

        <p className="text-white/60 text-lg font-light mb-6 mt-1">
          <strong className="text-white/90 font-medium">
            Head of NGO &amp; Embassies
          </strong>{" "}
          · Equity Bank Kenya
        </p>

        <p className="text-white/70 text-base leading-relaxed max-w-lg mb-10">
          Catalyst for positive change. Champion for men who have faced
          adversity. Master weaver of strategic alliances that empower
          communities across Africa.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="#contact"
            className="bg-gold text-navy font-bold text-base px-8 py-3.5 rounded-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30 no-underline"
          >
            Book a Speaking Engagement
          </a>
          <a
            href="#about"
            className="border-2 border-white/30 text-white font-medium text-base px-8 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-all duration-200 no-underline"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 pt-8 border-t border-white/10">
          {[
            { num: "10+", label: "Years Experience" },
            { num: "50+", label: "Speaking Events" },
            { num: "Pan-African", label: "Reach & Impact" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-gold font-black leading-none"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.9rem" }}
              >
                {s.num}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Photo */}
      <div className="relative hidden md:block">
        <Image
          src="/images/hero.jpeg"
          alt="Nixon Sekoh"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

        {/* Badge */}
        <div className="absolute bottom-12 left-0 bg-gold text-navy font-bold text-sm px-5 py-3.5 rounded-sm max-w-[220px] leading-snug shadow-2xl z-10">
          🏆 Head of NGOs &amp; Embassies
          <br />
          <span className="font-medium text-xs">Equity Bank Limited, Kenya</span>
        </div>
      </div>
    </section>
  );
}
