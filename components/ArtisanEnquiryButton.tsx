import Link from "next/link";

interface Props {
  label?: string;
  variant?: "gold" | "gold-filled";
  className?: string;
}

export default function ArtisanEnquiryButton({
  label = "Book an Artisan",
  variant = "gold",
  className = "",
}: Props) {
  return (
    <Link
      href="/book"
      className={`btn-${variant} ${className}`}
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {label}
    </Link>
  );
}
