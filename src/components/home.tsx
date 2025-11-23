import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import SocialProof from './SocialProof';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <Services />
      <SocialProof />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}