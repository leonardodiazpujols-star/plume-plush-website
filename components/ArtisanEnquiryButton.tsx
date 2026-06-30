"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ArtisanEnquiryModal = dynamic(() => import("./ArtisanEnquiryModal"), { ssr: false });

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
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`btn-${variant} ${className}`}
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        {label}
      </button>
      {open && <ArtisanEnquiryModal onClose={() => setOpen(false)} />}
    </>
  );
}
