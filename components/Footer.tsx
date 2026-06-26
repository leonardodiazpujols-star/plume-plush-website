import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.10_0.005_285)] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1 flex flex-col items-start gap-4">
          <img src="/images/pp_monogram_transparent.png" alt="P&P" className="h-16 w-16 object-contain" />
          <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.72_0.09_75)]" style={{ fontFamily: "'Jost', sans-serif" }}>
            Plume &amp; Plush
          </p>
          <p className="text-[0.75rem] leading-relaxed text-white/50 max-w-[200px]" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            Where artistry meets prestige. Crafted for the exceptional.
          </p>
        </div>

        <div>
          <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.72_0.09_75)] mb-5" style={{ fontFamily: "'Jost', sans-serif" }}>Navigation</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "#about" },
              { label: "Services", href: "/services" },
              { label: "Events", href: "#events" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-[0.75rem] text-white/50 hover:text-[oklch(0.72_0.09_75)] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.72_0.09_75)] mb-5" style={{ fontFamily: "'Jost', sans-serif" }}>Contact</h4>
          <ul className="flex flex-col gap-3 text-[0.75rem] text-white/50" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            <li>London: +44 (0)7415 202 350</li>
            <li>Dubai: +971 58 301 8359</li>
            <li>
              <a href="mailto:info@plumeplush.com" className="hover:text-[oklch(0.72_0.09_75)] transition-colors">info@plumeplush.com</a>
            </li>
            <li className="mt-2 leading-relaxed">
              Plume &amp; Plush Limited<br />128 City Road<br />London EC1V 2NX
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.72_0.09_75)] mb-5" style={{ fontFamily: "'Jost', sans-serif" }}>Hours</h4>
          <p className="text-[0.75rem] text-white/50 mb-6" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            Monday – Saturday<br />9:00 am – 8:00 pm<br />Sunday – Closed
          </p>
          <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.72_0.09_75)] mb-4" style={{ fontFamily: "'Jost', sans-serif" }}>Follow</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/plume_and_plush/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[oklch(0.72_0.09_75)] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white/40 hover:text-[oklch(0.72_0.09_75)] transition-colors">
              <Facebook size={18} />
            </a>
            <a href="mailto:info@plumeplush.com" className="text-white/40 hover:text-[oklch(0.72_0.09_75)] transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[oklch(0.72_0.09_75)]/20" />
      <div className="py-5 text-center">
        <p className="text-[0.6rem] tracking-[0.35em] uppercase text-[oklch(0.72_0.09_75)]/60" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
          Dubai &nbsp;·&nbsp; London &nbsp;·&nbsp; Paris &nbsp;·&nbsp; Milan &nbsp;·&nbsp; New York
        </p>
      </div>
      <div className="border-t border-white/5 py-4 text-center">
        <p className="text-[0.65rem] text-white/30" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
          © 2026 Plume and Plush Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
