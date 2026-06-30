"use client";

import { useState, useEffect, useRef } from "react";
import { X, Upload, CheckCircle, Loader2, ChevronDown } from "lucide-react";

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

export default function ArtisanEnquiryModal({ onClose }: { onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 20);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(onClose, 320);
  };

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm(p => ({ ...p, [field]: e.target.value }));
      if (errors[field]) setErrors(p => ({ ...p, [field]: "" }));
    };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim())        e.fullName = "Required";
    if (!form.email.trim())           e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim())           e.phone = "Required";
    if (!form.service)                e.service = "Please select a service";
    if (!form.eventDescription.trim()) e.eventDescription = "Required";
    if (!form.eventDate)              e.eventDate = "Required";
    if (!form.city.trim())            e.city = "Required";
    if (!form.country.trim())         e.country = "Required";
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
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email anna@plumeplush.com directly.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  const inputBase = "w-full px-4 py-3 bg-white border text-[0.85rem] text-[oklch(0.14_0.005_285)] placeholder-[oklch(0.65_0.005_285)] outline-none transition-all duration-200 focus:ring-1";
  const inputCls = (f: keyof FormState) =>
    `${inputBase} ${errors[f]
      ? "border-red-400 ring-red-200"
      : "border-[oklch(0.88_0.01_75)] focus:border-[oklch(0.72_0.09_75)] focus:ring-[oklch(0.72_0.09_75)]/20"}`;
  const label = "block text-[0.58rem] tracking-[0.22em] uppercase text-[oklch(0.5_0.01_285)] mb-1.5";
  const err   = "text-red-400 text-[0.62rem] mt-1";
  const gold  = "text-[oklch(0.72_0.09_75)]";

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={close}
        className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal
        aria-label="Request an Artisan"
        className="fixed right-0 top-0 z-50 h-full w-full max-w-[580px] bg-[oklch(0.975_0.005_80)] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out"
        style={{ transform: visible ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center text-[oklch(0.55_0.005_285)] hover:text-[oklch(0.14_0.005_285)] hover:bg-black/5 rounded-full transition-all duration-200"
        >
          <X size={18} />
        </button>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-8 md:px-12 pt-12 pb-10">

          {/* ── SUCCESS STATE ── */}
          {status === "success" ? (
            <div className="min-h-full flex flex-col items-center justify-center text-center py-24">
              <CheckCircle size={52} strokeWidth={1} className={`${gold} mb-6`} />
              <p className={`text-[0.58rem] tracking-[0.3em] uppercase ${gold} mb-4`} style={{ fontFamily: "'Jost', sans-serif" }}>
                Art Concierge
              </p>
              <h2 className="text-4xl text-[oklch(0.14_0.005_285)] mb-5 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                Thank you.
              </h2>
              <p className="text-[0.82rem] text-[oklch(0.5_0.01_285)] leading-relaxed max-w-xs" style={{ fontWeight: 300 }}>
                Your request has been received by our Art Concierge team. We will carefully review your requirements and contact you shortly to discuss the perfect artisan for your project.
              </p>
              <button onClick={close} className="btn-gold mt-10">Close</button>
            </div>
          ) : (
            <>
              {/* ── HEADER ── */}
              <div className="mb-9">
                <p className={`text-[0.58rem] tracking-[0.3em] uppercase ${gold} mb-3`} style={{ fontFamily: "'Jost', sans-serif" }}>
                  Art Concierge
                </p>
                <h2 className="text-4xl md:text-5xl text-[oklch(0.14_0.005_285)] mb-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                  Request an Artisan
                </h2>
                <p className="text-[0.8rem] text-[oklch(0.5_0.01_285)] leading-relaxed" style={{ fontWeight: 300 }}>
                  Tell us about your project and our Art Concierge will match you with the perfect artisan.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div className={`w-8 h-px bg-[oklch(0.72_0.09_75)]`} />
                  <span className={`${gold} text-[0.5rem]`}>✦</span>
                </div>
              </div>

              {/* ── FORM ── */}
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot */}
                <input type="text" name="website" value={form.website} onChange={set("website")} style={{ display: "none" }} tabIndex={-1} aria-hidden />

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={label} htmlFor="fullName">Full Name <span className={gold}>*</span></label>
                    <input id="fullName" type="text" autoComplete="name" placeholder="Your full name"
                      value={form.fullName} onChange={set("fullName")} className={inputCls("fullName")} />
                    {errors.fullName && <p className={err}>{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className={label} htmlFor="company">Company / Brand</label>
                    <input id="company" type="text" autoComplete="organization" placeholder="Company or brand"
                      value={form.company} onChange={set("company")} className={inputCls("company")} />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={label} htmlFor="email">Email Address <span className={gold}>*</span></label>
                    <input id="email" type="email" autoComplete="email" placeholder="your@email.com"
                      value={form.email} onChange={set("email")} className={inputCls("email")} />
                    {errors.email && <p className={err}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className={label} htmlFor="phone">Phone Number <span className={gold}>*</span></label>
                    <input id="phone" type="tel" autoComplete="tel" placeholder="+44 / +971 ..."
                      value={form.phone} onChange={set("phone")} className={inputCls("phone")} />
                    {errors.phone && <p className={err}>{errors.phone}</p>}
                  </div>
                </div>

                {/* Service */}
                <div className="mb-4">
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

                {/* Event description */}
                <div className="mb-4">
                  <label className={label} htmlFor="eventDescription">Tell us about your event <span className={gold}>*</span></label>
                  <textarea id="eventDescription" rows={4} placeholder="Briefly describe your event, your brand, the experience you would like to create, and any important details."
                    value={form.eventDescription} onChange={set("eventDescription")}
                    className={`${inputCls("eventDescription")} resize-none`} />
                  {errors.eventDescription && <p className={err}>{errors.eventDescription}</p>}
                </div>

                {/* Event details */}
                <div className="mb-4">
                  <p className={`${label} mb-3`}>Event Details <span className={gold}>*</span></p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                      <label className={label} htmlFor="eventDate">Event Date</label>
                      <input id="eventDate" type="date" min={today}
                        value={form.eventDate} onChange={set("eventDate")} className={inputCls("eventDate")} />
                      {errors.eventDate && <p className={err}>{errors.eventDate}</p>}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className={label} htmlFor="city">City <span className={gold}>*</span></label>
                      <input id="city" type="text" placeholder="City"
                        value={form.city} onChange={set("city")} className={inputCls("city")} />
                      {errors.city && <p className={err}>{errors.city}</p>}
                    </div>
                    <div>
                      <label className={label} htmlFor="country">Country <span className={gold}>*</span></label>
                      <input id="country" type="text" placeholder="Country"
                        value={form.country} onChange={set("country")} className={inputCls("country")} />
                      {errors.country && <p className={err}>{errors.country}</p>}
                    </div>
                    <div>
                      <label className={label} htmlFor="venue">
                        Venue <span className="text-[0.52rem] text-[oklch(0.65_0.005_285)] normal-case tracking-normal">(optional)</span>
                      </label>
                      <input id="venue" type="text" placeholder="Venue name"
                        value={form.venue} onChange={set("venue")} className={inputCls("venue")} />
                    </div>
                  </div>
                </div>

                {/* File upload */}
                <div className="mb-7">
                  <label className={`${label} mb-2`}>
                    Upload Inspiration <span className="text-[0.52rem] text-[oklch(0.65_0.005_285)] normal-case tracking-normal">(optional)</span>
                  </label>
                  <div
                    onClick={() => fileRef.current?.click()}
                    onDragOver={e => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={e => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
                    className={`border-2 border-dashed p-7 text-center cursor-pointer transition-all duration-200 select-none ${
                      dragging
                        ? "border-[oklch(0.72_0.09_75)] bg-[oklch(0.72_0.09_75)]/5"
                        : "border-[oklch(0.85_0.01_75)] hover:border-[oklch(0.72_0.09_75)]/60 hover:bg-[oklch(0.72_0.09_75)]/3"
                    }`}
                  >
                    <Upload size={22} strokeWidth={1.5} className={`mx-auto mb-3 ${gold} opacity-60`} />
                    {file ? (
                      <div>
                        <p className="text-[0.82rem] text-[oklch(0.14_0.005_285)] font-medium">{file.name}</p>
                        <p className="text-[0.65rem] text-[oklch(0.6_0.005_285)] mt-0.5">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                        <button type="button" onClick={e => { e.stopPropagation(); setFile(null); }}
                          className="text-[0.62rem] text-red-400 mt-2 hover:underline">Remove</button>
                      </div>
                    ) : (
                      <>
                        <p className="text-[0.8rem] text-[oklch(0.45_0.01_285)]">
                          Drag & drop or <span className={gold}>browse</span>
                        </p>
                        <p className="text-[0.62rem] text-[oklch(0.65_0.005_285)] mt-1.5">JPG, PNG, PDF — max 10MB</p>
                        <p className="text-[0.58rem] text-[oklch(0.7_0.005_285)] mt-0.5 leading-relaxed">
                          Moodboard, event brief, brand guidelines or inspiration images
                        </p>
                      </>
                    )}
                    <input ref={fileRef} type="file" accept=".jpg,.jpeg,.png,.pdf" aria-label="Upload inspiration"
                      onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} className="hidden" />
                  </div>
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-red-500 text-[0.75rem] mb-5 px-4 py-3 border border-red-200 bg-red-50">
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-gold-filled flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ padding: "0.9rem 2rem", fontSize: "0.68rem", letterSpacing: "0.2em" }}
                >
                  {status === "loading" ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending…</>
                  ) : "Request My Artisan"}
                </button>

                <p className="text-[0.58rem] text-[oklch(0.65_0.005_285)] text-center mt-4 tracking-wide" style={{ fontFamily: "'Jost', sans-serif" }}>
                  Your information is handled with complete discretion.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
