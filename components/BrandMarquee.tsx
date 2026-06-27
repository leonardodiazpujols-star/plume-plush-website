"use client";

const brands = [
  { name: "Louis Vuitton",      src: "/images/brands/louis-vuitton.svg" },
  { name: "Acqua di Parma",     src: "/images/brands/acqua-di-parma.svg" },
  { name: "Guerlain",           src: "/images/brands/guerlain.svg" },
  { name: "Tom Ford",           src: "/images/brands/tom-ford.svg" },
  { name: "Dior",               src: "/images/brands/dior.svg" },
  { name: "Bulgari",            src: "/images/brands/bulgari.svg" },
  { name: "Cartier",            src: "/images/brands/cartier.svg" },
  { name: "Tiffany & Co.",      src: "/images/brands/tiffany.svg" },
  { name: "Hermès",             src: "/images/brands/hermes.svg" },
  { name: "De Beers",           src: "/images/brands/de-beers.svg" },
  { name: "Givenchy",           src: "/images/brands/givenchy.svg" },
  { name: "Loewe",              src: "/images/brands/loewe.svg" },
  { name: "Juliette Has a Gun", src: "/images/brands/juliette-has-a-gun.svg" },
  { name: "Max Mara",           src: "/images/brands/max-mara.svg" },
  { name: "Marina Rinaldi",     src: "/images/brands/marina-rinaldi.svg" },
  { name: "Matière Première",   src: "/images/brands/matiere-premiere.svg" },
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
              {/* Fixed-height container forces every logo to the same visual size */}
              <div className="h-7 flex items-center">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-full w-auto object-contain opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-500 cursor-default"
                  draggable={false}
                />
              </div>
              <span className="text-[oklch(0.72_0.09_75)] text-[0.4rem] opacity-50">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
