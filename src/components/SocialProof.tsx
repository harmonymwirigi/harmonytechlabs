import { useEffect, useState, useRef } from 'react';
import { Award, Star, Users, TrendingUp } from 'lucide-react';

interface StatProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

function AnimatedStat({ icon: Icon, value, suffix, label }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center group">
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 group-hover:from-gold group-hover:to-yellow-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/30">
        <Icon className="w-8 h-8 text-gold group-hover:text-slate-950 transition-colors" />
      </div>
      <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent mb-3">
        {count}{suffix}
      </div>
      <div className="text-slate-400 font-medium text-lg">{label}</div>
    </div>
  );
}

export default function SocialProof() {
  const stats = [
    { icon: Award, value: 100, suffix: '+', label: 'Projects Completed' },
    { icon: TrendingUp, value: 98, suffix: '%', label: 'Client Satisfaction' },
    { icon: Star, value: 5, suffix: '-Star', label: 'Average Rating' },
    { icon: Users, value: 50, suffix: '+', label: 'Global Clients' },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}