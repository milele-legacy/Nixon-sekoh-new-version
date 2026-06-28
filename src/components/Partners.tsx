import Image from "next/image";

const partners = [
  { src: "/images/partners/speak-society.png", alt: "Speak Society" },
  { src: "/images/partners/ics.png", alt: "Institute of Certified Secretaries" },
  { src: "/images/partners/kenya-prisons.png", alt: "Kenya Prisons Service" },
  { src: "/images/partners/kenya-red-cross.png", alt: "Kenya Red Cross" },
  { src: "/images/partners/kpc.png", alt: "Kenya Pipeline Company" },
  { src: "/images/partners/africa-cancer-foundation.png", alt: "Africa Cancer Foundation" },
  { src: "/images/partners/wildaf.png", alt: "WiLDAF-AO" },
  { src: "/images/partners/stazz-hoops.png", alt: "Stazz Academy Hoops" },
];

export default function Partners() {
  const track = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-cream border-y border-navy/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 mb-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              Collaborations
            </span>
            <span className="h-0.5 w-10 bg-gold inline-block" />
          </div>
          <h2
            className="font-black text-navy leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            }}
          >
            Organizations I&apos;ve <span className="text-gold">Worked With</span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div className="partners-marquee flex w-max">
          {track.map((partner, i) => (
            <div
              key={`${partner.alt}-${i}`}
              className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center h-20 md:h-24 w-36 md:w-44 opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={176}
                height={96}
                className="max-h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
