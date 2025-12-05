import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
      </main>
      <ChatWidget />
      
      <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} Houssam Zitan. Built with React.</p>
      </footer>
    </div>
  );
};

export default App;