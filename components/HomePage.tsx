import React from 'react';
import { ArrowRight, Target, Layout, BarChart3, CheckCircle, Clock, Calendar, Quote, ChevronDown, RefreshCw } from 'lucide-react';
import { ScrollSection } from './ScrollSection';
import { IMAGES } from '../constants';
import { Page } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="relative z-10">
        
      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-neon-dark via-transparent to-transparent z-10"></div>
            <img 
              src={IMAGES.hero} 
              alt="Background" 
              className="w-full h-full object-cover scale-110 animate-pulse-glow opacity-40"
            />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
              <div className="inline-block px-4 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 backdrop-blur-md">
                <p className="text-neon-cyan font-mono text-xs tracking-[0.3em] uppercase">Architecture for your life</p>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight">
                YOUR <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">FUTURE</span> <br/>
                PROJECT
              </h1>
              
              <div className="border-l-2 border-neon-cyan pl-6">
                <p className="text-xl text-white font-semibold mb-2">
                  The most unfair question we ask our youth is...
                </p>
                <p className="text-2xl text-gray-300 italic font-light">
                  "What do you want to do with the rest of your life?"
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button onClick={() => onNavigate(Page.SIGNUP)} className="px-8 py-4 bg-neon-cyan text-black font-bold font-mono uppercase tracking-widest hover:bg-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,243,255,0.4)] clip-path-slant">
                  Initiate Plan
                </button>
              </div>
          </div>

          <div className="hidden lg:block relative animate-in slide-in-from-right duration-1000 delay-300">
              <div className="glass-card p-10 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl group-hover:bg-neon-cyan/20 transition-all duration-700"></div>
                <h3 className="text-2xl font-bold mb-6">The Unfair Question</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  It is a terrifying and bottomless question. Not knowing the answer is precisely where you should be.
                </p>
                <p className="text-white text-lg">
                  I want to work with you to ensure you take the proper steps for your lifelong project, <span className="text-neon-cyan font-bold">your future.</span>
                </p>
              </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* --- ABOUT TEASER SECTION --- */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden relative border-t border-white/5">
         {/* Background Grid Accent */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-grid-pattern opacity-5 pointer-events-none"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <ScrollSection className="order-2 lg:order-1">
                  <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-neon-cyan mb-4">A Bit About Me</h2>
                  <div className="h-1 w-20 bg-white mb-8"></div>
                  
                  <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
                     <p>
                        I have worked on 3 continents, managed people all over the world, created teams, excelled on high-performing teams for the most prominent tech and consulting companies, and am now the CEO of two companies.
                     </p>
                     <p>
                        Regardless of what your future holds, I can help you plan for it. I will care about you, and we'll set you up for success.
                     </p>
                  </div>
                  
                  <button 
                     onClick={() => onNavigate(Page.ABOUT)}
                     className="mt-10 px-8 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all uppercase font-mono text-sm tracking-widest shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:shadow-[0_0_25px_rgba(0,243,255,0.5)]"
                  >
                     Learn More
                  </button>
               </ScrollSection>
               
               <ScrollSection className="order-1 lg:order-2 relative">
                  <div className="relative aspect-[4/5] max-w-md mx-auto group">
                     {/* Decorative Border Frame */}
                     <div className="absolute inset-0 border-2 border-neon-cyan/30 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                     <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                     <img 
                        src={IMAGES.stephanPortrait} 
                        alt="Stephan Nicklow" 
                        className="w-full h-full object-cover grayscale brightness-90 contrast-125 shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-700"
                     />
                  </div>
               </ScrollSection>
            </div>
         </div>
      </section>

      {/* --- GUIDANCE APPROACH TEASER --- */}
      <section className="py-24 bg-black text-white relative border-t border-white/10">
         <div className="container mx-auto px-6">
            <ScrollSection className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Guidance Approach</h2>
               <div className="h-1 w-20 bg-neon-cyan mx-auto"></div>
            </ScrollSection>
            
            <div className="relative max-w-6xl mx-auto">
               {/* Cycle Diagram Layout */}
               <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] border-2 border-white rounded-full opacity-20 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2"><ArrowRight className="text-white" /></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-black px-2 rotate-180"><ArrowRight className="text-white" /></div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10">
                  {/* 1. Assess - Top Left */}
                  <div className="glass-card p-8 rounded-xl border-l-4 border-neon-cyan hover:bg-white/5 transition-all group lg:col-start-1 lg:row-start-1">
                     <h3 className="text-xl font-display font-bold underline decoration-neon-cyan underline-offset-4 mb-4">1. Assess</h3>
                     <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                        Explore and take note of what you want your future to look like.
                     </p>
                  </div>

                  {/* 2. Plan - Top Right */}
                  <div className="glass-card p-8 rounded-xl border-l-4 border-white hover:bg-white/5 transition-all group lg:col-start-2 lg:row-start-1">
                     <h3 className="text-xl font-display font-bold underline decoration-white underline-offset-4 mb-4">2. Plan</h3>
                     <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                        Create an actionable blueprint based off our assessment.
                     </p>
                  </div>

                  {/* 4. Evaluate - Bottom Left */}
                  <div className="glass-card p-8 rounded-xl border-l-4 border-neon-cyan hover:bg-white/5 transition-all group lg:col-start-1 lg:row-start-2">
                     <h3 className="text-xl font-display font-bold underline decoration-neon-cyan underline-offset-4 mb-4">4. Evaluate</h3>
                     <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                        Check-in to measure our progress. Assess what went well and where we can improve.
                     </p>
                  </div>

                  {/* 3. Implement - Bottom Right */}
                  <div className="glass-card p-8 rounded-xl border-l-4 border-neon-magenta hover:bg-white/5 transition-all group lg:col-start-2 lg:row-start-2">
                     <h3 className="text-xl font-display font-bold underline decoration-neon-magenta underline-offset-4 mb-4">3. Implement</h3>
                     <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                        Have execution targets that we hit in order to achieve our goals.
                     </p>
                  </div>
               </div>
               
               <div className="text-center mt-16 relative z-10">
                  <button 
                     onClick={() => onNavigate(Page.APPROACH)}
                     className="px-8 py-3 border border-white hover:border-neon-cyan hover:text-neon-cyan transition-all uppercase font-mono text-sm tracking-widest bg-black"
                  >
                     View Full Approach
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* --- QUOTE INTERLUDE --- */}
      <div className="relative py-40 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.stephanOutdoor})` }}>
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <ScrollSection>
                <Quote className="mx-auto text-neon-cyan mb-8 opacity-60" size={64} />
                <h2 className="text-3xl md:text-5xl font-light italic text-white mb-8 max-w-5xl mx-auto leading-normal">
                  "Courage is resistance to fear, mastery of fear, not absence of fear"
                </h2>
                <p className="text-neon-cyan font-mono uppercase tracking-[0.3em]">Mark Twain</p>
            </ScrollSection>
          </div>
      </div>

      {/* --- SCHEDULE / CONTACT SECTION --- */}
      <section className="py-32 relative bg-neutral-900">
          <div className="container mx-auto px-6">
            <ScrollSection className="max-w-4xl mx-auto text-center mb-20">
                <h2 className="text-5xl font-display font-bold mb-8">SCHEDULE TIME</h2>
                <div className="glass-card p-10 rounded-3xl border border-neon-cyan/20 shadow-[0_0_50px_rgba(0,243,255,0.1)]">
                  <div className="flex flex-col items-center gap-6">
                      <Clock className="text-neon-cyan w-12 h-12" />
                      <p className="text-2xl text-white font-light">
                        I only have time to meet with <span className="text-neon-cyan font-bold">10 people a week</span>.
                      </p>
                      <p className="text-gray-400">Send me a note to see when we can meet.</p>
                      <button 
                        onClick={() => onNavigate(Page.SIGNUP)} 
                        className="mt-4 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neon-cyan transition-colors duration-300 flex items-center gap-2"
                      >
                        <Calendar size={20} /> Reserve Slot
                      </button>
                  </div>
                </div>
            </ScrollSection>

            <ScrollSection>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/50">
                  <div className="relative min-h-[400px]">
                      <img src={IMAGES.natureBridge} alt="Bridge" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
                  </div>
                  <div className="p-12 lg:p-20 flex flex-col justify-center text-center lg:text-left">
                      <h3 className="text-3xl font-display font-bold mb-6">TAKE THE NEXT STEP</h3>
                      <p className="text-gray-400 leading-relaxed">
                        I want to help you prioritize what's important to you. From there, we can plan what work you need to do to reach the picture of what your life will look like.
                      </p>
                      <div className="mt-8">
                         <button 
                           onClick={() => onNavigate(Page.SIGNUP)}
                           className="px-8 py-3 bg-neon-cyan text-black uppercase font-bold tracking-wider hover:bg-white transition-colors"
                         >
                            Let's Talk
                         </button>
                      </div>
                  </div>
                </div>
            </ScrollSection>
          </div>
      </section>
    </div>
  );
};