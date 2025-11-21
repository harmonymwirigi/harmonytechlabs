import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Enterprise analytics solution with machine learning insights and real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['AI/ML', 'React', 'Python'],
  },
  {
    title: 'Global Payment Gateway',
    description: 'Multi-currency payment processing system supporting 150+ countries with fraud detection.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    tags: ['FinTech', 'Node.js', 'Stripe'],
  },
  {
    title: 'Healthcare SaaS Platform',
    description: 'HIPAA-compliant patient management system with telemedicine capabilities.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['SaaS', 'Healthcare', 'Security'],
  },
  {
    title: 'E-Commerce Marketplace',
    description: 'Scalable marketplace with vendor management, inventory tracking, and analytics.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['E-Commerce', 'React', 'AWS'],
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-slate-800 bg-slate-950/50 backdrop-blur-sm hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
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
          ))}
        </div>
      </div>
    </section>
  );
}