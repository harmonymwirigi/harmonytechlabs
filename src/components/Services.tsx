import { Brain, CreditCard, Code2, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Harness the power of artificial intelligence to automate processes, gain insights, and deliver personalized experiences.',
  },
  {
    icon: CreditCard,
    title: 'Payment Solutions',
    description: 'Seamless, secure payment integrations that support multiple gateways, currencies, and compliance standards.',
  },
  {
    icon: Code2,
    title: 'Custom Web Apps',
    description: 'Tailored web solutions built with modern frameworks, optimized for performance, scalability, and UX.',
  },
  {
    icon: Rocket,
    title: 'SaaS Development',
    description: 'End-to-end SaaS product development from concept to launch, with robust architecture built-in.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-bold tracking-wider uppercase">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 cursor-pointer group relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 group-hover:from-gold group-hover:to-yellow-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20">
                  <service.icon className="w-7 h-7 text-gold group-hover:text-slate-950 transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}