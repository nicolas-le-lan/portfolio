import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react'; // J'ai ajouté l'icône FileText pour le CV
import type { Language } from '../types';

// Import des nouvelles locales
import { fr } from '../locales/fr';
import { en } from '../locales/en';
import { es } from '../locales/es';
import { ja } from '../locales/ja';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({ lang, setLang, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  // Mapping des données
  const dataMap = { fr, en, es, ja };
  const t = dataMap[lang];

  const navigate = useNavigate();
  const location = useLocation();

  // Liste des langues
  const languages: { code: Language; label: string; name: string }[] = [
    { code: 'fr', label: 'FR', name: 'FR' },
    { code: 'en', label: 'EN', name: 'EN' },
    { code: 'es', label: 'ES', name: 'ES' },
    { code: 'ja', label: 'JP', name: 'JP' },
  ];

  // Fonction de navigation fluide pour les ancres (#)
  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false); // Ferme le menu mobile

    // Si on est sur la page CV (/resume), on doit retourner à l'accueil
    if (location.pathname !== '/') {
      navigate('/');
      // Petit délai pour laisser le temps à la page de charger
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Si on est déjà sur l'accueil
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-40 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* LOGO */}
          <button onClick={() => handleNavigation('hero')} className="group flex flex-col leading-tight">
            <span className="font-mono font-bold text-xl text-cyan-400 group-hover:text-cyan-300 transition-colors">
              &lt;Nicolas LE LAN /&gt;
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest group-hover:text-slate-400">
              {t.nav.role}
            </span>
          </button>
          
          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Liens d'ancrage */}
            {[
              { id: 'about', label: t.sectionTitles.about },
              { id: 'projects', label: t.sectionTitles.projects },
              { id: 'education', label: t.sectionTitles.education },
              { id: 'skills', label: t.sectionTitles.skills },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}

            {/* LIEN VERS LE CV (Nouveau) */}
            <Link 
              to="/resume"
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/50 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all text-sm font-bold"
            >
               <FileText size={14} /> CV
            </Link>
            
            <div className="h-4 w-px bg-slate-800 mx-2"></div>

            {/* SÉLECTEUR LANGUE */}
            <div className="flex gap-1 bg-slate-900 p-1 rounded border border-slate-800">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${
                    lang === l.code 
                      ? 'bg-cyan-950 text-cyan-400 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>

          {/* BOUTON MOBILE */}
          <div className="md:hidden flex items-center gap-4">
            {/* Petit bouton CV mobile */}
            <Link to="/resume" className="text-cyan-400">
                <FileText size={20} />
            </Link>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-cyan-400 p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-950 border-b border-slate-800 p-4 shadow-2xl flex flex-col gap-4">
           {[
              { id: 'about', label: t.sectionTitles.about },
              { id: 'projects', label: t.sectionTitles.projects },
              { id: 'education', label: t.sectionTitles.education },
              { id: 'skills', label: t.sectionTitles.skills },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-left text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800/50"
              >
                {item.label}
              </button>
            ))}
            
            <Link 
                to="/resume" 
                className="text-left text-lg font-medium text-cyan-400 py-2 border-b border-slate-800/50 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
            >
                <FileText size={18} /> Voir mon CV
            </Link>

            {/* Langues Mobile */}
            <div className="flex gap-4 pt-2 justify-center">
              {languages.map((l) => (
                <button key={l.code} onClick={() => setLang(l.code)} className={`text-sm ${lang === l.code ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                  {l.name}
                </button>
              ))}
            </div>
        </div>
      )}
    </nav>
  );
}