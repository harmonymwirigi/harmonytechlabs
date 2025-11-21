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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-11 h-11 bg-gradient-to-br from-gold to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-gold/20 group-hover:shadow-gold/40 transition-all group-hover:scale-105">
              <span className="text-slate-950 font-black text-xl">H</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl tracking-tight">HarmonyTech</span>
              <span className="text-gold font-bold text-xl">Labs</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-300 hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800/50"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-300 hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800/50"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800/50"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gold hover:bg-gold-dark text-slate-950 font-bold px-6 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-gold/20"
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