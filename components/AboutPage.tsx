import React from 'react';
import { ScrollSection } from './ScrollSection';
import { IMAGES } from '../constants';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
       {/* Block 1: Why is This Important */}
       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          <div className="relative h-[50vh] lg:h-auto overflow-hidden group">
               <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
               <img src={IMAGES.aboutHero} alt="Stephan Outdoor" className="absolute inset-0 w-full h-full object-cover object-[50%_30%] grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-black lg:via-black/20 z-10" />
          </div>
          
          <div className="flex items-center p-8 lg:p-24 bg-neutral-900/50 relative">
               {/* Decorative background grid */}
               <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none"></div>
               
               <ScrollSection className="relative z-10">
                   <div className="mb-6">
                      <span className="font-mono text-neon-cyan text-xs uppercase tracking-[0.3em]">Core Motivation</span>
                   </div>
                   <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 text-white leading-tight">
                      Why is This <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">Important to Me?</span>
                   </h2>
                   
                   <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                      <p>
                          There is nothing more important to me than helping people figure out their path. We prepare, we train, we take tests, we interview, we get a job - why? Because we are supposed to? Because it's how you get ahead? Ahead of what and whom?
                      </p>
                      <p className="border-l-2 border-neon-cyan/50 pl-4 italic text-white/90">
                          Work with me to create a roadmap of you goals, and once we have a target, we can start putting the work in.
                      </p>
                      <p>
                          If you want to make a lot of money, awesome! We can easily work on that path. Do you want to play the trumpet in the New Orleans Orchestra? Lovely, let's plan our path to success.
                      </p>
                   </div>

                   <button 
                       onClick={() => window.open('mailto:Stephan@yourfutureproject.com', '_blank')}
                       className="mt-10 px-8 py-3 border border-white/20 hover:border-neon-cyan text-white hover:text-neon-cyan transition-all uppercase font-mono text-sm tracking-widest"
                   >
                      Get in Touch
                   </button>
               </ScrollSection>
          </div>
      </div>

      {/* Block 2: About Stephan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          <div className="flex items-center p-8 lg:p-24 bg-black relative order-2 lg:order-1">
               <ScrollSection>
                   <h2 className="text-5xl lg:text-6xl font-display font-bold mb-2">About</h2>
                   <h3 className="text-2xl text-neon-cyan font-mono mb-10 flex items-center gap-4">
                      Stephan Nicklow <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-cyan/50 to-transparent"></div>
                   </h3>
                   
                   <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                      <p>
                          I am the <strong className="text-white">CEO of two companies</strong>, have worked at Meta, Ernst & Young, GM, been the COO of an eCom consulting company (that we sold), and started with little to no direction.
                      </p>
                      <p>
                          When people asked me what I was going to study in college, I'd say, "football." Once it was time to choose a university, I saw the schools recruiting me and realized I wanted something completely different - but what? 
                      </p>
                      <p>
                          Do business? What does that mean? Is it important? Is it fulfilling? Will it compensate me appropriately? These are all questions I figured out as I went along in life, and I kept asking myself, <span className="text-white italic">"Why wasn't I prepared for this?"</span>
                      </p>
                      <p>
                          There is an exorbitant amount of vital life information we don't get taught - nothing makes me happier than helping people figure out their next step. I want to work with you, I will be here, and I will care about you.
                      </p>
                   </div>
               </ScrollSection>
          </div>
          
          <div className="relative h-[50vh] lg:h-auto overflow-hidden order-1 lg:order-2 group">
               <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-neon-cyan/50 z-20 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0"></div>
               <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-neon-cyan/50 z-20 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:bottom-0 group-hover:left-0"></div>
               
               <img src={IMAGES.aboutPortrait} alt="Stephan Portrait" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale" />
          </div>
      </div>
    </div>
  );
};