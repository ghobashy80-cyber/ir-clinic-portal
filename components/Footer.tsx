import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div>
            <Link href="/" className="font-bold text-xl tracking-wider text-white mb-4 block">
              DR. EL GHOBASHY <span className="text-blue-400">IR</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Advanced Interventional Radiology. Providing minimally invasive precision, rapid recovery, and state-of-the-art care across Cairo.
            </p>
          </div>

          {/* Column 2: Patient & Clinical Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Portals & Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/patient" className="hover:text-blue-400 transition">Patient Portal & AI Podcast</Link></li>
              <li><Link href="/doctor" className="hover:text-blue-400 transition">Physician Clinical Hub</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Radiology Protection Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Primary Locations</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Kasr Al-Ainy Hospital</li>
              <li>Andalusia Group Hospitals</li>
              <li className="pt-2">
                <a href="mailto:clinic@drelghobashy.com" className="hover:text-white transition border-b border-slate-700 pb-1">
                  clinic@drelghobashy.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dr. Mohamed El Ghobashy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}