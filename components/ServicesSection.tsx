"use client";

import { useLanguage } from "./LanguageContext";

const ServiceIcon = ({ type }: { type: string }) => {
  const cls = "w-6 h-6";
  const props = { className: cls, fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };

  switch (type) {
    case "pae": // Urological drop — prostate artery
      return <svg {...props}><path d="M12 2C9 5.5 6 8.5 6 12a6 6 0 0 0 12 0c0-3.5-3-6.5-6-10z"/><path d="M12 18v3"/><path d="M9.5 20.5h5"/></svg>;
    case "ufe": // Uterus shape
      return <svg {...props}><path d="M12 3c-2.5 0-4 2-4 4.5C8 11 10 14 12 14s4-3 4-6.5C16 5 14.5 3 12 3z"/><path d="M8.5 13.5 6 19"/><path d="M15.5 13.5 18 19"/><path d="M6 19c1.5-1.5 3.5-2 6-2s4.5.5 6 2"/></svg>;
    case "tace": // Target / crosshair — liver tumor
      return <svg {...props}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>;
    case "pcs": // Pulse wave — vascular
      return <svg {...props}><polyline points="2 12 6 12 9 4 12 20 15 9 18 12 22 12"/></svg>;
    case "vascular": // IV / port access
      return <svg {...props}><path d="M7 4h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M12 9v5"/><path d="M9 11.5h6"/><path d="M10 14l-1.5 5"/><path d="M14 14l1.5 5"/><path d="M8.5 19h7"/></svg>;
    case "biopsy": // Magnifying glass — image-guided
      return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="M21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>;
    default:
      return null;
  }
};

const services = {
  en: [
    { icon: "pae",      title: "Prostatic Artery Embolization",  abbr: "PAE",                desc: "A minimally invasive alternative to surgery for benign prostatic hyperplasia (BPH), restoring normal urinary flow with no incision.", color: "blue" },
    { icon: "ufe",      title: "Uterine Fibroid Embolization",    abbr: "UFE",                desc: "Non-surgical treatment that shrinks uterine fibroids by cutting off their blood supply, preserving the uterus.", color: "rose" },
    { icon: "tace",     title: "TACE & Tumour Ablation",          abbr: "HCC",                desc: "Targeted chemoembolization and thermal ablation for hepatocellular carcinoma and liver tumours, guided by real-time imaging.", color: "amber" },
    { icon: "pcs",      title: "Pelvic Congestion Embolization",  abbr: "PCS",                desc: "Treatment of chronic pelvic pain caused by varicose veins in the pelvis through precise catheter-based embolization.", color: "purple" },
    { icon: "vascular", title: "Venous Vascular Access",          abbr: "PICC · Port · Dialysis", desc: "Placement of Port-a-Cath, PICC lines, and dialysis catheters under image guidance for long-term vascular access.", color: "cyan" },
    { icon: "biopsy",   title: "Image-Guided Biopsy & Drainage",  abbr: "Biopsy · Drainage",  desc: "Ultrasound and CT-guided biopsies and therapeutic drainage of collections, abscesses, and fluid compartments.", color: "indigo" }
  ],
  ar: [
    { icon: "pae",      title: "قسطرة الشريان البروستاتي",        abbr: "PAE",                desc: "بديل غير جراحي لعلاج تضخم البروستاتا الحميد، يعيد تدفق البول الطبيعي دون شق أو تخدير عام.", color: "blue" },
    { icon: "ufe",      title: "قسطرة الورم الليفي الرحمي",       abbr: "UFE",                desc: "علاج غير جراحي يُقلّص الأورام الليفية بقطع إمدادها الدموي مع الحفاظ على الرحم.", color: "rose" },
    { icon: "tace",     title: "TACE والاستئصال الحراري للأورام", abbr: "HCC",                desc: "قسطرة كيميائية وعائية واستئصال حراري موجّه بالأشعة لعلاج سرطان خلايا الكبد.", color: "amber" },
    { icon: "pcs",      title: "قسطرة احتقان الحوض",              abbr: "PCS",                desc: "علاج آلام الحوض المزمنة الناجمة عن الدوالي الحوضية عبر القسطرة الانصمامية الدقيقة.", color: "purple" },
    { icon: "vascular", title: "الوصول الوعائي الوريدي",          abbr: "PICC · Port · غسيل كلوي", desc: "تركيب خطوط PICC وPort-a-Cath وقسطرة غسيل الكلى تحت إرشاد الأشعة للوصول الوعائي طويل الأمد.", color: "cyan" },
    { icon: "biopsy",   title: "الخزعات والتصريف الموجّه بالأشعة", abbr: "خزعة · تصريف",    desc: "خزعات وتصريف علاجي موجّهة بالموجات فوق الصوتية والـ CT للتجمعات والخراجات.", color: "indigo" }
  ]
};

const colorMap: Record<string, { bg: string; text: string; border: string; hoverBorder: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-600",   border: "border-blue-100",   hoverBorder: "hover:border-blue-300" },
  rose:   { bg: "bg-rose-50",   text: "text-rose-600",   border: "border-rose-100",   hoverBorder: "hover:border-rose-300" },
  amber:  { bg: "bg-amber-50",  text: "text-amber-600",  border: "border-amber-100",  hoverBorder: "hover:border-amber-300" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", hoverBorder: "hover:border-purple-300" },
  cyan:   { bg: "bg-cyan-50",   text: "text-cyan-600",   border: "border-cyan-100",   hoverBorder: "hover:border-cyan-300" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100", hoverBorder: "hover:border-indigo-300" }
};

export default function ServicesSection() {
  const { language } = useLanguage();

  const sectionContent = {
    en: { subtitle: "What We Treat", title: "Procedures &", titleAccent: "Specialties", desc: "Comprehensive image-guided interventions — from oncology to vascular access — delivered with precision and minimal recovery time." },
    ar: { subtitle: "ماذا نعالج", title: "الإجراءات", titleAccent: "والتخصصات", desc: "تدخلات شاملة موجّهة بالأشعة — من الأورام إلى الوصول الوعائي — بدقة عالية وفترة تعافٍ قصيرة." }
  };

  const t = sectionContent[language];
  const list = services[language];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest mb-3">{t.subtitle}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            {t.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t.titleAccent}</span>
          </h3>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((service, i) => {
            const c = colorMap[service.color];
            return (
              <div key={i} className={`group rounded-2xl border ${c.border} ${c.hoverBorder} bg-white p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default`}>
                <div className={`w-12 h-12 ${c.bg} ${c.text} rounded-xl flex items-center justify-center mb-5`}>
                  <ServiceIcon type={service.icon} />
                </div>
                <div className={`text-xs font-bold ${c.text} uppercase tracking-widest mb-2`}>{service.abbr}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{service.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
