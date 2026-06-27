import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimationsInit } from "@/components/AnimationsInit";

export const metadata: Metadata = {
  title: "About Us — Plume & Plush",
  description:
    "Founded on a passion for art and creativity, Plume & Plush bridges visionary artists and luxury brands — forging partnerships that blend masterful artisanship with opulence.",
};

const whyChooseUs = [
  {
    icon: "◈",
    title: "Curated Network",
    desc: "Our platform features a curated network of talented artists and designers, ensuring quality and creativity in every collaboration.",
  },
  {
    icon: "✦",
    title: "Tailored Solutions",
    desc: "We understand the unique needs of luxury brands and offer tailored solutions that align with their brand identity and vision.",
  },
  {
    icon: "♛",
    title: "Innovative Approach",
    desc: "We encourage innovation and experimentation, allowing brands and artists to push boundaries and create groundbreaking projects.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[oklch(0.96_0.01_80)]" style={{ fontFamily: "'Jost', sans-serif" }}>
      <AnimationsInit />
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden pt-20"
        style={{
          backgroundImage: "url('/images/bg_charcoal_marble_hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center gap-5 px-6 py-20 max-w-4xl mx-auto">
          <p className="eyebrow">Our Story</p>
          <h1
            className="text-5xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Founded on a Passion<br />for Art &amp; Creativity
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
            <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
          </div>
          <p
            className="text-[0.85rem] text-white/70 max-w-2xl leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            We believe in the transformative power of art and creativity. Our platform bridges the gap between visionary artists and luxurious brands, facilitating collaborations that bring visual ideas to life in the most innovative and captivating ways.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-[oklch(0.96_0.01_80)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <p className="eyebrow mb-4">What Drives Us</p>
              <h2
                className="text-5xl md:text-6xl text-[oklch(0.14_0.005_285)] mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Our Mission
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-[oklch(0.72_0.09_75)]" />
                <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
              </div>
              <p
                className="text-[0.9rem] text-[oklch(0.4_0.01_285)] leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                Our mission is to connect artists with luxurious brands and organisations, enabling them to collaborate on creative projects that elevate brand storytelling and create unforgettable experiences. We are committed to fostering meaningful partnerships that celebrate artistic expression and drive excellence in the luxury market.
              </p>
            </div>
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <img
                src="/images/web_calligraphy.png"
                alt="Calligraphy artistry"
                className="w-full h-[480px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[oklch(0.93_0.008_80)] py-20 border-y border-[oklch(0.88_0.01_75)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 fade-up">
            <p className="eyebrow mb-3">The Plume &amp; Plush Difference</p>
            <h2
              className="text-5xl text-[oklch(0.14_0.005_285)]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[oklch(0.88_0.01_75)]">
            {whyChooseUs.map((item, i) => (
              <div
                key={item.title}
                className="px-10 py-10 text-center fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl text-[oklch(0.72_0.09_75)] mb-6">{item.icon}</div>
                <h3
                  className="text-[0.65rem] tracking-[0.2em] uppercase text-[oklch(0.14_0.005_285)] mb-4"
                  style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[0.82rem] text-[oklch(0.5_0.01_285)] leading-relaxed"
                  style={{ fontWeight: 300 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY — Pink Marble ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/images/pink_marble_bg_wide.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/35" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 fade-up">
            <p className="eyebrow mb-3">How It Began</p>
            <h2
              className="text-5xl text-[oklch(0.14_0.005_285)]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Our Story
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="fade-up">
              <img
                src="/images/web_engraving.png"
                alt="Master engraving"
                className="w-full h-72 object-cover shadow-xl mb-8"
              />
              <p
                className="text-[0.88rem] text-[oklch(0.3_0.01_285)] leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                Founded with a passion for creative projects and human relationships, Plume &amp; Plush offers a 360° expertise in bridging luxury brands and artisans. Our extensive network of the world's finest artists enables us to forge unique partnerships, bringing the elegance of masterful calligraphy and the precision of fine engraving to your brand's identity.
              </p>
              <p
                className="text-[0.88rem] text-[oklch(0.3_0.01_285)] leading-relaxed mt-5"
                style={{ fontWeight: 300 }}
              >
                As your narrator and intermediary, we facilitate the creation of exquisite narratives that blend artistry with opulence. Let us guide you in crafting stories of elegance and distinction, where exceptional craftsmanship meets luxury in perfect harmony.
              </p>
            </div>
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <p
                className="text-[0.88rem] text-[oklch(0.3_0.01_285)] leading-relaxed mb-6"
                style={{ fontWeight: 300 }}
              >
                With an unwavering passion for art and creativity, Plume &amp; Plush embarked on a journey to bridge the gap between visionary artists and luxurious brands. Drawing from years of experience in the art world and a keen eye for innovation, we envisioned a platform where artistic expression could seamlessly intertwine with brand storytelling, creating captivating experiences unlike any other.
              </p>
              <p
                className="text-[0.88rem] text-[oklch(0.3_0.01_285)] leading-relaxed mb-6"
                style={{ fontWeight: 300 }}
              >
                As the driving force behind Plume &amp; Plush, we bring not only expertise but also a deep commitment to fostering meaningful collaborations. Our relentless pursuit of excellence drives every aspect of the platform, ensuring that each project pushes boundaries and transforms visual ideas into extraordinary realities.
              </p>
              <div className="border-l-2 border-[oklch(0.72_0.09_75)] pl-6 mt-8">
                <p
                  className="text-xl text-[oklch(0.14_0.005_285)] italic leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  "Plume &amp; Plush is not just a platform — it's a catalyst for artistic innovation and brand transformation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL VISION — Dark Charcoal ── */}
      <section className="bg-[oklch(0.12_0.005_285)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <img
                src="/images/web_london_dubai.png"
                alt="Global presence"
                className="w-full h-[420px] object-cover shadow-2xl"
              />
              <img
                src="/images/web_global_map.png"
                alt="Global map"
                className="w-full h-48 object-cover mt-4 shadow-md"
              />
            </div>
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <p className="eyebrow mb-4">Global Vision</p>
              <h2
                className="text-4xl md:text-5xl text-white mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Elegance Without<br />Borders
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-[oklch(0.72_0.09_75)]" />
                <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
              </div>
              <p
                className="text-[0.88rem] text-white/60 leading-relaxed mb-6"
                style={{ fontWeight: 300 }}
              >
                We embody elegance and global vision, bringing a wealth of experience in luxury branding and international business development. With a keen understanding of the unique needs of luxury brands, we spearhead efforts to expand Plume &amp; Plush's reach across borders, forging meaningful partnerships that transcend cultural boundaries.
              </p>
              <p
                className="text-[0.88rem] text-white/60 leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                Our leadership is characterised by an unwavering commitment to excellence and the ability to tailor solutions that perfectly align with each brand's identity and vision — ensuring that Plume &amp; Plush remains at the forefront of the luxury market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE NARRATOR — Closing Statement ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/images/business_card_bg_texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center fade-up">
          <p className="eyebrow mb-6">Who We Are</p>
          <h2
            className="text-4xl md:text-5xl text-white mb-8 leading-relaxed italic"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            "Together with our network of the best artists in the world, we establish the bridge between luxury brands and artisans."
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
            <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
          </div>
          <p
            className="text-[0.8rem] tracking-[0.2em] uppercase text-[oklch(0.72_0.09_75)] mb-10"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
          >
            We are the Narrator. The intermediary that makes it happen.
          </p>
          <a href="/services" className="btn-gold">Explore Our Services</a>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-[oklch(0.96_0.01_80)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center fade-up">
          <p className="eyebrow mb-4">Work With Us</p>
          <h2
            className="text-5xl text-[oklch(0.14_0.005_285)] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Begin a Collaboration
          </h2>
          <p
            className="text-[0.85rem] text-[oklch(0.4_0.01_285)] mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            Whether you are a luxury brand seeking a creative partner or an artist looking to connect with exceptional clients, we would love to hear from you.
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
