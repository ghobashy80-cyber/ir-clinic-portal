"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const content = {
    en: {
      brand: "DR. EL GHOBASHY",
      subtitle: "Interventional Radiology Clinic",
      home: "Home",
      patient: "Patient Portal",
      doctor: "Doctor Referral",
      btnText: "العربية"
    },
    ar: {
      brand: "د. محمد الغباشي",
      subtitle: "عيادة الأشعة التداخلية",
      home: "الرئيسية",
      patient: "بوابة المرضى",
      doctor: "بوابة الأطباء",
      btnText: "English"
    }
  };

  const t = content[language];

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col hover:opacity-80 transition">
            <span className="text-2xl font-extrabold text-white tracking-wider">
              {t.brand} <span className="text-blue-500">IR</span>
            </span>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              {t.subtitle}
            </span>
          </Link>

          {/* Center Links (Using 'gap-8' fixes the RTL/LTR arrangement perfectly) */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-white transition">
              {t.home}
            </Link>
            <Link href="/patient" className="text-sm font-semibold text-slate-300 hover:text-white transition">
              {t.patient}
            </Link>
            <Link href="/doctor" className="text-sm font-semibold text-slate-300 hover:text-white transition">
              {t.doctor}
            </Link>
          </div>

          {/* Right Side: Professional Links & Language Toggle */}
          <div className="flex items-center gap-4">
            
            {/* LinkedIn & Scholar Links */}
            <div className="hidden sm:flex items-center gap-3 border-slate-700 px-4 rtl:border-l ltr:border-r">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition" title="University Scholar">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 2.735L5 21h14l.162-8.765L24 9.5 12 0z"/></svg>
              </a>
            </div>

            <button 
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 font-bold hover:bg-slate-800 hover:text-white hover:border-slate-500 transition duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t.btnText}
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}