import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceCard: React.FC<{ exp: any; index: number }> = ({ exp, index }) => (
  <motion.div 
    className="relative pl-8 mb-12 last:mb-0 group"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    {/* Timeline Line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
    
    {/* Timeline Dot */}
    <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full border border-slate-900 ${exp.type === 'work' ? 'bg-primary shadow-[0_0_10px_rgba(14,165,233,0.5)]' : 'bg-accent shadow-[0_0_10px_rgba(139,92,246,0.5)]'}`}></div>

    <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all hover:translate-x-2">
      <div className="flex flex-col mb-4">
        <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
        <h4 className={`text-sm font-bold uppercase tracking-wider mt-1 ${exp.type === 'work' ? 'text-primary' : 'text-accent'}`}>
          {exp.company}
        </h4>
      </div>
      
      <div className="flex items-center text-slate-500 mb-4 text-xs font-mono">
        <Calendar size={12} className="mr-2" />
        <span className="mr-4">{exp.period}</span>
        {exp.type === 'work' && <MapPin size={12} className="mr-2" />}
        {exp.type === 'work' && <span>{exp.loc}</span>}
      </div>

      {exp.type === 'work' &&
      <ul className="space-y-2">
        {exp.description.map((item: string, i: number) => (
          <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
            <span className="mr-2 text-slate-600 mt-1">›</span>
            {item}
          </li>
        ))}
      </ul>
      }
    </div>
  </motion.div>
);

const Experience: React.FC = () => {
  const workExperience = EXPERIENCES.filter(e => e.type === 'work');
  const education = EXPERIENCES.filter(e => e.type === 'education');

  return (
    <section id="experience" className="py-24 px-4 bg-surface relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-950/0 to-slate-950/0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Journey So Far
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            A timeline of my professional career and academic achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Work Column */}
          <div>
            <div className="flex items-center mb-10 text-primary">
              <Briefcase className="mr-3" size={24} />
              <h3 className="text-2xl font-bold font-mono">Professional Experiences</h3>
            </div>
            <div>
              {workExperience.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center mb-10 text-accent">
              <GraduationCap className="mr-3" size={24} />
              <h3 className="text-2xl font-bold font-mono">Education</h3>
            </div>
            <div>
              {education.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;