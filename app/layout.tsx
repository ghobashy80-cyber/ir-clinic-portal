import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageContext";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const cairo = Cairo({ 
  variable: "--font-cairo", 
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Dr. Mohamed El Ghobashy | Interventional Radiology | Cairo University",
  description: "Dr. Mohamed El Ghobashy – Associate Professor of Radiology at Cairo University & Clinical Director of Radiology at Andalusia Group. Expert in PAE, UFE, TACE and minimally invasive procedures. د. محمد الغباشي – أستاذ مساعد الأشعة جامعة القاهرة، خبير الأشعة التداخلية.",
  keywords: [
    "Dr Mohamed El Ghobashy",
    "د محمد الغباشي",
    "interventional radiology cairo",
    "الأشعة التداخلية",
    "prostate artery embolization egypt",
    "PAE Egypt",
    "UFE Egypt",
    "TACE Egypt",
    "uterine fibroid embolization cairo",
    "Cairo University radiology",
    "Andalusia Group radiology",
    "minimally invasive procedures egypt",
    "قسطرة البروستاتا",
    "قسطرة الأورام الليفية",
  ],
  authors: [{ name: "Dr. Mohamed El Ghobashy" }],
  creator: "Dr. Mohamed El Ghobashy",
  metadataBase: new URL("https://drelghobashy.com"),
  alternates: {
    canonical: "https://drelghobashy.com",
  },
  openGraph: {
    title: "Dr. Mohamed El Ghobashy | Interventional Radiology",
    description: "Associate Professor of Radiology at Cairo University. Expert in minimally invasive IR procedures — PAE, UFE, TACE, Vascular Access & Biopsies.",
    url: "https://drelghobashy.com",
    siteName: "Dr. El Ghobashy – Interventional Radiology",
    images: [{ url: "/dr-profile.jpg", width: 800, height: 800, alt: "Dr. Mohamed El Ghobashy" }],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Mohamed El Ghobashy | Interventional Radiology",
    description: "Associate Professor of Radiology, Cairo University. Minimally invasive IR procedures.",
    images: ["/dr-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "cAYHxeTCGQ_YHux5mLnU8kYTj-YLxQVjJLwKx3WXxjw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // We moved the comment out here! The HTML below is now perfectly clean.
  return (
    <html suppressHydrationWarning>
      <body 
        suppressHydrationWarning 
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} font-sans antialiased bg-slate-50 flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Mohamed El Ghobashy",
              alternateName: "د. محمد الغباشي",
              url: "https://drelghobashy.com",
              image: "https://drelghobashy.com/dr-profile.jpg",
              jobTitle: "Associate Professor of Radiology & Interventional Radiologist",
              worksFor: [
                { "@type": "Organization", name: "Cairo University", url: "http://scholar.cu.edu.eg/?q=mghobashy/" },
                { "@type": "Organization", name: "Andalusia Group", telephone: "16781" },
              ],
              telephone: "+201555783179",
              sameAs: [
                "https://www.linkedin.com/in/mohamed-el-ghobashy-435441b",
                "http://scholar.cu.edu.eg/?q=mghobashy/",
              ],
              medicalSpecialty: "Interventional Radiology",
              description:
                "Expert in minimally invasive interventional radiology procedures including PAE, UFE, TACE, pelvic congestion syndrome treatment, vascular access, and image-guided biopsies.",
            }),
          }}
        />
        {/* Google Analytics GA4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5KEMYE1FFL" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5KEMYE1FFL');
        `}</Script>

        <LanguageProvider>
          <Navbar />
          
          <main className="flex-grow text-slate-900">
            {children}
          </main>

          <Footer />
          <WhatsAppWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}