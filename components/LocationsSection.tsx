"use client";

import { useLanguage } from "./LanguageContext";

export default function LocationsSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      subtitle: "Visit The Clinic",
      title: "Consultation Locations",
      desc: "Schedule an in-person consultation at one of our primary Cairo facilities.",
      tag1: "University Hospital",
      title1: "Kasr Al-Ainy Hospital",
      address1: "Cairo University Hospitals, Al Manial, Cairo Governorate",
      time1: "Sun, Tue, Thu: 9:00 AM - 2:00 PM",
      phone1: "+20 100 000 0000",
      tag2: "Private Hospital",
      title2: "Andalusia Hospitals",
      address2: "Maadi Branch, Cairo",
      time2: "Mon, Wed: 4:00 PM - 9:00 PM",
      phone2: "+20 100 000 0001",
    },
    ar: {
      subtitle: "قم بزيارة العيادة",
      title: "مواقع العيادات",
      desc: "حدد موعداً لاستشارة شخصية في أحد مراكزنا الرئيسية بالقاهرة.",
      tag1: "مستشفى جامعي",
      title1: "مستشفى قصر العيني",
      address1: "مستشفيات جامعة القاهرة، المنيل، محافظة القاهرة",
      time1: "الأحد، الثلاثاء، الخميس: 9:00 صباحاً - 2:00 مساءً",
      phone1: "+20 100 000 0000",
      tag2: "مستشفى خاص",
      title2: "مستشفيات أندلسية",
      address2: "فرع المعادي، القاهرة",
      time2: "الإثنين، الأربعاء: 4:00 مساءً - 9:00 مساءً",
      phone2: "+20 100 000 0001",
    }
  };

  const t = content[language];
  const badgePosition = language === "ar" ? "left-4" : "right-4";

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest mb-3">{t.subtitle}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">{t.title}</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Card 1: Kasr Al Ainy (Active Map) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col text-start transition-transform hover:-translate-y-1 duration-300">
            <div className="h-64 w-full relative">
              <iframe 
                suppressHydrationWarning
                width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.8015414221236!2d31.227052583576658!3d30.031014177774615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584733526d3691%3A0xe0363010a95c832b!2sFaculty%20Of%20Medicine%20Kasr%20Al-Ainy%2C%20Cairo%20University!5e0!3m2!1sen!2seg!4v1773855224220!5m2!1sen!2seg"
                className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className={`absolute top-4 ${badgePosition} bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm pointer-events-none`}>
                {t.tag1}
              </div>
            </div>
            <div className="p-8 flex-grow">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">{t.title1}</h4>
              <p className="text-slate-500 mb-6">{t.address1}</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-700">🕒 {t.time1}</div>
                <div className="flex items-center text-sm text-slate-700" dir="ltr">📞 {t.phone1}</div>
              </div>
            </div>
          </div>

          {/* Card 2: Andalusia (Active Map) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col text-start transition-transform hover:-translate-y-1 duration-300">
            <div className="h-64 w-full relative">
              <iframe 
                suppressHydrationWarning
                width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d576.6841868193399!2d31.281615996304602!3d29.973683296809213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583943bf2cc69b%3A0x9332e195d7e8ee57!2sAndalusia%20Hospital!5e0!3m2!1sen!2seg!4v1773854994230!5m2!1sen!2seg"
                className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className={`absolute top-4 ${badgePosition} bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm pointer-events-none`}>
                {t.tag2}
              </div>
            </div>
            <div className="p-8 flex-grow">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">{t.title2}</h4>
              <p className="text-slate-500 mb-6">{t.address2}</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-700">🕒 {t.time2}</div>
                <div className="flex items-center text-sm text-slate-700" dir="ltr">📞 {t.phone2}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}