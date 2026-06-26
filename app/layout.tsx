import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plume & Plush — Where Artistry Meets Prestige",
  description:
    "Exquisite artisan services for luxury brands and private clients. Live portrait sketching, luxury engraving, calligraphy, embroidery, gold gilding, and brand activations. Offices in London, Dubai, Paris & Milan.",
  openGraph: {
    title: "Plume & Plush — Where Artistry Meets Prestige",
    description:
      "Exquisite artisan services for luxury brands and private clients. Live portrait sketching, luxury engraving, calligraphy, embroidery, gold gilding, and brand activations.",
    type: "website",
    images: [{ url: "/images/pp_monogram_transparent.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: `${jost.style.fontFamily}, sans-serif` }}>
        <TooltipProvider>
          <Toaster />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
