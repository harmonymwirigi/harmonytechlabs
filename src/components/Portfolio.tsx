import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Capdata',
    description: 'Data analytics and business intelligence platform providing comprehensive insights and reporting solutions.',
    image: 'https://capdata.es/static/LOGO/Logo_CapData_3.png',
    url: 'https://capdata.es/',
    tags: ['Analytics', 'Business Intelligence', 'Data'],
  },
  {
    title: 'NYXMEDIA',
    description: 'Newsletter and media management platform for content distribution and engagement tracking.',
    image: 'https://prueba.nyxmedia.es/images/67%2C356x223%2B66%2B141/10911913/logo_nyx.png',
    url: 'http://newsletters.nyxmedia.es/',
    tags: ['Media', 'Newsletter', 'Content'],
  },
  {
    title: 'Maatispa',
    description: 'Spa and wellness booking platform with appointment management and customer scheduling system.',
    image: '/maatispa.jpeg',
    url: 'https://booking.maatispa.com/',
    tags: ['Booking', 'Spa', 'Wellness'],
  },
  {
    title: 'PulseLoopCare',
    description: 'Healthcare management platform for patient care coordination and medical record management.',
    image: '/pulseloopcare.jpg',
    url: 'https://pulseloopcare.com/',
    tags: ['Healthcare', 'SaaS', 'Medical'],
  },
  {
    title: 'Emploio',
    description: 'Job marketplace and recruitment platform connecting employers with talented professionals.',
    image: '/emploio.svg',
    url: 'https://www.emploio.com/en',
    tags: ['Recruitment', 'Job Market', 'HR'],
  },
  {
    title: 'BeautyCraft',
    description: 'Beauty and cosmetics platform offering products and services for the beauty industry.',
    image: null, // Will use custom logo
    logo: 'B',
    url: 'https://www.beautycrafthq.com/',
    tags: ['Beauty', 'E-Commerce', 'Retail'],
  },
  {
    title: 'Glopy',
    description: 'Interactive platform with engaging animations and user experience features.',
    image: 'https://glopy.app/static/Animaciones_Glopy/Accion_espera_Glopy_GIF.gif',
    url: 'https://glopy.app/',
    tags: ['Interactive', 'Animation', 'UX'],
  },
  {
    title: 'Airdash',
    description: 'E-commerce store platform for fast and efficient online shopping experience.',
    image: '/airdash.png',
    url: 'https://airdash.store/',
    tags: ['E-Commerce', 'Store', 'Retail'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-bold tracking-wider uppercase">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Explore our portfolio of successful projects that have transformed businesses
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="overflow-hidden border-2 border-slate-800 bg-slate-950/50 backdrop-blur-sm hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 group cursor-pointer h-full"
              >
                {/* Project Image/Logo */}
                <div className="relative h-72 overflow-hidden bg-slate-900 flex items-center justify-center">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    </>
                  ) : project.logo ? (
                    <div className="w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <span className="text-white font-bold text-5xl">{project.logo}</span>
                    </div>
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-2xl shadow-gold/50">
                      <ExternalLink className="w-8 h-8 text-slate-950" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-slate-800 text-slate-300 hover:bg-gold hover:text-slate-950 transition-colors border-0 px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}