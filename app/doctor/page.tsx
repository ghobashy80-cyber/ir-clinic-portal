"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useLanguage } from "../../components/LanguageContext";

export default function DoctorPortal() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_82kogp8';
    const templateID = 'template_v6zw4sl';
    const publicKey = 'Yje4qmAxbM0waypgs';

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then(() => {
          setSubmitted(true);
          setIsSubmitting(false);
          form.current?.reset();
          setTimeout(() => setSubmitted(false), 5000);
        }, () => {
          alert(language === 'en' ? "Something went wrong. Please try again." : "حدث خطأ ما. يرجى المحاولة مرة أخرى.");
          setIsSubmitting(false);
        });
    }
  };

  const content = {
    en: {
      title: "Physician Clinical Hub",
      subtitle: "Secure patient referral portal and clinical reference guide for image-guided interventional procedures.",
      urgentBtn: "Urgent Colleague Consult",
      formTitle: "Secure Patient Referral",
      formBadge: "Routed via Rad Flow Pro",
      refName: "Referring Physician Name",
      refContact: "Contact Number / Pager",
      patientName: "Patient Name",
      patientContact: "Patient Contact",
      clinicalHistory: "Clinical History & Requested Procedure",
      clinicalPlaceholder: "Brief history, relevant lab results, and prior imaging...",
      submitBtn: isSubmitting ? "Transmitting Securely..." : "Submit Secure Referral",
      successMsg: "Referral successfully submitted. Our clinical team will contact the patient shortly.",
      resourcesTitle: "Clinical Resources",
      resourcesSubtitle: "Evidence-based pathology and IR technique references.",
      resourceNote: "* These resources outline advanced procedural techniques, evidence-based pathology, and reading pattern optimizations.",
      resources: [
        "Prostatic Artery Embolization (PAE)",
        "Uterine Fibroid Embolization (UFE)",
        "Pelvic Congestion Syndrome (PCS) Embolization",
        "Hepatocellular Carcinoma: TACE & Ablation",
        "Venous Vascular Access (Port-a-Cath, PICC, Dialysis)",
        "Image-Guided Biopsies & Drainage"
      ]
    },
    ar: {
      title: "بوابة الأطباء المرجعية",
      subtitle: "بوابة آمنة لإحالة المرضى ودليل مرجعي طبي للإجراءات التداخلية الموجّهة بالأشعة.",
      urgentBtn: "استشارة عاجلة مع الزميل",
      formTitle: "إحالة مريض آمنة",
      formBadge: "عبر نظام Rad Flow Pro",
      refName: "اسم الطبيب المحيل",
      refContact: "رقم التواصل",
      patientName: "اسم المريض",
      patientContact: "رقم تواصل المريض",
      clinicalHistory: "التاريخ المرضي والإجراء المطلوب",
      clinicalPlaceholder: "ملخص الحالة، نتائج التحاليل ذات الصلة، والفحوصات السابقة...",
      submitBtn: isSubmitting ? "جاري الإرسال..." : "إرسال الإحالة بأمان",
      successMsg: "تم إرسال الإحالة بنجاح. سيتواصل فريقنا الطبي مع المريض قريباً.",
      resourcesTitle: "المراجع الطبية",
      resourcesSubtitle: "مراجع الأشعة التداخلية والدراسات القائمة على الأدلة.",
      resourceNote: "* تتناول هذه المراجع التقنيات الإجرائية المتقدمة والدراسات القائمة على الأدلة وتحسينات سير العمل.",
      resources: [
        "قسطرة الشريان البروستاتي (PAE)",
        "قسطرة الورم الليفي الرحمي (UFE)",
        "قسطرة احتقان الحوض (PCS)",
        "سرطان خلايا الكبد: TACE والاستئصال الحراري",
        "الوصول الوعائي الوريدي (Port-a-Cath, PICC, Dialysis)",
        "الخزعات والتصريف الموجّه بالأشعة"
      ]
    }
  };

  const t = content[language];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-12 border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{t.title}</h1>
            <p className="text-xl text-slate-600 max-w-2xl">{t.subtitle}</p>
          </div>
          <a
            href="https://wa.me/201555783179"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition shadow-md font-semibold whitespace-nowrap"
          >
            <span className="text-xl">💬</span>
            {t.urgentBtn}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Referral Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm">📋</span>
                  {t.formTitle}
                </h2>
                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  {t.formBadge}
                </span>
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.refName}</label>
                    <input type="text" name="ref_name" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.refContact}</label>
                    <input type="tel" name="ref_contact" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.patientName}</label>
                    <input type="text" name="patient_name" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.patientContact}</label>
                    <input type="tel" name="patient_contact" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.clinicalHistory}</label>
                  <textarea name="clinical_history" rows={4} required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder={t.clinicalPlaceholder} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white font-bold py-4 px-6 rounded-lg transition duration-300 ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-blue-700'}`}
                >
                  {t.submitBtn}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-medium text-center animate-pulse">
                    {t.successMsg}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Clinical Resources */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{t.resourcesTitle}</h2>
              <p className="text-slate-400 text-sm mb-6">{t.resourcesSubtitle}</p>

              <ul className="space-y-4">
                {t.resources.map((resource, i) => (
                  <li key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-center border-b border-slate-700 pb-3 group-hover:border-blue-400 transition">
                      <span className="font-semibold text-slate-200 group-hover:text-blue-400 text-sm">{resource}</span>
                      <span className="text-slate-500 group-hover:text-blue-400 rtl:rotate-180">→</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-xs text-slate-400 leading-relaxed">{t.resourceNote}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
