import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Mail, Brain, Cpu, Phone, Check } from 'lucide-react';

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = Math.min(Math.floor(width * height / 15000), 100);
    const connectionDistance = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(14, 165, 233, 0.4)'; 
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contactActions = [
    { 
      type: 'link', 
      icon: Github, 
      href: PERSONAL_INFO.github, 
      id: 'github',
      label: 'GitHub'
    },
    { 
      type: 'link', 
      icon: Linkedin, 
      href: PERSONAL_INFO.linkedin, 
      id: 'linkedin',
      label: 'LinkedIn'
    },
    { 
      type: 'copy', 
      icon: Mail, 
      value: PERSONAL_INFO.email, 
      id: 'email',
      label: 'Copy Email'
    },
    { 
      type: 'copy', 
      icon: Phone, 
      value: PERSONAL_INFO.phone, 
      id: 'phone',
      label: 'Copy Phone'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark py-28 lg:py-0">
      {/* Canvas Neural Network Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-30"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.3)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Info & Code */}
        {/* ORDER: order-2 on mobile (bottom), order-1 on desktop (left) */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
          
         

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col items-center lg:items-start"
          >
            <h1 className="text-5xl mt-16 md:text-7xl font-bold mb-4 tracking-tighter leading-tight text-white">
              {PERSONAL_INFO.name}
            </h1>
            
            <h2 className="text-xl md:text-2xl font-mono text-primary mb-8 flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-slate-500">&gt;</span>
              <TypewriterText text={PERSONAL_INFO.title} delay={800} />
              <span className="animate-pulse w-3 h-6 bg-primary block"></span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-primary/30 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300 tracking-wider">SYSTEM ONLINE</span>
            </motion.div>

            {/* Python Code Window */}
            <div className="w-full max-w-xl bg-[#0d1117] rounded-xl border border-slate-800 shadow-2xl overflow-hidden text-left font-mono text-sm md:text-base mb-10 group hover:border-slate-700 transition-colors mx-auto lg:mx-0">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-auto text-xs text-slate-500 font-sans">portfolio.py</div>
              </div>
              
              {/* Python Code Content */}
              <div className="p-4 md:p-6 text-slate-300 leading-relaxed overflow-x-auto">
                 <div className="whitespace-pre">
                    <span className="text-purple-400">class</span> <span className="text-yellow-300">DataScientist</span>(<span className="text-blue-400">Student</span>):
                 </div>
                 <div className="whitespace-pre pl-4 mt-2">
                    <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-orange-300">self</span>):
                 </div>
                 <div className="whitespace-pre pl-8 mt-1">
                    <span className="text-sky-300">self</span>.<span className="text-slate-200">name</span> <span className="text-purple-400">=</span> <span className="text-green-400">"{PERSONAL_INFO.name}"</span>
                 </div>
                 <div className="whitespace-pre pl-8 mt-1">
                    <span className="text-sky-300">self</span>.<span className="text-slate-200">degree</span> <span className="text-purple-400">=</span> <span className="text-green-400">"{PERSONAL_INFO.degree}"</span>
                 </div>
                 
                 <div className="whitespace-pre pl-4 mt-3">
                    <span className="text-purple-400">def</span> <span className="text-blue-400">mission</span>(<span className="text-orange-300">self</span>):
                 </div>
                 <div className="whitespace-pre pl-8 mt-1">
                    <span className="text-purple-400">return</span> <span className="text-green-400">"Solving problems with data & AI..."</span>
                 </div>
              </div>
            </div>

            <div className="flex gap-4">
               {contactActions.map((item) => {
                 const Icon = item.icon;
                 const isCopied = copied === item.id;
                 
                 // Styling for both buttons and links
                 const buttonClass = "relative p-3 bg-slate-800 rounded-lg hover:bg-primary hover:text-white text-slate-400 transition-all duration-300 border border-slate-700 hover:border-primary hover:-translate-y-1 cursor-pointer group";

                 if (item.type === 'link') {
                   return (
                     <a 
                       key={item.id}
                       href={item.href} 
                       target="_blank" 
                       rel="noreferrer" 
                       className={buttonClass}
                       title={item.label}
                     >
                       <Icon size={22} />
                     </a>
                   );
                 }

                 return (
                   <button 
                     key={item.id}
                     onClick={() => handleCopy(item.value || '', item.id)}
                     className={buttonClass}
                     title={item.label}
                     aria-label={item.label}
                   >
                     {isCopied ? <Check size={22} className="text-green-400" /> : <Icon size={22} />}
                     {isCopied && (
                       <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg animate-bounce whitespace-nowrap">
                         Copied!
                       </span>
                     )}
                   </button>
                 );
               })}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Portrait */}
        {/* ORDER: order-1 on mobile (top), order-2 on desktop (right) */}
        <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
           <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
            
            {/* --- ORBITAL ANIMATION LAYERS --- */}

            {/* Layer 1: Outer Dashed Ring (Slow Clockwise) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-slate-800 border-dashed"
            />
            
            {/* Layer 2: Middle Tech Ring (Medium Counter-Clockwise) */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-slate-800/50 border-t-primary/20 border-r-transparent border-b-primary/20 border-l-transparent border-[1px]"
            />

            {/* Layer 3: Inner Fast Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 rounded-full border border-slate-800/30 border-l-primary/40 border-t-transparent border-r-transparent border-b-transparent border-[2px]"
            />

            {/* Layer 4: Orbiting Particle */}
            <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(14,165,233,0.8)] blur-[1px]"></div>
            </motion.div>

            {/* --- CORE IMAGE CONTAINER --- */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-900 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10 group bg-slate-950">
               
               {/* Portrait Image */}
               <img 
                 src={PERSONAL_INFO.portraitUrl} 
                 alt="Profile" 
                 className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
               />
               
               {/* Holographic Scanner Beam */}
               <motion.div
                 className="absolute inset-0 w-full h-[30%] bg-gradient-to-b from-transparent via-primary/20 to-transparent z-20 pointer-events-none"
                 animate={{ top: ['-30%', '130%'] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               />

               {/* Scanline Texture */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
            </div>

            {/* --- FLOATING BADGES --- */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 lg:right-0 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-2.5 rounded-2xl shadow-xl z-20"
            >
              <Brain className="text-primary w-6 h-6" />
            </motion.div>

             <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 left-4 lg:left-0 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-2.5 rounded-2xl shadow-xl z-20"
            >
              <Cpu className="text-secondary w-6 h-6" />
            </motion.div>

          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-slate-500 hover:text-white transition-colors hidden lg:block"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="animate-bounce" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;