import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimationsInit } from "@/components/AnimationsInit";

export const metadata: Metadata = {
  title: "Contact — Plume & Plush",
  description:
    "Get in touch with Plume & Plush. Call +44 7415 202 350, email sophia@plumeplush.com, or visit our studios in London and Dubai. Operating across the UK, Europe, and the GCC.",
};

const offices = [
  {
    city: "London",
    flag: "🇬🇧",
    role: "Global Headquarters",
    address: "128 City Road\nLondon EC1V 2NX",
    phone: "+44 (0)7415 202 350",
    email: "sophia@plumeplush.com",
  },
  {
    city: "Dubai",
    flag: "🇦🇪",
    role: "Middle East Hub",
    address: "DIFC — Gate Avenue\nDubai, UAE",
    phone: "+971 58 301 8359",
    email: "info@plumeplush.com",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[oklch(0.96_0.01_80)]" style={{ fontFamily: "'Jost', sans-serif" }}>
      <AnimationsInit />
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden pt-20"
        style={{
          backgroundImage: "url('/images/bg_charcoal_marble_hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center gap-5 px-6 py-20">
          <p className="eyebrow">Get in Touch</p>
          <h1
            className="text-5xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Contact Us
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
            <span className="text-[oklch(0.72_0.09_75)] text-xs">✦</span>
            <div className="w-16 h-px bg-[oklch(0.72_0.09_75)]" />
          </div>
          <p className="text-[0.75rem] tracking-[0.2em] uppercase text-white/60 max-w-lg" style={{ fontWeight: 300 }}>
            We'd love to hear from you. Reach out and let's create something extraordinary together.
          </p>
        </div>
      </section>

      {/* ── CONTACT METHODS ── */}
      <section className="bg-[oklch(0.96_0.01_80)] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Phone */}
            <a
              href="tel:+447415202350"
              className="group border border-[oklch(0.88_0.01_75)] p-10 flex flex-col items-center text-center gap-5 hover:border-[oklch(0.72_0.09_75)] transition-all duration-300 fade-up"
            >
              <div className="w-14 h-14 border border-[oklch(0.72_0.09_75)] flex items-center justify-center group-hover:bg-[oklch(0.72_0.09_75)] transition-colors duration-300">
                <Phone size={20} className="text-[oklch(0.72_0.09_75)] group-hover:text-[oklch(0.14_0.005_285)] transition-colors duration-300" />
              </div>
              <div>
                <p className="eyebrow mb-3">Call the Office</p>
                <p
                  className="text-2xl text-[oklch(0.14_0.005_285)] tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  +44 7415 202 350
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:sophia@plumeplush.com"
              className="group border border-[oklch(0.88_0.01_75)] p-10 flex flex-col items-center text-center gap-5 hover:border-[oklch(0.72_0.09_75)] transition-all duration-300 fade-up"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-14 h-14 border border-[oklch(0.72_0.09_75)] flex items-center justify-center group-hover:bg-[oklch(0.72_0.09_75)] transition-colors duration-300">
                <Mail size={20} className="text-[oklch(0.72_0.09_75)] group-hover:text-[oklch(0.14_0.005_285)] transition-colors duration-300" />
              </div>
              <div>
                <p className="eyebrow mb-3">Email Us</p>
                <p
                  className="text-2xl text-[oklch(0.14_0.005_285)] tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  sophia@plumeplush.com
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section className="bg-[oklch(0.93_0.008_80)] py-16 border-y border-[oklch(0.88_0.01_75)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center fade-up">
          <p className="eyebrow mb-4">Where We Operate</p>
          <h2
            className="text-4xl text-[oklch(0.14_0.005_285)] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            United Kingdom · Europe · GCC
          </h2>
          <p className="text-[0.85rem] text-[oklch(0.5_0.01_285)] max-w-xl mx-auto" style={{ fontWeight: 300 }}>
            We are now operating across the United Kingdom, Europe, and the Gulf Cooperation Council — bringing world-class artisanship wherever you are.
          </p>
        </div>
      </section>

      {/* ── GLOBAL MAP — Full Screen ── */}
      <section className="w-full h-screen relative overflow-hidden">
        <img
          src="/images/web_global_map.png"
          alt="Plume & Plush global presence — London, Paris, Milan, Dubai, New York"
          className="w-full h-full object-cover"
        />
      </section>

      {/* ── OFFICES — Dark Charcoal ── */}
      <section className="bg-[oklch(0.12_0.005_285)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 fade-up">
            <p className="eyebrow mb-3">Our Offices</p>
            <h2
              className="text-5xl text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Find Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, i) => (
              <div
                key={office.city}
                className="border border-[oklch(0.72_0.09_75)]/20 p-10 hover:border-[oklch(0.72_0.09_75)]/60 transition-colors fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl mb-4">{office.flag}</div>
                <h3
                  className="text-2xl text-white mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  {office.city}
                </h3>
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.72_0.09_75)] mb-6" style={{ fontFamily: "'Jost', sans-serif" }}>
                  {office.role}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-[oklch(0.72_0.09_75)] mt-0.5 shrink-0" />
                    <p className="text-[0.78rem] text-white/50 leading-relaxed whitespace-pre-line" style={{ fontWeight: 300 }}>
                      {office.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-[oklch(0.72_0.09_75)] shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-[0.78rem] text-white/50 hover:text-[oklch(0.72_0.09_75)] transition-colors" style={{ fontWeight: 300 }}>
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-[oklch(0.72_0.09_75)] shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-[0.78rem] text-white/50 hover:text-[oklch(0.72_0.09_75)] transition-colors" style={{ fontWeight: 300 }}>
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOURS & SOCIAL ── */}
      <section className="bg-[oklch(0.96_0.01_80)] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Hours */}
            <div className="text-center md:text-left fade-up">
              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <Clock size={16} className="text-[oklch(0.72_0.09_75)]" />
                <p className="eyebrow">Hours</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between border-b border-[oklch(0.88_0.01_75)] pb-3">
                  <span className="text-[0.8rem] text-[oklch(0.4_0.01_285)]" style={{ fontWeight: 300 }}>Monday – Saturday</span>
                  <span className="text-[0.8rem] text-[oklch(0.72_0.09_75)]" style={{ fontWeight: 400 }}>9:00 am – 8:00 pm</span>
                </div>
                <div className="flex justify-between pb-3">
                  <span className="text-[0.8rem] text-[oklch(0.4_0.01_285)]" style={{ fontWeight: 300 }}>Sunday</span>
                  <span className="text-[0.8rem] text-[oklch(0.5_0.01_285)]" style={{ fontWeight: 300 }}>Closed</span>
                </div>
              </div>
            </div>

            {/* Follow */}
            <div className="text-center md:text-left fade-up" style={{ transitionDelay: "100ms" }}>
              <p className="eyebrow mb-6">Follow Us</p>
              <div className="flex gap-5 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/plume_and_plush/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[oklch(0.4_0.01_285)] hover:text-[oklch(0.72_0.09_75)] transition-colors"
                >
                  <div className="w-10 h-10 border border-[oklch(0.88_0.01_75)] group-hover:border-[oklch(0.72_0.09_75)] flex items-center justify-center transition-colors">
                    <Instagram size={16} />
                  </div>
                  <span className="text-[0.7rem] tracking-[0.15em] uppercase" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>Instagram</span>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-[oklch(0.4_0.01_285)] hover:text-[oklch(0.72_0.09_75)] transition-colors"
                >
                  <div className="w-10 h-10 border border-[oklch(0.88_0.01_75)] group-hover:border-[oklch(0.72_0.09_75)] flex items-center justify-center transition-colors">
                    <Facebook size={16} />
                  </div>
                  <span className="text-[0.7rem] tracking-[0.15em] uppercase" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>Facebook</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
