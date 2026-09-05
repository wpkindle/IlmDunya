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
  MapPin,
  Users,
  Award,
  ChevronRight,
  Star,
  Phone
} from 'lucide-react';
import AnimatedHeroBackground from './components/AnimatedHeroBackground';
import BrandLogo from './components/BrandLogo';

export default function App() {
  // Countdown Timer State (Target: 28 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 42,
    seconds: 19
  });

  // Waitlist Form State
  const [role, setRole] = useState('student'); // 'student' | 'tutor'
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [subjectInterest, setSubjectInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check local storage for previous registration
  useEffect(() => {
    const saved = localStorage.getItem('ilmidunya_waitlist_registered');
    if (saved) {
      setIsSubmitted(true);
    }
  }, []);

  // Live real-time countdown timer
  useEffect(() => {
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

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!whatsappNumber.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      localStorage.setItem('ilmidunya_waitlist_registered', 'true');

      // Trigger Confetti Celebration
      confetti({
        particleCount: 130,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#d4a359', '#b85d34', '#fbbf24', '#15a18d', '#ffffff']
      });
    }, 700);
  };

  const whatsappUrl = "https://wa.me/923171759093?text=Salam%20IlmiDunya!%20I%20am%20interested%20in%20early%20access.";

  return (
    <div className="relative min-h-screen bg-[#0c2217] text-[#faf8f5] overflow-x-hidden flex flex-col justify-between">
      {/* 1. EXACT ANIMATED HERO BACKGROUND EFFECT FROM MAIN WEBSITE */}
      <AnimatedHeroBackground />

      {/* Top Header Navigation */}
      <header className="relative z-20 w-full border-b border-[#d4a359]/20 bg-[#07150e]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Authentic Brand Logo (No Extra Greenish Text) */}
          <a href="/" className="flex items-center group py-1" title="IlmiDunya Pakistan">
            <BrandLogo variant="dark" size="md" withBadge={true} />
          </a>

          {/* WhatsApp Direct Contact Button */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a359]/15 border border-[#d4a359]/30 text-xs font-semibold text-[#d4a359]">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
              Launching Fall 2026
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#b85d34] to-[#9e4e2a] hover:from-[#d4a359] hover:to-[#b85d34] text-white text-xs font-extrabold shadow-md transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100" />
              <span>WhatsApp Us: +92 317 1759093</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Center Stage */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col items-center text-center">
        {/* Sacred Bismillah Calligraphic Motif */}
        <div className="inline-flex items-center justify-center mb-6">
          <span className="font-urdu text-base sm:text-xl text-[#d4a359] tracking-widest drop-shadow-[0_2px_8px_rgba(212,163,89,0.3)]" dir="rtl">
            بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>
        </div>

        {/* Coming Soon Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-[#d4a359]/40 mb-8 animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-[#fbbf24]" />
          <span className="text-xs sm:text-sm font-bold text-stone-200 tracking-wide">
            Pakistan's Premier 1-on-1 Quran &amp; Academic Learning Platform
          </span>
        </div>

        {/* Main Title Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12] mb-6">
          Empowering Minds,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde047] via-[#d4a359] to-[#b85d34]">
            Inspiring Souls.
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-base sm:text-xl text-stone-300 max-w-2xl font-normal leading-relaxed mb-12">
          We are crafting a verified, safe, and privacy-first digital academy connecting Pakistani students and families <strong className="text-[#d4a359]">across Pakistan</strong> with certified Qaris, Alimahs, and Cambridge &amp; Board-certified subject educators.
        </p>

        {/* LIVE REAL-TIME COUNTDOWN CARDS */}
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
                className="glass-card rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center border border-[#d4a359]/30 glow-gold group hover:border-[#d4a359]/70 transition-all duration-300"
              >
                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight tabular-nums group-hover:text-[#d4a359] transition-colors">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-stone-400 tracking-widest mt-1.5 uppercase">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIP WAITLIST REGISTRATION CARD (NO EMAIL FIELD) */}
        <div className="w-full max-w-xl glass-card rounded-3xl p-6 sm:p-8 border-[#d4a359]/35 shadow-2xl relative mb-20">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#d4a359] to-[#b85d34] text-[11px] font-extrabold uppercase tracking-widest text-white shadow-md">
            ⭐ Early Bird VIP Access
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-2 space-y-4 text-left">
              <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-white mb-1">
                  Join the Exclusive Waitlist
                </h3>
                <p className="text-xs sm:text-sm text-stone-300">
                  Claim <span className="text-[#d4a359] font-bold">2 Free Trial Classes</span> + verified tutor priority when we launch.
                </p>
              </div>

              {/* Role Toggle Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-black/40 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    role === 'student'
                      ? 'bg-gradient-to-r from-[#d4a359] to-[#b85d34] text-white shadow-md'
                      : 'text-stone-400 hover:text-white'
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
                      ? 'bg-gradient-to-r from-[#d4a359] to-[#b85d34] text-white shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  I'm a Tutor / Teacher
                </button>
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Muhammad Bilal / Fatima Zahra"
                  className="w-full px-4 py-3 rounded-xl bg-[#07150e]/90 border border-[#d4a359]/30 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4a359] focus:border-transparent transition-all"
                />
              </div>

              {/* WhatsApp Number Field (Email Removed) */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4a359]" />
                  <input
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="e.g. +92 317 1759093"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#07150e]/90 border border-[#d4a359]/30 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4a359] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  {role === 'student' ? 'Subject / Quran Course Needed' : 'Subjects / Courses You Teach'}
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
                  className="w-full px-4 py-3 rounded-xl bg-[#07150e]/90 border border-[#d4a359]/30 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4a359] focus:border-transparent transition-all"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4a359] via-[#b85d34] to-[#9e4e2a] hover:from-[#f59e0b] hover:to-[#b85d34] text-white text-sm font-extrabold shadow-lg shadow-[#b85d34]/30 hover:shadow-[#d4a359]/40 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Securing Your Early Spot...
                  </span>
                ) : (
                  <>
                    <Bell className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
                    Get VIP Early Access &amp; 2 Free Trial Classes
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a359]" />
                <span>100% Privacy Protected • Direct WhatsApp Notification</span>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#d4a359]/20 border border-[#d4a359]/60 flex items-center justify-center mx-auto text-[#d4a359]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white">
                JazakAllah Khair, You're Registered!
              </h3>
              <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                Your VIP invitation has been locked in. We will reach out to your WhatsApp (<strong className="text-[#d4a359]">{whatsappNumber || '+92 317 1759093'}</strong>) the moment IlmiDunya launches.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-stone-300">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Founding Member: Priority Trial Unlocked
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 4 CORE VALUE PILLARS */}
        <div className="w-full text-left mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Why IlmiDunya Will Be Different
            </h2>
            <p className="text-sm sm:text-base text-stone-400 max-w-xl mx-auto">
              Built specifically for Pakistani students, parents, and dedicated educators with world-class standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border-[#d4a359]/25 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#d4a359]/20 border border-[#d4a359]/40 flex items-center justify-center text-[#d4a359] mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Verified Quran &amp; Tajweed
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Sanad-certified Qaris, Hafiz mentors, and female Alimahs for sisters &amp; daughters with camera-off privacy mode.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-[#d4a359] flex items-center gap-1">
                Ijazaat Verified <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border-[#b85d34]/25 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#b85d34]/20 border border-[#b85d34]/40 flex items-center justify-center text-[#e07a4a] mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Cambridge &amp; Board Experts
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Cambridge O/A Levels, Matric, FSc, MDCAT, ECAT subject mentors from top institutions (FAST, NUST, LUMS, AKU).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-[#e07a4a] flex items-center gap-1">
                All Major Boards <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border-[#d4a359]/25 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#d4a359]/20 border border-[#d4a359]/40 flex items-center justify-center text-[#fbbf24] mb-4">
                  <Video className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  1-on-1 Interactive Classroom
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  In-platform WebRTC HD video, digital interactive whiteboard, screen sharing, and Mushaf Quran viewer with Tajweed rules.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-[#fbbf24] flex items-center gap-1">
                Zero Zoom Setup <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border-[#b85d34]/25 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#b85d34]/20 border border-[#b85d34]/40 flex items-center justify-center text-[#d4a359] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Fair Local Pricing
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Support for JazzCash, EasyPaisa &amp; Pakistani online bank transfers. Zero commission traps and protected deal escrow.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-[#d4a359] flex items-center gap-1">
                Direct Pakistani PKR <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* CITIES & REACH BANNER */}
        <div className="w-full glass-card rounded-2xl p-6 sm:p-8 border-[#d4a359]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#d4a359]/20 flex items-center justify-center text-[#d4a359] shrink-0 mt-1">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Nationwide Coverage Across Pakistan
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Lahore • Karachi • Islamabad • Rawalpindi • Faisalabad • Peshawar • Multan • Quetta &amp; all cities and districts across Pakistan.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-xl bg-black/40 border border-white/5 text-center">
              <div className="text-lg font-black text-[#d4a359]">500+</div>
              <div className="text-[10px] text-stone-400 uppercase tracking-wider">Tutors Ready</div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-black/40 border border-white/5 text-center">
              <div className="text-lg font-black text-[#b85d34]">1,200+</div>
              <div className="text-[10px] text-stone-400 uppercase tracking-wider">Pre-Enrolled</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer (No Email) */}
      <footer className="relative z-20 border-t border-[#d4a359]/20 bg-[#050e09] py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <BrandLogo variant="dark" size="sm" withBadge={true} />
            <span>•</span>
            <span className="font-urdu text-sm text-[#d4a359]" dir="rtl">علمی دُنیا پاکستان</span>
          </div>

          <div>
            © {new Date().getFullYear()} IlmiDunya Pakistan. All rights reserved.
          </div>

          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4a359] hover:text-white font-semibold transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: +92 317 1759093
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
