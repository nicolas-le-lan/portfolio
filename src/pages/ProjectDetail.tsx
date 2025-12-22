import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Settings, CheckSquare, FileText } from 'lucide-react';
import { content, iconMap } from '../data';
import type { Language } from '../types';

export default function ProjectDetail({ lang }: { lang: Language }) {
  const { id } = useParams();
  const t = content[lang];
  const project = t.projects.find(p => p.id === Number(id));

  // Gestion d'erreur
  if (!project) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-slate-400 gap-4">
      <h2 className="text-3xl font-bold text-white">404 - Project Not Found</h2>
      <Link to="/" className="text-cyan-400 hover:underline">Return to Base</Link>
    </div>
  );

  const Icon = iconMap[project.iconName];

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {/* BOUTON RETOUR */}
        <Link 
          to="/" 
          className="inline-flex items-center text-slate-500 hover:text-cyan-400 mb-8 font-medium transition-colors group px-4 py-2 rounded border border-transparent hover:border-slate-800 hover:bg-slate-900/50"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          {t.sectionTitles.back}
        </Link>
        
        {/* CONTAINER PRINCIPAL */}
        <div className="glass-panel overflow-hidden relative">
          
          {/* HEADER AVEC FOND SUBTIL */}
          <div className="relative p-8 md:p-12 border-b border-slate-700/50 bg-slate-900/30">
             {/* Icône Géante en Fond */}
             <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-10 -translate-y-10 pointer-events-none">
                {Icon && <Icon size={250} />}
             </div>

             <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-cyan-950/40 text-cyan-400 border border-cyan-800/50 px-3 py-1 rounded-full text-xs font-mono tracking-wide shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">
                  {project.title}
                </h1>
                <p className="text-xl text-blue-400 font-medium font-mono">
                  {project.company}
                </p>
             </div>
          </div>

          {/* CONTENU DU PROJET */}
          <div className="p-8 md:p-12 grid gap-12">
            
            {/* CONTEXTE */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3 border-l-4 border-blue-500 pl-4">
                <FileText className="text-blue-500" /> {t.sectionTitles.context}
              </h2>
              <p className="text-slate-300 leading-relaxed bg-slate-950/30 p-6 rounded-lg border border-slate-700/50">
                {project.context}
              </p>
            </section>

            {/* OBJECTIFS & RESULTATS */}
            <div className="grid md:grid-cols-2 gap-8">
                <section>
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3 border-l-4 border-red-500 pl-4">
                        <Target className="text-red-500" /> {t.sectionTitles.objectives}
                    </h2>
                    <div className="bg-slate-950/30 p-6 rounded-lg border border-slate-700/50 h-full">
                        <p className="text-slate-300 leading-relaxed">
                            {project.objectives}
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3 border-l-4 border-green-500 pl-4">
                        <CheckSquare className="text-green-500" /> {t.sectionTitles.results}
                    </h2>
                    <div className="bg-slate-950/30 p-6 rounded-lg border border-slate-700/50 h-full">
                        <ul className="space-y-4">
                        {project.results.map((res, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                                <div className="mt-1 min-w-[20px] text-green-500">
                                    <CheckSquare size={16} />
                                </div>
                                <span className="text-slate-300">{res}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </section>
            </div>

            {/* PROCESSUS */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-l-4 border-purple-500 pl-4">
                <Settings className="text-purple-500" /> {t.sectionTitles.process}
              </h2>
              <div className="space-y-4">
                {project.process.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-950/50 p-4 rounded border border-slate-800 hover:border-purple-500/30 transition-colors group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900/20 text-purple-400 border border-purple-800/50 flex items-center justify-center font-bold font-mono text-sm group-hover:bg-purple-900/40 group-hover:scale-110 transition-all">
                        {i+1}
                    </div>
                    <span className="text-slate-300 text-sm md:text-base">{step}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </motion.div>
    </div>
  );
}