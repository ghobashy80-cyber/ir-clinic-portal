"use client";

import { useState, useRef } from "react";
import { useLanguage } from "../../components/LanguageContext";
import emailjs from '@emailjs/browser';

// ─── Education accordion data ──────────────────────────────────────────────
const eduData = {
  en: [
    {
      title: "What is Interventional Radiology?",
      icon: "🩻",
      body: `Interventional Radiology (IR) is a medical subspecialty that uses imaging technologies — X-ray fluoroscopy, ultrasound, CT, and MRI — to guide minimally invasive procedures inside the body.\n\nInstead of open surgery, IR requires only a small skin puncture. A thin catheter is guided through blood vessels or body cavities to the target area, where treatment is delivered directly.\n\n✅ No large incisions — only a 2–3 mm skin puncture\n✅ Same-day or overnight procedures in most cases\n✅ Local anaesthesia or mild sedation — no general anaesthesia in most cases\n✅ Return to daily activities in days, not weeks\n✅ Lower infection risk compared to open surgery`
    },
    {
      title: "Preparing for Your Procedure",
      icon: "📋",
      body: `• Fast for 4–6 hours before the procedure if sedation is planned\n• Tell your doctor about all medications — especially blood thinners (aspirin, warfarin, clopidogrel)\n• Bring previous imaging: CT, MRI, or ultrasound on disc or printed report\n• Arrange for someone to drive you home after the procedure\n• Wear comfortable, loose-fitting clothing on the day\n• Stay well-hydrated the day before (unless instructed otherwise)\n• Diabetic patients: ask about adjusting morning insulin or medications`
    },
    {
      title: "Post-Procedure Care & Recovery",
      icon: "🏥",
      body: `Most IR procedures allow same-day discharge or one overnight stay.\n\nFirst 24–48 hours:\n• Rest at home; avoid driving or operating machinery\n• Keep the puncture site clean and dry\n• Mild bruising at the entry site is normal\n• Take prescribed pain relief as directed\n\nFirst week:\n• Avoid heavy lifting (>5 kg) or strenuous exercise\n• Drink plenty of fluids to flush contrast dye\n\n⚠️ Contact the clinic immediately if you experience:\n— Fever above 38°C\n— Excessive bleeding at the puncture site\n— Sudden severe pain in the treated area\n— Difficulty breathing or chest pain`
    },
    {
      title: "Understanding Embolization",
      icon: "🔬",
      body: `Embolization intentionally blocks blood vessels to treat a wide range of conditions — without surgery.\n\nHow it works:\nA small catheter is guided through your blood vessels — usually entering through the wrist or groin — using real-time X-ray. Once positioned, tiny blocking agents (microspheres, coils, or foam) are released to cut off blood supply to the target tissue.\n\nCommon uses:\n• Uterine fibroids (UFE): Shrinks fibroids by blocking feeding arteries\n• Prostatic enlargement (PAE): Reduces prostate size by limiting blood supply\n• Liver tumours (TACE): Delivers chemotherapy directly + blocks blood supply\n• Pelvic congestion: Blocks varicose pelvic veins causing chronic pain\n\nAfter embolization, the target tissue gradually shrinks over weeks to months. Mild post-procedure symptoms (low-grade fever, nausea, aching) are normal for 2–5 days.`
    }
  ],
  ar: [
    {
      title: "ما هي الأشعة التداخلية؟",
      icon: "🩻",
      body: `الأشعة التداخلية هي تخصص طبي دقيق يستخدم تقنيات التصوير — الأشعة السينية والموجات فوق الصوتية والـ CT والـ MRI — لتوجيه إجراءات علاجية دقيقة داخل الجسم دون جراحة مفتوحة.\n\nبدلاً من شق جراحي كبير، تتطلب إجراءات الأشعة التداخلية ثقباً صغيراً في الجلد لا يتجاوز 2-3 ملم، يتم من خلاله توجيه قسطرة رفيعة عبر الأوعية الدموية إلى منطقة الهدف لتقديم العلاج مباشرةً.\n\n✅ لا شقوق كبيرة — ثقب جلدي 2-3 ملم فقط\n✅ معظم الإجراءات تُنجز في يوم واحد أو مع ليلة واحدة بالمستشفى\n✅ تخدير موضعي أو تخدير خفيف — لا تخدير كلي في معظم الحالات\n✅ العودة للنشاط خلال أيام وليس أسابيع\n✅ مخاطر أقل بكثير مقارنة بالجراحة المفتوحة`
    },
    {
      title: "التحضير للإجراء الطبي",
      icon: "📋",
      body: `• الصيام 4-6 ساعات قبل الإجراء إذا كان مخططاً للتخدير\n• أخبر طبيبك عن جميع الأدوية التي تتناولها — خاصة مُرققات الدم (أسبرين، وارفارين، كلوبيدوغريل)\n• احضر جميع الصور الطبية السابقة: CT أو MRI أو الموجات فوق الصوتية على قرص أو تقرير مطبوع\n• رتّب لشخص يصطحبك إلى المنزل بعد الإجراء\n• ارتدِ ملابس مريحة وفضفاضة يوم الإجراء\n• اشرب كميات وافرة من الماء اليوم السابق للإجراء (ما لم يُخبرك طبيبك بخلاف ذلك)\n• مرضى السكري: استشر طبيبك حول تعديل جرعة الأنسولين أو الأدوية الصباحية`
    },
    {
      title: "رعاية ما بعد الإجراء والتعافي",
      icon: "🏥",
      body: `معظم إجراءات الأشعة التداخلية تسمح بالخروج في نفس اليوم أو بعد ليلة واحدة.\n\nأول 24-48 ساعة:\n• استرح في المنزل وتجنب قيادة السيارة أو تشغيل الآلات\n• أبقِ موقع الثقب نظيفاً وجافاً\n• الكدمات الخفيفة في موقع الدخول أمر طبيعي\n• تناول مسكنات الألم الموصوفة حسب التعليمات\n\nالأسبوع الأول:\n• تجنب رفع الأثقال (أكثر من 5 كغم) أو التمارين الشاقة\n• اشرب كميات وافرة من السوائل للمساعدة على طرد صبغة الكونتراست\n\n⚠️ اتصل بالعيادة فوراً في حالة:\n— ارتفاع الحرارة فوق 38°م\n— نزيف مفرط في موقع الثقب\n— ألم شديد مفاجئ في منطقة العلاج\n— صعوبة في التنفس أو ألم في الصدر`
    },
    {
      title: "دليلك لفهم القسطرة العلاجية (الانصمام)",
      icon: "🔬",
      body: `تقنية الانصمام الوعائي تعمل على إغلاق الأوعية الدموية المغذية للأنسجة المريضة — دون جراحة.\n\nكيف تعمل؟\nيتم توجيه قسطرة صغيرة عبر الأوعية الدموية — عادةً من الرسغ أو الفخذ — تحت إرشاد الأشعة السينية الفورية. بمجرد وصول القسطرة إلى الوعاء المستهدف، يتم إطلاق مواد صغيرة (كريات دقيقة أو لولبيات أو رغوة) لقطع إمداد الدم عن النسيج المريض.\n\nالاستخدامات الشائعة:\n• الأورام الليفية الرحمية (UFE): تقليص الأورام بقطع شرايينها المغذية\n• تضخم البروستاتا (PAE): تقليص حجم البروستاتا بتحديد إمدادها الدموي\n• أورام الكبد (TACE): توصيل العلاج الكيميائي مباشرةً + قطع الإمداد الدموي\n• احتقان الحوض: إغلاق الدوالي الحوضية المسببة لآلام الحوض المزمنة\n\nبعد القسطرة العلاجية، يتقلص النسيج المستهدف تدريجياً خلال أسابيع إلى أشهر. أعراض خفيفة بعد الإجراء (حرارة منخفضة، غثيان، آلام) طبيعية لمدة 2-5 أيام وتُعالج بالأدوية الموصوفة.`
    }
  ]
};

// ─── FAQ data ────────────────────────────────────────────────────────────────
const faqData = {
  en: [
    { q: "Do I need general anaesthesia for IR procedures?", a: "Most IR procedures require only local anaesthesia with mild sedation. You remain comfortable and drowsy but are not fully unconscious. This makes recovery significantly faster and safer than surgery." },
    { q: "How long does a procedure typically take?", a: "Most procedures take between 30 minutes to 2 hours depending on complexity. Plan to be at the facility for 4–6 hours total including preparation and recovery time." },
    { q: "Will I feel pain during the procedure?", a: "You will receive local anaesthetic at the puncture site and sedation to keep you comfortable. Most patients report pressure rather than pain. Post-procedure soreness is normal and managed with prescribed medication." },
    { q: "When can I return to work?", a: "For desk-based work, most patients return within 3–5 days. For physically demanding jobs, 1–2 weeks is typically recommended. Your specific timeline will be discussed at your consultation." },
    { q: "Is a GP referral required to book a consultation?", a: "A referral is helpful but not mandatory. We work directly with patients and also accept physician referrals through our Doctor Portal." },
    { q: "How do I share my imaging before the appointment?", a: "Bring any relevant scans (CT, MRI, ultrasound) on a CD/USB or printed report. You can also send digital images via WhatsApp prior to your appointment." }
  ],
  ar: [
    { q: "هل أحتاج تخديراً كلياً لإجراءات الأشعة التداخلية؟", a: "معظم إجراءات الأشعة التداخلية تتطلب فقط تخديراً موضعياً مع تهدئة خفيفة. تبقى مرتاحاً وفي حالة وعي جزئي دون فقدان الوعي الكامل، مما يجعل التعافي أسرع وأكثر أماناً." },
    { q: "كم يستغرق الإجراء عادةً؟", a: "تستغرق معظم الإجراءات من 30 دقيقة إلى ساعتين حسب التعقيد. خطط للمكوث في المنشأة الطبية من 4 إلى 6 ساعات إجمالاً شاملاً وقت التحضير والتعافي." },
    { q: "هل سأشعر بألم خلال الإجراء؟", a: "ستتلقى تخديراً موضعياً في موقع الثقب وتهدئة لراحتك. معظم المرضى يشعرون بضغط خفيف وليس ألماً. الإحساس بالتعب بعد الإجراء أمر طبيعي ويُعالج بالأدوية الموصوفة." },
    { q: "متى يمكنني العودة للعمل؟", a: "للأعمال المكتبية، يعود معظم المرضى خلال 3-5 أيام. للأعمال الشاقة جسدياً، يُنصح عادةً بـ1-2 أسبوع. سيتم مناقشة جدولك الزمني بالتفصيل في الاستشارة." },
    { q: "هل أحتاج تحويلاً من طبيب آخر للحجز؟", a: "التحويل مفيد لكنه ليس إلزامياً. نتعامل مباشرةً مع المرضى ونقبل أيضاً إحالات الأطباء عبر بوابة الأطباء." },
    { q: "كيف أشارك صور أشعتي قبل الموعد؟", a: "احضر صورك السابقة (CT أو MRI أو الموجات فوق الصوتية) على قرص أو USB أو تقرير مطبوع. يمكنك أيضاً إرسال الصور الرقمية عبر واتساب قبل موعدك." }
  ]
};

// ─── Video library ────────────────────────────────────────────────────────────
const videoLibrary = {
  en: [
    { title: "What is PAE? Prostate Artery Embolization Explained", tag: "Coming Soon", color: "blue" },
    { title: "UFE: Treating Fibroids Without Surgery", tag: "Coming Soon", color: "rose" },
    { title: "TACE for Liver Tumours — Step by Step", tag: "Coming Soon", color: "amber" },
    { title: "Understanding Embolization: The Complete Guide", tag: "Coming Soon", color: "purple" }
  ],
  ar: [
    { title: "قسطرة شريان البروستاتا — شرح مفصل بالعامية المصرية", tag: "قريباً", color: "blue" },
    { title: "UFE: علاج الأورام الليفية بدون جراحة", tag: "قريباً", color: "rose" },
    { title: "TACE لأورام الكبد — خطوة بخطوة", tag: "قريباً", color: "amber" },
    { title: "فهم القسطرة العلاجية — الدليل الشامل", tag: "قريباً", color: "purple" }
  ]
};

export default function PatientPortal() {
  const { language } = useLanguage();
  const [openEdu, setOpenEdu] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (form.current) {
      emailjs.sendForm('service_82kogp8', 'template_e3cczed', form.current, 'Yje4qmAxbM0waypgs')
        .then(() => {
          setSubmitted(true);
          setIsSubmitting(false);
          form.current?.reset();
          setTimeout(() => setSubmitted(false), 5000);
        }, () => {
          alert(language === 'en' ? "Something went wrong. Please try again." : "حدث خطأ. يرجى المحاولة مرة أخرى.");
          setIsSubmitting(false);
        });
    }
  };

  const content = {
    en: {
      title: "Patient Portal",
      subtitle: "Your trusted hub for IR education, direct support, and appointment booking.",
      waTitle: "Direct WhatsApp Support",
      waDesc: "Quick question, share imaging reports, or book an appointment? Message the clinic directly.",
      waBtn: "Chat on WhatsApp",
      podTitle: "Weekly IR Podcast",
      podDesc: "Dr. El Ghobashy answers your questions live every week. Submit yours below.",
      podInput: "Type your question here...",
      podBtn: isSubmitting ? "Sending..." : "Submit for Podcast",
      podSuccess: "Your question has been submitted!",
      eduTitle: "Patient Education Centre",
      eduSub: "Evidence-based articles to help you understand your procedure.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Everything you need to know before your appointment.",
      videoTitle: "Animated Video Library",
      videoSub: "Procedure explanations in Egyptian Arabic — narrated by AI, animated for clarity.",
      socialTitle: "Follow for Weekly Content",
      socialSub: "Educational reels, procedure animations, and podcast episodes — in Arabic.",
      socialYT: "YouTube",
      socialIG: "Instagram",
      socialFB: "Facebook",
      socialTK: "TikTok"
    },
    ar: {
      title: "بوابة المرضى",
      subtitle: "مركزك الموثوق للتثقيف الطبي، والدعم المباشر، وحجز المواعيد.",
      waTitle: "دعم مباشر عبر واتساب",
      waDesc: "استفسار سريع، مشاركة تقارير الأشعة، أو حجز موعد؟ تواصل مع العيادة مباشرةً.",
      waBtn: "تحدث معنا عبر واتساب",
      podTitle: "البودكاست الأسبوعي",
      podDesc: "د. الغباشي يجيب على أسئلتك أسبوعياً. أرسل سؤالك ليُجاب عليه.",
      podInput: "اكتب سؤالك هنا...",
      podBtn: isSubmitting ? "جاري الإرسال..." : "إرسال للبودكاست",
      podSuccess: "تم إرسال سؤالك بنجاح!",
      eduTitle: "مركز التثقيف الطبي",
      eduSub: "مقالات طبية موثوقة لمساعدتك على فهم إجراءاتك.",
      faqTitle: "الأسئلة الشائعة",
      faqSub: "كل ما تحتاج معرفته قبل موعدك.",
      videoTitle: "مكتبة الفيديوهات التوضيحية",
      videoSub: "شرح الإجراءات بالعامية المصرية — صوت ذكاء اصطناعي وانيميشن توضيحي.",
      socialTitle: "تابعنا للمحتوى الأسبوعي",
      socialSub: "ريلز تعليمية، أنيميشن للإجراءات، وحلقات بودكاست — بالعربية.",
      socialYT: "يوتيوب",
      socialIG: "إنستغرام",
      socialFB: "فيسبوك",
      socialTK: "تيك توك"
    }
  };

  const t = content[language];
  const edu = eduData[language];
  const faq = faqData[language];
  const videos = videoLibrary[language];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-8 text-center md:text-start">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{t.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl">{t.subtitle}</p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Left sidebar ── */}
          <div className="lg:col-span-1 space-y-8">

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-lg text-start">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 text-2xl">💬</div>
              <h3 className="text-2xl font-bold mb-3">{t.waTitle}</h3>
              <p className="text-green-50 text-sm mb-8 leading-relaxed">{t.waDesc}</p>
              <a href="https://wa.me/201555783179" target="_blank" rel="noopener noreferrer"
                className="block text-center w-full bg-white text-green-600 font-bold py-3 rounded-xl hover:bg-green-50 transition shadow-md">
                {t.waBtn}
              </a>
            </div>

            {/* Podcast form */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-start">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6 text-2xl">🎙️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.podTitle}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{t.podDesc}</p>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <textarea name="podcast_question" rows={4} required
                  className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none resize-none bg-slate-50"
                  placeholder={t.podInput} />
                <button type="submit" disabled={isSubmitting}
                  className={`w-full text-white font-bold py-3 rounded-xl transition shadow-md ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-purple-600'}`}>
                  {t.podBtn}
                </button>
                {submitted && (
                  <div className="p-3 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-medium text-center animate-pulse">
                    {t.podSuccess}
                  </div>
                )}
              </form>
            </div>

            {/* Social media */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white text-start">
              <h3 className="text-xl font-bold mb-2">{t.socialTitle}</h3>
              <p className="text-slate-400 text-sm mb-6">{t.socialSub}</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: t.socialYT, icon: "▶", bg: "bg-red-600 hover:bg-red-700" },
                  { label: t.socialIG, icon: "◈", bg: "bg-pink-600 hover:bg-pink-700" },
                  { label: t.socialFB, icon: "f", bg: "bg-blue-600 hover:bg-blue-700" },
                  { label: t.socialTK, icon: "♪", bg: "bg-slate-700 hover:bg-slate-600" }
                ].map((s, i) => (
                  <button key={i} className={`${s.bg} text-white text-sm font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition`}>
                    <span>{s.icon}</span> {s.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right main area ── */}
          <div className="lg:col-span-2 space-y-10">

            {/* Education accordion */}
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{t.eduTitle}</h3>
              <p className="text-slate-500 text-sm mb-6">{t.eduSub}</p>
              <div className="space-y-3">
                {edu.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 transition">
                    <button
                      className="w-full flex items-center justify-between p-5 text-start"
                      onClick={() => setOpenEdu(openEdu === i ? null : i)}
                    >
                      <span className="flex items-center gap-3 font-bold text-slate-800">
                        <span className="text-xl">{item.icon}</span>
                        {item.title}
                      </span>
                      <span className={`text-slate-400 transition-transform duration-200 text-lg ${openEdu === i ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {openEdu === i && (
                      <div className="px-5 pb-6 text-sm text-slate-600 leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
                        {item.body}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Video library */}
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{t.videoTitle}</h3>
              <p className="text-slate-500 text-sm mb-6">{t.videoSub}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {videos.map((v, i) => (
                  <div key={i} className="bg-slate-900 rounded-2xl overflow-hidden group cursor-pointer hover:ring-2 hover:ring-blue-500 transition">
                    <div className="h-28 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <svg className="w-6 h-6 text-white ltr:ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                      <span className={`absolute top-3 ltr:right-3 rtl:left-3 text-xs font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white`}>{v.tag}</span>
                    </div>
                    <div className="p-4">
                      <p className="text-white text-sm font-semibold leading-snug">{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ accordion */}
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{t.faqTitle}</h3>
              <p className="text-slate-500 text-sm mb-6">{t.faqSub}</p>
              <div className="space-y-3">
                {faq.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 transition">
                    <button
                      className="w-full flex items-center justify-between p-5 text-start"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-semibold text-slate-800 text-sm ltr:pr-4 rtl:pl-4">{item.q}</span>
                      <span className={`text-slate-400 transition-transform duration-200 text-lg flex-shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
