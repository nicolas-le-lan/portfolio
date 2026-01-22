import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Printer, MapPin, Linkedin, Github, 
  Terminal, Globe, Briefcase, GraduationCap, Mail, User, Calendar, Phone, Car, Send, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import des locales
import { fr } from '../locales/fr';
import { en } from '../locales/en';
import { es } from '../locales/es';
import { ja } from '../locales/ja';
import type { Language } from '../types';

interface ResumeProps {
  lang: Language;
}

export default function Resume({ lang }: ResumeProps) {
  const dataMap = { fr, en, es, ja };
  const t = dataMap[lang].resume;
  
  // État pour détecter si on est en train d'imprimer
  const [isPrinting, setIsPrinting] = useState(false);

  // --- SÉCURITÉ : OBFUSCATION ASCII ---
  // Données sensibles converties en codes ASCII pour ne pas apparaître en clair dans le code source
  const secureData = {
    emailCodes: [110, 105, 99, 111, 108, 97, 115, 108, 101, 108, 97, 110, 49, 51, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109],
    phoneCodes: [43, 51, 51, 32, 54, 32, 55, 57, 32, 49, 54, 32, 57, 54, 32, 56, 54],
    // Permis B (multilingue)
    license: {
      fr: "Permis B",
      en: "Driving License (B)",
      es: "Licencia B",
      ja: "運転免許 (B)"
    }
  };

  // Fonction utilitaire pour reconstruire le texte depuis les codes ASCII
  const reveal = (codes: number[]) => String.fromCharCode(...codes);

  // --- ACTIONS ---
  
  // Lance l'appel sans jamais afficher le numéro sur la page
  const handlePhoneClick = () => {
    const phone = reveal(secureData.phoneCodes).replace(/\s/g, ''); // Enlève les espaces pour le protocole tel:
    window.location.href = `tel:${phone}`;
  };

  // Ouvre le client mail sans jamais afficher l'adresse sur la page
  const handleEmailClick = () => {
    const email = reveal(secureData.emailCodes);
    window.location.href = `mailto:${email}`;
  };

  // Gestion de l'impression : on révèle les textes le temps de générer le PDF
  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  // Écouteur pour Ctrl+P
  useEffect(() => {
    const handleBeforePrint = () => setIsPrinting(true);
    const handleAfterPrint = () => setIsPrinting(false);
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  // Calcul dynamique des barres de langue
  const getLanguageWidth = (levelString: string): string => {
    const level = levelString.toLowerCase();
    if (level.includes('natif') || level.includes('native') || level.includes('maternelle') || level.includes('c2')) return '100%';
    if (level.includes('c1')) return '85%';
    if (level.includes('b2') || level.includes('850')) return '70%'; 
    if (level.includes('b1')) return '55%'; 
    if (level.includes('a2')) return '40%';
    if (level.includes('a1')) return '25%';
    return '100%';
  };

  return (
    <>
      <style>{`
        @media print {
          @page { margin: 0.8cm 1cm; size: A4; }
          body { background: white; color: #111; -webkit-print-color-adjust: exact; font-size: 11px; }
          
          /* Cacher l'interface web */
          nav, footer, .no-print, .print-hidden-bar, .screen-btn { display: none !important; }
          
          /* Afficher les textes bruts (décodés) */
          .print-only-text { display: inline !important; font-weight: bold; }

          /* Layout */
          #resume-content { display: block !important; width: 100%; box-shadow: none; border: none; padding: 0; }
          a { text-decoration: none; color: #000 !important; cursor: default; }
          
          h1 { font-size: 24px !important; margin-bottom: 4px !important; }
          h2 { font-size: 14px !important; margin-bottom: 8px !important; color: #333 !important; }
          h3 { font-size: 12px !important; margin-bottom: 8px !important; border-bottom: 1px solid #000 !important; }
          p, li { line-height: 1.3 !important; }
          
          .print-grid { display: grid; grid-template-columns: 28% 68%; gap: 4%; }
          article, section { break-inside: avoid; }
        }
      `}</style>

      <div className="min-h-screen bg-slate-950 pt-20 pb-10 print:p-0 print:bg-white print:pt-0">
        
        {/* --- BARRE D'ACTIONS --- */}
        <div className="max-w-[21cm] mx-auto px-4 mb-6 print:hidden flex justify-between items-center no-print">
          <Link to="/" className="text-slate-400 hover:text-cyan-400 transition flex items-center gap-2 text-sm font-mono group">
              <Terminal size={16} className="group-hover:rotate-180 transition-transform"/> 
              cd /portfolio
          </Link>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/20 transition-all"
          >
            <Printer size={18} /> 
            <span>{t.labels.download}</span>
          </motion.button>
        </div>

        {/* --- DOCUMENT CV --- */}
        <main id="resume-content" className="max-w-[21cm] mx-auto bg-slate-900 text-slate-200 shadow-2xl overflow-hidden print:max-w-full print:bg-white print:text-black print:shadow-none print:overflow-visible">
          
          {/* === HEADER === */}
          <header className="p-8 border-b border-slate-800 bg-slate-900/50 print:bg-white print:p-0 print:border-0 print:mb-4">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="w-full">
                      <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight print:text-black uppercase">
                          {t.profile.name}
                      </h1>
                      <h2 className="text-xl text-cyan-400 font-mono mb-4 flex items-center gap-2 print:text-gray-800 print:text-lg print:font-bold print:mb-2">
                          {t.profile.title}
                      </h2>
                      <p className="text-slate-400 text-sm leading-relaxed text-justify max-w-2xl print:text-black print:text-xs">
                          {t.profile.summary}
                      </p>
                  </div>

                  {/* Coordonnées */}
                  <address className="w-full md:w-auto text-sm text-slate-400 space-y-2 mt-4 md:mt-0 not-italic print:text-black print:text-xs print:text-right print:min-w-[240px] print:space-y-0.5">
                      
                      {/* Localisation */}
                      <div className="flex items-center md:justify-end gap-2">
                          <MapPin size={14} className="text-cyan-500 print:hidden"/> 
                          <span>{t.profile.location}</span>
                      </div>
                      
                      {/* TÉLÉPHONE */}
                      <div className="flex items-center md:justify-end gap-2">
                          <Phone size={14} className="text-cyan-500 print:hidden"/>
                          
                          {/* Écran : Bouton d'action (Lance l'appel) */}
                          <button 
                            onClick={handlePhoneClick}
                            className="screen-btn text-cyan-400 hover:text-white transition-colors text-right flex items-center gap-1 hover:underline cursor-pointer"
                            title="Appeler"
                          >
                            <span>Appeler</span> <ExternalLink size={10} />
                          </button>
                          
                          {/* Print : Numéro en clair (visible seulement si impression) */}
                          <span className={`hidden ${isPrinting ? 'print-only-text' : ''}`}>
                            {reveal(secureData.phoneCodes)}
                          </span>
                      </div>

                      {/* EMAIL */}
                      <div className="flex items-center md:justify-end gap-2">
                          <Mail size={14} className="text-cyan-500 print:hidden"/>
                          
                          {/* Écran : Bouton d'action (Ouvre le mail) */}
                          <button 
                            onClick={handleEmailClick}
                            className="screen-btn text-cyan-400 hover:text-white transition-colors text-right flex items-center gap-1 hover:underline cursor-pointer"
                            title="Envoyer un email"
                          >
                            <span>Envoyer un email</span> <Send size={10} />
                          </button>
                          
                          {/* Print : Email en clair (visible seulement si impression) */}
                          <span className={`hidden ${isPrinting ? 'print-only-text' : ''}`}>
                            {reveal(secureData.emailCodes)}
                          </span>
                      </div>

                      {/* Permis B */}
                      <div className="flex items-center md:justify-end gap-2">
                          <Car size={14} className="text-cyan-500 print:hidden"/>
                          <span>{secureData.license[lang]}</span>
                      </div>

                      <div className="flex items-center md:justify-end gap-2">
                          <Linkedin size={14} className="text-cyan-500 print:hidden"/> 
                          <a href={t.contact.linkedin_url} target="_blank" rel="noreferrer" className="hover:text-white print:hover:underline">
                            linkedin.com/in/le-lan-nicolas
                          </a>
                      </div>
                      <div className="flex items-center md:justify-end gap-2">
                          <Github size={14} className="text-cyan-500 print:hidden"/> 
                          <a href={t.contact.github_url} target="_blank" rel="noreferrer" className="hover:text-white print:hover:underline">
                             github.com/nicolas-le-lan
                          </a>
                      </div>
                  </address>
              </div>
          </header>

          <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 print-grid print:p-0">
              
              {/* === COLONNE GAUCHE === */}
              <aside className="md:col-span-4 space-y-8 print-col-left print:space-y-4 print:pr-2">
                  <section>
                      <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3 border-b border-cyan-900/30 pb-1 flex items-center gap-2 print:text-black print:border-black print:mb-2 print:pb-1">
                          <Terminal size={14} className="print:hidden"/> {t.labels.skills}
                      </h3>
                      <ul className="flex flex-wrap gap-2 print:block print:space-y-0.5">
                          {t.skills.map((skill, i) => (
                              <li key={i} className="px-2 py-1 bg-slate-800 rounded text-xs text-cyan-200 border border-slate-700 print:bg-transparent print:text-black print:border-0 print:p-0 print:block print:text-xs print:font-medium">
                                  • {skill}
                              </li>
                          ))}
                      </ul>
                  </section>

                  <section>
                      <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3 border-b border-cyan-900/30 pb-1 flex items-center gap-2 print:text-black print:border-black print:mb-2 print:pb-1">
                          <Globe size={14} className="print:hidden"/> {t.labels.langs}
                      </h3>
                      <ul className="space-y-4 print:space-y-0.5">
                          {t.languages.map((l, i) => (
                              <li key={i} className="print:flex print:justify-between print:items-center">
                                  <div className="flex justify-between items-end mb-1 print:mb-0 print:w-full">
                                      <span className="text-slate-200 text-sm font-medium print:text-black print:text-xs print:font-bold">
                                        {l.name} <span className="hidden print:inline">:</span>
                                      </span>
                                      <span className="text-xs text-cyan-400 font-mono print:text-gray-700 print:text-xs">
                                        {l.level}
                                      </span>
                                  </div>
                                  
                                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden print-hidden-bar">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      whileInView={{ width: getLanguageWidth(l.level) }}
                                      transition={{ duration: 1, delay: i * 0.1 }}
                                      className="h-full bg-cyan-500"
                                    />
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </section>

                  <section>
                      <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3 border-b border-cyan-900/30 pb-1 flex items-center gap-2 print:text-black print:border-black print:mb-2 print:pb-1">
                          <User size={14} className="print:hidden"/> {t.labels.interests}
                      </h3>
                      <p className="text-sm text-slate-400 print:text-black print:text-xs leading-relaxed">
                          {t.interests}
                      </p>
                  </section>
              </aside>

              {/* === COLONNE DROITE === */}
              <div className="md:col-span-8 space-y-8 print-col-right print:space-y-4">
                  <section>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-slate-700 pb-2 print:text-black print:border-black print:text-base print:mb-2 print:pb-1 uppercase">
                          <Briefcase size={18} className="text-cyan-500 print:hidden"/> 
                          {t.labels.exp}
                      </h3>
                      <div className="space-y-6 print:space-y-3">
                          {t.experience.map((exp, i) => (
                              <article key={i} className="relative pl-4 border-l-2 border-slate-800 print:border-l-2 print:border-gray-200 print:pl-3 print-compact">
                                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-cyan-500 print:hidden"></div>
                                  <div className="flex flex-col sm:flex-row justify-between items-start mb-1 print:mb-0">
                                      <h4 className="text-base font-bold text-white print:text-black print:text-sm uppercase">{exp.role}</h4>
                                      <div className="flex items-center gap-1 text-xs font-mono text-cyan-300 print:text-black print:font-bold">
                                          <Calendar size={12} className="print:hidden"/> {exp.date}
                                      </div>
                                  </div>
                                  <div className="text-cyan-500 text-xs font-bold uppercase mb-2 tracking-wide print:text-gray-700 print:mb-1 print:text-xs">
                                      {exp.company} <span className="text-slate-500 print:text-gray-500">| {exp.location}</span>
                                  </div>
                                  <ul className="space-y-1">
                                    {exp.details && exp.details.map((detail, d) => (
                                      <li key={d} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2 print:text-black print:text-xs print:leading-tight print:text-justify">
                                        <span className="text-cyan-500 mt-1.5 text-[6px] print:text-black print:mt-1.5">•</span>
                                        <span className="flex-1">{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                              </article>
                          ))}
                      </div>
                  </section>

                  <section>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-slate-700 pb-2 print:text-black print:border-black print:text-base print:mb-2 print:pb-1 uppercase">
                          <GraduationCap size={18} className="text-cyan-500 print:hidden"/> 
                          {t.labels.edu}
                      </h3>
                      <div className="space-y-5 print:space-y-3">
                          {t.education.map((edu, i) => (
                              <article key={i} className="print-compact">
                                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-0.5">
                                      <h4 className="text-sm font-bold text-slate-200 print:text-black print:text-sm">{edu.school}</h4>
                                      <span className="text-xs font-mono text-slate-500 print:text-black print:font-bold">{edu.date}</span>
                                  </div>
                                  <div className="text-cyan-400 text-sm font-medium mb-1 print:text-gray-700 print:text-xs print:italic">{edu.degree}</div>
                                  <ul className="space-y-0.5">
                                      {edu.details && edu.details.map((detail, d) => (
                                          <li key={d} className="text-slate-400 text-xs flex items-start gap-2 print:text-black">
                                              <span className="text-cyan-500 mt-1 text-[6px] print:text-black print:mt-1.5">●</span>
                                              <span className="flex-1">{detail}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </article>
                          ))}
                      </div>
                  </section>
              </div>
          </div>
        </main>
      </div>
    </>
  );
}