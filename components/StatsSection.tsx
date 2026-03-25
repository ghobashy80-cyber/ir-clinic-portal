"use client";

import { useLanguage } from "./LanguageContext";

export default function StatsSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      stats: [
        { value: "15+", label: "Years of Experience", sub: "Since Masters 2010" },
        { value: "MD", label: "Medical Doctorate", sub: "Cairo University 2015" },
        { value: "2", label: "Clinic Locations", sub: "Kasr Al-Ainy & Andalusia" },
        { value: "IR", label: "Subspecialty Focus", sub: "Interventional Radiology" }
      ]
    },
    ar: {
      stats: [
        { value: "15+", label: "سنة خبرة", sub: "منذ الماجستير 2010" },
        { value: "MD", label: "دكتوراه في الطب", sub: "جامعة القاهرة 2015" },
        { value: "2", label: "موقع عيادة", sub: "قصر العيني وأندلسية" },
        { value: "IR", label: "التخصص الدقيق", sub: "الأشعة التداخلية" }
      ]
    }
  };

  const { stats } = content[language];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-300 mb-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
