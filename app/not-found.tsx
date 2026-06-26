import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[oklch(0.96_0.01_80)] flex flex-col items-center justify-center text-center px-6">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-6xl text-[oklch(0.14_0.005_285)] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
        Page Not Found
      </h1>
      <p className="text-[0.85rem] text-[oklch(0.5_0.01_285)] mb-10" style={{ fontWeight: 300 }}>
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="btn-gold">Return Home</Link>
    </div>
  );
}
