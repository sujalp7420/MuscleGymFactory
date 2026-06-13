import React, { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dumbbell, MapPin, Phone, Clock, Star, ArrowRight, ShieldCheck, Zap, Users } from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function LandingPage() {
  // Force dark mode for the premium gym vibe
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-8 h-8 text-primary" />
          <span className="font-display font-bold text-xl tracking-wider text-white">MUSCLE FACTORY</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#about" className="text-white/70 hover:text-white transition-colors">ABOUT</a>
          <a href="#services" className="text-white/70 hover:text-white transition-colors">CLASSES</a>
          <a href="#reviews" className="text-white/70 hover:text-white transition-colors">REVIEWS</a>
          <a href="#location" className="text-white/70 hover:text-white transition-colors">LOCATION</a>
        </div>
        <a href="#location" className="hidden md:flex items-center justify-center bg-primary text-white px-6 py-2.5 rounded-sm font-display font-semibold tracking-wider hover:bg-primary/90 transition-colors uppercase text-sm">
          Join Now
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/hero.png" 
            alt="Muscle Factory Gym Interior" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 mb-8">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium tracking-wider text-white">4.9 STAR RATED FACILITY IN SURAT</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-tight leading-[0.9] mb-6">
              Forge Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600">Legacy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light">
              Raw power meets sleek professionalism. Step into Dindoli's elite training facility where champions are built. Industrial energy, premium finishes, real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#location" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-sm font-display font-semibold text-lg tracking-wider hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 uppercase">
                Start Training <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm text-white border border-white/10 px-8 py-4 rounded-sm font-display font-semibold text-lg tracking-wider hover:bg-white/10 transition-all uppercase">
                Explore Classes
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-display tracking-[0.2em] text-white/50 uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats/About Section */}
      <section id="about" className="py-24 bg-background relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                Not Just A Gym.<br />A <span className="text-primary">Discipline</span>.
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed font-light">
                Muscle Factory is more than iron and machines. It's a community of dedicated individuals pushing their limits in a clean, spacious, and motivating environment. Located in the heart of Shree Krishna AC Mall, we bring premium fitness to Dindoli.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-bold text-white mb-2">135+</div>
                  <div className="text-primary font-medium tracking-wider text-sm uppercase mb-1">5-Star Reviews</div>
                  <p className="text-white/50 text-sm">A loyal community that demands the best.</p>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-white mb-2">7+</div>
                  <div className="text-primary font-medium tracking-wider text-sm uppercase mb-1">Training Styles</div>
                  <p className="text-white/50 text-sm">From bodybuilding to high-intensity zumba.</p>
                </div>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 gap-4">
              <FadeIn delay={0.2} className="mt-12">
                <div className="rounded-sm overflow-hidden border border-white/10 aspect-[4/5]">
                  <img src="/crossfit.png" alt="Crossfit Training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="rounded-sm overflow-hidden border border-white/10 aspect-[4/5]">
                  <img src="/facility.png" alt="Cardio Facility" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0a0a0a] relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">
              Elite <span className="text-primary">Training</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">Expert trainers. Modern equipment. A specialized program for every goal.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Bodybuilding", desc: "Build mass and strength with our extensive free weights and plate-loaded machines.", icon: Dumbbell },
              { title: "Crossfit", desc: "High-intensity functional training designed to improve overall athletic performance.", icon: ShieldCheck },
              { title: "Kickboxing", desc: "Sharpen your striking, improve cardio, and burn calories with expert coaches.", icon: Zap },
              { title: "Cardio", desc: "Premium treadmills, ellipticals, and rowers in a spacious, air-conditioned zone.", icon: Clock },
              { title: "Aerobics", desc: "Rhythmic cardiovascular exercise combined with strength training routines.", icon: Users },
              { title: "Zumba", desc: "Dance-based fitness program that makes burning calories feel like a party.", icon: Star }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group bg-background/50 border border-white/5 p-8 hover:border-primary/50 transition-colors rounded-sm h-full flex flex-col">
                  <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-2xl font-bold text-white mb-3 uppercase tracking-wide">{service.title}</h3>
                  <p className="text-white/60 font-light flex-grow">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Heavy Bag / Feature Image Section */}
      <section className="py-0 relative z-20">
        <div className="h-[60vh] w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
          <img src="/kickboxing.png" alt="Kickboxing Area" className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <FadeIn>
                <div className="max-w-xl">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
                    Disciplined Workout Culture
                  </h2>
                  <p className="text-lg text-white/80 font-light">
                    Step into an environment where everyone is focused, trainers are deeply supportive, and the atmosphere drives you to be better than yesterday.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-background relative z-20 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Word on the <span className="text-primary">Street</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Good atmosphere, supportive trainers, and well-maintained equipment.",
              "Friendly staff and disciplined workout culture — my fav coach is Kiran sir",
              "Gym is awesome, good vibes — one of my favourite coaches is Nilesh sir",
              "Nice place to work out, trainers are quite friendly and emphatic.",
              "Best gym in Dindoli area, best trainers, best staff, and best environment.",
              "Cardio area and equipment very good quality and sir's behaviour is very good."
            ].map((quote, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#0a0a0a] p-8 border border-white/5 rounded-sm relative">
                  <div className="text-primary text-6xl font-display font-bold absolute top-4 left-4 opacity-20">"</div>
                  <p className="text-white/80 font-light italic relative z-10 pt-4">
                    {quote}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary">
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location / CTA */}
      <section id="location" className="py-24 bg-[#0a0a0a] relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-8">
                Ready to <span className="text-primary">Start?</span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-white tracking-wide uppercase mb-1">Location</h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      SHREE KRISHNA AC MALL, behind SMC COMMUNITY HALL,<br />
                      near Flower Garden Road, Royal Star Township,<br />
                      Dindoli, Surat, Gujarat 394210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-white tracking-wide uppercase mb-1">Contact</h4>
                    <p className="text-white/60 font-light text-lg">070168 29247</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-sm text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-white tracking-wide uppercase mb-1">Hours</h4>
                    <p className="text-white/60 font-light">Monday - Saturday: Open daily till 10 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-sm font-display font-bold text-xl tracking-wider hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 uppercase shadow-xl shadow-primary/20">
                  Call Now to Join
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="h-[400px] lg:h-auto rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.264789508007!2d72.8596!3d21.1417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0x2bd03212871f302b!2sMuscle%20Factory%20Gym!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8 border-t border-white/5 text-center relative z-20">
        <p className="text-white/40 text-sm font-light">
          © {new Date().getFullYear()} MUSCLE FACTORY GYM. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
