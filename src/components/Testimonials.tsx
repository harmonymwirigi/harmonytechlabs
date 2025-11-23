import { Star, Quote, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  location: string;
  date: string;
  image?: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'the_ikram',
    location: 'Pakistan',
    date: '10 months ago',
    image: '/ikram.webp',
    review: 'Working with Harmony on Fiverr has been one of the best experiences I\'ve ever had. From start to finish, he went above and beyond to ensure that everything was perfect. He is truly the kindest, most hardworking, and humble person I\'ve ever met on this platform. What sets him apart is not just his incredible skill and expertise but also his unmatched dedication and patience. I dragged this project for over a month, constantly changing my instructions and not always being clear about what I wanted, yet he never complained or got frustrated. Instead, he always handled everything with a positive attitude and worked tirelessly to help me achieve exactly what I needed. He poured his heart and soul into this project, making sure every single detail was perfect, and I couldn\'t be more grateful. His generosity and willingness to go the extra mile are truly rare to find. Even when I wasn\'t sure about certain aspects of the project, he took the time to guide me and made sure everything was done just the way I envisioned it. I genuinely don\'t have enough words to praise the incredible work he did and how amazing he was throughout the entire process. If you\'re looking for someone who not only delivers exceptional work but does so with kindness, humility, and a genuine passion for what they do, I cannot recommend Harmony enough. He\'s a gem of a person and an absolute professional. I feel so lucky to have worked with him, and I will always remember his generosity and dedication. Thank you so much, Harmony ❤️❤️❤️',
  },
  {
    name: 'Toni',
    location: 'Spain',
    date: '1 year ago',
    image: '/toni.webp',
    review: 'Very good work, very good communication and great desire to work i\'m very happy',
  },
  {
    name: 'Save Your Work',
    location: 'USA',
    date: 'Recently',
    image: '/saveyourwork.webp',
    review: 'Harmony went above & beyond to help me out. I came with a problem & he took care of it & more.. Before i could ask to get on a call he even offered it! I definitely recommend him & I will be coming back soon! Thank you🙏🏽',
  },
  {
    name: 'adamfarrens',
    location: 'USA',
    date: '1 month ago',
    review: 'Super fast response time. Feels like he works 23hrs a day. Quote from our Lead Engineer "He followed the engineering software principles we expected and looks good"',
  },
  {
    name: 'gedconroy',
    location: 'United Kingdom',
    date: '6 days ago',
    review: 'Working with Harmony on my new website has been an exceptional experience. He played a key role in building a platform that allows our organisation to track activity and stats clearly and effectively. Harmony was incredibly attentive throughout the entire process, always quick to respond, and consistently delivered his work on time. His professionalism and reliability made the whole project smooth and stress-free. An absolute pleasure to work with — highly recommended!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-bold tracking-wider uppercase">Client Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Real feedback from satisfied clients who have worked with us on Fiverr
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-gold" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                {testimonial.review}
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-800">
                {testimonial.image ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold/30 group-hover:border-gold transition-colors">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center"><span class="text-slate-950 font-bold text-lg">${testimonial.name.charAt(0).toUpperCase()}</span></div>`;
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center flex-shrink-0 border-2 border-gold/30 group-hover:border-gold transition-colors">
                    <span className="text-slate-950 font-bold text-lg">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white group-hover:text-gold transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-400">
                    {testimonial.location} • {testimonial.date}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Fiverr Badge & CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm mb-4">All reviews from</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="https://www.fiverr.com/harmonymwirigi?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-900/50 px-6 py-3 rounded-full border border-slate-800 hover:border-gold hover:bg-slate-900 transition-all group"
            >
              <span className="text-gold font-bold text-lg">Fiverr</span>
              <Star className="w-5 h-5 fill-gold text-gold" />
              <span className="text-slate-300 text-sm">5.0 Rating</span>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-gold transition-colors" />
            </a>
            <Button
              asChild
              className="bg-gold hover:bg-gold-dark text-slate-950 font-bold px-8 py-6 rounded-full shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all hover:-translate-y-1"
            >
              <a
                href="https://www.fiverr.com/s/5r9ap66"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>Order Web App Development</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <p className="text-slate-500 text-xs">
            <span className="text-gold">Gig:</span> I will build you a web app using Python Flask or Django
          </p>
        </div>
      </div>
    </section>
  );
}

