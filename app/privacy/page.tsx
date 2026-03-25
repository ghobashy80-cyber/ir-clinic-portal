import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Mohamed El Ghobashy",
  description: "Privacy Policy for drelghobashy.com — how we handle your personal and medical information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/" className="text-blue-600 text-sm hover:underline">← Back to Home</Link>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-4 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: March 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who We Are</h2>
            <p>This website (<strong>drelghobashy.com</strong>) is the professional portal of Dr. Mohamed El Ghobashy, Consultant Interventional Radiologist and Associate Professor at Cairo University (Kasr Al-Ainy Hospital) and Clinical Director of Radiology at Andalusia Group Hospitals, Cairo, Egypt.</p>
            <p className="mt-2">Contact: <a href="mailto:info@drelghobashy.com" className="text-blue-600 hover:underline">info@drelghobashy.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following information when you use this website:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Questions submitted via the Patient Portal podcast form (text only)</li>
              <li>Physician referral information submitted via the Doctor Portal form</li>
              <li>Your name and contact details if provided voluntarily</li>
              <li>Standard website analytics data (pages visited, device type, location country)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>To respond to medical enquiries and appointment requests</li>
              <li>To answer podcast questions submitted by patients</li>
              <li>To process physician referrals securely</li>
              <li>To improve the content and usability of this website</li>
            </ul>
            <p className="mt-3 text-sm"><strong>We do not sell, rent, or share your personal data with third parties for marketing purposes.</strong></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Medical Information</h2>
            <p className="text-sm">Any health-related information you share via this website (questions, imaging reports, clinical history) is treated with strict medical confidentiality in accordance with Egyptian medical ethics and data protection standards. This information is used solely to provide medical guidance and is never shared without your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Third-Party Services</h2>
            <p className="text-sm">This website uses the following third-party services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li><strong>EmailJS</strong> — to deliver form submissions to our email inbox securely</li>
              <li><strong>Google Analytics</strong> — for anonymous website usage statistics</li>
              <li><strong>Google Maps</strong> — to display clinic location maps</li>
              <li><strong>Netlify</strong> — for website hosting and deployment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Cookies</h2>
            <p className="text-sm">This website uses minimal cookies required for basic functionality. Analytics cookies are anonymised. We do not use advertising or tracking cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Your Rights</h2>
            <p className="text-sm">You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Request access to any personal data we hold about you</li>
              <li>Request deletion of your data at any time</li>
              <li>Withdraw consent for data use</li>
            </ul>
            <p className="mt-2 text-sm">To exercise these rights, contact: <a href="mailto:info@drelghobashy.com" className="text-blue-600 hover:underline">info@drelghobashy.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Medical Disclaimer</h2>
            <p className="text-sm">The content on this website is for <strong>educational and informational purposes only</strong>. It does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for personal medical guidance. In an emergency, call the nearest hospital or emergency services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Changes to This Policy</h2>
            <p className="text-sm">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Contact</h2>
            <p className="text-sm">For any privacy-related questions or requests:</p>
            <div className="mt-2 text-sm space-y-1">
              <p>📧 <a href="mailto:info@drelghobashy.com" className="text-blue-600 hover:underline">info@drelghobashy.com</a></p>
              <p>📱 <a href="https://wa.me/201555783179" className="text-blue-600 hover:underline">+20 155 578 3179</a></p>
              <p>🌐 <a href="https://drelghobashy.com" className="text-blue-600 hover:underline">drelghobashy.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
