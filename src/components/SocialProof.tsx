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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>

        {/* Technologies & Partners Section */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-gold text-sm font-bold tracking-wider uppercase">Technologies & Partners</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Powered By Industry Leaders
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We work with cutting-edge technologies and platforms to deliver exceptional solutions
            </p>
          </div>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Lovable */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="/lovable.svg" alt="Lovable" className="w-full h-full object-contain" />
              </div>
              <span className="text-slate-300 text-sm font-semibold group-hover:text-gold transition-colors">Lovable</span>
            </div>

            {/* ChatGPT */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-green-500">
                  <path d="M11.2475 18.25C10.6975 18.25 10.175 18.1455 9.67999 17.9365C9.18499 17.7275 8.74499 17.436 8.35999 17.062C7.94199 17.205 7.50749 17.2765 7.05649 17.2765C6.31949 17.2765 5.63749 17.095 5.01049 16.732C4.38349 16.369 3.87749 15.874 3.49249 15.247C3.11849 14.62 2.93149 13.9215 2.93149 13.1515C2.93149 12.8325 2.97549 12.486 3.06349 12.112C2.62349 11.705 2.28249 11.2375 2.04049 10.7095C1.79849 10.1705 1.67749 9.6095 1.67749 9.0265C1.67749 8.4325 1.80399 7.8605 2.05699 7.3105C2.30999 6.7605 2.66199 6.2875 3.11299 5.8915C3.57499 5.4845 4.10849 5.204 4.71349 5.05C4.83449 4.423 5.08749 3.862 5.47249 3.367C5.86849 2.861 6.35249 2.465 6.92449 2.179C7.49649 1.893 8.10699 1.75 8.75599 1.75C9.30599 1.75 9.82849 1.8545 10.3235 2.0635C10.8185 2.2725 11.2585 2.564 11.6435 2.938C12.0615 2.795 12.496 2.7235 12.947 2.7235C13.684 2.7235 14.366 2.905 14.993 3.268C15.62 3.631 16.1205 4.126 16.4945 4.753C16.8795 5.38 17.072 6.0785 17.072 6.8485C17.072 7.1675 17.028 7.514 16.94 7.888C17.38 8.295 17.721 8.768 17.963 9.307C18.205 9.835 18.326 10.3905 18.326 10.9735C18.326 11.5675 18.1995 12.1395 17.9465 12.6895C17.6935 13.2395 17.336 13.718 16.874 14.125C16.423 14.521 15.895 14.796 15.29 14.95C15.169 15.577 14.9105 16.138 14.5145 16.633C14.1295 17.139 13.651 17.535 13.079 17.821C12.507 18.107 11.8965 18.25 11.2475 18.25ZM7.17199 16.1875C7.72199 16.1875 8.20049 16.072 8.60749 15.841L11.7095 14.059C11.8195 13.982 11.8745 13.8775 11.8745 13.7455V12.3265L7.88149 14.62C7.63949 14.763 7.39749 14.763 7.15549 14.62L4.03699 12.8215C4.03699 12.8545 4.03149 12.893 4.02049 12.937C4.02049 12.981 4.02049 13.047 4.02049 13.135C4.02049 13.696 4.15249 14.213 4.41649 14.686C4.69149 15.148 5.07099 15.511 5.55499 15.775C6.03899 16.05 6.57799 16.1875 7.17199 16.1875ZM7.33699 13.498C7.40299 13.531 7.46349 13.5475 7.51849 13.5475C7.57349 13.5475 7.62849 13.531 7.68349 13.498L8.92099 12.7885L4.94449 10.4785C4.70249 10.3355 4.58149 10.121 4.58149 9.835V6.2545C4.03149 6.4965 3.59149 6.8705 3.26149 7.3765C2.93149 7.8715 2.76649 8.4215 2.76649 9.0265C2.76649 9.5655 2.90399 10.0825 3.17899 10.5775C3.45399 11.0725 3.81149 11.4465 4.25149 11.6995L7.33699 13.498ZM11.2475 17.161C11.8305 17.161 12.3585 17.029 12.8315 16.765C13.3045 16.501 13.6785 16.138 13.9535 15.676C14.2285 15.214 14.366 14.697 14.366 14.125V10.561C14.366 10.429 14.311 10.33 14.201 10.264L12.947 9.538V14.1415C12.947 14.4275 12.826 14.642 12.584 14.785L9.46549 16.5835C10.0045 16.9685 10.5985 17.161 11.2475 17.161ZM11.8745 11.122V8.878L10.01 7.822L8.12899 8.878V11.122L10.01 12.178L11.8745 11.122ZM7.05649 5.8585C7.05649 5.5725 7.17749 5.358 7.41949 5.215L10.538 3.4165C9.99899 3.0315 9.40499 2.839 8.75599 2.839C8.17299 2.839 7.64499 2.971 7.17199 3.235C6.69899 3.499 6.32499 3.862 6.04999 4.324C5.78599 4.786 5.65399 5.303 5.65399 5.875V9.4225C5.65399 9.5545 5.70899 9.659 5.81899 9.736L7.05649 10.462V5.8585ZM15.4385 13.7455C15.9885 13.5035 16.423 13.1295 16.742 12.6235C17.072 12.1175 17.237 11.5675 17.237 10.9735C17.237 10.4345 17.0995 9.9175 16.8245 9.4225C16.5495 8.9275 16.192 8.5535 15.752 8.3005L12.6665 6.5185C12.6005 6.4745 12.54 6.458 12.485 6.469C12.43 6.469 12.375 6.4855 12.32 6.5185L11.0825 7.2115L15.0755 9.538C15.1965 9.604 15.2845 9.692 15.3395 9.802C15.4055 9.901 15.4385 10.022 15.4385 10.165V13.7455ZM12.122 5.3635C12.364 5.2095 12.606 5.2095 12.848 5.3635L15.983 7.195C15.983 7.118 15.983 7.019 15.983 6.898C15.983 6.37 15.851 5.8695 15.587 5.3965C15.334 4.9125 14.9655 4.5275 14.4815 4.2415C14.0085 3.9555 13.4585 3.8125 12.8315 3.8125C12.2815 3.8125 11.803 3.928 11.396 4.159L8.29399 5.941C8.18399 6.018 8.12899 6.1225 8.12899 6.2545V7.6735L12.122 5.3635Z"></path>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-semibold group-hover:text-gold transition-colors">ChatGPT</span>
            </div>

            {/* Binance */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="/binance.png" alt="Binance" className="w-full h-full object-contain" />
              </div>
              <span className="text-slate-300 text-sm font-semibold group-hover:text-gold transition-colors">Binance</span>
            </div>

            {/* Automation */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-semibold group-hover:text-gold transition-colors">Automation</span>
            </div>

            {/* OpenAI */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-800 dark:text-white">
                  <path d="M11.2475 18.25C10.6975 18.25 10.175 18.1455 9.67999 17.9365C9.18499 17.7275 8.74499 17.436 8.35999 17.062C7.94199 17.205 7.50749 17.2765 7.05649 17.2765C6.31949 17.2765 5.63749 17.095 5.01049 16.732C4.38349 16.369 3.87749 15.874 3.49249 15.247C3.11849 14.62 2.93149 13.9215 2.93149 13.1515C2.93149 12.8325 2.97549 12.486 3.06349 12.112C2.62349 11.705 2.28249 11.2375 2.04049 10.7095C1.79849 10.1705 1.67749 9.6095 1.67749 9.0265C1.67749 8.4325 1.80399 7.8605 2.05699 7.3105C2.30999 6.7605 2.66199 6.2875 3.11299 5.8915C3.57499 5.4845 4.10849 5.204 4.71349 5.05C4.83449 4.423 5.08749 3.862 5.47249 3.367C5.86849 2.861 6.35249 2.465 6.92449 2.179C7.49649 1.893 8.10699 1.75 8.75599 1.75C9.30599 1.75 9.82849 1.8545 10.3235 2.0635C10.8185 2.2725 11.2585 2.564 11.6435 2.938C12.0615 2.795 12.496 2.7235 12.947 2.7235C13.684 2.7235 14.366 2.905 14.993 3.268C15.62 3.631 16.1205 4.126 16.4945 4.753C16.8795 5.38 17.072 6.0785 17.072 6.8485C17.072 7.1675 17.028 7.514 16.94 7.888C17.38 8.295 17.721 8.768 17.963 9.307C18.205 9.835 18.326 10.3905 18.326 10.9735C18.326 11.5675 18.1995 12.1395 17.9465 12.6895C17.6935 13.2395 17.336 13.718 16.874 14.125C16.423 14.521 15.895 14.796 15.29 14.95C15.169 15.577 14.9105 16.138 14.5145 16.633C14.1295 17.139 13.651 17.535 13.079 17.821C12.507 18.107 11.8965 18.25 11.2475 18.25ZM7.17199 16.1875C7.72199 16.1875 8.20049 16.072 8.60749 15.841L11.7095 14.059C11.8195 13.982 11.8745 13.8775 11.8745 13.7455V12.3265L7.88149 14.62C7.63949 14.763 7.39749 14.763 7.15549 14.62L4.03699 12.8215C4.03699 12.8545 4.03149 12.893 4.02049 12.937C4.02049 12.981 4.02049 13.047 4.02049 13.135C4.02049 13.696 4.15249 14.213 4.41649 14.686C4.69149 15.148 5.07099 15.511 5.55499 15.775C6.03899 16.05 6.57799 16.1875 7.17199 16.1875ZM7.33699 13.498C7.40299 13.531 7.46349 13.5475 7.51849 13.5475C7.57349 13.5475 7.62849 13.531 7.68349 13.498L8.92099 12.7885L4.94449 10.4785C4.70249 10.3355 4.58149 10.121 4.58149 9.835V6.2545C4.03149 6.4965 3.59149 6.8705 3.26149 7.3765C2.93149 7.8715 2.76649 8.4215 2.76649 9.0265C2.76649 9.5655 2.90399 10.0825 3.17899 10.5775C3.45399 11.0725 3.81149 11.4465 4.25149 11.6995L7.33699 13.498ZM11.2475 17.161C11.8305 17.161 12.3585 17.029 12.8315 16.765C13.3045 16.501 13.6785 16.138 13.9535 15.676C14.2285 15.214 14.366 14.697 14.366 14.125V10.561C14.366 10.429 14.311 10.33 14.201 10.264L12.947 9.538V14.1415C12.947 14.4275 12.826 14.642 12.584 14.785L9.46549 16.5835C10.0045 16.9685 10.5985 17.161 11.2475 17.161ZM11.8745 11.122V8.878L10.01 7.822L8.12899 8.878V11.122L10.01 12.178L11.8745 11.122ZM7.05649 5.8585C7.05649 5.5725 7.17749 5.358 7.41949 5.215L10.538 3.4165C9.99899 3.0315 9.40499 2.839 8.75599 2.839C8.17299 2.839 7.64499 2.971 7.17199 3.235C6.69899 3.499 6.32499 3.862 6.04999 4.324C5.78599 4.786 5.65399 5.303 5.65399 5.875V9.4225C5.65399 9.5545 5.70899 9.659 5.81899 9.736L7.05649 10.462V5.8585ZM15.4385 13.7455C15.9885 13.5035 16.423 13.1295 16.742 12.6235C17.072 12.1175 17.237 11.5675 17.237 10.9735C17.237 10.4345 17.0995 9.9175 16.8245 9.4225C16.5495 8.9275 16.192 8.5535 15.752 8.3005L12.6665 6.5185C12.6005 6.4745 12.54 6.458 12.485 6.469C12.43 6.469 12.375 6.4855 12.32 6.5185L11.0825 7.2115L15.0755 9.538C15.1965 9.604 15.2845 9.692 15.3395 9.802C15.4055 9.901 15.4385 10.022 15.4385 10.165V13.7455ZM12.122 5.3635C12.364 5.2095 12.606 5.2095 12.848 5.3635L15.983 7.195C15.983 7.118 15.983 7.019 15.983 6.898C15.983 6.37 15.851 5.8695 15.587 5.3965C15.334 4.9125 14.9655 4.5275 14.4815 4.2415C14.0085 3.9555 13.4585 3.8125 12.8315 3.8125C12.2815 3.8125 11.803 3.928 11.396 4.159L8.29399 5.941C8.18399 6.018 8.12899 6.1225 8.12899 6.2545V7.6735L12.122 5.3635Z"></path>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-semibold group-hover:text-gold transition-colors">OpenAI</span>
            </div>

            {/* Anthropic Claude */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 24" fill="currentColor" className="w-full h-full text-[#D97757]">
                  <path d="M11.376 24L10.776 23.544L10.44 22.8L10.776 21.312L11.16 19.392L11.472 17.856L11.76 15.96L11.928 15.336L11.904 15.288L11.784 15.312L10.344 17.28L8.16 20.232L6.432 22.056L6.024 22.224L5.304 21.864L5.376 21.192L5.784 20.616L8.16 17.568L9.6 15.672L10.536 14.592L10.512 14.448H10.464L4.128 18.576L3 18.72L2.496 18.264L2.568 17.52L2.808 17.28L4.704 15.96L9.432 13.32L9.504 13.08L9.432 12.96H9.192L8.4 12.912L5.712 12.84L3.384 12.744L1.104 12.624L0.528 12.504L0 11.784L0.048 11.424L0.528 11.112L1.224 11.16L2.736 11.28L5.016 11.424L6.672 11.52L9.12 11.784H9.504L9.552 11.616L9.432 11.52L9.336 11.424L6.96 9.84L4.416 8.16L3.072 7.176L2.352 6.672L1.992 6.216L1.848 5.208L2.496 4.488L3.384 4.56L3.6 4.608L4.488 5.304L6.384 6.768L8.88 8.616L9.24 8.904L9.408 8.808V8.736L9.24 8.472L7.896 6.024L6.456 3.528L5.808 2.496L5.64 1.872C5.576 1.656 5.544 1.416 5.544 1.152L6.288 0.144001L6.696 0L7.704 0.144001L8.112 0.504001L8.736 1.92L9.72 4.152L11.28 7.176L11.736 8.088L11.976 8.904L12.072 9.168H12.24V9.024L12.36 7.296L12.6 5.208L12.84 2.52L12.912 1.752L13.296 0.840001L14.04 0.360001L14.616 0.624001L15.096 1.32L15.024 1.752L14.76 3.6L14.184 6.504L13.824 8.472H14.04L14.28 8.208L15.264 6.912L16.92 4.848L17.64 4.032L18.504 3.12L19.056 2.688H20.088L20.832 3.816L20.496 4.992L19.44 6.336L18.552 7.464L17.28 9.168L16.512 10.536L16.584 10.632H16.752L19.608 10.008L21.168 9.744L22.992 9.432L23.832 9.816L23.928 10.2L23.592 11.016L21.624 11.496L19.32 11.952L15.888 12.768L15.84 12.792L15.888 12.864L17.424 13.008L18.096 13.056H19.728L22.752 13.272L23.544 13.8L24 14.424L23.928 14.928L22.704 15.528L21.072 15.144L17.232 14.232L15.936 13.92H15.744V14.016L16.848 15.096L18.84 16.896L21.36 19.224L21.48 19.8L21.168 20.28L20.832 20.232L18.624 18.552L17.76 17.808L15.84 16.2H15.72V16.368L16.152 17.016L18.504 20.544L18.624 21.624L18.456 21.96L17.832 22.176L17.184 22.056L15.792 20.136L14.376 17.952L13.224 16.008L13.104 16.104L12.408 23.352L12.096 23.712L11.376 24Z" shapeRendering="optimizeQuality" fill="#D97757"></path>
                  <path shapeRendering="optimizeQuality" d="M39.504 21.2643C37.688 21.2643 36.06 20.9003 34.62 20.1723C33.18 19.4443 32.048 18.4163 31.224 17.0883C30.408 15.7603 30 14.2243 30 12.4803C30 10.6563 30.412 9.03233 31.236 7.60833C32.06 6.17633 33.196 5.06833 34.644 4.28433C36.1 3.49233 37.74 3.09633 39.564 3.09633C40.692 3.09633 41.82 3.22033 42.948 3.46833C44.084 3.71633 45.072 4.09633 45.912 4.60833V8.56833H44.832C44.536 7.16833 43.96 6.12433 43.104 5.43633C42.256 4.74833 41.076 4.40433 39.564 4.40433C38.164 4.40433 36.996 4.73233 36.06 5.38833C35.132 6.03633 34.444 6.93633 33.996 8.08833C33.548 9.24033 33.324 10.5643 33.324 12.0603C33.324 13.5483 33.576 14.8883 34.08 16.0803C34.584 17.2723 35.328 18.2163 36.312 18.9123C37.296 19.6003 38.476 19.9443 39.852 19.9443C40.796 19.9443 41.608 19.7483 42.288 19.3563C42.968 18.9643 43.54 18.4363 44.004 17.7723C44.468 17.1003 44.908 16.2803 45.324 15.3123H46.464L45.684 19.6803C44.892 20.2003 43.936 20.5963 42.816 20.8683C41.704 21.1323 40.6 21.2643 39.504 21.2643ZM47.964 21.0003V19.9563C48.356 19.9003 48.668 19.8403 48.9 19.7763C49.14 19.7043 49.332 19.5883 49.476 19.4283C49.628 19.2683 49.704 19.0443 49.704 18.7563V5.83233L47.964 5.08833V4.28433L51.612 2.73633H52.56V18.7563C52.56 19.0523 52.632 19.2803 52.776 19.4403C52.928 19.6003 53.12 19.7123 53.352 19.7763C53.592 19.8403 53.912 19.9003 54.312 19.9563V21.0003H47.964ZM59.028 21.2643C58.38 21.2643 57.792 21.1363 57.264 20.8803C56.736 20.6243 56.32 20.2563 56.016 19.7763C55.712 19.2963 55.56 18.7363 55.56 18.0963C55.56 17.1203 55.86 16.3443 56.46 15.7683C57.068 15.1843 57.916 14.7403 59.004 14.4363L63.24 13.2363V11.7123C63.24 10.8883 63.048 10.2523 62.664 9.80433C62.288 9.34833 61.708 9.12033 60.924 9.12033C60.228 9.12033 59.704 9.33233 59.352 9.75633C59.008 10.1723 58.836 10.7483 58.836 11.4843V12.6123H56.988C56.764 12.4683 56.588 12.2763 56.46 12.0363C56.34 11.7883 56.28 11.5163 56.28 11.2203C56.28 10.5563 56.516 9.98833 56.988 9.51633C57.46 9.03633 58.06 8.67633 58.788 8.43633C59.516 8.19633 60.256 8.07633 61.008 8.07633C62.592 8.07633 63.836 8.44033 64.74 9.16833C65.644 9.89633 66.096 11.0003 66.096 12.4803V18.5403C66.096 18.8603 66.168 19.1043 66.312 19.2723C66.456 19.4403 66.644 19.5603 66.876 19.6323C67.116 19.6963 67.44 19.7563 67.848 19.8123V20.8563C67.536 20.9683 67.208 21.0563 66.864 21.1203C66.528 21.1843 66.204 21.2163 65.892 21.2163C65.148 21.2163 64.548 21.0483 64.092 20.7123C63.644 20.3683 63.372 19.8643 63.276 19.2003C62.716 19.8643 62.08 20.3763 61.368 20.7363C60.664 21.0883 59.884 21.2643 59.028 21.2643ZM60.444 19.3443C60.948 19.3443 61.44 19.2283 61.92 18.9963C62.408 18.7563 62.848 18.4403 63.24 18.0483V14.3403L60.168 15.2523C59.592 15.4283 59.152 15.7003 58.848 16.0683C58.544 16.4363 58.392 16.9003 58.392 17.4603C58.392 17.8203 58.48 18.1443 58.656 18.4323C58.832 18.7203 59.076 18.9443 59.388 19.1043C59.7 19.2643 60.052 19.3443 60.444 19.3443ZM73.608 21.2643C72.32 21.2643 71.356 20.9283 70.716 20.2563C70.084 19.5843 69.768 18.6363 69.768 17.4123V10.9083L68.016 10.2603L68.112 9.45633L71.664 8.07633H72.624V16.9323C72.624 17.6923 72.812 18.2563 73.188 18.6243C73.564 18.9923 74.14 19.1763 74.916 19.1763C75.428 19.1763 75.964 19.0603 76.524 18.8283C77.084 18.5883 77.6 18.2803 78.072 17.9043V10.9083L76.32 10.2603V9.45633L79.98 8.07633H80.928V17.8323C80.928 18.1523 81 18.4003 81.144 18.5763C81.288 18.7443 81.476 18.8643 81.708 18.9363C81.948 19.0083 82.272 19.0723 82.68 19.1283V20.1603L79.02 21.1803H78.072V19.0803C77.44 19.7363 76.728 20.2643 75.936 20.6643C75.144 21.0643 74.368 21.2643 73.608 21.2643ZM89.328 21.2643C88.264 21.2643 87.312 21.0083 86.472 20.4963C85.632 19.9763 84.976 19.2683 84.504 18.3723C84.032 17.4763 83.796 16.4843 83.796 15.3963C83.796 13.9643 84.08 12.6963 84.648 11.5923C85.224 10.4883 86.032 9.62833 87.072 9.01233C88.112 8.38833 89.32 8.07633 90.696 8.07633C91.12 8.07633 91.556 8.12433 92.004 8.22033C92.46 8.30833 92.896 8.43633 93.312 8.60433V5.82033L91.56 5.08833V4.28433L95.22 2.73633H96.168V17.8323C96.168 18.1523 96.24 18.4003 96.384 18.5763C96.536 18.7443 96.728 18.8643 96.96 18.9363C97.2 19.0083 97.52 19.0723 97.92 19.1283V20.1603L94.26 21.1803H93.312V19.5843C92.752 20.1123 92.132 20.5243 91.452 20.8203C90.78 21.1163 90.072 21.2643 89.328 21.2643ZM90.504 19.3323C90.976 19.3323 91.456 19.2363 91.944 19.0443C92.432 18.8523 92.888 18.5883 93.312 18.2523V10.3563C92.584 9.76433 91.776 9.46833 90.888 9.46833C89.992 9.46833 89.236 9.69633 88.62 10.1523C88.004 10.6083 87.54 11.2283 87.228 12.0123C86.924 12.7883 86.772 13.6563 86.772 14.6163C86.772 15.5283 86.908 16.3403 87.18 17.0523C87.452 17.7563 87.868 18.3123 88.428 18.7203C88.988 19.1283 89.68 19.3323 90.504 19.3323ZM105.252 21.2643C104.068 21.2643 103.004 20.9883 102.06 20.4363C101.116 19.8843 100.376 19.1163 99.84 18.1323C99.304 17.1483 99.036 16.0443 99.036 14.8203C99.036 13.5563 99.308 12.4123 99.852 11.3883C100.404 10.3563 101.156 9.54833 102.108 8.96433C103.068 8.37233 104.136 8.07633 105.312 8.07633C106.216 8.07633 107.048 8.26433 107.808 8.64033C108.568 9.01633 109.2 9.54433 109.704 10.2243C110.216 10.9043 110.552 11.6883 110.712 12.5763L101.928 15.2883C102.168 16.4003 102.644 17.2763 103.356 17.9163C104.076 18.5563 104.968 18.8763 106.032 18.8763C106.92 18.8763 107.716 18.6523 108.42 18.2043C109.124 17.7483 109.748 17.0603 110.292 16.1403L111.228 16.4403C111.012 17.4003 110.62 18.2443 110.052 18.9723C109.484 19.7003 108.784 20.2643 107.952 20.6643C107.128 21.0643 106.228 21.2643 105.252 21.2643ZM107.628 12.2043C107.516 11.6523 107.324 11.1683 107.052 10.7523C106.788 10.3283 106.46 10.0003 106.068 9.76833C105.676 9.53633 105.244 9.42033 104.772 9.42033C104.18 9.42033 103.656 9.60033 103.2 9.96033C102.752 10.3123 102.4 10.8163 102.144 11.4723C101.896 12.1203 101.772 12.8723 101.772 13.7283C101.772 13.8803 101.776 13.9963 101.784 14.0763L107.628 12.2043Z"></path>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-semibold group-hover:text-gold transition-colors">Claude AI</span>
            </div>

            {/* Google AI Studio */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 299 310" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M125.365 32C120.691 38.5727 116.782 45.7277 113.766 53.334H64C40.4361 53.3342 21.3342 72.4361 21.334 96V245.334C21.3344 268.898 40.4362 288 64 288H213.334C236.898 288 256 268.898 256 245.334V179.93C263.778 175.739 270.945 170.561 277.334 164.563V245.334C277.334 280.68 248.68 309.334 213.334 309.334H64C28.6542 309.334 0.00038177 280.68 0 245.334V96C0.000171479 60.654 28.654 32.0002 64 32H125.365Z" fill="currentColor" className="text-blue-500"></path>
                  <path d="M281.333 71.5244C269.006 66.218 258.221 58.9383 248.972 49.6942C239.728 40.4502 232.448 29.6601 227.142 17.3332C225.105 12.6088 223.468 7.75264 222.213 2.77367C221.804 1.14585 220.344 0 218.666 0C216.988 0 215.529 1.14585 215.12 2.77367C213.865 7.75264 212.228 12.6043 210.191 17.3332C204.884 29.6601 197.605 40.4502 188.36 49.6942C179.116 58.9383 168.326 66.218 155.999 71.5244C151.275 73.5614 146.419 75.1984 141.44 76.4533C139.812 76.8626 138.666 78.3222 138.666 80C138.666 81.6778 139.812 83.1374 141.44 83.5467C146.419 84.8016 151.271 86.4386 155.999 88.4756C168.326 93.782 179.112 101.062 188.36 110.306C197.609 119.55 204.884 130.34 210.191 142.667C212.228 147.391 213.865 152.247 215.12 157.226C215.529 158.854 216.988 160 218.666 160C220.344 160 221.804 158.854 222.213 157.226C223.468 152.247 225.105 147.396 227.142 142.667C232.448 130.34 239.728 119.554 248.972 110.306C258.216 101.062 269.006 93.782 281.333 88.4756C286.057 86.4386 290.914 84.8016 295.893 83.5467C297.52 83.1374 298.666 81.6778 298.666 80C298.666 78.3222 297.52 76.8626 295.893 76.4533C290.914 75.1984 286.062 73.5614 281.333 71.5244Z" fill="currentColor" className="text-yellow-500"></path>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-semibold group-hover:text-gold transition-colors">Google AI</span>
            </div>

            {/* Microsoft */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png" alt="Microsoft" className="w-full h-full object-contain" />
              </div>
              <span className="text-slate-300 text-sm font-semibold group-hover:text-gold transition-colors">Microsoft</span>
            </div>

            {/* Hugging Face */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" className="w-full h-full object-contain" />
              </div>
              <span className="text-slate-300 text-sm font-semibold group-hover:text-gold transition-colors">Hugging Face</span>
            </div>

            {/* Cohere */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:-translate-y-1">
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="https://cohere.com/logo.svg" alt="Cohere" className="w-full h-full object-contain" />
              </div>
              <span className="text-slate-300 text-sm font-semibold group-hover:text-gold transition-colors">Cohere</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}