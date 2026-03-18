"use client";

import { useState, useRef } from "react";
import { useLanguage } from "../../components/LanguageContext";
import emailjs from '@emailjs/browser';

export default function PatientPortal() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // PASTE YOUR 3 EMAILJS KEYS HERE:
    const serviceID = 'service_82kogp8';
    const templateID = 'template_e3cczed'; // Use the new Template ID!
    const publicKey = 'Yje4qmAxbM0waypgs';

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
            setSubmitted(true);
            setIsSubmitting(false);
            form.current?.reset();
            setTimeout(() => setSubmitted(false), 5000);
        }, (error) => {
            alert(language === 'en' ? "Something went wrong. Please try again." : "حدث خطأ ما. يرجى المحاولة مرة أخرى.");
            setIsSubmitting(false);
        });
    }
  };

  const content = {
    en: {
      title: "Patient Portal",
      subtitle: "Empowering you with knowledge and direct access to care.",
      waTitle: "Direct WhatsApp Support",
      waDesc: "Have a quick question, need to share imaging reports, or want to book an appointment? Message our clinic directly.",
      waBtn: "Chat on WhatsApp",
      eduTitle: "Patient Education Center",
      edu1: "What is Interventional Radiology?",
      edu2: "Preparing for your Procedure",
      edu3: "Post-Operative Care & Recovery",
      edu4: "Understanding Embolization",
      podTitle: "Weekly IR Podcast",
      podDesc: "Listen to Dr. El Ghobashy discuss the latest in IR and answer patient questions. Ask yours below!",
      podInput: "Type your medical question here...",
      podBtn: isSubmitting ? "Transmitting..." : "Submit Question for Podcast",
      successMsg: "Your question has been securely submitted!"
    },
    ar: {
      title: "بوابة المرضى",
      subtitle: "نزودك بالمعرفة والتواصل المباشر لضمان أفضل رعاية طبية.",
      waTitle: "دعم مباشر عبر واتساب",
      waDesc: "لديك استفسار سريع، أو تريد مشاركة تقارير الأشعة، أو ترغب في الحجز؟ تواصل مع عيادتنا مباشرة.",
      waBtn: "تحدث معنا عبر واتساب",
      eduTitle: "مركز التثقيف الطبي للمرضى",
      edu1: "ما هي الأشعة التداخلية؟",
      edu2: "التحضير للإجراء الطبي",
      edu3: "رعاية ما بعد العملية والتعافي",
      edu4: "دليلك لفهم عمليات القسطرة العلاجية",
      podTitle: "البودكاست الأسبوعي",
      podDesc: "استمع إلى د. الغباشي يناقش أحدث التطورات ويجيب على أسئلة المرضى. اطرح سؤالك ليتم الإجابة عليه!",
      podInput: "اكتب سؤالك الطبي هنا...",
      podBtn: isSubmitting ? "جاري الإرسال..." : "إرسال للبودكاست",
      successMsg: "تم إرسال سؤالك بنجاح!"
    }
  };

  const t = content[language];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 border-b border-slate-200 pb-8 text-center md:text-start">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{t.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-1 space-y-8">
            
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-lg text-start">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 text-2xl">
                💬
              </div>
              <h3 className="text-2xl font-bold mb-3">{t.waTitle}</h3>
              <p className="text-green-50 text-sm mb-8 leading-relaxed">
                {t.waDesc}
              </p>
              <a 
                href="https://wa.me/201555783179" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center w-full bg-white text-green-600 font-bold py-3 rounded-xl hover:bg-green-50 transition shadow-md"
              >
                {t.waBtn}
              </a>
            </div>

            {/* Interactive Podcast Form (Connected to EmailJS) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-start">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6 text-2xl">
                🎙️
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.podTitle}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {t.podDesc}
              </p>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <textarea 
                  name="podcast_question" 
                  rows={4} 
                  required 
                  className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none resize-none bg-slate-50" 
                  placeholder={t.podInput}
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full text-white font-bold py-3 rounded-xl transition shadow-md ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-purple-600'}`}
                >
                  {t.podBtn}
                </button>
                
                {submitted && (
                  <div className="p-3 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-medium text-center animate-pulse mt-2">
                    {t.successMsg}
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* Right Column: Patient Education Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
              <span className="text-blue-600">📚</span> {t.eduTitle}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[t.edu1, t.edu2, t.edu3, t.edu4].map((title, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition cursor-pointer group text-start flex flex-col justify-between min-h-[160px]">
                  <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition mb-4">
                    {title}
                  </h4>
                  <div className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                    <span className="rtl:hidden">Read Article →</span>
                    <span className="ltr:hidden">← اقرأ المقال</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Future Video Placeholder */}
            <div className="mt-8 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden flex items-center justify-center min-h-[250px]">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               <div className="relative z-10 text-center">
                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition transform">
                   <svg className="w-8 h-8 ml-1 rtl:mr-1 rtl:ml-0 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
                 <p className="font-bold text-lg tracking-wide opacity-80">Video Library Coming Soon</p>
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}