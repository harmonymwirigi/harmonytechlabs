import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-11 h-11 bg-gradient-to-br from-gold to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-gold/20">
                <span className="text-slate-950 font-black text-xl">H</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl tracking-tight">HarmonyTech</span>
                <span className="text-gold font-bold text-xl">Labs</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative software solutions. 
              We build the technology that powers your success.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-gold flex items-center justify-center transition-all hover:-translate-y-1 group"
              >
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-slate-950" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-gold flex items-center justify-center transition-all hover:-translate-y-1 group"
              >
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-slate-950" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-gold flex items-center justify-center transition-all hover:-translate-y-1 group"
              >
                <Github className="w-5 h-5 text-slate-400 group-hover:text-slate-950" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-400 hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-400 hover:text-gold transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-bold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-400">AI Integration</li>
              <li className="text-slate-400">Payment Solutions</li>
              <li className="text-slate-400">Web Applications</li>
              <li className="text-slate-400">SaaS Development</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {currentYear} HarmonyTechLabs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}