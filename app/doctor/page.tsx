"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function DoctorPortal() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // PASTE YOUR 3 EMAILJS KEYS HERE:
    const serviceID = 'service_82kogp8';
    const templateID = 'template_v6zw4sl';
    const publicKey = 'Yje4qmAxbM0waypgs';

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
            setSubmitted(true);
            setIsSubmitting(false);
            form.current?.reset(); // Clears the form
            setTimeout(() => setSubmitted(false), 5000);
        }, (error) => {
            console.log(error.text);
            alert("Something went wrong. Please try again.");
            setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Physician Clinical Hub</h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Secure patient referral portal and clinical reference guide for image-guided interventional procedures.
            </p>
          </div>
          
          <a href="https://wa.me/201555783179" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition shadow-md font-semibold whitespace-nowrap">
            <span className="text-xl">💬</span>
            Urgent Colleague Consult
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">📋</span>
                  Secure Patient Referral
                </h2>
                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  Routed via Rad Flow Pro
                </span>
              </div>
              
              {/* Added ref={form} to connect to EmailJS */}
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Referring Physician Name</label>
                    {/* Added name="ref_name" to match the template */}
                    <input type="text" name="ref_name" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Contact Number / Pager</label>
                    {/* Added name="ref_contact" to match the template */}
                    <input type="tel" name="ref_contact" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Patient Name</label>
                    {/* Added name="patient_name" to match the template */}
                    <input type="text" name="patient_name" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Patient Contact</label>
                    {/* Added name="patient_contact" to match the template */}
                    <input type="tel" name="patient_contact" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Clinical History & Requested Procedure</label>
                  {/* Added name="clinical_history" to match the template */}
                  <textarea name="clinical_history" rows={4} required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="Brief history, relevant lab results, and prior imaging..." />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full text-white font-bold py-4 px-6 rounded-lg transition duration-300 ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-blue-700'}`}
                >
                  {isSubmitting ? 'Transmitting Securely...' : 'Submit Secure Referral'}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-medium text-center animate-pulse">
                    Referral successfully submitted. Our clinical team will contact the patient shortly.
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Clinical Resources</h2>
              <p className="text-slate-400 text-sm mb-6">Deep research of disease pathology and IR technique.</p>
              
              <ul className="space-y-4">
                <li className="group cursor-pointer">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3 group-hover:border-blue-400 transition">
                    <span className="font-semibold text-slate-200 group-hover:text-blue-400">Prostatic Artery Embolization (PAE)</span>
                    <span className="text-slate-500 group-hover:text-blue-400">→</span>
                  </div>
                </li>
                <li className="group cursor-pointer">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3 group-hover:border-blue-400 transition">
                    <span className="font-semibold text-slate-200 group-hover:text-blue-400">Uterine Fibroid Embolization (UFE)</span>
                    <span className="text-slate-500 group-hover:text-blue-400">→</span>
                  </div>
                </li>
                <li className="group cursor-pointer">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3 group-hover:border-blue-400 transition">
                    <span className="font-semibold text-slate-200 group-hover:text-blue-400">Pelvic Congestion Syndrome (PCS) Embolization</span>
                    <span className="text-slate-500 group-hover:text-blue-400">→</span>
                  </div>
                </li>
                <li className="group cursor-pointer">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3 group-hover:border-blue-400 transition">
                    <span className="font-semibold text-slate-200 group-hover:text-blue-400">Hepatocellular Carcinoma: TACE & Ablation</span>
                    <span className="text-slate-500 group-hover:text-blue-400">→</span>
                  </div>
                </li>
                <li className="group cursor-pointer">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3 group-hover:border-blue-400 transition">
                    <span className="font-semibold text-slate-200 group-hover:text-blue-400">Venous Vascular Access (Port-a-Cath, PICC, Dialysis)</span>
                    <span className="text-slate-500 group-hover:text-blue-400">→</span>
                  </div>
                </li>
                <li className="group cursor-pointer">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-3 group-hover:border-blue-400 transition">
                    <span className="font-semibold text-slate-200 group-hover:text-blue-400">Image-Guided Biopsies & Drainage</span>
                    <span className="text-slate-500 group-hover:text-blue-400">→</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-xs text-slate-400 leading-relaxed">
                  * Note: These resources outline advanced procedural techniques, evidence-based pathology, and reading pattern optimizations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}