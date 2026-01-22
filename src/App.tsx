import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume'; 
import Background from './components/Background';
import type { Language } from './types';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      
      <Background /> 

      <div className="relative z-10 min-h-screen text-slate-200 font-sans selection:bg-cyan-500 selection:text-black flex flex-col">
        
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />
        
        {/* Contenu des pages */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/project/:id" element={<ProjectDetail lang={lang} />} />
            
            <Route path="/resume" element={<Resume lang={lang} />} />
            
          </Routes>
        </AnimatePresence>

        <Footer lang={lang} />
        
      </div>
    </Router>
  );
}

export default App;