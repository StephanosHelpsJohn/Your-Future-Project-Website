import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Page } from '../types';

interface NavigationProps {
  activePage: Page;
  onNavigate: (page: Page, sectionId?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: Page.HOME, sectionId: 'home' },
    { label: 'About Me', page: Page.ABOUT, sectionId: 'about' },
    { label: 'Approach', page: Page.APPROACH, sectionId: 'approach' },
  ];

  const handleNavClick = (page: Page, sectionId?: string) => {
    setIsOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled || activePage !== Page.HOME ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div onClick={() => handleNavClick(Page.HOME, 'home')}>
            <Logo />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page, item.sectionId)}
                  className={`text-sm font-mono uppercase tracking-widest transition-all duration-300 hover:scale-110 relative group ${
                    activePage === item.page && (!item.sectionId || item.sectionId === 'about' || item.sectionId === 'approach' || item.sectionId === 'home') 
                      ? 'text-neon-cyan' 
                      : 'text-gray-400 hover:text-neon-cyan'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-neon-cyan transition-all duration-300 ${
                    activePage === item.page && (!item.sectionId || item.sectionId === 'about' || item.sectionId === 'approach' || item.sectionId === 'home') 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              <button 
                onClick={() => handleNavClick(Page.SIGNUP)}
                className="px-6 py-2 border border-neon-cyan/50 text-neon-cyan font-mono text-xs uppercase tracking-widest hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]"
              >
                Start Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-cyan transition-colors"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 animate-in slide-in-from-top duration-300 h-screen">
          <div className="px-4 py-8 space-y-8 flex flex-col items-center justify-center h-full pb-32">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page, item.sectionId)}
                className="block w-full text-center text-3xl font-display uppercase text-gray-300 hover:text-neon-cyan transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(Page.SIGNUP)}
              className="block w-full text-center text-3xl font-display uppercase text-neon-cyan hover:text-white transition-colors"
            >
              Start Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};