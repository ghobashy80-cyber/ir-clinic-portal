"use client";

import { useLanguage } from "./LanguageContext";

export default function AboutSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      subtitle: "Meet the Expert",
      title1: "Bridging Clinical Excellence with ",
      title2: "Technological Innovation",
      desc1: "As an Associate Professor of Radiology at Cairo University and the Clinical Lead of Radiology for the Andalusia Group, I am dedicated to advancing patient care through minimally invasive, image-guided precision.",
      desc2: "My approach goes beyond the procedure room. By actively developing web-based applications to optimize reading patterns and workflow, I focus on transforming entire radiology departments to ensure faster, safer, and more accurate patient outcomes.",
      badgeTitle: "Consultant &",
      badgeSub: "Associate Professor",
      c1: "Cairo University", c1Sub: "Associate Professor",
      c2: "Andalusia Group", c2Sub: "Clinical Lead of Radiology",
      c3: "Kasr Al-Ainy", c3Sub: "Consultant Radiologist",
      c4: "Workflow Innovator", c4Sub: "Creator of Rad Flow Pro"
    },
    ar: {
      subtitle: "تعرف على الخبير",
      title1: "الجمع بين التميز الطبي ",
      title2: "والابتكار التكنولوجي",
      desc1: "بصفتي أستاذاً مساعداً للأشعة بجامعة القاهرة والمدير الإكلينيكي للأشعة بمجموعة أندلسية، أكرس جهودي للارتقاء برعاية المرضى من خلال التدخلات الدقيقة والموجهة بالأشعة.",
      desc2: "يمتد نهجي إلى ما هو أبعد من غرفة العمليات. من خلال تطوير تطبيقات ويب مبتكرة لتحسين أنماط القراءة وسير العمل، أركز على تحويل مسارات العمل بأكملها لضمان نتائج أسرع وأكثر أماناً ودقة للمرضى.",
      badgeTitle: "استشاري و",
      badgeSub: "أستاذ مساعد",
      c1: "جامعة القاهرة", c1Sub: "أستاذ مساعد",
      c2: "مجموعة أندلسية", c2Sub: "المدير الإكلينيكي للأشعة",
      c3: "قصر العيني", c3Sub: "استشاري الأشعة التداخلية",
      c4: "مبتكر تقني", c4Sub: "مطور أنظمة سير عمل الأشعة"
    }
  };

  const t = content[language];
  // Determine badge position based on language
  const badgePosition = language === "ar" ? "-right-8" : "-left-8";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute top-[-5%] right-[-5%] w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            <div className="absolute bottom-[-5%] left-[-5%] w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 bg-slate-100">
              <img 
                src="/dr-profile.jpg" 
                alt="Dr. El Ghobashy" 
                className="object-cover w-full h-full object-top"
              />
            </div>
            
            <div className={`absolute bottom-8 ${badgePosition} bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:block`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  IR
                </div>
                <div className="text-start">
                  <p className="text-sm font-bold text-slate-900">{t.badgeTitle}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{t.badgeSub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Column */}
          <div className="text-start">
            <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest mb-3">
              {t.subtitle}
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {t.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t.title2}</span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t.desc1}</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t.desc2}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 border-t border-slate-200 pt-8">
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.c1}</h4>
                  <p className="text-sm text-slate-500">{t.c1Sub}</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                  <span className="text-cyan-600 font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.c2}</h4>
                  <p className="text-sm text-slate-500">{t.c2Sub}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">03</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.c3}</h4>
                  <p className="text-sm text-slate-500">{t.c3Sub}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-600 font-bold">04</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.c4}</h4>
                  <p className="text-sm text-slate-500">{t.c4Sub}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}