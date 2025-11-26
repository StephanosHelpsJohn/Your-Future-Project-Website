
import React from 'react';
import { ScrollSection } from './ScrollSection';
import { IMAGES } from '../constants';
import { RefreshCw, ArrowRight } from 'lucide-react';

export const ApproachPage: React.FC = () => {
  return (
    <div className="pt-24 bg-black min-h-screen">
      
      {/* --- Intro Section --- */}
      <div className="container mx-auto px-6 mb-24">
        <ScrollSection className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            The Guidance <span className="text-neon-cyan">Approach</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            First and foremost, you are my focus. We will use the continual improvement guidance approach. This means we will have conversations about what your future may look like, if you have no idea, congrats! You're just like most of the interesting people I know. These conversations will help us create a plan around the step you should take when looking at schools, creating strategies for the careers that interest you, assessing how your career is going, and what kind changes/upskilling you want out of your next step. We will continually evaluate how you're doing, what your evolving needs/wants are, and update our target.
          </p>
          
          {/* Futuristic Cycle Diagram */}
          <div className="relative py-20 flex justify-center items-center">
             <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[250px] border-2 border-neon-cyan/20 rounded-full flex items-center justify-center animate-pulse-glow">
                {/* Center Spinning Icon */}
                <RefreshCw className="absolute text-neon-cyan opacity-20 w-32 h-32 animate-spin-slow" />
                
                {/* Steps Nodes - Desktop: Assess(Top), Plan(Right), Implement(Bottom), Evaluate(Left) */}
                
                {/* 1. Assess - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-black px-6 py-3 border border-neon-cyan text-neon-cyan font-display uppercase shadow-[0_0_20px_rgba(0,243,255,0.4)] z-10 text-center min-w-[140px]">
                  1. Assess
                </div>

                {/* 2. Plan - Right */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 md:right-0 md:top-1/2 md:translate-x-1/2 md:-translate-y-1/2 bg-black px-6 py-3 border border-white/20 text-white font-display uppercase z-10 text-center min-w-[140px]">
                  2. Plan
                </div>

                {/* 3. Implement - Bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 bg-black px-6 py-3 border border-white/20 text-white font-display uppercase z-10 text-center min-w-[140px]">
                  3. Implement
                </div>

                {/* 4. Evaluate - Left */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-black px-6 py-3 border border-white/20 text-white font-display uppercase z-10 text-center min-w-[140px]">
                  4. Evaluate
                </div>
             </div>
          </div>
        </ScrollSection>
      </div>

      {/* --- Detailed Steps --- */}
      <div className="space-y-0">
        
        {/* Step 1: Assess */}
        <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[50vh] lg:h-auto overflow-hidden group order-1">
                 <div className="absolute inset-0 bg-neon-blue/20 mix-blend-multiply z-10"></div>
                 <img src={IMAGES.approachAssess} alt="Assess" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="bg-neutral-900/50 p-10 lg:p-20 flex flex-col justify-center order-2 border-b border-white/5">
                <ScrollSection>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Assess</h2>
                    <p className="text-gray-300 mb-6 font-semibold">When assessing what you want for your future, we'll be taking note of the following:</p>
                    <ul className="space-y-4 text-gray-400 leading-relaxed list-disc pl-5 marker:text-neon-cyan">
                        <li>Understand how you are doing and what seems the most ambiguous about your future</li>
                        <li>Short-term and/or long-term goals</li>
                        <li>What is important to you</li>
                        <li>Where you may want to go to school and/or what careers you find intriguing</li>
                        <li>What success means to you and the people you want to make proud</li>
                        <li>What you are passionate about</li>
                        <li>How we improve your presentation (body language, speech cadence, posture, etc...)</li>
                    </ul>
                </ScrollSection>
            </div>
        </section>

        {/* Step 2: Plan */}
        <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-black p-10 lg:p-20 flex flex-col justify-center order-2 lg:order-1 border-b border-white/5">
                <ScrollSection>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Plan</h2>
                    <p className="text-gray-300 mb-6 font-semibold">We will devise a comprehensive plan with specific actions to ensure you are on the right track to achieving your desired goals. We will focus on the following key areas:</p>
                    <ul className="space-y-4 text-gray-400 leading-relaxed list-disc pl-5 marker:text-neon-cyan">
                        <li>Creating a list of potential schools, career paths, and/or job opportunities that align with your aspirations</li>
                        <li>Setting targets for your grades, exam scores, or skills development</li>
                        <li>Identifying ways to enhance your resume and make it more attractive</li>
                        <li>Establish milestones and timelines for both your personal and professional growth to help you become the person you see in the future</li>
                    </ul>
                </ScrollSection>
            </div>
            <div className="relative h-[50vh] lg:h-auto overflow-hidden group order-1 lg:order-2">
                 <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-overlay z-10"></div>
                 <img src={IMAGES.approachPlan} alt="Plan" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
        </section>

        {/* Step 3: Implement */}
        <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[50vh] lg:h-auto overflow-hidden group order-1">
                 <div className="absolute inset-0 bg-neon-magenta/10 mix-blend-overlay z-10"></div>
                 <img src={IMAGES.approachImplement} alt="Implement" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="bg-neutral-900/50 p-10 lg:p-20 flex flex-col justify-center order-2 border-b border-white/5">
                <ScrollSection>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Implement</h2>
                    <p className="text-gray-300 mb-6 font-semibold">The work we will undertake to achieve your objectives is:</p>
                    <ul className="space-y-4 text-gray-400 leading-relaxed list-disc pl-5 marker:text-neon-cyan">
                        <li>Complete the tasks to meet the milestones we created</li>
                        <li>Prep for College fairs, Career days, and your elevator pitch</li>
                        <li>Discuss the actions we are taking to achieve our GPA or work-related goals</li>
                        <li>Research for schools, certifications, or careers we may be interested in</li>
                    </ul>
                </ScrollSection>
            </div>
        </section>

        {/* Step 4: Evaluate */}
        <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-black p-10 lg:p-20 flex flex-col justify-center order-2 lg:order-1 border-b border-white/5">
                <ScrollSection>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Evaluate</h2>
                    <p className="text-gray-300 mb-6 font-semibold">We will regularly assess our progress to ensure we are moving forward by:</p>
                    <ul className="space-y-4 text-gray-400 leading-relaxed list-disc pl-5 marker:text-neon-cyan">
                        <li>Examining everything we have implemented and how it's affecting your daily life</li>
                        <li>Work with partners to do mock interviews</li>
                        <li>Learn from professionals in careers you are interested in</li>
                        <li>Track your progress for our milestones and gauge why we are excelling or where we may be falling short, why, and if we should be correcting it</li>
                        <li>Assess our success and develop a plan for our new targets</li>
                    </ul>
                </ScrollSection>
            </div>
            <div className="relative h-[50vh] lg:h-auto overflow-hidden group order-1 lg:order-2">
                 <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-overlay z-10"></div>
                 <img src={IMAGES.approachEvaluate} alt="Evaluate" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
        </section>

      </div>
    </div>
  );
};
