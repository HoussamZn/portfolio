import React from 'react';
import { SKILLS } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Skills: React.FC = () => {
  // Group unique categories
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 px-4 bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900 to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Technologies & Tools
            </span>
          </h2>
          <p className="text-slate-500">The arsenal I use to build intelligent systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-xl font-mono text-slate-300 mb-8 border-b border-slate-800 pb-2 inline-block">
                {category}
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {SKILLS.filter(s => s.category === category).map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="relative w-16 h-16 flex items-center justify-center bg-slate-800 rounded-2xl group-hover:bg-slate-800/80 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-slate-700 group-hover:border-slate-600">
                      {/* Glow Effect based on brand color */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                        style={{ backgroundColor: skill.color }}
                      ></div>
                      
                      {skill.iconClass ? (
                        <i className={`${skill.iconClass} text-4xl text-slate-300 group-hover:text-white transition-colors`}></i>
                      ) : (
                        <Brain className="text-slate-300 group-hover:text-white" size={32} />
                      )}
                    </div>
                    <span className="text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;