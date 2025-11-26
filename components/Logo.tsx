import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      <div className="relative w-10 h-10">
        {/* Abstract Futuristic Symbol */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-neon-cyan fill-current drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]">
          <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50" />
          <path d="M50 10 L85 27.5 L85 72.5 L50 90 L15 72.5 L15 27.5 Z" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M50 35 L50 65 M35 50 L65 50" stroke="currentColor" strokeWidth="4" className="animate-pulse" />
        </svg>
      </div>
      
      <div className="flex flex-col justify-center">
        <span className="text-lg font-display font-bold text-white tracking-widest leading-none group-hover:text-neon-cyan transition-colors duration-300">
          YOUR FUTURE
        </span>
        <span className="text-[10px] font-mono text-gray-400 tracking-[0.4em] uppercase leading-tight group-hover:text-white transition-colors duration-300">
          PROJECT
        </span>
      </div>
    </div>
  );
};