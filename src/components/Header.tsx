import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-4 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-lg px-2 py-1 -ml-2 transition-all"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-xl blur-xl group-hover:bg-gold/30 transition-all opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-slate-900/50 p-2 rounded-xl border border-slate-800/50 group-hover:border-gold/30 transition-all group-hover:shadow-lg group-hover:shadow-gold/10">
                <img 
                  src="/mymainlogo.png" 
                  alt="HarmonyTechLabs Logo" 
                  className="h-14 w-auto object-contain group-hover:scale-105 transition-all duration-300 brightness-110"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.2))' }}
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight leading-tight">HarmonyTech</span>
                <span className="text-gold font-bold text-xl leading-tight">Labs</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-300 hover:text-white transition-all font-medium px-5 py-2.5 rounded-lg hover:bg-slate-800/60 hover:shadow-md"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-300 hover:text-white transition-all font-medium px-5 py-2.5 rounded-lg hover:bg-slate-800/60 hover:shadow-md"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-all font-medium px-5 py-2.5 rounded-lg hover:bg-slate-800/60 hover:shadow-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-2 bg-gradient-to-r from-gold to-yellow-500 hover:from-gold-dark hover:to-yellow-600 text-slate-950 font-bold px-7 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-gold/30 hover:shadow-gold/50"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50 animate-slide-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-300 hover:text-white transition-colors font-medium text-left py-3 px-4 rounded-lg hover:bg-slate-800/50"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-300 hover:text-white transition-colors font-medium text-left py-3 px-4 rounded-lg hover:bg-slate-800/50"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-colors font-medium text-left py-3 px-4 rounded-lg hover:bg-slate-800/50"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-white transition-colors font-medium text-left py-3 px-4 rounded-lg hover:bg-slate-800/50"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}