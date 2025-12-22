import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Award, Terminal, Cpu, ChevronDown, User, CheckCircle, Globe, LayoutGrid, Github, Linkedin, Mail } from 'lucide-react';
import { content, iconMap, hardSkills } from '../data';
import type { Language } from '../types';

const Typewriter = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset quand la langue change
  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
  }, [text]);

  // Animation d'écriture
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default function Home({ lang }: { lang: Language }) {
  const t = content[lang];
  const IconProject = (name: string) => { const Icon = iconMap[name]; return <Icon className="w-10 h-10 text-cyan-400 mb-4" />; };

  return (
    <div className="w-full">
      
      {/*HERO SECTION*/}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Badge Status */}
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t.meta.date}
          </div>

          <h1 className="heading-hero drop-shadow-2xl mb-4">
            {t.hero.title}
          </h1>
          
          <h2 className="text-xl md:text-2xl font-mono mb-10 h-12 flex justify-center items-center">
            <span className="text-slate-500 mr-2">&gt;</span>
            <span className="text-cyan-400 font-bold"><Typewriter text={t.hero.subtitle} delay={30} /></span>
            <span className="animate-pulse text-cyan-400 ml-1">_</span>
          </h2>

          {/* RÉSEAUX SOCIAUX */}
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://linkedin.com/in/le-lan-nicolas" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition transform duration-200">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/nicolas-le-lan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition transform duration-200">
              <Github size={28} />
            </a>
            <a href="mailto:nicolaslelan13@gmail.com" className="text-slate-400 hover:text-red-400 hover:scale-110 transition transform duration-200">
              <Mail size={28} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#about" className="btn-primary">
              <User size={18} /> {t.sectionTitles.about}
            </a>
            <a href="#projects" className="btn-outline">
              {t.hero.cta} <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
        >
          <ChevronDown size={30} />
        </motion.div>
      </section>

      {/*A PROPOS (TERMINAL)*/}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 items-stretch"
          >
            {/* Stats Card */}
            <div className="w-full lg:w-1/3">
               <div className="glass-panel p-6 h-full flex flex-col">
                  <div className="w-full aspect-square bg-slate-900/50 rounded mb-6 flex items-center justify-center border border-slate-700/50 shadow-inner group">
                    <img
                      src="/profile.png"
                      alt="Nicolas Le Lan"
                    />
                  </div>
                  <div className="space-y-4 mt-auto">
                    {t.aboutMe?.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
                        <span className="text-cyan-400 font-mono text-sm font-bold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* Terminal Window */}
            <div className="w-full lg:w-2/3 flex flex-col">
               <h3 className="heading-section text-left mb-6 flex items-center gap-3 !text-3xl">
                 <Terminal className="text-cyan-500" /> {t.sectionTitles.about}
               </h3>
               
               <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-700 bg-slate-900/90 flex-grow flex flex-col hover:border-cyan-500/30 transition-colors">
                 {/* Terminal Header */}
                 <div className="bg-slate-950 p-3 flex gap-2 items-center border-b border-slate-800">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-slate-500 ml-4 font-mono">bash — user: nicolas — 80x24</span>
                 </div>
                 {/* Terminal Body */}
                 <div className="p-6 text-slate-300 font-mono text-sm md:text-base leading-relaxed flex-grow">
                    {t.aboutMe?.text.map((paragraph, i) => (
                      <div key={i} className="mb-6">
                        <div className="flex gap-2 mb-2 opacity-70">
                          <span className="text-green-500">➜</span>
                          <span className="text-cyan-400">~</span>
                          <span className="text-slate-500">cat bio_part_{i+1}.txt</span>
                        </div>
                        <p className="pl-0 md:pl-4 text-slate-200 border-l-2 border-slate-700/50 ml-1 md:ml-2 p-2">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                    <div className="flex gap-2 items-center mt-4">
                        <span className="text-green-500">➜</span>
                        <span className="text-cyan-400">~</span>
                        <span className="animate-pulse text-cyan-500 block h-5 w-2 bg-cyan-500"></span>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/*PROJETS*/}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <h3 className="heading-section flex items-center justify-center gap-3">
            <LayoutGrid className="text-cyan-500"/> {t.sectionTitles.projects}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((p) => (
              <Link key={p.id} to={`/project/${p.id}`} className="block h-full">
                <motion.div 
                  whileHover={{ y: -5 }} 
                  className="cyber-card h-full flex flex-col group relative overflow-hidden"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 p-2 opacity-50">
                    <div className="w-16 h-16 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-xl"></div>
                  </div>

                  <div className="flex justify-between items-start mb-6">
                    {IconProject(p.iconName)}
                    <span className="text-[10px] font-mono text-slate-400 border border-slate-700 px-2 py-1 rounded bg-slate-950/50">
                      ID_0{p.id}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-blue-400 font-bold uppercase mb-4 tracking-wider">
                    {p.company}
                  </p>
                  <p className="text-slate-400 text-sm flex-grow mb-6 leading-relaxed">
                    {p.shortDesc}
                  </p>
                  
                  <div className="mt-auto flex items-center text-cyan-500 font-mono text-sm pt-4 border-t border-slate-700/50 group-hover:border-cyan-500/30">
                    <span className="mr-2">&gt; {t.sectionTitles.moreInfo}</span> 
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*EDUCATION*/}
      <section id="education" className="section-padding">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="heading-section flex items-center justify-center gap-3">
            <Award className="text-cyan-500"/> {t.sectionTitles.education}
          </h3>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-900 before:to-transparent">
            {t.education.map((edu, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-700 bg-slate-950 group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                  <div className="absolute inset-0 bg-cyan-500 blur opacity-0 group-hover:opacity-20 transition"></div>
                  <Award size={18} className="text-slate-500 group-hover:text-cyan-400 relative z-10" />
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 hover:bg-slate-800/40 transition">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                     <h4 className="font-bold text-lg text-white">{edu.school}</h4>
                     <span className="text-xs font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-900/50 px-2 py-1 rounded w-fit whitespace-nowrap">
                       {edu.date}
                     </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                    <MapPin size={14}/> {edu.location}
                  </div>
                  <h5 className="font-bold text-blue-400 text-sm mb-2">{edu.degree}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">{edu.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*SKILLS*/}
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <h3 className="heading-section flex items-center justify-center gap-3">
            <Cpu className="text-cyan-500"/> {t.sectionTitles.skills}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Hard Skills */}
            <div className="glass-panel p-8">
              <h4 className="text-xl font-bold mb-8 text-cyan-400 flex items-center gap-3 border-b border-slate-700 pb-4">
                <Terminal size={24}/> {t.skillsCategory.tools}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {hardSkills.map((s, i) => { const Icon = s.icon; return (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.02, borderColor: 'rgba(6,182,212,0.5)' }}
                    className="flex items-center gap-3 bg-slate-950/50 p-4 rounded border border-slate-700 transition cursor-default group"
                  >
                    <Icon size={20} className="text-slate-500 group-hover:text-cyan-400 transition-colors"/> 
                    <span className="font-mono text-sm text-slate-300">{s.name}</span>
                  </motion.div>
                )})}
              </div>
            </div>

            {/* Langues */}
            <div className="glass-panel p-8">
              <h4 className="text-xl font-bold mb-8 text-cyan-400 flex items-center gap-3 border-b border-slate-700 pb-4">
                <Globe size={24}/> {t.skillsCategory.languages}
              </h4>
              <div className="space-y-8">
                {t.languages.map((l, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-medium text-slate-200">{l.name}</span> 
                      <span className="text-xs text-slate-400 font-mono border border-slate-700 px-2 rounded">{l.level}</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: l.level.includes('A1') ? '20%' : l.level.includes('A2') ? '40%' : l.level.includes('B1') ? '60%' : l.level.includes('B2') ? '80%' : l.level.includes('C1') ? '90%' : '100%' }}
                        transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-700 to-cyan-400 relative"
                      >
                         {/* Shine effect on bar */}
                         <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-white/20 to-transparent"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*CONCLUSION*/}
      <section id="conclusion" className="py-24 border-t border-slate-800/50 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="heading-section mb-12">{t.sectionTitles.conclusion}</h3>
            
            <div className="relative glass-panel p-8 md:p-12 overflow-hidden group hover:border-cyan-500/30 transition-colors">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition duration-700"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition duration-700"></div>
                
                <h4 className="text-xl font-bold text-cyan-400 mb-6 flex items-center justify-center gap-2">
                    <CheckCircle /> {t.sectionTitles.projection}
                </h4>
                <p className="text-lg md:text-xl leading-relaxed text-slate-300 italic max-w-2xl mx-auto font-light">
                    "{t.conclusion.projectionText}"
                </p>
            </div>
        </div>
      </section>

    </div>
  );
}