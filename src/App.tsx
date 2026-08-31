/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { WorkProcess } from './components/WorkProcess';
import { Blog } from './components/Blog';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { LiveCustomizer } from './components/LiveCustomizer';

export default function App() {
  return (
    <PortfolioProvider>
      <div id="portfolio-app-root" className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Experience />
          <Certifications />
          <WorkProcess />
          <Blog />
          <Faq />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <Modals />

        {/* Live Customizer Drawer */}
        <LiveCustomizer />
      </div>
    </PortfolioProvider>
  );
}
