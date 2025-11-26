import React, { useState } from 'react';
import { ScrollSection } from './ScrollSection';
import { Send, CheckCircle, Rocket, User, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { IMAGES } from '../constants';

export const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'College Planning',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
        // We use FormSubmit.co for backend-less email sending.
        // NOTE: The first time you submit this form, you MUST check your email (Stephanos@yourfutureproject.com)
        // for an activation link from FormSubmit. Submissions won't arrive until you activate.
        const response = await fetch("https://formsubmit.co/ajax/Stephanos@yourfutureproject.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                interest: formData.interest,
                message: formData.message,
                _subject: `New Lead: ${formData.interest} - ${formData.name}`,
                _captcha: "false", // Disable captcha for easier testing
                _template: "table" // Make the email look nice
            })
        });

        if (response.ok) {
            setSubmitted(true);
        } else {
            // If the service is down or blocked, throw error to trigger fallback
            throw new Error("Form submission service unavailable");
        }
    } catch (error) {
        console.error("Submission error:", error);
        // Fallback to mailto so the user can still send the data manually
        const subject = encodeURIComponent(`New Inquiry: ${formData.interest} - ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:Stephanos@yourfutureproject.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    } finally {
        setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-black flex items-center justify-center relative overflow-hidden p-6">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
         <img src={IMAGES.natureBridge} className="w-full h-full object-cover opacity-20 grayscale" alt="Background" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>
      </div>

      <ScrollSection className="relative z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.1)]">
            
            {/* Left Panel: Info */}
            <div className="lg:col-span-2 bg-black/60 p-10 flex flex-col justify-between border-r border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-transparent"></div>
                <div>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Let's Design <br/><span className="text-neon-cyan">Your Future.</span></h2>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Fill out the form to schedule your consultation or ask a question. I personally review every inquiry to ensure we are a great fit.
                    </p>
                    <div className="space-y-4 font-mono text-sm text-gray-300">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan"><CheckCircle size={14}/></div>
                            <span>College Planning</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan"><CheckCircle size={14}/></div>
                            <span>Career Strategy</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan"><CheckCircle size={14}/></div>
                            <span>Life Coaching</span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-12">
                    <p className="text-xs text-gray-500 font-mono">DIRECT LINE TO:</p>
                    <p className="text-white font-mono">Stephanos@yourfutureproject.com</p>
                </div>
            </div>

            {/* Right Panel: Form */}
            <div className="lg:col-span-3 p-10 bg-white/5">
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-gray-400 tracking-wider">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-3.5 text-gray-500" size={18} />
                                    <input 
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text" 
                                        className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-gray-400 tracking-wider">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-3.5 text-gray-500" size={18} />
                                    <input 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email" 
                                        className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-gray-400 tracking-wider">Area of Interest</label>
                            <div className="relative">
                                <Rocket className="absolute left-4 top-3.5 text-gray-500" size={18} />
                                <select 
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all appearance-none"
                                >
                                    <option>College Planning</option>
                                    <option>Career Strategy</option>
                                    <option>General Mentorship</option>
                                    <option>Speaking Inquiry</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-gray-400 tracking-wider">How can I help?</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-3.5 text-gray-500" size={18} />
                                <textarea 
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all resize-none"
                                    placeholder="Tell me a bit about your goals..."
                                ></textarea>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSending}
                            className="w-full bg-neon-cyan text-black font-bold font-mono uppercase tracking-widest py-4 rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSending ? (
                                <>Processing <Loader2 className="animate-spin" size={18} /></>
                            ) : (
                                <>Initialize Contact <Send size={18} /></>
                            )}
                        </button>
                    </form>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-10 animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 rounded-full bg-neon-cyan/20 flex items-center justify-center mb-6 text-neon-cyan shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully</h3>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Your information has been securely transmitted. I will be in touch shortly to discuss your future project.
                        </p>
                        <button onClick={() => setSubmitted(false)} className="text-neon-cyan hover:text-white underline underline-offset-4 font-mono text-sm">
                            Send another message
                        </button>
                    </div>
                )}
            </div>
        </div>
      </ScrollSection>
    </div>
  );
};