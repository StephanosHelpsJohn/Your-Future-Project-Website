import React from 'react';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-gray-400 text-sm max-w-sm mt-4">
              Empowering the next generation to make informed, strategic decisions about their education and careers. The future is yours to design.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-mono uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-neon-blue cursor-pointer transition-colors">Home</li>
              <li className="hover:text-neon-blue cursor-pointer transition-colors">Mission</li>
              <li className="hover:text-neon-blue cursor-pointer transition-colors">Services</li>
              <li className="hover:text-neon-blue cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-mono uppercase tracking-wider text-sm">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Mail size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Instagram size={20} /></a>
            </div>
            <div className="mt-4 text-xs text-gray-500 font-mono">
              © {new Date().getFullYear()} Stephan Nicklow.
              <br/>All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};