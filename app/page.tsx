import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Shield, Globe, Camera } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimationsInit } from "@/components/AnimationsInit";
import BrandMarquee from "@/components/BrandMarquee";

export const metadata: Metadata = {
  title: "Plume & Plush — Where Artistry Meets Prestige",
  description:
    "Exquisite artisan creations for luxury brands and private clients. Live portrait sketching, engraving, calligraphy, embroidery, gold gilding, and brand activations worldwide.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.96_0.01_80)]" style={{ fontFamily: "'Jost', sans-serif" }}>
      <AnimationsInit />
      <Navigation />

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg_charcoal_marble_hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-6">
          <img src="/images/pp_monogram_transparent.png" alt="P&P" className="h-24 w-24 object-contain mb-2" />
          <p className="text-[0.65rem] tracking-[0.4em] uppercase text-[oklch(0.72_0.09_75)]" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
            Plume &amp; Plush
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-none" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            Where Artistry<br />Meets Prestige
          </h1>
          <div className="flex items-center gap-4 text-[oklch(0.72_0.09_75)]">
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Jost', sans-serif" }}>✦</span>
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
          </div>
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-white/70" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            Exquisite Creations. Timeless Legacy.
          </p>
          <a href="/services" className="btn-gold mt-4">
            Discover the World of P&amp;P
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-[oklch(0.72_0.09_75)] to-transparent" />
        </div>
      </section>

      <BrandMarquee />

      {/* EDITORIAL 3-COL */}
      <section className="bg-[oklch(0.96_0.01_80)] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-[oklch(0.88_0.01_75)]">
          <div className="px-8 py-4 fade-up">
            <p className="eyebrow mb-4">Masters of Our Craft</p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <img src="/images/web_live_sketching.png" alt="Live Sketching" className="w-full h-40 object-cover" />
              <img src="/images/web_calligraphy.png" alt="Calligraphy" className="w-full h-40 object-cover" />
            </div>
            <h2 className="text-3xl text-[oklch(0.14_0.005_285)] mb-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
              Handcrafted<br />to Perfection
            </h2>
            <p className="text-[0.8rem] text-[oklch(0.4_0.01_285)] leading-relaxed mb-5" style={{ fontWeight: 300 }}>
              Each piece is born from the hands of master artisans, whose skill, dedication, and passion breathe life into every creation.
            </p>
            <Link href="/services" className="eyebrow flex items-center gap-2 hover:gap-3 transition-all">
              Meet the Artisans <ArrowRight size={12} />
            </Link>
          </div>
          <div className="px-8 py-4 fade-up" style={{ transitionDelay: "100ms" }}>
            <p className="eyebrow mb-4">Engraved with Distinction</p>
            <img src="/images/web_engraving.png" alt="Engraving" className="w-full h-52 object-cover mb-6" />
            <h2 className="text-3xl text-[oklch(0.14_0.005_285)] mb-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
              Details That<br />Define Legacy
            </h2>
            <p className="text-[0.8rem] text-[oklch(0.4_0.01_285)] leading-relaxed mb-5" style={{ fontWeight: 300 }}>
              Our signature engravings are more than details — they are marks of heritage, prestige, and unparalleled attention to detail.
            </p>
            <Link href="/services" className="eyebrow flex items-center gap-2 hover:gap-3 transition-all">
              Explore Engravings <ArrowRight size={12} />
            </Link>
          </div>
          <div className="px-8 py-4 fade-up" style={{ transitionDelay: "200ms" }}>
            <p className="eyebrow mb-4">Global DNA</p>
            <img src="/images/web_global_map.png" alt="Global Presence" className="w-full h-52 object-cover mb-6" />
            <h2 className="text-3xl text-[oklch(0.14_0.005_285)] mb-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
              Rooted in Heritage,<br />Inspired by the World
            </h2>
            <p className="text-[0.8rem] text-[oklch(0.4_0.01_285)] leading-relaxed mb-5" style={{ fontWeight: 300 }}>
              A global perspective shapes our creations. Offices in London, Dubai, Paris &amp; Milan.
            </p>
            <a href="#global" className="eyebrow flex items-center gap-2 hover:gap-3 transition-all">
              Discover Our World <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="bg-[oklch(0.93_0.008_80)] py-16 border-y border-[oklch(0.88_0.01_75)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-[oklch(0.88_0.01_75)]">
          {[
            { icon: "/images/icon_exceptional_quality.png", title: "Exceptional Quality", desc: "The finest materials. Meticulous craftsmanship." },
            { icon: "/images/icon_timeless_elegance.png",   title: "Timeless Elegance",   desc: "Designs that transcend seasons and trends." },
            { icon: "/images/icon_bespoke_experience.png",  title: "Bespoke Experience",  desc: "Personalized service. Exclusively yours." },
            { icon: "/images/icon_legacy_of_trust.png",     title: "Legacy of Trust",     desc: "Built on integrity. Cherished for generations." },
          ].map((v, i) => (
            <div key={v.title} className="px-8 py-8 text-center fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex justify-center mb-5">
                <img src={v.icon} alt={v.title} className="h-24 w-auto object-contain" />
              </div>
              <h3 className="text-[0.65rem] tracking-[0.2em] uppercase text-[oklch(0.14_0.005_285)] mb-3" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
                {v.title}
              </h3>
              <p className="text-[0.75rem] text-[oklch(0.5_0.01_285)] leading-relaxed" style={{ fontWeight: 300 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* P&P ARTISTIC STANDARD */}
      <section className="bg-[oklch(0.08_0.004_285)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="mb-16 fade-up">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-10 h-px bg-[oklch(0.72_0.09_75)]" />
              <p className="eyebrow">Our Standard</p>
            </div>
            <h2
              className="text-5xl md:text-7xl text-white mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              The P&amp;P Artistic Standard
            </h2>
            <p
              className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.72_0.09_75)] mb-7"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
            >
              We do not just find artists — we curate mastery.
            </p>
            <p
              className="text-[0.85rem] text-white/45 max-w-2xl leading-relaxed"
              style={{ fontWeight: 300 }}
            >
              Plume &amp; Plush transcends the term "artisan" by working exclusively with highly
              qualified masters of their craft, selected to deliver experiences that meet the
              exacting demands of the world's most prestigious houses.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                Icon: Star,
                title: "Masters of Their Craft",
                desc: "Every artist in our network holds a minimum of 10 years' professional experience in their discipline, with credentials verified through direct assessment by our artistic directors.",
              },
              {
                Icon: Shield,
                title: "Brand-Aligned Execution",
                desc: "We conduct rigorous brand alignment sessions before every activation, ensuring each artisan fully understands and embodies the aesthetic language of the commissioning maison.",
              },
              {
                Icon: Globe,
                title: "Global Cultural Fluency",
                desc: "Our artisans are selected not only for technical mastery but for their deep cultural literacy — enabling authentic, resonant experiences across Arabic, European, and Asian luxury markets.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="border border-white/10 bg-white/[0.03] p-10 hover:border-[oklch(0.72_0.09_75)]/40 transition-colors duration-300 fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <item.Icon
                  size={28}
                  strokeWidth={1.25}
                  className="text-[oklch(0.72_0.09_75)] mb-8"
                />
                <h3
                  className="text-xl text-white mb-5 leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="text-[0.8rem] text-white/45 leading-relaxed" style={{ fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIVE SKETCHING FEATURE */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/images/pink_marble_bg_wide.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <p className="eyebrow mb-4">Live at Your Event</p>
              <h2 className="text-5xl md:text-6xl text-[oklch(0.14_0.005_285)] mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                The Art of<br />Live Sketching
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[oklch(0.72_0.09_75)]" />
                <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
                <div className="w-12 h-px bg-[oklch(0.72_0.09_75)]" />
              </div>
              <p className="text-[0.85rem] text-[oklch(0.3_0.01_285)] leading-relaxed mb-8 max-w-md" style={{ fontWeight: 300 }}>
                Our master portrait artists create bespoke sketches live at your event — weddings, galas, brand activations, and private celebrations. Each portrait is a keepsake of an unforgettable moment.
              </p>
              <Link href="/services" className="btn-gold-filled">
                Explore Live Services
              </Link>
            </div>
            <div className="relative fade-up" style={{ transitionDelay: "150ms" }}>
              <img src="/images/plume_plush_instagram_post.jpg" alt="Live engraving at event" className="w-full h-[500px] object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-[oklch(0.14_0.005_285)] p-6 max-w-[220px]">
                <p className="text-[oklch(0.72_0.09_75)] text-[0.6rem] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>
                  Our Promise
                </p>
                <p className="text-white text-xl leading-snug italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                  "Luxury is in each detail."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section className="bg-[oklch(0.12_0.005_285)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 fade-up">
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="text-5xl md:text-6xl text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Our Signature Services
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
              <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
              <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
            </div>
            <p className="text-[0.8rem] text-white/50 mt-4 max-w-xl mx-auto" style={{ fontWeight: 300 }}>
              Iconic creations that embody elegance, heritage, and refined luxury.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/images/web_live_sketching.png", title: "Live Portrait Sketching", desc: "Bespoke portraits created live at your event — weddings, galas, brand activations." },
              { img: "/images/web_engraving.png", title: "Luxury Engraving", desc: "Precision engraving on glass, metal, leather, and stone for brands and individuals." },
              { img: "/images/web_calligraphy.png", title: "Calligraphy & Lettering", desc: "Hand-lettered invitations, menus, place cards, and bespoke brand typography." },
              { img: "/images/web_embroidery.png", title: "Embroidery & Monogramming", desc: "Artisanal embroidery on garments, accessories, and luxury home textiles." },
              { img: "/images/web_gold_gilding.png", title: "Gold Gilding", desc: "23-carat gold leaf application on frames, furniture, ceramics, and bespoke objects." },
              { img: "/images/web_luxury_event.png", title: "Brand Activations", desc: "Immersive luxury experiences for fashion houses, hotels, and prestige brands worldwide." },
            ].map((s, i) => (
              <div key={s.title} className="group relative overflow-hidden fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <img src={s.img} alt={s.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>{s.title}</h3>
                  <p className="text-[0.75rem] text-white/60 leading-relaxed" style={{ fontWeight: 300 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 fade-up">
            <Link href="/services" className="btn-gold">View All Services</Link>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section id="global" className="bg-[oklch(0.96_0.01_80)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <p className="eyebrow mb-4">Our Presence</p>
              <h2 className="text-5xl md:text-6xl text-[oklch(0.14_0.005_285)] mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                A Global Atelier<br />at Your Service
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-[oklch(0.72_0.09_75)]" />
                <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
              </div>
              <p className="text-[0.85rem] text-[oklch(0.4_0.01_285)] leading-relaxed mb-8 max-w-md" style={{ fontWeight: 300 }}>
                From our headquarters in London to our studios in Dubai, Paris, and Milan — Plume &amp; Plush brings world-class artisanship wherever you are.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { city: "London", detail: "HQ — 128 City Road, EC1V" },
                  { city: "Dubai", detail: "DIFC — Gate Avenue" },
                  { city: "Paris", detail: "8th Arrondissement" },
                  { city: "Milan", detail: "Brera Design District" },
                ].map((loc) => (
                  <div key={loc.city} className="border-l-2 border-[oklch(0.72_0.09_75)] pl-4">
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[oklch(0.72_0.09_75)] mb-1" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>{loc.city}</p>
                    <p className="text-[0.75rem] text-[oklch(0.5_0.01_285)]" style={{ fontWeight: 300 }}>{loc.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <img src="/images/web_london_dubai.png" alt="London and Dubai" className="w-full h-[420px] object-cover shadow-xl" />
              <img src="/images/web_global_map.png" alt="Global map" className="w-full h-48 object-cover mt-4 shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* WORLD OF PLUME & PLUSH */}
      <section className="bg-[oklch(0.08_0.004_285)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="mb-16 fade-up">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-10 h-px bg-[oklch(0.72_0.09_75)]" />
              <p className="eyebrow">Around the World</p>
            </div>
            <h2
              className="text-5xl md:text-7xl text-white mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              The World of Plume &amp; Plush
            </h2>
            <p className="text-[0.85rem] text-white/45 max-w-2xl leading-relaxed" style={{ fontWeight: 300 }}>
              Artistry Without Borders. From private salons in Paris to grand galas in Dubai,
              our live activations grace the world's most prestigious stages.
            </p>
          </div>

          {/* 3×2 photo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { event: "Riyadh Season",      location: "Saudi Arabia" },
              { event: "Paris Fashion Week", location: "France"       },
              { event: "Art Basel",          location: "Miami"        },
              { event: "Dubai Expo",         location: "UAE"          },
              { event: "Venice Biennale",    location: "Italy"        },
              { event: "Singapore F1 Gala",  location: "Singapore"   },
            ].map((item, i) => (
              <div key={item.event} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                {/* Placeholder card */}
                <div className="relative bg-[oklch(0.11_0.004_285)] aspect-[4/3] flex flex-col items-center justify-center border border-white/8">
                  {/* Corner brackets */}
                  <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-white/25" />
                  <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-white/25" />
                  {/* Camera icon */}
                  <Camera size={26} strokeWidth={1} className="text-white/25 mb-3" />
                  <p className="text-[0.55rem] tracking-[0.25em] uppercase text-white/20" style={{ fontFamily: "'Jost', sans-serif" }}>
                    Insert Photo
                  </p>
                </div>
                {/* Caption */}
                <div className="mt-4 text-center">
                  <p
                    className="text-base text-white mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                  >
                    {item.event}
                  </p>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.72_0.09_75)]" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/images/business_card_bg_texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-up">
          <p className="eyebrow mb-4">Our Philosophy</p>
          <h2 className="text-4xl md:text-5xl text-white mb-6 leading-relaxed italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            "Luxury is in each detail.<br />Elegance is in every choice.<br />Exclusivity is our promise."
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
            <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
          </div>
          <a href="/services" className="btn-gold">Discover Our World</a>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="bg-[oklch(0.96_0.01_80)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center fade-up">
          <p className="eyebrow mb-4">Begin Your Journey</p>
          <h2 className="text-5xl text-[oklch(0.14_0.005_285)] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            Commission Something Extraordinary
          </h2>
          <p className="text-[0.85rem] text-[oklch(0.4_0.01_285)] mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
            Whether you are planning a private event, a brand activation, or a bespoke commission, our team is ready to bring your vision to life with uncompromising artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@plumeplush.com" className="btn-gold-filled">Email Us</a>
            <a href="tel:+447415202350" className="btn-gold">Call London</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
