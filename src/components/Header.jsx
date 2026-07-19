import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Направления', href: '#directions' },
    { name: 'Расписание', href: '#schedule' },
    { name: 'Наставники', href: '#mentors' },
    { name: 'Абонементы', href: '#subscriptions' },
    { name: 'Контакты', href: '#booking' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-darkslate/80 backdrop-blur-md border-b border-sand/5 py-4 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-display font-semibold text-2xl tracking-widest text-sand flex items-center gap-2">
          FLUID
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sand/80 hover:text-sand font-sans text-sm tracking-wide transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-terracotta after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a 
            href="#booking" 
            className="fluid-morph-btn bg-sand text-slate px-6 py-2.5 text-sm font-medium tracking-wide shadow-md hover:bg-terracotta hover:text-sand hover:shadow-lg transition-all duration-300"
          >
            Записаться
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-sand focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-darkslate border-b border-sand/10 shadow-xl transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <nav className="flex flex-col px-6 py-6 gap-4">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sand/90 text-base font-medium tracking-wide py-2 border-b border-sand/5 last:border-b-0 hover:text-terracotta transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="fluid-morph-btn bg-sand text-slate text-center py-3 font-medium tracking-wide mt-2 block shadow-md hover:bg-terracotta hover:text-sand transition-all"
          >
            Забронировать коврик
          </a>
        </nav>
      </div>
    </header>
  );
}
