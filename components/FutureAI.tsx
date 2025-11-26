import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu, Loader2 } from 'lucide-react';
import { generateCareerAdvice } from '../services/geminiService';
import { Message } from '../types';

export const FutureAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Greetings. I am your Future AI Assistant. Ask me anything about college choices, career paths, or skill development." }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
        // Prepare history for API (excluding errors)
        const history = messages
            .filter(m => !m.isError)
            .map(m => ({ role: m.role, content: m.content }));

      const response = await generateCareerAdvice(userMsg.content, history);
      
      setMessages(prev => [...prev, { role: 'model', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', content: "System malfunction. Please try again.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] glass-panel rounded-2xl flex flex-col border border-neon-blue shadow-[0_0_30px_rgba(0,243,255,0.15)] overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-neon-dark/90 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Cpu className="text-neon-blue" size={20} />
              <span className="font-mono font-bold text-white">FUTURE.AI ADVISOR</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-neon-blue/20 text-white border border-neon-blue/30 rounded-br-none'
                      : 'bg-white/10 text-gray-100 border border-white/10 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-lg rounded-bl-none border border-white/10 flex items-center gap-2">
                   <Loader2 className="animate-spin text-neon-blue" size={16} />
                   <span className="text-xs text-gray-400 font-mono">COMPUTING_TRAJECTORY...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-neon-dark/90 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about your future..."
                className="flex-1 bg-black/40 border border-white/20 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-blue transition-colors font-mono"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-neon-blue/20 border border-neon-blue/50 text-neon-blue rounded-md hover:bg-neon-blue/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
            ? 'bg-gray-800 text-white rotate-90' 
            : 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:scale-110 animate-pulse-slow'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};