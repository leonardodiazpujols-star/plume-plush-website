"use client";

import { useState, useRef } from "react";
import { Upload, CheckCircle, Loader2, ChevronDown, ArrowRight } from "lucide-react";

const SERVICES = [
  "Live Portrait Sketching",
  "Live Engraving",
  "Calligraphy",
  "Embroidery & Monogramming",
  "Gold Gilding",
  "Brand Activation",
  "Other / Not Sure",
];

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  eventDescription: string;
  eventDate: string;
  city: string;
  country: string;
  venue: string;
  website: string;
}

type Status = "idle" | "loading" | "success" | "error";

const EMPTY: FormState = {
  fullName: "", company: "", email: "", phone: "",
  service: "", eventDescription: "", eventDate: "",
  city: "", country: "", venue: "", website: "",
};

export default function ArtisanEnquiryForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm(p => ({ ...p, [field]: e.target.value }));
      if (errors[field]) setErrors(p => ({ ...p, [field]: "" }));
    };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim())         e.fullName = "Required";
    if (!form.email.trim())            e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.phone.trim())            e.phone = "Required";
    if (!form.service)                 e.service = "Please select a service";
    if (!form.eventDescription.trim()) e.eventDescription = "Required";
    if (!form.eventDate)               e.eventDate = "Required";
    if (!form.city.trim())             e.city = "Required";
    if (!form.country.trim())          e.country = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleFile = (f: File) => {
    const allowed = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowed.includes(f.type)) { alert("Please upload a JPG, PNG or PDF."); return; }
    if (f.size > 10 * 1024 * 1024) { alert("File must be under 10MB."); return; }
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return;
    if (!validate()) return;
    setStatus("loading");
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (file) fd.append("file", file);
      const res = await fetch("/api/enquiry", { method: "POST", body: fd });
      if (!res.ok) throw new Error();
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email anna@plumeplush.com directly.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  const inputBase =
    "w-full px-4 py-3.5 bg-white border text-[1rem] text-[oklch(0.14_0.005_285)] placeholder-[oklch(0.7_0.005_285)] outline-none transition-all duration-200 focus:ring-1";
  const inputCls = (f: keyof FormState) =>
    `${inputBase} ${errors[f]
      ? "border-red-400 ring-red-200"
      : "border-[oklch(0.88_0.01_75)] focus:border-[oklch(0.72_0.09_75)] focus:ring-[oklch(0.72_0.09_75)]/20"}`;
  const label = "block text-[0.58rem] tracking-[0.22em] uppercase text-[oklch(0.5_0.01_285)] mb-2";
  const err   = "text-red-400 text-[0.65rem] mt-1.5";
  const gold  = "text-[oklch(0.72_0.09_75)]";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-24 px-6">
        <CheckCircle size={56} strokeWidth={1} className={`${gold} mb-8`} />
        <p className={`text-[0.58rem] tracking-[0.3em] uppercase ${gold} mb-5`} style={{ fontFamily: "'Jost', sans-serif" }}>
          Art Concierge
        </p>
        <h2 className="text-5xl text-[oklch(0.14_0.005_285)] mb-6 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
          Thank you.
        </h2>
        <p className="text-[1rem] text-[oklch(0.5_0.01_285)] leading-relaxed max-w-md" style={{ fontWeight: 300 }}>
          Your request has been received by our Art Concierge team. We will carefully review your requirements and be in touch shortly to discuss the perfect artisan for your project.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <div className="w-12 h-px bg-[oklch(0.72_0.09_75)]" />
          <span className={`${gold} text-xs`}>✦</span>
          <div className="w-12 h-px bg-[oklch(0.72_0.09_75)]" />
        </div>
        <a href="/" className="btn-gold mt-10">Return Home</a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-3xl mx-auto">
      {/* Honeypot */}
      <input type="text" name="website" value={form.website} onChange={set("website")} style={{ display: "none" }} tabIndex={-1} aria-hidden />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

        {/* Full Name */}
        <div>
          <label className={label} htmlFor="fullName">Full Name <span className={gold}>*</span></label>
          <input id="fullName" type="text" autoComplete="name" placeholder="Your full name"
            value={form.fullName} onChange={set("fullName")} className={inputCls("fullName")} />
          {errors.fullName && <p className={err}>{errors.fullName}</p>}
        </div>

        {/* Company */}
        <div>
          <label className={label} htmlFor="company">
            Company / Brand{" "}
            <span className="text-[0.52rem] text-[oklch(0.65_0.005_285)] normal-case tracking-normal">(optional)</span>
          </label>
          <input id="company" type="text" autoComplete="organization" placeholder="Company or brand name"
            value={form.company} onChange={set("company")} className={inputCls("company")} />
        </div>

        {/* Email */}
        <div>
          <label className={label} htmlFor="email">Email Address <span className={gold}>*</span></label>
          <input id="email" type="email" autoComplete="email" placeholder="your@email.com"
            value={form.email} onChange={set("email")} className={inputCls("email")} />
          {errors.email && <p className={err}>{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={label} htmlFor="phone">Phone Number <span className={gold}>*</span></label>
          <input id="phone" type="tel" autoComplete="tel" placeholder="+44 / +971 ..."
            value={form.phone} onChange={set("phone")} className={inputCls("phone")} />
          {errors.phone && <p className={err}>{errors.phone}</p>}
        </div>

        {/* Service — full width */}
        <div className="md:col-span-2">
          <label className={label} htmlFor="service">What service do you need? <span className={gold}>*</span></label>
          <div className="relative">
            <select id="service" value={form.service} onChange={set("service")}
              className={`${inputCls("service")} appearance-none cursor-pointer pr-10`}>
              <option value="">Select a service…</option>
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-[oklch(0.55_0.005_285)] pointer-events-none" />
          </div>
          {errors.service && <p className={err}>{errors.service}</p>}
        </div>

        {/* Event description — full width */}
        <div className="md:col-span-2">
          <label className={label} htmlFor="eventDescription">Tell us about your event <span className={gold}>*</span></label>
          <textarea id="eventDescription" rows={5}
            placeholder="Briefly describe your event, your brand, the experience you would like to create, and any important details."
            value={form.eventDescription} onChange={set("eventDescription")}
            className={`${inputCls("eventDescription")} resize-none`} />
          {errors.eventDescription && <p className={err}>{errors.eventDescription}</p>}
        </div>

        {/* Divider */}
        <div className="md:col-span-2 border-t border-[oklch(0.88_0.01_75)] pt-2">
          <p className={`${label}`} style={{ marginBottom: 0 }}>Event Details <span className={gold}>*</span></p>
        </div>

        {/* Date */}
        <div>
          <label className={label} htmlFor="eventDate">Event Date</label>
          <input id="eventDate" type="date" min={today}
            value={form.eventDate} onChange={set("eventDate")} className={inputCls("eventDate")} />
          {errors.eventDate && <p className={err}>{errors.eventDate}</p>}
        </div>

        {/* Venue */}
        <div>
          <label className={label} htmlFor="venue">
            Venue{" "}
            <span className="text-[0.52rem] text-[oklch(0.65_0.005_285)] normal-case tracking-normal">(optional)</span>
          </label>
          <input id="venue" type="text" placeholder="Venue name"
            value={form.venue} onChange={set("venue")} className={inputCls("venue")} />
        </div>

        {/* City */}
        <div>
          <label className={label} htmlFor="city">City <span className={gold}>*</span></label>
          <input id="city" type="text" placeholder="City"
            value={form.city} onChange={set("city")} className={inputCls("city")} />
          {errors.city && <p className={err}>{errors.city}</p>}
        </div>

        {/* Country */}
        <div>
          <label className={label} htmlFor="country">Country <span className={gold}>*</span></label>
          <input id="country" type="text" placeholder="Country"
            value={form.country} onChange={set("country")} className={inputCls("country")} />
          {errors.country && <p className={err}>{errors.country}</p>}
        </div>

        {/* File upload — full width */}
        <div className="md:col-span-2">
          <label className={`${label} mb-3`}>
            Upload Inspiration{" "}
            <span className="text-[0.52rem] text-[oklch(0.65_0.005_285)] normal-case tracking-normal">(optional)</span>
          </label>
          <div
            onClick={() => fileRef.current?.click()}
            onDragOver={e => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={e => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
            className={`border-2 border-dashed p-10 text-center cursor-pointer transition-all duration-200 select-none ${
              dragging
                ? "border-[oklch(0.72_0.09_75)] bg-[oklch(0.72_0.09_75)]/5"
                : "border-[oklch(0.85_0.01_75)] hover:border-[oklch(0.72_0.09_75)]/60 hover:bg-[oklch(0.72_0.09_75)]/3"
            }`}
          >
            <Upload size={24} strokeWidth={1.5} className={`mx-auto mb-4 ${gold} opacity-60`} />
            {file ? (
              <div>
                <p className="text-[1rem] text-[oklch(0.14_0.005_285)] font-medium">{file.name}</p>
                <p className="text-[0.7rem] text-[oklch(0.6_0.005_285)] mt-1">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                <button type="button" onClick={e => { e.stopPropagation(); setFile(null); }}
                  className="text-[0.65rem] text-red-400 mt-2 hover:underline">Remove</button>
              </div>
            ) : (
              <>
                <p className="text-[0.82rem] text-[oklch(0.45_0.01_285)]">
                  Drag & drop or <span className={gold}>browse</span>
                </p>
                <p className="text-[0.65rem] text-[oklch(0.65_0.005_285)] mt-2">JPG, PNG, PDF — max 10MB</p>
                <p className="text-[0.62rem] text-[oklch(0.7_0.005_285)] mt-1 leading-relaxed">
                  Moodboard, event brief, brand guidelines or inspiration images
                </p>
              </>
            )}
            <input ref={fileRef} type="file" accept=".jpg,.jpeg,.png,.pdf" aria-label="Upload inspiration"
              onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} className="hidden" />
          </div>
        </div>

      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-red-500 text-[0.9rem] mt-6 px-5 py-4 border border-red-200 bg-red-50">
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-gold-filled flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ padding: "1rem 3rem", fontSize: "0.68rem", letterSpacing: "0.2em" }}
        >
          {status === "loading" ? (
            <><Loader2 size={15} className="animate-spin" /> Sending…</>
          ) : (
            <> Request My Artisan <ArrowRight size={14} /></>
          )}
        </button>
        <p className="text-[0.62rem] text-[oklch(0.65_0.005_285)] tracking-wide" style={{ fontFamily: "'Jost', sans-serif" }}>
          Your information is handled with complete discretion.
        </p>
      </div>
    </form>
  );
}
