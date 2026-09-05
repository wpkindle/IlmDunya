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
  Phone,
  Heart,
  QrCode
} from 'lucide-react';
import AnimatedHeroBackground from './components/AnimatedHeroBackground';
import BrandLogo from './components/BrandLogo';
import SupportPlatformModal from './components/SupportPlatformModal';

export default function App() {
  // Target Launch Date: 11 days countdown (September 16, 2026 at 23:59:59 PKT)
  const calculateTimeLeft = () => {
    // 11 days from current reference date
    const targetDate = new Date('2026-09-16T23:59:59+05:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % 1000) / 1000)
    };
  };

  // Countdown Timer State (Target: 11 days)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  // Waitlist Form State
  const [role, setRole] = useState('student'); // 'student' | 'tutor'
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [subjectInterest, setSubjectInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Support Modal State
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  // Check local storage for previous registration
  useEffect(() => {
    const saved = localStorage.getItem('ilmidunya_waitlist_registered');
    if (saved) {
      setIsSubmitted(true);
    }
  }, []);

  // Live real-time countdown timer ticking every second
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
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

      {/* Top Header Navigation (Mobile Optimized) */}
      <header className="relative z-20 w-full border-b border-[#d4a359]/20 bg-[#07150e]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          {/* Authentic Brand Logo */}
          <a href="/" className="flex items-center group py-1 shrink-0" title="IlmiDunya Pakistan">
            <BrandLogo variant="dark" size="sm" withBadge={true} />
          </a>

          {/* Action Buttons: Support Platform & WhatsApp Contact */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Support Platform Button */}
            <button
              onClick={() => setSupportModalOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-[#0c2217] hover:bg-[#143d2b] border border-[#d4a359]/40 hover:border-[#d4a359] text-[11px] sm:text-xs font-bold text-[#d4a359] transition-all cursor-pointer shadow-xs shrink-0"
              title="Support Platform Development"
            >
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/20" />
              <span>Support Us</span>
            </button>

            {/* WhatsApp Contact Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#b85d34] to-[#9e4e2a] hover:from-[#d4a359] hover:to-[#b85d34] text-white text-[11px] sm:text-xs font-extrabold shadow-sm transition-all duration-300 shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-100" />
              <span className="hidden sm:inline">WhatsApp: +92 317 1759093</span>
              <span className="sm:hidden font-bold">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Center Stage (Mobile-Responsive Spacing) */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-8 pb-28 sm:pt-14 sm:pb-20 flex flex-col items-center text-center">
        {/* Sacred Bismillah Calligraphic Motif */}
        <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
          <span className="font-urdu text-sm sm:text-xl text-[#d4a359] tracking-widest drop-shadow-[0_2px_8px_rgba(212,163,89,0.3)]" dir="rtl">
            بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>
        </div>

        {/* Coming Soon Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-card border-[#d4a359]/40 mb-5 sm:mb-8 animate-pulse-glow max-w-full">
          <Sparkles className="w-3.5 h-3.5 text-[#fbbf24] shrink-0" />
          <span className="text-[11px] sm:text-sm font-bold text-stone-200 tracking-wide truncate">
            Pakistan's Premier 1-on-1 Quran &amp; Academic Platform
          </span>
        </div>

        {/* Main Title Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.12] mb-3 sm:mb-6 px-1">
          Empowering Minds,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde047] via-[#d4a359] to-[#b85d34] block sm:inline">
            Inspiring Souls.
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-xs sm:text-base md:text-lg text-stone-300 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-12 px-2">
          We are crafting a verified, safe, and privacy-first digital academy connecting Pakistani students and families <strong className="text-[#d4a359]">across Pakistan</strong> with certified Qaris, Alimahs, and Cambridge &amp; Board-certified subject educators.
        </p>

        {/* LIVE REAL-TIME COUNTDOWN CARDS */}
        <div className="w-full max-w-xs sm:max-w-2xl mb-10 sm:mb-14">
          <div className="grid grid-cols-4 gap-2 sm:gap-6">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map((unit, index) => (
              <div
                key={index}
                className="glass-card rounded-xl sm:rounded-2xl p-2 sm:p-5 flex flex-col items-center justify-center border border-[#d4a359]/30 glow-gold group hover:border-[#d4a359]/70 transition-all duration-300"
              >
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight tabular-nums group-hover:text-[#d4a359] transition-colors">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[8.5px] sm:text-xs font-bold text-stone-400 tracking-wider mt-0.5 sm:mt-1.5 uppercase">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIP WAITLIST REGISTRATION CARD */}
        <div className="w-full max-w-xl glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 border-[#d4a359]/35 shadow-2xl relative mb-14 sm:mb-20">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-[#d4a359] to-[#b85d34] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-white shadow-md">
            ⭐ Early Bird VIP Access
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-2 space-y-3.5 sm:space-y-4 text-left">
              <div className="text-center mb-4 sm:mb-5">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Join the Exclusive Waitlist
                </h3>
                <p className="text-[11px] sm:text-sm text-stone-300">
                  Claim <span className="text-[#d4a359] font-bold">2 Free Trial Classes</span> + verified tutor priority when we launch.
                </p>
              </div>

              {/* Role Toggle Tabs */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`py-2 px-2 text-[11px] sm:text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    role === 'student'
                      ? 'bg-gradient-to-r from-[#d4a359] to-[#b85d34] text-white shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  I'm a Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole('tutor')}
                  className={`py-2 px-2 text-[11px] sm:text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    role === 'tutor'
                      ? 'bg-gradient-to-r from-[#d4a359] to-[#b85d34] text-white shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  I'm a Tutor
                </button>
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-stone-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Muhammad Bilal / Fatima Zahra"
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#07150e]/90 border border-[#d4a359]/30 text-xs sm:text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4a359] focus:border-transparent transition-all"
                />
              </div>

              {/* WhatsApp Number Field */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-stone-300 mb-1">
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
                    className="w-full pl-10 pr-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#07150e]/90 border border-[#d4a359]/30 text-xs sm:text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4a359] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-stone-300 mb-1">
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
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#07150e]/90 border border-[#d4a359]/30 text-xs sm:text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4a359] focus:border-transparent transition-all"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-1.5 py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-gradient-to-r from-[#d4a359] via-[#b85d34] to-[#9e4e2a] hover:from-[#f59e0b] hover:to-[#b85d34] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-[#b85d34]/30 hover:shadow-[#d4a359]/40 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Securing Your Spot...
                  </span>
                ) : (
                  <>
                    <Bell className="w-3.5 h-3.5 text-amber-200 group-hover:rotate-12 transition-transform" />
                    <span>Get VIP Early Access &amp; 2 Free Trial Classes</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-stone-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a359]" />
                <span>100% Privacy Protected • Direct WhatsApp Notification</span>
              </div>
            </form>
          ) : (
            <div className="py-6 sm:py-8 text-center space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d4a359]/20 border border-[#d4a359]/60 flex items-center justify-center mx-auto text-[#d4a359]">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                JazakAllah Khair, You're Registered!
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                Your VIP invitation has been locked in. We will reach out to your WhatsApp (<strong className="text-[#d4a359]">{whatsappNumber || '+92 317 1759093'}</strong>) the moment IlmiDunya launches.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] sm:text-xs font-semibold text-stone-300">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Founding Member: Priority Trial Unlocked
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 4 CORE VALUE PILLARS */}
        <div className="w-full text-left mb-14 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 sm:mb-3">
              Why IlmiDunya Will Be Different
            </h2>
            <p className="text-xs sm:text-base text-stone-400 max-w-xl mx-auto px-2">
              Built specifically for Pakistani students, parents, and dedicated educators with world-class standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {/* Pillar 1 */}
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border-[#d4a359]/25 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#d4a359]/20 border border-[#d4a359]/40 flex items-center justify-center text-[#d4a359] mb-3 sm:mb-4">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                  Verified Quran &amp; Tajweed
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                  Sanad-certified Qaris, Hafiz mentors, and female Alimahs for sisters &amp; daughters with camera-off privacy mode.
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-[10px] sm:text-[11px] font-semibold text-[#d4a359] flex items-center gap-1">
                Ijazaat Verified <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border-[#b85d34]/25 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#b85d34]/20 border border-[#b85d34]/40 flex items-center justify-center text-[#e07a4a] mb-3 sm:mb-4">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                  Cambridge &amp; Board Experts
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                  Cambridge O/A Levels, Matric, FSc, MDCAT, ECAT subject mentors from top institutions (FAST, NUST, LUMS, AKU).
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-[10px] sm:text-[11px] font-semibold text-[#e07a4a] flex items-center gap-1">
                All Major Boards <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border-[#d4a359]/25 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#d4a359]/20 border border-[#d4a359]/40 flex items-center justify-center text-[#fbbf24] mb-3 sm:mb-4">
                  <Video className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                  1-on-1 Interactive Classroom
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                  In-platform WebRTC HD video, digital interactive whiteboard, screen sharing, and Mushaf Quran viewer with Tajweed rules.
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-[10px] sm:text-[11px] font-semibold text-[#fbbf24] flex items-center gap-1">
                Zero Zoom Setup <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border-[#b85d34]/25 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#b85d34]/20 border border-[#b85d34]/40 flex items-center justify-center text-[#d4a359] mb-3 sm:mb-4">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                  Fair Local Pricing
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                  Support for JazzCash, EasyPaisa &amp; Pakistani online bank transfers. Zero commission traps and protected deal escrow.
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-[10px] sm:text-[11px] font-semibold text-[#d4a359] flex items-center gap-1">
                Direct Pakistani PKR <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* CITIES & REACH BANNER */}
        <div className="w-full glass-card rounded-xl sm:rounded-2xl p-4 sm:p-8 border-[#d4a359]/30 text-left">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#d4a359]/20 flex items-center justify-center text-[#d4a359] shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                Nationwide Coverage Across Pakistan
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                Lahore • Karachi • Islamabad • Rawalpindi • Faisalabad • Peshawar • Multan • Quetta &amp; all cities and districts across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* FLOATING ACTION BUTTONS (MOBILE OPTIMIZED: NEVER OVERLAPPING) */}
      {/* 1. Floating Support Platform Button (Bottom Left on Desktop, Compact Pill on Mobile) */}
      <div className="fixed bottom-4 sm:bottom-5 left-3 sm:left-6 z-40">
        <button
          onClick={() => setSupportModalOpen(true)}
          aria-label="Support IlmiDunya Platform"
          className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-xl bg-[#0c2217]/95 hover:bg-[#143d2b] text-[#f5f0e6] border-2 border-[#d4a359]/50 hover:border-[#d4a359] hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-xl cursor-pointer"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a359] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a359]"></span>
          </span>
          <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0 fill-rose-400/20" />
          <span className="text-[11px] sm:text-xs font-bold tracking-tight text-white">Support</span>
          <span className="hidden md:inline text-[10px] font-mono text-[#d4a359] bg-[#143d2b] px-2 py-0.5 rounded-full border border-[#d4a359]/40">
            Sadaqah Jariyah
          </span>
        </button>
      </div>

      {/* 2. Floating WhatsApp Direct Support Button (Bottom Right) */}
      <div className="fixed bottom-4 sm:bottom-5 right-3 sm:right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact WhatsApp Support"
          className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-xl bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-xl cursor-pointer border border-emerald-300/40"
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
          <MessageCircle className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="text-[11px] sm:text-xs font-extrabold tracking-tight">
            <span className="hidden sm:inline">Support: </span>+92 317 1759093
          </span>
        </a>
      </div>

      {/* Footer (Optimized for Mobile & Desktop with Floating Button Safe Clearance) */}
      <footer className="relative z-20 border-t border-[#d4a359]/20 bg-[#050e09] pt-8 pb-24 sm:pt-10 sm:pb-28 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-3 text-xs text-stone-400">
          {/* Brand Logo & Authentic Urdu Script */}
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            <BrandLogo variant="dark" size="sm" withBadge={true} />
            <span className="text-[#d4a359]/40">•</span>
            <span className="font-urdu text-base sm:text-lg text-[#d4a359]" dir="rtl">
              علمی دُنیا پاکستان
            </span>
          </div>

          {/* Mission & Trust Tagline */}
          <p className="text-stone-300 text-xs sm:text-sm max-w-lg font-normal leading-relaxed">
            Pakistan's Premier 1-on-1 Quran &amp; Academic Learning Platform.
            <span className="hidden sm:inline text-stone-400"> Verified Qaris, Alimahs &amp; Subject Tutors.</span>
          </p>

          {/* Copyright & Safe Zone Clearance */}
          <div className="text-[11px] sm:text-xs text-stone-500 pt-1">
            © {new Date().getFullYear()} IlmiDunya Pakistan. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Support Platform Modal Dialog */}
      <SupportPlatformModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
      />
    </div>
  );
}
