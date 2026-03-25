import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Dr. Mohamed El Ghobashy",
  description: "Terms of Service for drelghobashy.com",
};

export default function TermsOfService() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/" className="text-blue-600 text-sm hover:underline">← Back to Home</Link>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-4 mb-2">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: March 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm">By accessing and using <strong>drelghobashy.com</strong>, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Purpose of This Website</h2>
            <p className="text-sm">This website serves as the professional information and patient education portal for Dr. Mohamed El Ghobashy. It provides:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Educational content about Interventional Radiology procedures</li>
              <li>Appointment and consultation enquiry forms</li>
              <li>Physician referral tools</li>
              <li>Contact information for clinic locations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Not a Substitute for Medical Advice</h2>
            <p className="text-sm">The information provided on this website is for <strong>educational purposes only</strong> and does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified healthcare provider with any questions you may have regarding a medical condition.</p>
            <p className="mt-2 text-sm font-semibold text-red-600">In a medical emergency, call your nearest hospital or emergency services immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Use of Forms & Communication</h2>
            <p className="text-sm">Forms on this website (Patient Portal, Doctor Referral) are for enquiry purposes only. Submission of a form does not constitute a confirmed appointment or medical consultation. All appointments must be confirmed directly with the clinic.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Intellectual Property</h2>
            <p className="text-sm">All content on this website — including text, images, medical illustrations, and design — is the property of Dr. Mohamed El Ghobashy and may not be reproduced, distributed, or used without explicit written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. External Links</h2>
            <p className="text-sm">This website may contain links to external websites (LinkedIn, Google Scholar, hospital websites). We are not responsible for the content or privacy practices of those sites.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Limitation of Liability</h2>
            <p className="text-sm">Dr. Mohamed El Ghobashy and the operators of this website are not liable for any damages arising from the use of, or inability to use, this website or its content. Use of this website is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Governing Law</h2>
            <p className="text-sm">These terms are governed by the laws of the Arab Republic of Egypt. Any disputes shall be subject to the jurisdiction of Egyptian courts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact</h2>
            <div className="text-sm space-y-1">
              <p>📧 <a href="mailto:info@drelghobashy.com" className="text-blue-600 hover:underline">info@drelghobashy.com</a></p>
              <p>🌐 <a href="https://drelghobashy.com" className="text-blue-600 hover:underline">drelghobashy.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
