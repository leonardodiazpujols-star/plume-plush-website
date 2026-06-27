"use client";

const brands = [
  { name: "Louis Vuitton",      src: "/images/brands/louis-vuitton.svg",      h: "h-5" },
  { name: "Acqua di Parma",     src: "/images/brands/acqua-di-parma.svg",     h: "h-6" },
  { name: "Guerlain",           src: "/images/brands/guerlain.svg",           h: "h-5" },
  { name: "Tom Ford",           src: "/images/brands/tom-ford.svg",           h: "h-5" },
  { name: "Dior",               src: "/images/brands/dior.svg",               h: "h-5" },
  { name: "Bulgari",            src: "/images/brands/bulgari.svg",            h: "h-5" },
  { name: "Cartier",            src: "/images/brands/cartier.svg",            h: "h-5" },
  { name: "Tiffany & Co.",      src: "/images/brands/tiffany.svg",            h: "h-4" },
  { name: "Hermès",             src: "/images/brands/hermes.svg",             h: "h-5" },
  { name: "De Beers",           src: "/images/brands/de-beers.svg",           h: "h-5" },
  { name: "Givenchy",           src: "/images/brands/givenchy.svg",           h: "h-4" },
  { name: "Loewe",              src: "/images/brands/loewe.svg",              h: "h-5" },
  { name: "Juliette Has a Gun", src: "/images/brands/juliette-has-a-gun.svg", h: "h-6" },
  { name: "Max Mara",           src: "/images/brands/max-mara.svg",           h: "h-5" },
  { name: "Marina Rinaldi",     src: "/images/brands/marina-rinaldi.svg",     h: "h-4" },
  { name: "Matière Première",   src: "/images/brands/matiere-premiere.svg",   h: "h-6" },
];

export default function BrandMarquee() {
  const track = [...brands, ...brands];

  return (
    <section className="bg-[oklch(0.96_0.01_80)] border-b border-[oklch(0.88_0.01_75)] py-10 overflow-hidden">
      <p className="text-center text-[0.55rem] tracking-[0.35em] uppercase text-[oklch(0.72_0.09_75)] mb-7" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
        Trusted by the World's Most Prestigious Houses
      </p>
      <div className="relative">
        <div
          className="flex items-center gap-16"
          style={{
            width: "max-content",
            animation: "marquee 38s linear infinite",
          }}
        >
          {track.map((brand, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <img
                src={brand.src}
                alt={brand.name}
                className={`${brand.h} w-auto object-contain opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-500 cursor-default`}
                draggable={false}
              />
              <span className="text-[oklch(0.72_0.09_75)] text-[0.4rem] opacity-50">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
