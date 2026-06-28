"use client";

import { useState } from "react";
import Image from "next/image";

const featuredPhotos = [
  {
    src: "/images/gallery2.png",
    alt: "Nixon Sekoh speaking at the 19th Ambassadors' Conference",
  },
  {
    src: "/images/gallery1.png",
    alt: "Nixon Sekoh at a panel at The Sarova Stanley, Nairobi",
  },
  {
    src: "/images/gallery/photo-03.png",
    alt: "Nixon Sekoh at the Our Ocean Kenya 2024 conference",
  },
  {
    src: "/images/gallery/photo-10.png",
    alt: "Nixon Sekoh addressing an audience at Mama Grace Onyango Cultural Centre",
  },
  {
    src: "/images/gallery/photo-05.png",
    alt: "Nixon Sekoh at the Parliament of Kenya book launch",
  },
  {
    src: "/images/gallery/photo-14.png",
    alt: "Nixon Sekoh at the Ministry of Foreign and Diaspora Affairs",
  },
];

const photoCount = 88;

const allPhotos = Array.from({ length: photoCount }, (_, i) => ({
  src: `/images/gallery/photo-${String(i + 1).padStart(2, "0")}.png`,
  alt: `Nixon Sekoh speaking and leading — photo ${i + 1}`,
}));

function GalleryGrid({ photos }: { photos: { src: string; alt: string }[] }) {
  return (
    <div className="gallery-masonry">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="gallery-item gallery-masonry-item relative overflow-hidden rounded-sm cursor-pointer"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={500}
            className="w-full h-auto block"
          />
          <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

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

        <GalleryGrid photos={showAll ? allPhotos : featuredPhotos} />

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-gold text-navy font-bold text-base px-8 py-3.5 rounded-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
          >
            {showAll ? "Show Featured Photos" : "View Full Gallery →"}
          </button>
        </div>
      </div>
    </section>
  );
}
