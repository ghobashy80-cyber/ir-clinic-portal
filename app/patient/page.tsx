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
      bookTitle: "Book a Consultation",
      bookSub: "Choose the location that suits you.",
      bookKasrTitle: "Kasr Al-Ainy Hospital",
      bookKasrTag: "Academic University Hospital",
      bookKasrDesc: "Cairo University's academic teaching hospital. Contact Dr. El Ghobashy directly via WhatsApp to discuss your case and arrange a consultation.",
      bookKasrBtn: "WhatsApp Dr. El Ghobashy",
      bookAndTitle: "Andalusia Group",
      bookAndTag: "Private Hospital · Maadi",
      bookAndDesc: "Andalusia Group operates its own dedicated booking system. Call their hotline to schedule your appointment directly.",
      bookAndBtn: "Call Hotline 16781",
      eduTitle: "Patient Education Centre",
      eduSub: "Evidence-based articles to help you understand your procedure.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Everything you need to know before your appointment.",
      videoTitle: "Video Library",
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
      bookTitle: "احجز استشارة",
      bookSub: "اختر الموقع المناسب لك.",
      bookKasrTitle: "مستشفى قصر العيني",
      bookKasrTag: "مستشفى جامعي أكاديمي",
      bookKasrDesc: "مستشفى قصر العيني الجامعي التعليمي بجامعة القاهرة. تواصل مع د. الغباشي مباشرةً عبر واتساب لمناقشة حالتك وترتيب الاستشارة.",
      bookKasrBtn: "واتساب د. الغباشي",
      bookAndTitle: "مستشفيات الأندلس",
      bookAndTag: "مستشفى خاص · المعادي",
      bookAndDesc: "تعمل مستشفيات الأندلس بنظام حجز خاص بها. اتصل بالخط الساخن لحجز موعدك مباشرةً.",
      bookAndBtn: "اتصل بـ 16781",
      eduTitle: "مركز التثقيف الطبي",
      eduSub: "مقالات طبية موثوقة لمساعدتك على فهم إجراءاتك.",
      faqTitle: "الأسئلة الشائعة",
      faqSub: "كل ما تحتاج معرفته قبل موعدك.",
      videoTitle: "مكتبة الفيديوهات",
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
          <div className="lg:col-span-1 space-y-6">

            {/* Contact bar — compact WhatsApp + phone */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.waTitle}</p>
              </div>
              <div className="p-4 space-y-2">
                <a href="https://wa.me/201555783179" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.5l5.797-1.522A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.518-5.187-1.418l-.371-.22-3.844 1.009 1.028-3.75-.242-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  {t.waBtn}
                </a>
                <a href="tel:+201555783179" dir="ltr"
                  className="flex items-center gap-3 w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm py-2.5 px-4 rounded-xl transition border border-slate-200">
                  <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +20 155 578 3179
                </a>
              </div>
            </div>

            {/* Podcast card — form + episodes merged */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-base flex-shrink-0">🎙️</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-tight">{t.podTitle}</h3>
                  <p className="text-xs text-blue-600 font-medium">🕗 {t.podSchedule}</p>
                </div>
              </div>

              {/* Upcoming episodes */}
              <div className="divide-y divide-slate-100">
                {episodes.map((ep, i) => (
                  <div key={i} className={`flex items-start gap-3 px-5 py-3 ${i === 0 ? 'bg-blue-50' : ''}`}>
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md flex-shrink-0 mt-0.5 ${i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                      {ep.ep}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-800 leading-snug">{ep.title}</p>
                      <p className={`text-[10px] mt-0.5 font-medium ${i === 0 ? 'text-blue-500' : 'text-slate-400'}`}>
                        {i === 0 ? `⭐ ${t.podUpcoming}` : t.podSoon}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit question form */}
              <div className="px-5 py-4 bg-slate-50 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-3">{t.podDesc}</p>
                <form ref={form} onSubmit={handleSubmit} className="space-y-2">
                  <textarea name="podcast_question" rows={3} required
                    className="w-full p-3 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none resize-none bg-white"
                    placeholder={t.podInput} />
                  <button type="submit" disabled={isSubmitting}
                    className={`w-full text-white font-semibold text-sm py-2.5 rounded-xl transition ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-purple-600'}`}>
                    {t.podBtn}
                  </button>
                  {submitted && (
                    <div className="p-2.5 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs font-medium text-center">
                      {t.podSuccess}
                    </div>
                  )}
                </form>
              </div>

              {/* Social links footer */}
              <div className="px-5 py-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t.socialTitle}</p>
                <div className="grid grid-cols-3 gap-2">
                  <a href="https://www.youtube.com/@drelghobashy?sub_confirmation=1" target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                    <span className="text-[10px] font-bold">{t.socialYT}</span>
                  </a>
                  <a href="https://www.instagram.com/drelghobashy" target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 py-3 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-xl transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                    <span className="text-[10px] font-bold">{t.socialIG}</span>
                  </a>
                  <a href="https://www.tiktok.com/@drelghobashy" target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
                    <span className="text-[10px] font-bold">{t.socialTK}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── Right main area ── */}
          <div className="lg:col-span-2 space-y-10">

            {/* Book a Consultation */}
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{t.bookTitle}</h3>
              <p className="text-slate-500 text-sm mb-5">{t.bookSub}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Kasr Al-Ainy */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-5 py-4">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-blue-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <h4 className="text-white font-bold text-sm">{t.bookKasrTitle}</h4>
                    </div>
                    <span className="text-[10px] font-bold bg-blue-600/60 text-blue-100 px-2 py-0.5 rounded-full">{t.bookKasrTag}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-5">{t.bookKasrDesc}</p>
                    <a href="https://wa.me/201555783179" target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-3 rounded-xl transition">
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.5l5.797-1.522A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.518-5.187-1.418l-.371-.22-3.844 1.009 1.028-3.75-.242-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                      {t.bookKasrBtn}
                    </a>
                  </div>
                </div>

                {/* Andalusia */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-gradient-to-r from-teal-700 to-teal-900 px-5 py-4">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-teal-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <h4 className="text-white font-bold text-sm">{t.bookAndTitle}</h4>
                    </div>
                    <span className="text-[10px] font-bold bg-teal-600/60 text-teal-100 px-2 py-0.5 rounded-full">{t.bookAndTag}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-5">{t.bookAndDesc}</p>
                    <a href="tel:16781"
                      className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm py-3 rounded-xl transition">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      {t.bookAndBtn}
                    </a>
                  </div>
                </div>

              </div>
            </div>

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

            {/* Video library — YouTube channel intro */}
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{t.videoTitle}</h3>
              <p className="text-slate-500 text-sm mb-5">{t.videoSub}</p>

              {/* YouTube channel card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                {/* Channel header banner */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 px-5 py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Channel avatar */}
                    <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 border-2 border-white/20">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">Dr. El Ghobashy IR</p>
                      <p className="text-slate-400 text-xs">@drelghobashy</p>
                    </div>
                  </div>
                  <a href="https://www.youtube.com/@drelghobashy?sub_confirmation=1" target="_blank" rel="noopener noreferrer"
                    className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-full transition">
                    {t.videoYTBtn}
                  </a>
                </div>

                {/* 5 episode cards */}
                {(() => {
                  const thumbGrad: Record<string, string> = {
                    blue:"from-blue-700 via-blue-800 to-indigo-900", rose:"from-rose-600 via-rose-700 to-pink-900",
                    amber:"from-amber-500 via-amber-700 to-orange-900", purple:"from-purple-600 via-purple-800 to-violet-900",
                    green:"from-emerald-600 via-green-700 to-teal-900", slate:"from-slate-600 via-slate-700 to-slate-900",
                  };
                  const top5 = videos.slice(0, 5);
                  return (
                    <div className="divide-y divide-slate-100">
                      {top5.map((v, i) => (
                        <a key={i} href="https://www.youtube.com/@drelghobashy" target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50 transition group">
                          {/* Thumbnail */}
                          <div className={`relative w-24 h-14 rounded-lg bg-gradient-to-br ${thumbGrad[v.color]} flex items-center justify-center flex-shrink-0 overflow-hidden`}>
                            <div className="w-7 h-7 bg-black/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                              <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                            <span className="absolute bottom-1 right-1 text-[9px] font-bold bg-black/60 text-white px-1 rounded">
                              {language === 'en' ? 'Soon' : 'قريباً'}
                            </span>
                          </div>
                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <p className="text-slate-800 text-sm font-semibold leading-snug line-clamp-2 group-hover:text-red-600 transition">{v.title}</p>
                            <p className="text-slate-400 text-xs mt-1">Dr. El Ghobashy IR · EP {v.ep}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  );
                })()}

                {/* Footer CTA */}
                <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 text-center">
                  <a href="https://www.youtube.com/@drelghobashy" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-red-600 hover:text-red-700 font-semibold transition">
                    {language === 'en' ? 'View all episodes on YouTube →' : 'مشاهدة جميع الحلقات على يوتيوب ←'}
                  </a>
                </div>
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
