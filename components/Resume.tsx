import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-4 bg-surface relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4">
            <FileText className="text-primary" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Resume / <span className="text-slate-500">CV</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A detailed overview of my academic qualifications and industry experience.
          </p>
        </motion.div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-2 md:p-4 shadow-2xl">
          <div className="flex justify-between items-center mb-4 px-4 py-2 bg-slate-800/50 rounded-xl">
             <span className="text-sm font-mono text-slate-400 hidden md:block">filename: {PERSONAL_INFO.name.replace(' ', '_').toUpperCase()}.pdf</span>
             <div className="flex gap-3">
               <a 
                 href={PERSONAL_INFO.resumeUrl} 
                 target="_blank" 
                 rel="noreferrer"
                 className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-white transition-colors"
               >
                 <ExternalLink size={16} /> <span className="hidden sm:inline">Open New Tab</span>
               </a>
               <a 
                 href={PERSONAL_INFO.resumeUrl} 
                 download
                 className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-sky-600 rounded-lg text-sm text-white font-medium transition-colors shadow-lg shadow-primary/20"
               >
                 <Download size={16} /> <span>Download PDF</span>
               </a>
             </div>
          </div>
          
          <div className="w-full h-[600px] md:h-[800px] bg-slate-800 rounded-xl overflow-hidden relative">
            {/* Fallback for when PDF cannot be embedded or for the mockup */}
            <iframe 
                src={PERSONAL_INFO.resumeUrl} 
                className="w-full h-full"
                title="Resume PDF"
            >
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                    <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
                </div>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;