"use client";

import { useState } from "react";

export default function PodcastForm() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      // In the future, we will connect this to a database or email API
      console.log("Patient Question Submitted:", question);
      setSubmitted(true);
      setQuestion("");
      
      // Reset the success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-2xl mx-auto w-full text-left">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Ask Dr. El Ghobashy</h2>
        <p className="text-sm text-slate-600">
          Have a question about a symptom or an interventional procedure? 
          Submit it here, and Dr. El Ghobashy may answer it on the upcoming weekly Arabic AI Podcast.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="patient-question" className="block text-sm font-medium text-slate-700 mb-2">
            Your Question or Concern:
          </label>
          <textarea
            id="patient-question"
            rows={4}
            className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-slate-900 resize-none"
            placeholder="E.g., What is the recovery time like for uterine fibroid embolization?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-800 transition duration-300"
        >
          Submit Question for the Podcast
        </button>
      </form>

      {/* Success Message Animation */}
      {submitted && (
        <div className="mt-4 p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg animate-pulse text-sm font-medium text-center">
          Thank you! Your question has been securely submitted to the clinic.
        </div>
      )}
    </div>
  );
}