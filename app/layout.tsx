import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageContext";
import WhatsAppWidget from "../components/WhatsAppWidget";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const cairo = Cairo({ 
  variable: "--font-cairo", 
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Dr. El Ghobashy | Interventional Radiology",
  description: "Consultant Radiologist and Associate Professor",
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