import React, { useState } from 'react';
import {
  Heart,
  X,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  MessageCircle,
  Sparkles
} from 'lucide-react';

const paymentMethods = [
  {
    id: 'meezan',
    name: 'Meezan Bank',
    shortName: 'Meezan Bank',
    category: 'Islamic Banking',
    accountTitle: 'Abdul Khaliq',
    accountNumber: '96010105435308',
    qrImage: '/images/qr-meezan.jpg',
    instructions: 'Scan with Meezan Bank App or transfer to account 96010105435308.'
  },
  {
    id: 'easypaisa',
    name: 'EasyPaisa',
    shortName: 'EasyPaisa',
    category: 'Mobile Wallet',
    accountTitle: 'Abdul Khaliq',
    accountNumber: '03171759093',
    qrImage: '/images/qr-easypaisa.jpg',
    instructions: 'Send money or scan directly from your EasyPaisa app to 03171759093.'
  },
  {
    id: 'jazzcash',
    name: 'JazzCash',
    shortName: 'JazzCash',
    category: 'Mobile Wallet',
    accountTitle: 'Abdul Khaliq',
    accountNumber: '03171759093',
    qrImage: '/images/qr-jazzcash.jpg',
    instructions: 'Transfer directly from your JazzCash app or Raast to 03171759093.'
  },
  {
    id: 'upaisa',
    name: 'UPaisa / UBank',
    shortName: 'UPaisa',
    category: 'Microfinance Bank',
    accountTitle: 'Abdul Khaliq',
    accountNumber: '03171759093',
    qrImage: '/images/qr-upaisa.jpg',
    instructions: 'Transfer directly from UPaisa App or agent to 03171759093.'
  }
];

export default function SupportPlatformModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('meezan');
  const [copiedText, setCopiedText] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text, id) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedText(id);
      setTimeout(() => setCopiedText(null), 2000);
    }
  };

  const selectedMethod = paymentMethods.find((m) => m.id === activeTab) || paymentMethods[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#07150e]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg max-h-[90dvh] flex flex-col rounded-3xl bg-[#0c2217] border-2 border-[#d4a359]/40 shadow-2xl text-[#f5f0e6] relative overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1 bg-gradient-to-r from-[#d4a359] via-[#b85d34] to-[#d4a359] shrink-0" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#143d2b] flex items-center justify-between shrink-0 bg-[#0c2217]">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-[#143d2b] text-[#d4a359] border border-[#d4a359]/40">
              <Heart className="w-5 h-5 text-rose-400 fill-rose-400/20" />
            </div>
            <div>
              <h3 className="font-serif font-black text-base sm:text-lg text-white leading-tight">
                Support IlmiDunya Pakistan
              </h3>
              <p className="text-[11px] sm:text-xs text-[#d4a359] font-medium">
                Sadaqah Jariyah • Platform Development &amp; Verification Fund
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-[#143d2b] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
          {/* Method Tabs */}
          <div>
            <p className="text-[11px] font-bold text-[#d4a359] uppercase tracking-wider mb-2">
              Select Payment Method:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {paymentMethods.map((method) => {
                const isSelected = activeTab === method.id;
                return (
                  <button
                    key={method.id}
                    onClick={() => setActiveTab(method.id)}
                    className={`p-2.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                      isSelected
                        ? 'bg-[#b85d34] border-[#d4a359] text-white shadow-lg ring-1 ring-[#d4a359]'
                        : 'bg-[#143d2b]/60 border-[#d4a359]/20 text-stone-300 hover:bg-[#143d2b] hover:text-white'
                    }`}
                  >
                    <span className="text-[11px] sm:text-xs font-black block leading-tight text-white">
                      {method.shortName}
                    </span>
                    <span className="text-[9px] text-stone-300 font-medium block">
                      {method.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Method Details Card */}
          <div className="rounded-2xl bg-[#07150e] border border-[#d4a359]/40 p-4 flex flex-col sm:flex-row items-center gap-4">
            {/* QR Image */}
            <div className="p-2 bg-white rounded-xl shadow-lg border border-[#d4a359]/40 shrink-0">
              <img
                src={selectedMethod.qrImage}
                alt={`${selectedMethod.name} QR Code`}
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-md"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Details & Copy */}
            <div className="flex-1 text-center sm:text-left space-y-2 w-full">
              <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold bg-[#143d2b] border border-[#d4a359]/40 text-[#d4a359]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{selectedMethod.name}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#143d2b]/80 border border-[#d4a359]/30 text-left">
                <p className="text-[9px] uppercase tracking-wider font-bold text-[#d4a359]">
                  Account Title
                </p>
                <p className="text-xs sm:text-sm font-black text-white mt-0.5 tracking-wide">
                  {selectedMethod.accountTitle}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0c2217] border border-[#d4a359]/50 text-left flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
                    {selectedMethod.id === 'meezan' ? 'Account Number' : 'Account Number / Raast ID'}
                  </p>
                  <p className="text-xs sm:text-sm font-black text-[#d4a359] mt-0.5 font-mono tracking-wider truncate">
                    {selectedMethod.accountNumber}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(selectedMethod.accountNumber, selectedMethod.id)}
                  className="px-3 py-1.5 rounded-lg bg-[#b85d34] hover:bg-[#9e4e2a] active:scale-95 text-white text-[11px] font-bold transition-all flex items-center gap-1 shrink-0 cursor-pointer border border-[#d4a359]/40"
                  title="Copy Account Number"
                >
                  {copiedText === selectedMethod.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-300" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <p className="text-xs text-stone-300 text-center sm:text-left">
            {selectedMethod.instructions}
          </p>

          {/* WhatsApp Receipt Submission */}
          <div className="pt-2">
            <a
              href={`https://wa.me/923171759093?text=Salam!%20I%20have%20sent%20support%20for%20IlmiDunya%20Pakistan%20via%20${encodeURIComponent(selectedMethod.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm on WhatsApp: +92 317 1759093</span>
            </a>
          </div>

          {/* Sadaqah Jariyah Trust Note */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4a359]" />
            <span>Dedicated directly to verified teachers &amp; free Quran education</span>
          </div>
        </div>
      </div>
    </div>
  );
}
