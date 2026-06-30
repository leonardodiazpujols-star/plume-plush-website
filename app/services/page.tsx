import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, Shield, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimationsInit } from "@/components/AnimationsInit";
import ArtisanEnquiryButton from "@/components/ArtisanEnquiryButton";

export const metadata: Metadata = {
  title: "Services — Plume & Plush",
  description:
    "Our signature artisan services: live portrait sketching, luxury engraving, calligraphy & lettering, embroidery & monogramming, gold gilding, and bespoke brand activations for luxury clients worldwide.",
};

const services = [
  {
    id: "live-sketching",
    eyebrow: "Live at Your Event",
    title: "Live Portrait Sketching",
    img: "/images/web_live_sketching.png",
    description:
      "Our master portrait artists create bespoke sketches live at your event — transforming each guest into a timeless work of art. From intimate weddings to grand brand activations, our artists work in pencil, charcoal, watercolour, and ink.",
    features: ["Weddings & Private Celebrations", "Brand Activations & Pop-ups", "Corporate Events & Galas", "Luxury Retail Experiences", "Hotel & Resort Residencies"],
    accent: "pink",
  },
  {
    id: "engraving",
    eyebrow: "Precision Artistry",
    title: "Luxury Engraving",
    img: "/images/web_engraving.png",
    description:
      "Precision engraving on glass, crystal, metal, leather, and stone. Each mark is a permanent testament to heritage and prestige. We engrave monograms, crests, signatures, and bespoke motifs for brands and private clients alike.",
    features: ["Glass & Crystal Engraving", "Metal & Jewellery Engraving", "Leather Goods Personalisation", "Trophy & Award Engraving", "Architectural & Interior Pieces"],
    accent: "dark",
  },
  {
    id: "calligraphy",
    eyebrow: "The Written Word",
    title: "Calligraphy & Lettering",
    img: "/images/web_calligraphy.png",
    description:
      "Hand-lettered invitations, menus, place cards, and bespoke brand typography. Our calligraphers master traditional and contemporary scripts for the most discerning clients.",
    features: ["Wedding Stationery & Invitations", "Event Menus & Place Cards", "Brand Identity Lettering", "Live Calligraphy at Events", "Bespoke Artwork & Prints"],
    accent: "pink",
  },
  {
    id: "embroidery",
    eyebrow: "Thread & Needle",
    title: "Embroidery & Monogramming",
    img: "/images/web_embroidery.png",
    description:
      "Artisanal embroidery on garments, accessories, and luxury home textiles. From hand-stitched monograms on bespoke shirts to elaborate crests on ceremonial robes.",
    features: ["Garment & Accessory Monogramming", "Luxury Home Textiles", "Ceremonial & Uniform Embroidery", "Brand Logo Embroidery", "Bespoke Embroidered Artwork"],
    accent: "dark",
  },
  {
    id: "gilding",
    eyebrow: "23-Carat Artistry",
    title: "Gold Gilding",
    img: "/images/web_gold_gilding.png",
    description:
      "23-carat gold leaf application on frames, furniture, ceramics, and bespoke objects. Our gilders use traditional water gilding and oil gilding techniques to create surfaces of extraordinary luminosity.",
    features: ["Picture Frame Gilding", "Furniture & Interior Gilding", "Ceramic & Porcelain Gilding", "Architectural Gilding", "Bespoke Object Gilding"],
    accent: "pink",
  },
  {
    id: "activations",
    eyebrow: "Immersive Experiences",
    title: "Brand Activations",
    img: "/images/web_luxury_event.png",
    description:
      "Immersive luxury experiences for fashion houses, five-star hotels, and prestige brands worldwide. We design and deliver bespoke artisan stations that create unforgettable moments.",
    features: ["Fashion Week Activations", "Hotel & Resort Experiences", "Luxury Retail Pop-ups", "Private Client Events", "Corporate Gifting Programmes"],
    accent: "dark",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[oklch(0.96_0.01_80)]" style={{ fontFamily: "'Jost', sans-serif" }}>
      <AnimationsInit threshold={0.1} />
      <Navigation />

      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden pt-20"
        style={{
          backgroundImage: "url('/images/bg_charcoal_marble_hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center gap-5 px-6 py-20">
          <p className="eyebrow">Our Craft</p>
          <h1 className="text-5xl md:text-7xl text-white leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            Services of<br />Distinction
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
            <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
          </div>
          <p className="text-[0.75rem] tracking-[0.2em] uppercase text-white/60 max-w-lg" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            From live artisan experiences to bespoke commissions — every service is an act of devotion to the extraordinary.
          </p>
        </div>
      </section>

      {/* SERVICES — Alternating */}
      {services.map((service, i) => {
        const isEven = i % 2 === 0;
        const bgClass = service.accent === "pink" ? "bg-[oklch(0.96_0.01_80)]" : "bg-[oklch(0.12_0.005_285)]";
        const textClass = service.accent === "dark" ? "text-white" : "text-[oklch(0.14_0.005_285)]";
        const subTextClass = service.accent === "dark" ? "text-white/60" : "text-[oklch(0.4_0.01_285)]";

        return (
          <section key={service.id} id={service.id} className={`${bgClass} py-20`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                <div className={`fade-up ${isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
                  <img src={service.img} alt={service.title} className="w-full h-[480px] object-cover shadow-2xl" />
                </div>
                <div className={`fade-up ${isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"}`} style={{ transitionDelay: "120ms" }}>
                  <p className="eyebrow mb-4">{service.eyebrow}</p>
                  <h2 className={`text-4xl md:text-5xl ${textClass} mb-6 leading-tight`} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                    {service.title}
                  </h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-px bg-[oklch(0.72_0.09_75)]" />
                    <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
                  </div>
                  <p className={`text-[0.85rem] ${subTextClass} leading-relaxed mb-8 max-w-md`} style={{ fontWeight: 300 }}>
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <Check size={12} className="text-[oklch(0.72_0.09_75)]" />
                        <span className={`text-[0.78rem] ${subTextClass}`} style={{ fontWeight: 300 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* PROCESS */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: "url('/images/pink_marble_bg_wide.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 fade-up">
            <p className="eyebrow mb-3">How We Work</p>
            <h2 className="text-5xl text-[oklch(0.14_0.005_285)]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              The Plume &amp; Plush Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We begin with a detailed conversation to understand your vision, event, and expectations." },
              { step: "02", title: "Curation", desc: "Our team selects the perfect artisans and crafts a bespoke proposal tailored to your needs." },
              { step: "03", title: "Creation", desc: "Master artisans bring your vision to life with meticulous attention to every detail." },
              { step: "04", title: "Delivery", desc: "We ensure flawless execution on the day, leaving you free to enjoy the experience." },
            ].map((p, i) => (
              <div key={p.step} className="text-center fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-5xl text-[oklch(0.14_0.005_285)] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>{p.step}</div>
                <h3 className="text-xl text-[oklch(0.14_0.005_285)] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>{p.title}</h3>
                <p className="text-[0.78rem] text-[oklch(0.4_0.01_285)] leading-relaxed" style={{ fontWeight: 300 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* P&P ARTISTIC STANDARD */}
      <section className="bg-[oklch(0.08_0.004_285)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
            <p className="text-[0.94rem] tracking-[0.18em] uppercase text-[oklch(0.72_0.09_75)] mb-7 font-bold"
              style={{ fontFamily: "'Jost', sans-serif" }}>
              We do not just find artists — we curate mastery.
            </p>
            <p className="text-[0.85rem] text-white/45 max-w-2xl leading-relaxed" style={{ fontWeight: 300 }}>
              Plume &amp; Plush transcends the term "artisan" by working exclusively with highly
              qualified masters of their craft, selected to deliver experiences that meet the
              exacting demands of the world's most prestigious houses.
            </p>
          </div>

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
                <item.Icon size={28} strokeWidth={1.25} className="text-[oklch(0.72_0.09_75)] mb-8" />
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

          <div className="mt-12 text-center fade-up">
            <ArtisanEnquiryButton variant="gold" />
          </div>
        </div>
      </section>

      {/* GLOBAL OFFICES */}
      <section className="bg-[oklch(0.12_0.005_285)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 fade-up">
            <p className="eyebrow mb-3">Global Reach</p>
            <h2 className="text-5xl text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Wherever You Are,<br />We Are There
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
              <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
              <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
            </div>
          </div>
          <img src="/images/web_global_map.png" alt="Global presence map" className="w-full max-w-4xl mx-auto h-64 object-cover mb-14 fade-up" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "London", flag: "🇬🇧", address: "128 City Road\nLondon EC1V 2NX", phone: "+44 (0)7415 202 350", role: "Global Headquarters" },
              { city: "Dubai", flag: "🇦🇪", address: "DIFC — Gate Avenue\nDubai, UAE", phone: "+971 58 301 8359", role: "Middle East Hub" },
              { city: "Paris", flag: "🇫🇷", address: "8th Arrondissement\nParis, France", phone: "By appointment", role: "European Studio" },
              { city: "Milan", flag: "🇮🇹", address: "Brera Design District\nMilan, Italy", phone: "By appointment", role: "Italian Atelier" },
            ].map((office, i) => (
              <div key={office.city} className="border border-[oklch(0.72_0.09_75)]/20 p-6 hover:border-[oklch(0.72_0.09_75)]/60 transition-colors fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-2xl mb-3">{office.flag}</div>
                <h3 className="text-xl text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>{office.city}</h3>
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.72_0.09_75)] mb-4" style={{ fontFamily: "'Jost', sans-serif" }}>{office.role}</p>
                <p className="text-[0.75rem] text-white/50 leading-relaxed whitespace-pre-line mb-3" style={{ fontWeight: 300 }}>{office.address}</p>
                <p className="text-[0.75rem] text-[oklch(0.72_0.09_75)]/70" style={{ fontWeight: 300 }}>{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="bg-[oklch(0.96_0.01_80)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center fade-up">
          <p className="eyebrow mb-4">Commission Us</p>
          <h2 className="text-5xl text-[oklch(0.14_0.005_285)] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            Begin Your<br />Bespoke Journey
          </h2>
          <p className="text-[0.85rem] text-[oklch(0.4_0.01_285)] mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
            Tell us about your event, your brand, or your vision. Our team will respond within 24 hours with a bespoke proposal crafted for your exact needs.
          </p>
          <Link href="/book" className="btn-gold-filled">Book an Artisan</Link>
          <p className="mt-6 text-[0.72rem] text-[oklch(0.6_0.01_285)]" style={{ fontWeight: 300 }}>
            Prefer to talk?{" "}
            <a href="tel:+447415202350" className="text-[oklch(0.72_0.09_75)] hover:underline">Call London</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
