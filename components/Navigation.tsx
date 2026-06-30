"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const navBg = scrolled
    ? "bg-[oklch(0.14_0.005_285)]/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-32">
        <Link href="/" className="flex items-center">
          <img src="/images/pp_monogram_transparent.png" alt="Plume & Plush" className="h-24 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-200 ${
                  isActive ? "text-[oklch(0.72_0.09_75)]" : "text-white/80 hover:text-[oklch(0.72_0.09_75)]"
                }`}
                style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/book" className="hidden md:block btn-gold text-[0.6rem]" style={{ padding: "0.5rem 1.5rem" }}>
          Book Now
        </Link>

        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

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
          <Link href="/book" className="btn-gold text-center mt-2" onClick={() => setMobileOpen(false)}>Book Now</Link>
        </div>
      )}
    </header>
  );
}
