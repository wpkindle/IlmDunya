import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Video,
  Sparkles,
  MessageCircle,
  MapPin,
  ChevronRight,
  Heart,
  Handshake,
  Award,
  UserCheck,
  ArrowRight
} from 'lucide-react';
import AnimatedHeroBackground from './components/AnimatedHeroBackground';
import BrandLogo from './components/BrandLogo';
import SupportPlatformModal from './components/SupportPlatformModal';
import TutorRegistrationModal from './components/TutorRegistrationModal';

export default function App() {
  const [tutorModalOpen, setTutorModalOpen] = useState(false);
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
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  // Countdown Timer State (Target: 11 days)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  // Support Modal State
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  // Live real-time countdown timer ticking every second
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = "https://wa.me/923171759093?text=Salam%20IlmiDunya!%20I%20am%20interested%20in%20learning%20more%20about%20the%20platform.";

  return (
    <div className="relative min-h-screen bg-[#0c2217] text-[#faf8f5] overflow-x-hidden w-full max-w-full flex flex-col justify-between">
      {/* 1. EXACT ANIMATED HERO BACKGROUND EFFECT FROM MAIN WEBSITE */}
      <AnimatedHeroBackground />

      {/* Top Header Navigation (Mobile Optimized) */}
      <header className="relative z-20 w-full max-w-full border-b border-[#d4a359]/20 bg-[#07150e]/90 backdrop-blur-md overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          {/* Authentic Brand Logo */}
          <a href="/" className="flex items-center group py-1 shrink-0" title="IlmiDunya">
            <BrandLogo variant="dark" size="sm" />
          </a>

          {/* Action Buttons: Tutor Registration, Support Platform & WhatsApp Contact */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Early Tutor Registration Header Button */}
            <button
              onClick={() => setTutorModalOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-gradient-to-r from-[#b85d34] to-[#9e4e2a] hover:from-[#d4a359] hover:to-[#b85d34] text-white text-[11px] sm:text-xs font-black shadow-sm transition-all cursor-pointer shrink-0"
              title="Join Tutor Faculty"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Tutor Registration</span>
            </button>

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
              <span className="sm:hidden font-bold">Contact</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Center Stage (Mobile-Responsive Spacing & Zero Overflow) */}
      <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pt-8 pb-28 sm:pt-14 sm:pb-20 flex flex-col items-center text-center overflow-x-hidden box-border">
        {/* Sacred Bismillah Calligraphic Motif */}
        <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
          <span className="font-urdu text-sm sm:text-xl text-[#d4a359] tracking-widest drop-shadow-[0_2px_8px_rgba(212,163,89,0.3)]" dir="rtl">
            بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>
        </div>

        {/* Coming Soon Pill Badge */}
        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full glass-card border-[#d4a359]/40 mb-5 sm:mb-8 animate-pulse-glow max-w-[92vw]">
          <Sparkles className="w-3.5 h-3.5 text-[#fbbf24] shrink-0" />
          <span className="text-[10px] sm:text-sm font-bold text-stone-200 tracking-wide text-center">
            Pakistan's Premier 1-on-1 Quran &amp; Academic Platform
          </span>
        </div>

        {/* Main Title Heading */}
        <h1 className="text-2xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.12] mb-3 sm:mb-6 px-1">
          Empowering Minds,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde047] via-[#d4a359] to-[#b85d34] block sm:inline">
            Inspiring Souls.
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-xs sm:text-base md:text-lg text-stone-300 max-w-2xl font-normal leading-relaxed mb-5 sm:mb-7 px-2">
          Connecting students and families across Pakistan directly with certified Qaris, Alimahs, and Cambridge &amp; Board-certified educators — featuring <strong className="text-[#10b981]">direct dealing with no third-party involvement</strong> and <strong className="text-[#d4a359]">guaranteed female safety</strong>.
        </p>

        {/* 3 Core Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 max-w-3xl px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-[10px] sm:text-xs font-bold text-emerald-300 shadow-sm backdrop-blur-sm">
            <Handshake className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Direct Dealing • No 3rd Party</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-950/50 border border-rose-400/40 text-[10px] sm:text-xs font-bold text-rose-200 shadow-sm backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>100% Female Safety &amp; Privacy</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-950/60 border border-amber-400/40 text-[10px] sm:text-xs font-bold text-amber-200 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Camera-Off Privacy by Default</span>
          </div>
        </div>

        {/* LIVE REAL-TIME COUNTDOWN CARDS (100% Mobile Fluid & Never Overflowing) */}
        <div className="w-full max-w-[320px] sm:max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-6 w-full">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINS', value: timeLeft.minutes },
              { label: 'SECS', value: timeLeft.seconds }
            ].map((unit, index) => (
              <div
                key={index}
                className="glass-card rounded-xl sm:rounded-2xl p-2 sm:p-5 flex flex-col items-center justify-center border border-[#d4a359]/30 glow-gold group hover:border-[#d4a359]/70 transition-all duration-300 min-w-0"
              >
                <div className="text-xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight tabular-nums group-hover:text-[#d4a359] transition-colors">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[8px] sm:text-xs font-bold text-stone-400 tracking-wider mt-0.5 sm:mt-1.5 uppercase truncate w-full text-center">
                  <span className="sm:hidden">{unit.label}</span>
                  <span className="hidden sm:inline">
                    {unit.label === 'MINS' ? 'MINUTES' : unit.label === 'SECS' ? 'SECONDS' : unit.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STUDENT REGISTRATION WILL START SOON ANNOUNCEMENT CARD */}
        <div className="w-full max-w-2xl mx-auto mb-10 sm:mb-14 p-5 sm:p-6 rounded-3xl glass-card border-2 border-[#d4a359]/50 shadow-2xl bg-gradient-to-b from-[#143d2b]/90 to-[#07150e]/95 text-center space-y-3 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#d4a359]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#b85d34]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4a359]/20 text-[#d4a359] border border-[#d4a359]/40 text-[10px] sm:text-xs font-black tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#d4a359]" />
            <span>Admissions Notice</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-serif font-black text-white tracking-tight leading-snug">
            Student Registration Will Start Soon
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto leading-relaxed">
            Student admissions will officially open on launch day (Sept 16, 2026). In the meantime, <strong className="text-[#d4a359]">Early Tutor Registration is now open</strong> for certified Qaris, female Alimahs, and academic educators to verify their credentials.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setTutorModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#b85d34] to-[#9e4e2a] hover:from-[#d4a359] hover:to-[#b85d34] text-white font-extrabold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <UserCheck className="w-4 h-4" />
              <span>Register as a Tutor (Now Open)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* DIRECT ACTION CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xl mx-auto mb-14 sm:mb-20 px-3">
          {/* WhatsApp Direct Contact Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:min-w-[200px] min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1ebc59] hover:to-[#0f7a6e] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 border border-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 whitespace-nowrap box-border"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Support Platform Modal Button */}
          <button
            onClick={() => setSupportModalOpen(true)}
            className="w-full sm:w-auto sm:min-w-[170px] min-h-[52px] sm:min-h-[56px] inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#0c2217] hover:bg-[#143d2b] border-2 border-[#d4a359]/50 hover:border-[#d4a359] text-white text-xs sm:text-sm font-bold shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
          >
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400/20 shrink-0" />
            <span>Support Us</span>
          </button>
        </div>

        {/* 6 CORE VALUE PILLARS */}
        <div className="w-full text-left mb-14 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 sm:mb-3">
              Why IlmiDunya Will Be Different
            </h2>
            <p className="text-xs sm:text-base text-stone-400 max-w-xl mx-auto px-2">
              Direct connection, guaranteed female safety, and verified educators — built specifically for Pakistani families and dedicated educators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {/* Pillar 1: Direct Dealing (No 3rd Party) */}
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border-emerald-500/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3 sm:mb-4">
                  <Handshake className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                  Direct Dealing (No 3rd Party)
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                  Direct communication, custom scheduling, and fee arrangements directly between tutor and student. Zero middleman cuts, no third-party agency deductions, and complete mutual transparency.
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-[10px] sm:text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                Zero Commission Traps <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 2: 100% Female Safety & Privacy */}
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border-rose-500/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 mb-3 sm:mb-4">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                  100% Female Safety &amp; Privacy
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                  Verified female Alimahs and certified female educators exclusively for sisters &amp; daughters. Camera-off privacy mode, zero tolerance for harassment, and full family peace of mind.
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-[10px] sm:text-[11px] font-semibold text-rose-400 flex items-center gap-1">
                Strict Family Safeguarding <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 3: Flexible 1-on-1 Schedules */}
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border-amber-500/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-3 sm:mb-4">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                  Flexible Schedules &amp; Timings
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                  Agree directly on morning, evening, or weekend class schedules that perfectly fit your family routine and academic commitments.
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-[10px] sm:text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                Custom Timetable <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 4: Verified Quran & Tajweed */}
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border-[#d4a359]/25 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#d4a359]/20 border border-[#d4a359]/40 flex items-center justify-center text-[#d4a359] mb-3 sm:mb-4">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                  Sanad-Certified Quran &amp; Tajweed
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                  Sanad-certified Qaris, Hafiz mentors, and Alimahs with verified Ijazaat connected to unbroken chains of recitation for Noorani Qaida, Nazra Quran, and Hifz.
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-[10px] sm:text-[11px] font-semibold text-[#d4a359] flex items-center gap-1">
                Ijazaat Verified <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 5: Cambridge & Board Experts */}
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border-[#b85d34]/25 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#b85d34]/20 border border-[#b85d34]/40 flex items-center justify-center text-[#e07a4a] mb-3 sm:mb-4">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                  Cambridge &amp; Board Experts
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                  Cambridge O/A Levels, Matric, FSc, MDCAT, ECAT subject mentors from top institutions (FAST, NUST, LUMS, AKU) delivering customized exam preparation.
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-[10px] sm:text-[11px] font-semibold text-[#e07a4a] flex items-center gap-1">
                All Major Boards <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 6: 1-on-1 Interactive Classroom */}
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border-[#fbbf24]/25 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#fbbf24]/20 border border-[#fbbf24]/40 flex items-center justify-center text-[#fbbf24] mb-3 sm:mb-4">
                  <Video className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                  1-on-1 Interactive Classroom
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                  In-platform WebRTC HD video, digital interactive whiteboard, screen sharing, and Mushaf Quran viewer with Tajweed rules. Zero Zoom or 3rd party setup.
                </p>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 text-[10px] sm:text-[11px] font-semibold text-[#fbbf24] flex items-center gap-1">
                Zero Zoom Setup <ChevronRight className="w-3 h-3" />
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

      {/* 2. Floating WhatsApp Direct Contact Button (Bottom Right) */}
      <div className="fixed bottom-4 sm:bottom-5 right-3 sm:right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact WhatsApp"
          className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-xl bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-xl cursor-pointer border border-emerald-300/40"
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
          <MessageCircle className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="text-[11px] sm:text-xs font-extrabold tracking-tight">
            <span className="sm:hidden">Contact</span>
            <span className="hidden sm:inline">Contact: +92 317 1759093</span>
          </span>
        </a>
      </div>

      {/* Footer (Optimized for Mobile & Desktop with Floating Button Safe Clearance) */}
      <footer className="relative z-20 border-t border-[#d4a359]/20 bg-[#050e09] pt-8 pb-24 sm:pt-10 sm:pb-28 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-3 text-xs text-stone-400">
          {/* Brand Logo & Authentic Urdu Script */}
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            <BrandLogo variant="dark" size="sm" />
            <span className="text-[#d4a359]/40">•</span>
            <span className="font-urdu text-base sm:text-lg text-[#d4a359]" dir="rtl">
              علمی دُنیا پاکستان
            </span>
          </div>

          {/* Mission & Trust Tagline */}
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
            Pakistan's Premier 1-on-1 Quran &amp; Academic Platform.
            <span className="block sm:inline text-stone-400"> Direct Dealing (No 3rd Party) • 100% Female Safety • In-Browser WebRTC.</span>
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

      {/* Tutor Registration Modal Dialog */}
      <TutorRegistrationModal
        isOpen={tutorModalOpen}
        onClose={() => setTutorModalOpen(false)}
      />
    </div>
  );
}
