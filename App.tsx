import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { FutureAI } from './components/FutureAI';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ApproachPage } from './components/ApproachPage';
import { SignUpPage } from './components/SignUpPage';
import { Page } from './types';

function App() {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);

  const handleNavigate = (page: Page, sectionId?: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId && page === Page.HOME) {
      // If navigating to a section on the home page, wait a bit for render then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="bg-neon-dark text-white font-sans selection:bg-neon-cyan selection:text-black min-h-screen flex flex-col">
      <Navigation activePage={activePage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {activePage === Page.HOME && <HomePage onNavigate={handleNavigate} />}
        {activePage === Page.ABOUT && <AboutPage />}
        {activePage === Page.APPROACH && <ApproachPage />}
        {activePage === Page.SIGNUP && <SignUpPage />}
      </main>

      <Footer />
      <FutureAI />
    </div>
  );
}

export default App;