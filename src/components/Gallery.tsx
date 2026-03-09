import Image from "next/image";

const photos = [
  { src: "/images/speaking1.jpeg", alt: "Nixon speaking at US Trade Mission", large: true },
  { src: "/images/speaking2.jpeg", alt: "Nixon at conference panel" },
  { src: "/images/serious.jpeg", alt: "Nixon Sekoh portrait" },
  { src: "/images/speaking3.jpeg", alt: "Nixon at leadership summit" },
  { src: "/images/speaking4.jpeg", alt: "Nixon speaking to audience" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              In Action
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
            Speaking <span className="text-gold">Gallery</span>
          </h2>
        </div>

        {/* Grid: 3 cols, first item spans 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-3 h-auto md:h-[640px]">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`gallery-item relative overflow-hidden rounded-sm cursor-pointer ${
                photo.large ? "md:row-span-2" : ""
              }`}
              style={{ minHeight: photo.large ? "400px" : "200px" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-top"
              />
              <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
