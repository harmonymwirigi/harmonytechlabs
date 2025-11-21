import { Github, Linkedin, Twitter, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/10 rounded-xl blur-lg"></div>
                <div className="relative bg-slate-900/50 p-3 rounded-xl border border-slate-800/50">
                  <img 
                    src="/mymainlogo.png" 
                    alt="HarmonyTechLabs Logo" 
                    className="h-16 w-auto object-contain brightness-110"
                    style={{ filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.2))' }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl tracking-tight leading-tight">HarmonyTech</span>
                <span className="text-gold font-bold text-2xl leading-tight">Labs</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative software solutions. 
              We build the technology that powers your success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+254713028200" className="text-slate-400 hover:text-gold transition-colors block">
                    +254 713 028 200
                  </a>
                  <a href="https://wa.me/254713028200" target="_blank" rel="noopener noreferrer" className="text-gold text-xs hover:underline mt-1 block">
                    Also on WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-slate-400">Nyeri, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:harmonymwithalii@gmail.com" className="text-slate-400 hover:text-gold transition-colors">
                  harmonymwithalii@gmail.com
                </a>
              </div>
            </div>

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
              <li className="text-slate-400">Website Development</li>
              <li className="text-slate-400">Automation</li>
              <li className="text-slate-400">Trading Bots</li>
              <li className="text-slate-400">AI Integration</li>
              <li className="text-slate-400">Payment Solutions</li>
              <li className="text-slate-400">Web Applications</li>
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