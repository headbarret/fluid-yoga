import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate text-sand/80 py-12 border-t border-sand/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1 select-none">
          <div className="font-display font-bold text-xl tracking-widest text-sand flex items-center gap-1.5">
            FLUID
            <Sparkles size={12} className="text-terracotta" />
          </div>
          <p className="text-[10px] uppercase tracking-wider text-sand/40 font-sans">
            Студия йоги & пилатеса
          </p>
        </div>

        {/* Philosophy tag */}
        <div className="text-center md:text-left text-xs font-sans text-sand/50 max-w-xs font-light italic">
          «Замедление — это не слабость. Это сознательный выбор в пользу качества жизни и здоровья тела.»
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center md:items-end gap-1 font-sans text-xs">
          <p className="text-sand/60">
            © {currentYear} Студия FLUID. Все права защищены.
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] text-terracotta hover:underline tracking-wide"
          >
            Aesthetic Portfolio Studio App
          </a>
        </div>

      </div>
    </footer>
  );
}
