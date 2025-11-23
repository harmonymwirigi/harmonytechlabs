import { useState } from 'react';
import { Send, Mail, Phone, MapPin, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// You'll need to set these in your .env file
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT || '';
const EMAILJS_TEMPLATE_ID_CONSULTATION = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONSULTATION || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmittingMain, setIsSubmittingMain] = useState(false);
  const [isSubmittingSidebar, setIsSubmittingSidebar] = useState(false);
  
  const [mainFormData, setMainFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [sidebarFormData, setSidebarFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleMainSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mainFormData.name || !mainFormData.email || !mainFormData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_CONTACT || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Configuration Error",
        description: "Email service is not configured. Please contact us directly at harmonymwithalii@gmail.com",
        variant: "destructive",
      });
      return;
    }

    setIsSubmittingMain(true);

    try {
      const templateParams = {
        from_name: mainFormData.name,
        from_email: mainFormData.email,
        phone: mainFormData.phone || 'Not provided',
        project_type: mainFormData.projectType || 'Not specified',
        budget: mainFormData.budget || 'Not specified',
        message: mainFormData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_CONTACT,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setMainFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
      });
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      const errorMessage = error?.text || error?.message || 'Unknown error occurred';
      console.error('Error details:', {
        status: error?.status,
        text: error?.text,
        message: error?.message,
      });
      toast({
        title: "Error Sending Message",
        description: errorMessage || "Please try again or contact us directly at harmonymwithalii@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingMain(false);
    }
  };

  const handleSidebarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!sidebarFormData.name || !sidebarFormData.email || !sidebarFormData.phone) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_CONSULTATION || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Configuration Error",
        description: "Email service is not configured. Please contact us directly at harmonymwithalii@gmail.com",
        variant: "destructive",
      });
      return;
    }

    setIsSubmittingSidebar(true);

    try {
      const templateParams = {
        from_name: sidebarFormData.name,
        from_email: sidebarFormData.email,
        phone: sidebarFormData.phone,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_CONSULTATION,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Consultation Requested!",
        description: "We'll contact you shortly to schedule your free consultation.",
      });

      setSidebarFormData({
        name: '',
        email: '',
        phone: '',
      });
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      const errorMessage = error?.text || error?.message || 'Unknown error occurred';
      console.error('Error details:', {
        status: error?.status,
        text: error?.text,
        message: error?.message,
      });
      toast({
        title: "Error Sending Request",
        description: errorMessage || "Please try again or contact us directly at harmonymwithalii@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingSidebar(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-bold tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Get in touch with us to discuss your project requirements and receive a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-2 border-slate-800 bg-slate-900/50 backdrop-blur-sm">
              <form onSubmit={handleMainSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="main-name" className="text-slate-300 font-medium">Name *</Label>
                    <Input
                      id="main-name"
                      value={mainFormData.name}
                      onChange={(e) => setMainFormData({ ...mainFormData, name: e.target.value })}
                      placeholder="John Doe"
                      className="mt-2 bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="main-email" className="text-slate-300 font-medium">Email *</Label>
                    <Input
                      id="main-email"
                      type="email"
                      value={mainFormData.email}
                      onChange={(e) => setMainFormData({ ...mainFormData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="mt-2 bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="main-phone" className="text-slate-300 font-medium">Phone</Label>
                    <Input
                      id="main-phone"
                      type="tel"
                      value={mainFormData.phone}
                      onChange={(e) => setMainFormData({ ...mainFormData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="mt-2 bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="project-type" className="text-slate-300 font-medium">Project Type</Label>
                    <Select
                      value={mainFormData.projectType}
                      onValueChange={(value) => setMainFormData({ ...mainFormData, projectType: value })}
                    >
                      <SelectTrigger className="mt-2 bg-slate-950 border-slate-700 text-white focus:border-gold">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-700">
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="automation">Automation Implementation</SelectItem>
                        <SelectItem value="trading-bot">Trading Bot Development</SelectItem>
                        <SelectItem value="ai">AI Integration</SelectItem>
                        <SelectItem value="payment">Payment Solutions</SelectItem>
                        <SelectItem value="web">Custom Web App</SelectItem>
                        <SelectItem value="saas">SaaS Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget" className="text-slate-300 font-medium">Budget Range</Label>
                  <Select
                    value={mainFormData.budget}
                    onValueChange={(value) => setMainFormData({ ...mainFormData, budget: value })}
                  >
                    <SelectTrigger className="mt-2 bg-slate-950 border-slate-700 text-white focus:border-gold">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700">
                      <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                      <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                      <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                      <SelectItem value="100k+">$100k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-300 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    value={mainFormData.message}
                    onChange={(e) => setMainFormData({ ...mainFormData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="mt-2 bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-gold"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmittingMain}
                  className="w-full bg-gold hover:bg-gold-dark text-slate-950 font-bold transition-all hover:-translate-y-1 shadow-lg shadow-gold/20 hover:shadow-gold/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmittingMain ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Email</div>
                  <a href="mailto:harmonymwithalii@gmail.com" className="text-slate-400 text-sm hover:text-gold transition-colors">
                    harmonymwithalii@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Phone / WhatsApp</div>
                  <a href="tel:+254713028200" className="text-slate-400 text-sm hover:text-gold transition-colors block">
                    +254 713 028 200
                  </a>
                  <a href="https://wa.me/254713028200" target="_blank" rel="noopener noreferrer" className="text-gold text-xs hover:underline mt-1 block">
                    Available on WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Location</div>
                  <div className="text-slate-400 text-sm">Nyeri, Kenya</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Consultation Form */}
          <div>
            <Card className="p-8 bg-gradient-to-br from-gold to-yellow-600 border-0 sticky top-24 shadow-2xl shadow-gold/20">
              <h3 className="text-2xl font-bold text-slate-950 mb-2">
                Free Consultation
              </h3>
              <p className="text-slate-800 mb-6 font-medium">
                Schedule a call with our experts
              </p>

              <form onSubmit={handleSidebarSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="sidebar-name" className="text-slate-950 font-semibold">Name *</Label>
                  <Input
                    id="sidebar-name"
                    value={sidebarFormData.name}
                    onChange={(e) => setSidebarFormData({ ...sidebarFormData, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 bg-white/90 border-0 text-slate-950 placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Label htmlFor="sidebar-email" className="text-slate-950 font-semibold">Email *</Label>
                  <Input
                    id="sidebar-email"
                    type="email"
                    value={sidebarFormData.email}
                    onChange={(e) => setSidebarFormData({ ...sidebarFormData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="mt-2 bg-white/90 border-0 text-slate-950 placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Label htmlFor="sidebar-phone" className="text-slate-950 font-semibold">Phone *</Label>
                  <Input
                    id="sidebar-phone"
                    type="tel"
                    value={sidebarFormData.phone}
                    onChange={(e) => setSidebarFormData({ ...sidebarFormData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="mt-2 bg-white/90 border-0 text-slate-950 placeholder:text-slate-500"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmittingSidebar}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold transition-all hover:-translate-y-1 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmittingSidebar ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Request Consultation'
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800/50"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-br from-gold to-yellow-600 text-slate-950 font-semibold rounded-full py-1">
                    OR
                  </span>
                </div>
              </div>

              {/* Fiverr CTA */}
              <div className="text-center">
                <p className="text-slate-800 font-semibold mb-3">Order on Fiverr</p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold transition-all hover:-translate-y-1 shadow-xl"
                >
                  <a
                    href="https://www.fiverr.com/s/5r9ap66"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>Order Web App Development</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
                <a
                  href="https://www.fiverr.com/harmonymwirigi?public_mode=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-slate-950 text-sm mt-2 inline-block underline"
                >
                  View my Fiverr profile
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}