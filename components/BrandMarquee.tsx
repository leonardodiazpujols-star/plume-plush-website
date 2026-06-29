"use client";

const brands = [
  { name: "Louis Vuitton",      src: "/images/brands/louis-vuitton.svg" },
  { name: "Acqua di Parma",     src: "/images/brands/acqua-di-parma.svg" },
  { name: "Guerlain",           src: "/images/brands/guerlain.svg" },
  { name: "Tom Ford",           src: "/images/brands/tom-ford.svg" },
  { name: "Dior",               src: "/images/brands/dior.svg" },
  { name: "Cartier",            src: "/images/brands/cartier.svg" },
  { name: "Tiffany & Co.",      src: "/images/brands/tiffany.svg" },
  { name: "Hermès",             src: "/images/brands/hermes.svg" },
  { name: "De Beers",           src: "/images/brands/de-beers.svg" },
  { name: "Givenchy",           src: "/images/brands/givenchy.svg" },
  { name: "Loewe",              src: "/images/brands/loewe.png" },
  { name: "Juliette Has a Gun", src: "/images/brands/juliette-has-a-gun.svg" },
  { name: "Max Mara",           src: "/images/brands/max-mara.svg" },
  { name: "Marina Rinaldi",     src: "/images/brands/marina-rinaldi.svg" },
  { name: "Matière Première",        src: "/images/brands/matiere-premiere.svg"        },
  { name: "Maison Francis Kurkdjian", src: "/images/brands/maison-francis-kurkdjian.svg" },
  { name: "Fendi",                    src: "/images/brands/fendi.svg"                    },
  { name: "Pomellato",                src: "/images/brands/pomellato.svg"                },
];

export default function BrandMarquee() {
  const track = [...brands, ...brands];

  return (
    <section className="py-12 overflow-hidden" style={{ backgroundImage: "url('/images/bg_texture.png')", backgroundSize: "cover", backgroundPosition: "center", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <p className="text-center text-[0.55rem] tracking-[0.35em] uppercase text-[oklch(0.72_0.09_75)] mb-8" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
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
              <div className="h-7 flex items-center">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-full w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-500 cursor-default"
                  style={{ filter: "brightness(0) invert(1)" }}
                  draggable={false}
                />
              </div>
              <span className="text-[oklch(0.72_0.09_75)] text-[0.4rem] opacity-40">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
