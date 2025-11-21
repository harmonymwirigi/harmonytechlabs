import { CheckCircle2 } from 'lucide-react';

const values = [
  'Innovation-driven approach to every project',
  'Transparent communication throughout development',
  'Agile methodology for faster delivery',
  'Post-launch support and maintenance',
  'Scalable solutions built for growth',
  'Security and compliance as priorities',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gold/10 border-2 border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-gold to-yellow-600 p-8 rounded-2xl shadow-2xl shadow-gold/30">
              <div className="text-5xl font-black text-slate-950 mb-1">10+</div>
              <div className="text-slate-900 font-bold">Years Experience</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-gold text-sm font-bold tracking-wider uppercase">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Building Digital Excellence Since 2014
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              HarmonyTechLabs is a premier software development company specializing in cutting-edge 
              technology solutions. We partner with businesses worldwide to transform their digital 
              presence and drive measurable growth.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively to 
              deliver solutions that exceed expectations and stand the test of time.
            </p>

            {/* Values List */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-gold group-hover:text-slate-950 transition-colors" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}