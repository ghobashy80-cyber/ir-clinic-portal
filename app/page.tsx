"use client";

import Link from "next/link";
import AboutSection from "../components/AboutSection";
import LocationsSection from "../components/LocationsSection";
import { useLanguage } from "../components/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "Minimally Invasive Precision",
      title1: "The Future of ",
      title2: "Interventional Radiology",
      desc: "Led by Dr. Mohamed El Ghobashy. Delivering state-of-the-art, image-guided treatments with rapid recovery times at Cairo University and top-tier regional hospitals.",
      btnPatient: "Enter Patient Portal",
      btnDoctor: "Physician Clinical Hub",
      badge1: "Cairo University Faculty",
      badge2: "Kasr Al-Ainy Hospital",
      badge3: "Clinical Lead, Andalusia Group"
    },
    ar: {
      badge: "دقة متناهية بتدخل محدود",
      title1: "مستقبل ",
      title2: "الأشعة التداخلية",
      desc: "بقيادة د. محمد الغباشي. نقدم أحدث العلاجات الدقيقة والموجهة بالأشعة مع فترات تعافي سريعة في مستشفيات جامعة القاهرة وأفضل المراكز الطبية.",
      btnPatient: "بوابة المرضى",
      btnDoctor: "بوابة الأطباء المرجعية",
      badge1: "هيئة تدريس جامعة القاهرة",
      badge2: "مستشفى قصر العيني",
      badge3: "المدير الإكلينيكي للأشعة، مجموعة أندلسية"
    }
  };

  const t = content[language];

  return (
    <div className="flex flex-col">
      
      {/* Bilingual Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50">
        
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] rtl:right-[-10%] ltr:left-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-[20%] rtl:left-[-10%] ltr:right-[-10%] w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] right-[20%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 p-10 md:p-16 rounded-3xl shadow-2xl max-w-5xl">
            
            <div className="inline-block bg-gradient-to-l from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest mb-8 shadow-md">
              {t.badge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              {t.title1} <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-cyan-600">{t.title2}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              {t.desc}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Link 
                href="/patient" 
                className="px-8 py-4 bg-slate-900 text-white rounded-xl shadow-xl hover:bg-blue-600 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 font-bold text-lg"
              >
                {t.btnPatient}
              </Link>
              <Link 
                href="/doctor" 
                className="px-8 py-4 bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 rounded-xl shadow-lg hover:border-blue-400 hover:bg-white transition-all duration-300 transform hover:-translate-y-1 font-bold text-lg"
              >
                {t.btnDoctor}
              </Link>
            </div>

            <div className="pt-8 border-t border-slate-200/60 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-500 font-bold text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {t.badge1}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                {t.badge2}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                {t.badge3}
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutSection />
      <LocationsSection />

    </div>
  );
}