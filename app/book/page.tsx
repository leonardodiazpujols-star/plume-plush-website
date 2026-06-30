import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArtisanEnquiryForm from "@/components/ArtisanEnquiryForm";

export const metadata: Metadata = {
  title: "Book an Artisan — Plume & Plush",
  description:
    "Request a bespoke artisan experience for your event or brand activation. Live sketching, engraving, calligraphy, embroidery, gold gilding and more.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Jost', sans-serif" }}>
      <Navigation />

      {/* Page header */}
      <section className="bg-[oklch(0.08_0.004_285)] pt-52 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-10 h-px bg-[oklch(0.72_0.09_75)]" />
            <p className="text-[0.6rem] tracking-[0.28em] uppercase text-[oklch(0.72_0.09_75)]" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
              Art Concierge
            </p>
          </div>
          <h1
            className="text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Request an Artisan
          </h1>
          <p className="text-[1rem] text-white/45 max-w-xl leading-relaxed" style={{ fontWeight: 300 }}>
            Tell us about your project and our Art Concierge team will match you with the perfect artisan for your occasion.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-[oklch(0.975_0.005_80)] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-40 space-y-10">

                <div>
                  <p className="text-[0.58rem] tracking-[0.25em] uppercase text-[oklch(0.72_0.09_75)] mb-4" style={{ fontFamily: "'Jost', sans-serif" }}>
                    What to expect
                  </p>
                  <ul className="space-y-5">
                    {[
                      { n: "01", t: "Submit your enquiry", d: "Complete the form with your event details and vision." },
                      { n: "02", t: "Artisan matching", d: "Our team selects the ideal master for your commission." },
                      { n: "03", t: "Personal consultation", d: "We contact you within 48 hours to discuss your project." },
                      { n: "04", t: "Confirmed & delivered", d: "Your bespoke artisan experience, seamlessly executed." },
                    ].map(item => (
                      <li key={item.n} className="flex gap-4">
                        <span className="text-[0.65rem] text-[oklch(0.72_0.09_75)] shrink-0 mt-0.5" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>{item.n}</span>
                        <div>
                          <p className="text-[0.875rem] text-[oklch(0.14_0.005_285)] mb-1" style={{ fontWeight: 500 }}>{item.t}</p>
                          <p className="text-[0.83rem] text-[oklch(0.55_0.01_285)] leading-relaxed" style={{ fontWeight: 300 }}>{item.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[oklch(0.88_0.01_75)] pt-8">
                  <p className="text-[0.58rem] tracking-[0.25em] uppercase text-[oklch(0.72_0.09_75)] mb-4" style={{ fontFamily: "'Jost', sans-serif" }}>
                    Prefer to talk?
                  </p>
                  <div className="space-y-3">
                    <a href="mailto:anna@plumeplush.com" className="block text-[0.9rem] text-[oklch(0.14_0.005_285)] hover:text-[oklch(0.72_0.09_75)] transition-colors" style={{ fontWeight: 300 }}>
                      anna@plumeplush.com
                    </a>
                    <a href="tel:+447415202350" className="block text-[0.9rem] text-[oklch(0.14_0.005_285)] hover:text-[oklch(0.72_0.09_75)] transition-colors" style={{ fontWeight: 300 }}>
                      +44 7415 202 350
                    </a>
                  </div>
                </div>

                <blockquote className="border-l-2 border-[oklch(0.72_0.09_75)] pl-5">
                  <p className="text-lg text-[oklch(0.14_0.005_285)] italic leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                    "Luxury is in each detail. Elegance is in every choice."
                  </p>
                </blockquote>

              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <ArtisanEnquiryForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
