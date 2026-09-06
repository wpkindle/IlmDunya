import React, { useState, useEffect } from 'react';
import {
  UserCheck,
  X,
  Mail,
  Lock,
  Phone,
  User,
  MapPin,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  RotateCcw,
  MessageCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { api } from '../services/api';

const CITIES = [
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Peshawar',
  'Multan',
  'Hyderabad',
  'Quetta',
  'Gujranwala',
  'Sialkot',
  'Abbottabad',
  'Nationwide / Online'
];

const SUBJECTS = [
  'Quran Recitation & Tajweed',
  'Hifz al-Quran (Memorization)',
  'Noorani Qaida for Beginners',
  'Islamic Studies & Dars-e-Nizami',
  'Arabic Grammar & Language',
  'Cambridge O/A Level Mathematics & Physics',
  'Matric & FSc Pre-Medical / Pre-Engineering',
  'English Fluency & IELTS Academic'
];

export default function TutorRegistrationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Form, 2: Verification, 3: Success

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState('male');
  const [city, setCity] = useState('Lahore');
  const [primarySubject, setPrimarySubject] = useState('Quran Recitation & Tajweed');
  const [teachingMode, setTeachingMode] = useState('online');

  // OTP Verification State
  const [otp, setOtp] = useState('');
  const [resendCountdown, setResendCountdown] = useState(0);

  // Status & Error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Resend Countdown Timer
  useEffect(() => {
    let timer;
    if (resendCountdown > 0) {
      timer = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCountdown]);

  if (!isOpen) return null;

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        number: phone.trim(),
        password,
        role: 'tutor',
        gender,
        city,
        qualifications: primarySubject,
        bio: `Experienced ${gender === 'female' ? 'female Alimah / educator' : 'Qari / tutor'} specializing in ${primarySubject}. Available for ${teachingMode} classes.`
      };

      const res = await api.registerTutor(payload);

      setStep(2);
      setResendCountdown(60);
      setSuccessMessage(res.message || 'Verification code sent to your email.');
    } catch (err) {
      setError(err.message || 'Registration failed. Please check your information and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtpSubmit = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setError('Please enter the 6-digit verification code.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await api.verifyOtp(email, otp);
      setStep(3);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback if canvas is not supported
      }
    } catch (err) {
      setError(err.message || 'Invalid or expired code. Please try again or click resend.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCountdown > 0) return;
    setLoading(true);
    setError('');
    try {
      await api.resendOtp(email);
      setResendCountdown(60);
      setSuccessMessage('A fresh verification code has been sent to your email.');
    } catch (err) {
      setError(err.message || 'Failed to resend code. Please try again in a few moments.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappFacultyUrl = `https://wa.me/923171759093?text=${encodeURIComponent(
    `Salam IlmiDunya Faculty Coordinator! I have registered as a tutor (${name}, Email: ${email}, Subject: ${primarySubject}). I would like to submit my Sanad documents.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#07150e]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl max-h-[92dvh] flex flex-col rounded-3xl bg-[#0c2217] border-2 border-[#d4a359]/40 shadow-2xl text-[#f5f0e6] relative overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1 bg-gradient-to-r from-[#d4a359] via-[#b85d34] to-[#d4a359] shrink-0" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#143d2b] flex items-center justify-between shrink-0 bg-[#0c2217]">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-[#143d2b] text-[#d4a359] border border-[#d4a359]/40">
              <UserCheck className="w-5 h-5 text-[#d4a359]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-black text-base sm:text-lg text-white leading-tight">
                  {step === 1 && 'Early Tutor Faculty Registration'}
                  {step === 2 && 'Verify Your Email Address'}
                  {step === 3 && 'Tutor Application Verified!'}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#143d2b] text-[#d4a359] border border-[#d4a359]/30">
                  {step === 1 && 'Step 1 of 2'}
                  {step === 2 && 'Step 2 of 2'}
                  {step === 3 && 'Completed'}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-300 font-medium">
                {step === 1 && 'Join verified Qaris & academic educators for pre-launch student matching'}
                {step === 2 && 'Enter the 6-digit confirmation code sent to your inbox'}
                {step === 3 && 'Your tutor faculty membership is confirmed'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-[#143d2b] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs text-stone-300">
          {error && (
            <div className="p-3.5 bg-rose-950/70 border border-rose-500/50 text-rose-200 rounded-2xl flex items-start gap-2.5 animate-in fade-in duration-150">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{error}</span>
            </div>
          )}

          {/* STEP 1: Registration Form */}
          {step === 1 && (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-stone-200 block">
                    Full Legal Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Qari Muhammad Huzaifa or Alimah Fatima Zahra"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#07150e] border border-white/15 focus:border-[#d4a359] focus:outline-none text-white text-xs placeholder:text-stone-500"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-200 block">
                    Email Address (For Verification) *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#07150e] border border-white/15 focus:border-[#d4a359] focus:outline-none text-white text-xs placeholder:text-stone-500"
                    />
                  </div>
                </div>

                {/* WhatsApp Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-200 block">
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
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#07150e] border border-white/15 focus:border-[#d4a359] focus:outline-none text-white text-xs placeholder:text-stone-500"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-stone-200 block">
                    Choose Password (Min 6 Characters) *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#07150e] border border-white/15 focus:border-[#d4a359] focus:outline-none text-white text-xs placeholder:text-stone-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-200 block">
                    Gender *
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#07150e] border border-white/15 focus:border-[#d4a359] focus:outline-none text-white text-xs"
                  >
                    <option value="male">Male (Qari / Tutor)</option>
                    <option value="female">Female (Alimah / Tutor)</option>
                  </select>
                </div>

                {/* City */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-200 block">
                    City / Location *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#07150e] border border-white/15 focus:border-[#d4a359] focus:outline-none text-white text-xs"
                  >
                    {CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Primary Subject */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-stone-200 block">
                    Primary Specialization *
                  </label>
                  <select
                    value={primarySubject}
                    onChange={(e) => setPrimarySubject(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#07150e] border border-white/15 focus:border-[#d4a359] focus:outline-none text-white text-xs"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Teaching Mode */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-stone-200 block">
                    Preferred Teaching Mode *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'online', label: '100% WebRTC (Online)' },
                      { value: 'in_person', label: 'In-Person Home (Male Only)' },
                      { value: 'both', label: 'Both Online & Home' }
                    ].map((mode) => (
                      <button
                        key={mode.value}
                        type="button"
                        onClick={() => setTeachingMode(mode.value)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          teachingMode === mode.value
                            ? 'bg-[#143d2b] border-[#d4a359] text-white font-bold shadow-xs'
                            : 'bg-[#07150e] border-white/10 text-stone-400 hover:text-white'
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
                      <span>Creating Account &amp; Sending Code...</span>
                    </>
                  ) : (
                    <>
                      <span>Register &amp; Receive Verification Code</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 pt-1 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a359]" />
                <span>Protected with CNIC verification &amp; 0% middleman commission</span>
              </div>
            </form>
          )}

          {/* STEP 2: Email Verification */}
          {step === 2 && (
            <form onSubmit={handleVerifyOtpSubmit} className="space-y-5 text-center py-2">
              <div className="w-16 h-16 rounded-3xl bg-[#143d2b] text-[#d4a359] border border-[#d4a359]/40 flex items-center justify-center mx-auto shadow-md">
                <Mail className="w-8 h-8 text-[#d4a359]" />
              </div>

              <div className="space-y-1.5 max-w-md mx-auto">
                <h4 className="text-base font-bold text-white">
                  Check Your Inbox for 6-Digit Code
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  We sent a confirmation code to{' '}
                  <strong className="text-[#d4a359] underline">{email}</strong>. Please enter the
                  code below to verify your email.
                </p>
              </div>

              {successMessage && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 rounded-2xl text-[11px]">
                  {successMessage}
                </div>
              )}

              {/* OTP Input */}
              <div className="max-w-xs mx-auto space-y-2">
                <label className="text-[11px] font-bold text-stone-300 block uppercase tracking-wider">
                  Enter 6-Digit OTP Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="123456"
                  className="w-full text-center py-3.5 rounded-2xl bg-[#07150e] border-2 border-[#d4a359]/50 focus:border-[#d4a359] focus:outline-none text-white text-2xl font-mono tracking-widest"
                />
              </div>

              <div className="pt-2 max-w-xs mx-auto space-y-3">
                <button
                  type="submit"
                  disabled={loading || otp.length < 4}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-black text-xs sm:text-sm shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Verifying Email...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verify &amp; Activate Tutor Profile</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[11px] text-stone-400 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setError('');
                    }}
                    className="text-stone-400 hover:text-white underline cursor-pointer"
                  >
                    Edit Email Address
                  </button>

                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={resendCountdown > 0 || loading}
                    className="text-[#d4a359] hover:underline font-bold disabled:opacity-50 cursor-pointer"
                  >
                    {resendCountdown > 0 ? `Resend Code (${resendCountdown}s)` : 'Resend Code'}
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* STEP 3: Success Confirmation */}
          {step === 3 && (
            <div className="text-center py-4 space-y-5 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-3xl bg-emerald-950 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-9 h-9 text-emerald-400" />
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Email Verified &amp; Priority Registered</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-serif font-black text-white">
                  Welcome to IlmiDunya Faculty, {name}!
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Your tutor application has been successfully registered and verified. You have been placed on the priority faculty roster for our upcoming platform launch on September 16, 2026.
                </p>
              </div>

              {/* What Happens Next Box */}
              <div className="p-4 rounded-2xl bg-[#143d2b]/60 border border-[#d4a359]/30 text-left space-y-2 text-xs">
                <span className="font-bold text-[#d4a359] block uppercase tracking-wider text-[10px]">
                  Next Steps for Verification:
                </span>
                <ul className="space-y-1.5 text-stone-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a359] mt-1.5 shrink-0" />
                    <span>Our academic faculty team will contact you via WhatsApp on <strong>{phone}</strong> to review your Sanad / degree credentials.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a359] mt-1.5 shrink-0" />
                    <span>Once approved, your tutor profile will be featured on launch day with direct student connections.</span>
                  </li>
                </ul>
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
                  className="w-full py-2.5 rounded-xl border border-white/15 text-stone-400 hover:text-white text-xs font-semibold hover:bg-white/5 transition-colors cursor-pointer"
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

