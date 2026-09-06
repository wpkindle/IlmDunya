import React, { useState } from "react";
import {
  UserCheck,
  X,
  Mail,
  Phone,
  User,
  MapPin,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MessageCircle
} from "lucide-react";
import confetti from "canvas-confetti";
import { api } from "../services/api";

export default function TutorRegistrationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Form, 2: Notice & Confirmation

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("");
  const [primarySubject, setPrimarySubject] = useState("");
  const [teachingMode, setTeachingMode] = useState("online");

  // Status & Error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        number: phone.trim(),
        password: "IlmDunya2026!",
        role: "tutor",
        gender,
        city: city.trim(),
        qualifications: primarySubject.trim(),
        whatWillYouTeach: primarySubject.trim(),
        teachingMode,
        bio: `Experienced ${gender === "female" ? "female Alimah / educator" : "Qari / tutor"} specializing in ${primarySubject.trim()}. Available for ${teachingMode} classes.`
      };

      await api.registerTutor(payload);

      setStep(2);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    } catch (err) {
      setError(err.message || "Registration failed. Please check your information and try again.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappFacultyUrl = `https://wa.me/923171759093?text=${encodeURIComponent(
    `Salam IlmiDunya Faculty Coordinator! I have registered as a tutor (${name}, Email: ${email}, Subject: ${primarySubject}, City: ${city}). Looking forward to updates!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl max-h-[92dvh] flex flex-col rounded-3xl bg-gradient-to-b from-[#164e32] to-[#0d3420] border-2 border-[#d4a359]/70 shadow-2xl text-[#f5f0e6] relative overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#d4a359] via-[#fde047] to-[#d4a359] shrink-0" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#236e47] flex items-center justify-between shrink-0 bg-[#185537]">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-[#113f28] text-[#d4a359] border border-[#d4a359]/50 shadow-md">
              <UserCheck className="w-5 h-5 text-[#d4a359]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-black text-base sm:text-lg text-white leading-tight">
                  {step === 1 ? "Early Tutor Faculty Registration" : "Registration Received!"}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#113f28] text-[#d4a359] border border-[#d4a359]/40">
                  {step === 1 ? "Early Access" : "Received"}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-200 font-medium">
                {step === 1
                  ? "Join verified Qaris & academic educators for pre-launch student matching"
                  : "Your tutor profile information has been safely received"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-[#113f28] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs text-stone-200">
          {error && (
            <div className="p-3.5 bg-rose-950/80 border border-rose-500/60 text-rose-200 rounded-2xl flex items-start gap-2.5 animate-in fade-in duration-150">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{error}</span>
            </div>
          )}

          {/* STEP 1: Registration Form (No OTP, direct submission) */}
          {step === 1 && (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-stone-100 block">
                    Full Legal Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Your Name"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#0e3522] border border-white/20 focus:border-[#d4a359] focus:bg-[#12422a] focus:outline-none text-white text-xs placeholder:text-stone-400 shadow-inner"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-100 block">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#0e3522] border border-white/20 focus:border-[#d4a359] focus:bg-[#12422a] focus:outline-none text-white text-xs placeholder:text-stone-400 shadow-inner"
                    />
                  </div>
                </div>

                {/* WhatsApp Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-100 block">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0317 1234567"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#0e3522] border border-white/20 focus:border-[#d4a359] focus:bg-[#12422a] focus:outline-none text-white text-xs placeholder:text-stone-400 shadow-inner"
                    />
                  </div>
                </div>

                {/* City - Text Input */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-100 block">
                    City / Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Lahore, Karachi, Islamabad"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#0e3522] border border-white/20 focus:border-[#d4a359] focus:bg-[#12422a] focus:outline-none text-white text-xs placeholder:text-stone-400 shadow-inner"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-100 block">
                    Gender *
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0e3522] border border-white/20 focus:border-[#d4a359] focus:bg-[#12422a] focus:outline-none text-white text-xs shadow-inner"
                  >
                    <option value="male">Male (Qari / Tutor)</option>
                    <option value="female">Female (Alimah / Tutor)</option>
                  </select>
                </div>

                {/* What Will You Teach - Text Input */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-stone-100 block">
                    What will you teach? *
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={primarySubject}
                      onChange={(e) => setPrimarySubject(e.target.value)}
                      placeholder="e.g. Quran Tajweed, Noorani Qaida, Hifz, O/A Level Physics, Math"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#0e3522] border border-white/20 focus:border-[#d4a359] focus:bg-[#12422a] focus:outline-none text-white text-xs placeholder:text-stone-400 shadow-inner"
                    />
                  </div>
                </div>

                {/* Teaching Mode */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-stone-100 block">
                    Preferred Teaching Mode *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: "online", label: "100% WebRTC (Online)" },
                      { value: "in_person", label: "In-Person Home (Male Only)" },
                      { value: "both", label: "Both Online & Home" }
                    ].map((mode) => (
                      <button
                        key={mode.value}
                        type="button"
                        onClick={() => setTeachingMode(mode.value)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          teachingMode === mode.value
                            ? "bg-[#1b5e3a] border-[#d4a359] text-white font-bold shadow-md"
                            : "bg-[#0e3522] border-white/10 text-stone-300 hover:text-white hover:bg-[#12422a]"
                        }`}
                      >
                        <span className="text-[11px] block">{mode.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#b85d34] to-[#9e4e2a] hover:from-[#d4a359] hover:to-[#b85d34] text-white font-black text-xs sm:text-sm shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Submitting Registration...</span>
                    </>
                  ) : (
                    <>
                      <span>Register Interest as Tutor</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 pt-1 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a359]" />
                <span>Verified academic &amp; Quran tutoring &bull; 0% middleman commission</span>
              </div>
            </form>
          )}

          {/* STEP 2: Notice & Confirmation (No OTP required) */}
          {step === 2 && (
            <div className="text-center py-3 space-y-5 max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-3xl bg-emerald-950 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-9 h-9 text-emerald-400" />
              </div>

              {/* PROMINENT REQUESTED NOTICE */}
              <div className="p-5 rounded-2xl bg-[#0f3a25] border-2 border-[#10b981] shadow-2xl text-center space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#185537] border border-[#d4a359]/50 text-[#d4a359] text-[11px] font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Early Access Registered</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  Thanks for showing your interest, you will be contacted with further details when the platform goes live.
                </h4>
              </div>

              {/* Submitted Details Summary */}
              <div className="p-4 rounded-2xl bg-[#0e3522] border border-[#d4a359]/30 text-left space-y-2 text-xs">
                <span className="font-bold text-[#d4a359] block uppercase tracking-wider text-[10px]">
                  Submitted Tutor Profile Details:
                </span>
                <div className="grid grid-cols-2 gap-2 text-stone-300 pt-1">
                  <div>
                    <span className="text-[10px] text-stone-400 block">Name:</span>
                    <strong className="text-white">{name}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block">City:</span>
                    <strong className="text-white">{city || "Online"}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block">WhatsApp:</span>
                    <strong className="text-white">{phone}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block">Subject / Teaching:</span>
                    <strong className="text-white">{primarySubject}</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsappFacultyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1ebc59] hover:to-[#0f7a6e] text-white font-black text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect with Faculty Coordinator on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl border border-white/15 text-stone-300 hover:text-white text-xs font-semibold hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Close &amp; Return to Coming Soon Page
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
