// src/components/Background.tsx
export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* La couleur de base très sombre */}
      <div className="absolute inset-0 bg-slate-950"></div>

      {/* Les Orbes lumineux animés (Glow effects) */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

      {/* La Grille Cybernétique */}
      <div className="absolute inset-0 cyber-grid-fixed opacity-60"></div>

      {/* Effet "Scanline" subtil (Lignes horizontales TV) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
      
      {/* Vignette (Assombrir les coins) */}
      <div className="absolute inset-0 bg-radial-gradient-t from-transparent via-slate-950/50 to-slate-950"></div>
    </div>
  );
}