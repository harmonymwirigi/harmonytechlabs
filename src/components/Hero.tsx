import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gold rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-5 py-2.5 mb-8 hover:bg-gold/20 transition-all">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wide">Transforming Ideas into Digital Reality</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Build Exceptional
            <span className="block bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent mt-2">
              Software Solutions
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            We build professional websites, implement automation solutions, create trading bots with custom strategies, 
            and develop cutting-edge AI solutions that empower businesses to scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gold hover:bg-gold-dark text-slate-950 font-bold px-10 py-7 text-lg rounded-xl shadow-2xl shadow-gold/20 hover:shadow-gold/40 transition-all hover:-translate-y-1 group border-0"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-white hover:bg-slate-800 hover:border-gold font-bold px-10 py-7 text-lg rounded-xl transition-all hover:-translate-y-1"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-1">100+</div>
              <div className="text-slate-400 text-sm">Projects</div>
            </div>
            <div className="text-center border-x border-slate-800">
              <div className="text-4xl font-bold text-gold mb-1">98%</div>
              <div className="text-slate-400 text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-1">50+</div>
              <div className="text-slate-400 text-sm">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}