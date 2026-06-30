import Image from "next/image";

export default function Book() {
  return (
    <section id="book" className="py-28 px-8 md:px-16 bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="stripe-pattern absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Latest Release
          </span>
          <span className="h-0.5 w-10 bg-gold inline-block" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Book info */}
          <div className="reveal">
            <h2
              className="font-black text-white leading-tight mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              }}
            >
              Now Available: <br />
              <span className="text-gold">The Gen Z Parent</span>
            </h2>

            <p className="text-gold/80 text-base font-semibold uppercase tracking-widest mb-6">
              From Confusion to Connection
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-6">
              In <em className="text-white">The Gen Z Parent</em>, Nixon Nyadiero Sekoh bridges the
              gap between parents and their Generation Z children. Drawing from his deep experience
              in community empowerment and family dynamics, Nixon offers practical insights to help
              parents navigate the complexities of raising the digital-native generation.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-10">
              Whether you&apos;re struggling to understand your child&apos;s world or looking to
              strengthen your family bonds, this book transforms confusion into genuine connection.
            </p>

            {/* Price + Buy */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="bg-gold text-navy font-black text-2xl px-6 py-3 rounded-sm">
                KSH 1,000/=
              </div>
              <div className="text-white/50 text-sm leading-relaxed">
                Available at Nuria Bookstore <br />
                &amp; select bookshops in Nairobi
              </div>
            </div>

            {/* How to buy */}
            <div className="bg-white/5 border border-gold/20 rounded-sm p-6 mb-6">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
                How to Order
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">📱</span>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide">M-Pesa Till Number</div>
                    <div className="text-white font-bold text-lg tracking-widest">3 5 4 9 7 7 6</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">📞</span>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide">Call / WhatsApp</div>
                    <div className="text-white font-bold text-base">+254721380125</div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="tel:+254721380125"
              className="inline-block bg-gold text-navy font-bold text-base px-8 py-3.5 rounded-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5 no-underline"
            >
              Order Your Copy Today →
            </a>
          </div>

          {/* Right — Images */}
          <div className="reveal reveal-delay-1">
            {/* Book promo — Available Now */}
            <div className="relative mb-4">
              <Image
                src="/images/gallery/bookpromo.jpeg"
                alt="The Gen Z Parent — From Confusion to Connection by Nixon Nyadiero Sekoh — Available Now"
                width={600}
                height={800}
                className="w-full rounded-sm shadow-2xl object-cover"
                style={{ maxHeight: "520px", objectFit: "cover", objectPosition: "center" }}
              />
              {/* Gold accent */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gold rounded-sm -z-10" />
              <div className="absolute -top-3 -left-3 w-14 h-14 bg-white/10 rounded-sm -z-10" />
            </div>

            {/* Book launch photo */}
            <div className="relative mt-6 overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/images/book-launch.jpeg"
                alt="Nixon Sekoh at book launch — Nuria Bookstore"
                width={600}
                height={400}
                className="w-full object-cover"
                style={{ maxHeight: "220px", objectPosition: "center 30%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white text-sm font-medium">
                📚 Book launch at <span className="text-gold font-bold">Nuria Bookstore</span>, Nairobi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
