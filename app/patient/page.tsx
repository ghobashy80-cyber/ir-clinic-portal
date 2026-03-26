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
type VideoCategory = "general" | "pae" | "ufe" | "tace" | "other";
interface VideoItem { title: string; ep: string; color: string; cat: VideoCategory; }

const videoLibrary: Record<string, VideoItem[]> = {
  en: [
    { title: "What is Interventional Radiology?",              ep: "01", color: "blue",   cat: "general" },
    { title: "IR vs Surgery — The Key Differences",            ep: "02", color: "blue",   cat: "general" },
    { title: "Preparing for Your IR Procedure",                ep: "03", color: "green",  cat: "general" },
    { title: "Post-Procedure Care & Recovery Guide",           ep: "04", color: "green",  cat: "general" },
    { title: "What is PAE? Prostate Artery Embolization",      ep: "05", color: "blue",   cat: "pae"     },
    { title: "Am I a Candidate for PAE?",                      ep: "06", color: "blue",   cat: "pae"     },
    { title: "UFE: Treating Fibroids Without Surgery",         ep: "07", color: "rose",   cat: "ufe"     },
    { title: "Am I a Candidate for UFE?",                      ep: "08", color: "rose",   cat: "ufe"     },
    { title: "TACE for Liver Tumours — Step by Step",          ep: "09", color: "amber",  cat: "tace"    },
    { title: "Pelvic Congestion Syndrome Explained",           ep: "10", color: "purple", cat: "other"   },
  ],
  ar: [
    { title: "ما هي الأشعة التداخلية؟ مقدمة شاملة",              ep: "01", color: "blue",   cat: "general" },
    { title: "الأشعة التداخلية مقابل الجراحة — الفروق الأساسية", ep: "02", color: "blue",   cat: "general" },
    { title: "كيف تستعد لإجراء الأشعة التداخلية؟",               ep: "03", color: "green",  cat: "general" },
    { title: "رعاية ما بعد الإجراء — دليل التعافي",              ep: "04", color: "green",  cat: "general" },
    { title: "قسطرة شريان البروستاتا — شرح مفصل",                ep: "05", color: "blue",   cat: "pae"     },
    { title: "هل أنا مرشح لقسطرة البروستاتا؟",                   ep: "06", color: "blue",   cat: "pae"     },
    { title: "UFE: علاج الأورام الليفية بدون جراحة",             ep: "07", color: "rose",   cat: "ufe"     },
    { title: "هل أنا مرشحة لقسطرة الأورام الليفية؟",             ep: "08", color: "rose",   cat: "ufe"     },
    { title: "TACE لأورام الكبد — خطوة بخطوة",                   ep: "09", color: "amber",  cat: "tace"    },
    { title: "احتقان الحوض — ما هو وكيف نعالجه؟",                ep: "10", color: "purple", cat: "other"   },
  ]
};

// ─── Podcast episodes ─────────────────────────────────────────────────────────
const podcastEpisodes = {
  en: [
    { ep: "01", title: "Interventional Radiology — What Is It & Why Is It the Future of Medicine?", date: "Coming Sunday", status: "upcoming" },
    { ep: "02", title: "Prostate Artery Embolization — The Alternative to Surgery", date: "Weekly Sunday 8AM", status: "soon" },
    { ep: "03", title: "Uterine Fibroids — Do You Really Need Surgery?", date: "Weekly Sunday 8AM", status: "soon" },
    { ep: "04", title: "Liver Tumours & TACE — Delivering Chemotherapy Directly", date: "Weekly Sunday 8AM", status: "soon" },
  ],
  ar: [
    { ep: "01", title: "الأشعة التداخلية — إيه هي وليه هي مستقبل الطب؟", date: "الأحد القادم صباحاً", status: "upcoming" },
    { ep: "02", title: "قسطرة البروستاتا — البديل الحقيقي للجراحة", date: "كل أحد الساعة 8 صباحاً", status: "soon" },
    { ep: "03", title: "الأورام الليفية — هل تحتاجين فعلاً لجراحة؟", date: "كل أحد الساعة 8 صباحاً", status: "soon" },
    { ep: "04", title: "أورام الكبد والـ TACE — توصيل العلاج الكيميائي مباشرةً", date: "كل أحد الساعة 8 صباحاً", status: "soon" },
  ]
};

export default function PatientPortal() {
  const { language } = useLanguage();
  const [openEdu, setOpenEdu] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [videoSearch, setVideoSearch] = useState("");
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
      podDesc: "Dr. El Ghobashy answers your questions every Sunday at 8AM. Submit yours below.",
      podInput: "Type your question here...",
      podBtn: isSubmitting ? "Sending..." : "Submit for Podcast",
      podSuccess: "Your question has been submitted!",
      podEpisodesTitle: "Upcoming Episodes",
      podSchedule: "Every Sunday 8:00 AM Cairo Time",
      podUpcoming: "Next Episode",
      podSoon: "Coming Soon",
      eduTitle: "Patient Education Centre",
      eduSub: "Evidence-based articles to help you understand your procedure.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Everything you need to know before your appointment.",
      videoTitle: "Video Library — 10 Episodes",
      videoSub: "Procedure explanations in Egyptian Arabic — narrated by AI, animated for clarity.",
      videoYTBtn: "Subscribe on YouTube",
      videoSearchPlaceholder: "Search videos...",
      videoBrowseAll: "Browse all 10 episodes",
      videoShowLess: "Show less",
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
      podDesc: "د. الغباشي يجيب على أسئلتك كل أحد الساعة 8 صباحاً. أرسل سؤالك ليُجاب عليه.",
      podInput: "اكتب سؤالك هنا...",
      podBtn: isSubmitting ? "جاري الإرسال..." : "إرسال للبودكاست",
      podSuccess: "تم إرسال سؤالك بنجاح!",
      podEpisodesTitle: "الحلقات القادمة",
      podSchedule: "كل أحد الساعة 8:00 صباحاً بتوقيت القاهرة",
      podUpcoming: "الحلقة القادمة",
      podSoon: "قريباً",
      eduTitle: "مركز التثقيف الطبي",
      eduSub: "مقالات طبية موثوقة لمساعدتك على فهم إجراءاتك.",
      faqTitle: "الأسئلة الشائعة",
      faqSub: "كل ما تحتاج معرفته قبل موعدك.",
      videoTitle: "مكتبة الفيديوهات — 10 حلقات",
      videoSub: "شرح الإجراءات بالعامية المصرية — صوت ذكاء اصطناعي وانيميشن توضيحي.",
      videoYTBtn: "اشترك في يوتيوب",
      videoSearchPlaceholder: "ابحث عن فيديو...",
      videoBrowseAll: "تصفح جميع الحلقات الـ 10",
      videoShowLess: "عرض أقل",
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
  const episodes = podcastEpisodes[language];

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

            {/* Podcast Episodes */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-start">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">📅</span>
                <h3 className="text-lg font-bold text-slate-900">{t.podEpisodesTitle}</h3>
              </div>
              <p className="text-xs text-blue-600 font-semibold mb-4">🕗 {t.podSchedule}</p>
              <div className="space-y-3">
                {episodes.map((ep, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${i === 0 ? 'bg-blue-50 border border-blue-200' : 'bg-slate-50'}`}>
                    <span className={`text-xs font-black px-2 py-1 rounded-lg flex-shrink-0 ${i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                      {ep.ep}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-800 leading-snug">{ep.title}</p>
                      <p className={`text-xs mt-0.5 font-medium ${i === 0 ? 'text-blue-600' : 'text-slate-400'}`}>
                        {i === 0 ? `⭐ ${t.podUpcoming}` : t.podSoon}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social media */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white text-start">
              <h3 className="text-xl font-bold mb-2">{t.socialTitle}</h3>
              <p className="text-slate-400 text-sm mb-6">{t.socialSub}</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: t.socialYT, icon: "▶", bg: "bg-red-600 hover:bg-red-700", href: "https://www.youtube.com/@drelghobashy?sub_confirmation=1" },
                  { label: t.socialIG, icon: "◈", bg: "bg-pink-600 hover:bg-pink-700", href: "https://www.instagram.com/drelghobashy" },
                  { label: t.socialFB, icon: "f", bg: "bg-blue-600 hover:bg-blue-700", href: "https://www.facebook.com/drelghobashy" },
                  { label: t.socialTK, icon: "♪", bg: "bg-slate-700 hover:bg-slate-600", href: "https://www.tiktok.com/@drelghobashy" }
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className={`${s.bg} text-white text-sm font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition`}>
                    <span>{s.icon}</span> {s.label}
                  </a>
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
              {/* Header */}
              <div className="flex items-center justify-between mb-1 flex-wrap gap-3">
                <h3 className="text-2xl font-extrabold text-slate-900">{t.videoTitle}</h3>
                <a href="https://www.youtube.com/@drelghobashy?sub_confirmation=1" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                  {t.videoYTBtn}
                </a>
              </div>
              <p className="text-slate-500 text-sm mb-5">{t.videoSub}</p>

              {/* Shared helpers */}
              {(() => {
                const thumbGrad: Record<string, string> = {
                  blue:"from-blue-700 via-blue-800 to-indigo-900", rose:"from-rose-600 via-rose-700 to-pink-900",
                  amber:"from-amber-500 via-amber-700 to-orange-900", purple:"from-purple-600 via-purple-800 to-violet-900",
                  cyan:"from-cyan-600 via-cyan-800 to-sky-900", indigo:"from-indigo-600 via-indigo-800 to-slate-900",
                  green:"from-emerald-600 via-green-700 to-teal-900", slate:"from-slate-600 via-slate-700 to-slate-900",
                };
                const dotBg: Record<string, string> = {
                  blue:"bg-blue-500", rose:"bg-rose-500", amber:"bg-amber-500",
                  purple:"bg-purple-500", cyan:"bg-cyan-500", indigo:"bg-indigo-500",
                  green:"bg-emerald-500", slate:"bg-slate-400",
                };
                const catLabel: Record<VideoCategory,{en:string;ar:string;color:string}> = {
                  general:{en:"General IR",ar:"عام",              color:"bg-blue-100 text-blue-700"},
                  pae:    {en:"PAE",       ar:"البروستاتا",       color:"bg-sky-100 text-sky-700"},
                  ufe:    {en:"UFE",       ar:"الأورام الليفية",  color:"bg-rose-100 text-rose-700"},
                  tace:   {en:"TACE",      ar:"الكبد",            color:"bg-amber-100 text-amber-700"},
                  other:  {en:"Other",     ar:"إجراءات أخرى",    color:"bg-purple-100 text-purple-700"},
                };

                /* ── Top 5 thumbnail cards ── */
                const top5 = videos.slice(0, 5);

                /* ── Filtered search list ── */
                const searchResults = videos.filter(v =>
                  v.title.toLowerCase().includes(videoSearch.toLowerCase())
                );

                return (
                  <>
                    {/* Top 5 cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                      {top5.map((v, i) => (
                        <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                          <div className={`relative aspect-video bg-gradient-to-br ${thumbGrad[v.color]} flex items-center justify-center`}>
                            <span className="absolute top-1.5 ltr:left-1.5 rtl:right-1.5 text-[9px] font-black bg-black/40 text-white px-1 py-0.5 rounded backdrop-blur-sm">EP {v.ep}</span>
                            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-all">
                              <svg className="w-4 h-4 text-white ltr:ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                            <span className="absolute bottom-1.5 ltr:right-1.5 rtl:left-1.5 text-[9px] font-bold bg-black/50 text-white px-1.5 py-0.5 rounded-full">
                              {language === 'en' ? 'Soon' : 'قريباً'}
                            </span>
                          </div>
                          <div className="p-2">
                            <p className="text-slate-800 text-[11px] font-semibold leading-snug line-clamp-2">{v.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Browse all toggle */}
                    <button onClick={() => { setShowAllVideos(!showAllVideos); setVideoSearch(""); }}
                      className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition text-sm font-semibold text-slate-700">
                      <span>{showAllVideos ? t.videoShowLess : t.videoBrowseAll}</span>
                      <span className={`transition-transform duration-200 ${showAllVideos ? 'rotate-180' : ''}`}>▾</span>
                    </button>

                    {/* Expanded searchable list */}
                    {showAllVideos && (
                      <div className="mt-3 space-y-2">
                        {/* Search input */}
                        <div className="relative">
                          <svg className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                          </svg>
                          <input type="text" value={videoSearch} onChange={e => setVideoSearch(e.target.value)}
                            placeholder={t.videoSearchPlaceholder}
                            className="w-full ltr:pl-9 rtl:pr-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none"/>
                        </div>

                        {/* Results list */}
                        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100">
                          {searchResults.length === 0 ? (
                            <p className="text-center text-slate-400 text-sm py-6">
                              {language === 'en' ? 'No videos found' : 'لا توجد نتائج'}
                            </p>
                          ) : searchResults.map((v, i) => (
                            <div key={i} className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 transition cursor-pointer">
                              <div className={`w-1 h-8 rounded-full flex-shrink-0 ${dotBg[v.color]}`}/>
                              <div className={`w-10 h-7 rounded-lg bg-gradient-to-br ${thumbGrad[v.color]} flex items-center justify-center flex-shrink-0`}>
                                <svg className="w-3 h-3 text-white/80 ltr:ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-slate-800 text-xs font-semibold line-clamp-1">{v.title}</p>
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${catLabel[v.cat]?.color}`}>
                                  {catLabel[v.cat]?.[language === 'en' ? 'en' : 'ar']}
                                </span>
                              </div>
                              <span className="text-[10px] font-black text-slate-300">{v.ep}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}
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
