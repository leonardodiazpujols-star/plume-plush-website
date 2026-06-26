/**
 * Navigation — Plume & Plush
 * Transparent over hero, transitions to opaque charcoal on scroll
 * Font: Jost 300/400, letter-spacing wide
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ];

  const navBg = scrolled
    ? "bg-[oklch(0.14_0.005_285)]/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/manus-storage/pp_monogram_transparent_6c7d38b2.png"
            alt="P&P Monogram"
            className="h-12 w-12 object-contain"
          />
          <span
            className="hidden sm:block font-display text-sm tracking-[0.25em] uppercase text-white/90"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Plume &amp; Plush
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-[oklch(0.72_0.09_75)]"
                    : "text-white/80 hover:text-[oklch(0.72_0.09_75)]"
                }`}
                style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block btn-gold text-[0.6rem]"
          style={{ padding: "0.5rem 1.5rem" }}
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[oklch(0.14_0.005_285)] border-t border-[oklch(0.72_0.09_75)]/20 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-[oklch(0.72_0.09_75)] text-[0.7rem] tracking-[0.2em] uppercase transition-colors"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
          <a href="#contact" className="btn-gold text-center mt-2">
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
