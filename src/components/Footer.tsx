import { Github, Linkedin, Mail, Terminal, ShieldCheck, Activity } from 'lucide-react';
import { content } from '../data';
import type { Language } from '../types';

export default function Footer({ lang }: { lang: Language }) {
  const t = content[lang];

  // Fonction pour protéger l'email du moissonnage (scraping)
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const user = "nicolaslelan13";
    const domain = "gmail.com";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 pt-16 pb-8 mt-auto overflow-hidden">
      {/* Effet de lueur supérieur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Identité & Réseaux */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xl group cursor-default">
              <Terminal size={24} className="group-hover:rotate-12 transition-transform duration-300"/> 
              <span>&lt;Nicolas LE LAN /&gt;</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs border-l-2 border-slate-800 pl-4">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/le-lan-nicolas" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300">
                <Linkedin size={20}/>
              </a>
              <a href="https://github.com/votre-pseudo" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-white/50 hover:-translate-y-1 transition-all duration-300">
                <Github size={20}/>
              </a>
              {/* Utilisation de la fonction de protection au clic */}
              <button 
                onClick={handleEmailClick}
                className="bg-slate-900 p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/50 hover:-translate-y-1 transition-all duration-300"
                title="Me contacter"
              >
                <Mail size={20}/>
              </button>
            </div>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-cyan-500 rounded-full"></span>
              {t.footer.linksTitle}
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {['about', 'projects', 'education', 'skills'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
                    {t.sectionTitles[item as keyof typeof t.sectionTitles]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status Système (Style Cyber) */}
          <div>
             <h4 className="text-white font-bold mb-6 flex items-center gap-2">
               <span className="w-1 h-4 bg-green-500 rounded-full"></span>
               {t.footer.sysStatusTitle}
             </h4>
             <div className="bg-black/40 p-5 rounded-xl border border-slate-800 font-mono text-xs space-y-3 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
                
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Kernel</span>
                  <span className="text-green-500 font-bold">v.2.0.25</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Security</span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    <ShieldCheck size={12}/> {t.footer.secure}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Uptime</span>
                  <span className="text-yellow-500 flex items-center gap-1">
                    <Activity size={12}/> 99.9%
                  </span>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            {t.footer.operational}
          </div>
        </div>
      </div>
    </footer>
  );
}