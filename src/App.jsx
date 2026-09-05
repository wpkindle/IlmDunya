import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Video,
  Clock,
  Sparkles,
  CheckCircle2,
  Bell,
  ArrowRight,
  MessageCircle,
  Mail,
  MapPin,
  Users,
  Award,
  Lock,
  ChevronRight,
  Star
} from 'lucide-react';

export default function App() {
  // Countdown Timer State (Target: 30 days from launch)
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 42,
    seconds: 19
  });

  // Waitlist Form State
  const [role, setRole] = useState('student'); // 'student' | 'tutor'
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [subjectInterest, setSubjectInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check local storage for previous submission
  useEffect(() => {
    const saved = localStorage.getItem('ilmdunya_waitlist_registered');
    if (saved) {
      setIsSubmitted(true);
    }
  }, []);

  // Live real-time ticking countdown
  useEffect(() => {
    // Set target date 30 days from today
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 28);
    targetDate.setHours(targetDate.getHours() + 14);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle Waitlist Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      localStorage.setItem('ilmdunya_waitlist_registered', 'true');

      // Trigger Confetti Celebration
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#15a18d', '#18b8a2', '#f59e0b', '#10b981', '#ffffff']
      });
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-[#08110e] text-slate-100 bg-grid-pattern overflow-hidden flex flex-col justify-between">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#15a18d]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] -left-32 w-[400px] h-[400px] bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[70%] -right-32 w-[450px] h-[450px] bg-[#15a18d]/12 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Navigation Bar */}
      <header className="relative z-20 w-full border-b border-white/5 bg-[#08110e]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo with Authentic Open-Book Emblem */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2 group">
              <img
                src="/logo.svg"
                alt="IlmDunya Pakistan"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to inline SVG if image file is loading
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center">
                    <span className="text-[#15a18d]">ilmi</span>dunya
                  </span>
                  <span className="px-1.5 py-0.5 bg-[#15a18d] text-[10px] font-extrabold text-white rounded tracking-wider uppercase">
                    Pakistan
                  </span>
                </div>
                <span className="font-urdu text-xs text-[#15a18d] font-bold text-right -mt-1" dir="rtl">
                  علمی دُنیا
                </span>
              </div>
            </a>
          </div>

          {/* Launching Status Pill & Action */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#15a18d]/10 border border-[#15a18d]/30 text-xs font-semibold text-[#18b8a2]">
              <span className="w-2 h-2 rounded-full bg-[#15a18d] animate-ping" />
              Launching Fall 2026
            </span>
            <a
              href="https://wa.me/923000000000?text=Salam%20IlmDunya!%20I%20am%20interested%20in%20early%20access."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#18b8a2]" />
              <span className="hidden xs:inline">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col items-center text-center">
        {/* Sacred Bismillah Calligraphic Accent */}
        <div className="inline-flex items-center justify-center mb-6">
          <span className="font-urdu text-base sm:text-lg text-emerald-400/90 tracking-widest" dir="rtl">
            بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>
        </div>

        {/* Coming Soon Teaser Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-[#15a18d]/40 mb-8 animate-bounce-slow">
          <Sparkles className="w-4 h-4 text-[#f59e0b]" />
          <span className="text-xs sm:text-sm font-bold text-slate-200 tracking-wide">
            Pakistan's Premier 1-on-1 Quran & Academic Learning Platform
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
          Empowering Minds,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15a18d] via-[#18b8a2] to-emerald-400">
            Inspiring Souls.
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-12">
          We are crafting a verified, safe, and privacy-first digital academy connecting Pakistani students and families worldwide with certified Qaris, Alimahs, and Cambridge & Board-certified subject educators.
        </p>

        {/* LIVE COUNTDOWN TIMER */}
        <div className="w-full max-w-2xl mb-14">
          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map((unit, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center border border-[#15a18d]/25 glow-teal group hover:border-[#15a18d]/60 transition-all duration-300"
              >
                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight tabular-nums group-hover:text-[#18b8a2] transition-colors">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-widest mt-1.5 uppercase">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIP WAITLIST SIGNUP CARD */}
        <div className="w-full max-w-xl glass-card rounded-3xl p-6 sm:p-8 border-[#15a18d]/30 shadow-2xl relative mb-20">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#15a18d] to-[#0f7d6e] text-[11px] font-extrabold uppercase tracking-widest text-white shadow-md">
            ⭐ Early Bird VIP Waitlist
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-2 space-y-4 text-left">
              <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-white mb-1">
                  Be the First to Experience IlmDunya
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Register now to claim <span className="text-[#18b8a2] font-bold">2 Free Trial Classes</span> + exclusive founding member discounts.
                </p>
              </div>

              {/* Role Selector Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-black/40 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    role === 'student'
                      ? 'bg-[#15a18d] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  I'm a Student / Parent
                </button>
                <button
                  type="button"
                  onClick={() => setRole('tutor')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    role === 'tutor'
                      ? 'bg-[#15a18d] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  I'm a Tutor / Teacher
                </button>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Muhammad Bilal / Fatima Zahra"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#15a18d] focus:border-transparent transition-all"
                />
              </div>

              {/* Email / WhatsApp Contact */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address or WhatsApp Number
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. bilal@gmail.com or +92 300 1234567"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#15a18d] focus:border-transparent transition-all"
                />
              </div>

              {/* Subject of Interest */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {role === 'student' ? 'Subject or Area of Study' : 'Subjects You Teach'}
                </label>
                <input
                  type="text"
                  value={subjectInterest}
                  onChange={(e) => setSubjectInterest(e.target.value)}
                  placeholder={
                    role === 'student'
                      ? 'e.g. Tajweed & Quran Hifz, O-Level Math, Matric Physics...'
                      : 'e.g. Alimah Quran Teacher, Cambridge O/A Levels, Chemistry...'
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#15a18d] focus:border-transparent transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#15a18d] via-[#18b8a2] to-[#0f7d6e] hover:from-[#18b8a2] hover:to-[#15a18d] text-white text-sm font-extrabold shadow-lg shadow-[#15a18d]/30 hover:shadow-[#15a18d]/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Securing Your Spot...
                  </span>
                ) : (
                  <>
                    <Bell className="w-4 h-4 text-emerald-200 group-hover:rotate-12 transition-transform" />
                    Get VIP Early Access & Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#18b8a2]" />
                <span>100% Privacy Protected • Zero Spam Guarantee</span>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#15a18d]/20 border border-[#15a18d]/50 flex items-center justify-center mx-auto text-[#18b8a2]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white">
                JazakAllah Khair, You're on the List!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your VIP invitation has been recorded. As soon as our virtual doors open, you will receive priority access and your <strong className="text-[#18b8a2]">2 Complimentary Trial Classes</strong>.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Founding Member Status: Confirmed
                </span>
              </div>
            </div>
          )}
        </div>

        {/* CORE PLATFORM PILLARS GRID */}
        <div className="w-full text-left mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Why IlmDunya Will Be Different
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
              Built specifically for Pakistani students, parents, and dedicated educators with world-class standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border-[#15a18d]/20 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#15a18d]/15 border border-[#15a18d]/30 flex items-center justify-center text-[#18b8a2] mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Verified Quran & Tajweed
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sanad-certified Qaris, Hafiz mentors, and female Alimahs for sisters & daughters with camera-off privacy mode.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-[#18b8a2] flex items-center gap-1">
                Ijazaat Verified <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border-[#15a18d]/20 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Cambridge & Board Experts
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cambridge O/A Levels, Matric, FSc, MDCAT, ECAT subject mentors from top institutions (FAST, NUST, LUMS, AKU).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-blue-400 flex items-center gap-1">
                All Major Boards <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border-[#15a18d]/20 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                  <Video className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  1-on-1 Interactive Classroom
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In-platform WebRTC HD video, digital interactive whiteboard, screen sharing, and Mushaf Quran viewer with Tajweed rules.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-purple-400 flex items-center gap-1">
                No Zoom Required <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border-[#15a18d]/20 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Fair Local Pricing
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Support for JazzCash, EasyPaisa & Pakistani online bank transfers. Zero commission traps and protected deal escrow.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                Direct Pakistani PKR <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* CITIES & REACH BANNER */}
        <div className="w-full glass-card rounded-2xl p-6 sm:p-8 border-[#15a18d]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#15a18d]/20 flex items-center justify-center text-[#18b8a2] shrink-0 mt-1">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Nationwide & Overseas Pakistani Coverage
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Lahore • Karachi • Islamabad • Rawalpindi • Faisalabad • Peshawar • Multan • Quetta & Pakistani diaspora in UK, USA, UAE, Saudi Arabia & Canada.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-xl bg-black/40 border border-white/5 text-center">
              <div className="text-lg font-black text-[#18b8a2]">500+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Tutors Ready</div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-black/40 border border-white/5 text-center">
              <div className="text-lg font-black text-amber-400">1,200+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Pre-Enrolled</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/5 bg-[#050b09] py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">IlmDunya Pakistan</span>
            <span>•</span>
            <span className="font-urdu text-sm text-[#18b8a2]" dir="rtl">علمی دُنیا پاکستان</span>
          </div>

          <div>
            © {new Date().getFullYear()} IlmDunya Pakistan. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@ilmidunya.pk"
              className="hover:text-[#18b8a2] transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              contact@ilmidunya.pk
            </a>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#18b8a2] transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
