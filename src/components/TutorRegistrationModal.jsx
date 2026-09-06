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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0c311e]/50 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl max-h-[92dvh] flex flex-col rounded-3xl bg-white/98 sm:bg-[#f9fbf9] border-2 border-[#d4a359]/50 shadow-2xl text-[#1a3325] relative overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#d4a359] via-[#f59e0b] to-[#d4a359] shrink-0" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#e2eee5] flex items-center justify-between shrink-0 bg-white/95">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-[#edf6f0] text-[#0c311e] border border-[#d4a359]/40 shadow-xs">
              <UserCheck className="w-5 h-5 text-[#0c311e]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-black text-base sm:text-lg text-[#0c311e] leading-tight">
                  {step === 1 ? "Early Tutor Registration" : "Registration Successful!"}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#fef3c7] text-[#92400e] border border-[#d4a359]/50">
                  {step === 1 ? "Early Access" : "Priority Saved"}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#406851] font-medium">
                {step === 1
                  ? "Join verified Qaris & academic educators for pre-launch student matching"
                  : "You are placed on our priority tutor list for launch day"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-stone-500 hover:text-[#0c311e] hover:bg-[#edf6f0] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs text-[#284835]">
          {error && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl flex items-start gap-2.5 animate-in fade-in duration-150">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{error}</span>
            </div>
          )}

          {/* STEP 1: Registration Form (No OTP, direct submission) */}
          {step === 1 && (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-[#0c311e] block">
                    Full Legal Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#4e755e] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Your Name"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#f8faf8] border border-[#c8dcd0] focus:border-[#d4a359] focus:bg-white focus:outline-none text-[#0c311e] text-xs placeholder:text-stone-400 shadow-xs"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#0c311e] block">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#4e755e] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#f8faf8] border border-[#c8dcd0] focus:border-[#d4a359] focus:bg-white focus:outline-none text-[#0c311e] text-xs placeholder:text-stone-400 shadow-xs"
                    />
                  </div>
                </div>

                {/* WhatsApp Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#0c311e] block">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#4e755e] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your whatsapp or phone number"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#f8faf8] border border-[#c8dcd0] focus:border-[#d4a359] focus:bg-white focus:outline-none text-[#0c311e] text-xs placeholder:text-stone-400 shadow-xs"
                    />
                  </div>
                </div>

                {/* City - Text Input */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#0c311e] block">
                    City / Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#4e755e] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Lahore, Karachi, Islamabad"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#f8faf8] border border-[#c8dcd0] focus:border-[#d4a359] focus:bg-white focus:outline-none text-[#0c311e] text-xs placeholder:text-stone-400 shadow-xs"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#0c311e] block">
                    Gender *
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#f8faf8] border border-[#c8dcd0] focus:border-[#d4a359] focus:bg-white focus:outline-none text-[#0c311e] text-xs shadow-xs"
                  >
                    <option value="male">Male (Qari / Tutor)</option>
                    <option value="female">Female (Alimah / Tutor)</option>
                  </select>
                </div>

                {/* What Will You Teach - Text Input */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-[#0c311e] block">
                    What will you teach? *
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-[#4e755e] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={primarySubject}
                      onChange={(e) => setPrimarySubject(e.target.value)}
                      placeholder="e.g. Quran Tajweed, Noorani Qaida, Hifz, O/A Level Physics, Math"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#f8faf8] border border-[#c8dcd0] focus:border-[#d4a359] focus:bg-white focus:outline-none text-[#0c311e] text-xs placeholder:text-stone-400 shadow-xs"
                    />
                  </div>
                </div>

                {/* Teaching Mode */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-[#0c311e] block">
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
                            ? "bg-[#0c311e] border-[#d4a359] text-white font-bold shadow-sm"
                            : "bg-white border-[#d2e2d8] text-[#284835] hover:bg-[#f2f7f4] hover:border-[#b85d34]/40"
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

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#4e755e] pt-1 text-center font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b85d34]" />
                <span>Verified academic &amp; Quran tutoring &bull; 0% middleman commission</span>
              </div>
            </form>
          )}

          {/* STEP 2: Notice & Confirmation (No OTP required) */}
          {step === 2 && (
            <div className="text-center py-3 space-y-5 max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9 text-emerald-600" />
              </div>

              {/* PROMINENT MOTIVATING TUTOR NOTICE */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#f9fbf9] via-[#edf6ef] to-[#e4eee6] border-2 border-[#d4a359]/60 shadow-lg text-center space-y-3 relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef3c7] border border-[#d4a359]/60 text-[#92400e] text-[11px] font-black tracking-wide uppercase shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Priority Tutor Status Confirmed</span>
                </div>
                <h4 className="text-base sm:text-lg font-serif font-black text-[#0c311e] leading-snug">
                  Welcome to the IlmiDunya Teaching Family!
                </h4>
                <p className="text-xs sm:text-sm text-[#284835] leading-relaxed font-medium">
                  Great to have you with us! You are now placed on our <strong className="text-[#b85d34]">VIP priority list</strong> for launch day. When we go live, students looking for your subjects will be connected directly with you — with <strong className="text-[#059669]">0% commission cuts</strong>, full respect, and complete freedom to set your own fees. We will contact you soon with all the details!
                </p>
              </div>

              {/* Submitted Details Summary */}
              <div className="p-4 rounded-2xl bg-white border border-[#c8dcd0] shadow-xs text-left space-y-2 text-xs">
                <span className="font-bold text-[#b85d34] block uppercase tracking-wider text-[10px]">
                  Submitted Tutor Profile Details:
                </span>
                <div className="grid grid-cols-2 gap-2 text-[#284835] pt-1">
                  <div>
                    <span className="text-[10px] text-stone-500 block">Name:</span>
                    <strong className="text-[#0c311e]">{name}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 block">City:</span>
                    <strong className="text-[#0c311e]">{city || "Online"}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 block">WhatsApp:</span>
                    <strong className="text-[#0c311e]">{phone}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 block">Subject / Teaching:</span>
                    <strong className="text-[#0c311e]">{primarySubject}</strong>
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
                  <span>Connect with Us on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl border border-[#c8dcd0] text-[#284835] hover:text-[#0c311e] text-xs font-semibold hover:bg-[#edf5ef] transition-colors cursor-pointer"
                >
                  Close &amp; Return to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
