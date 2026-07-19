import React from 'react';
import { Calendar, ChevronRight, Compass } from 'lucide-react';

export default function Hero() {
  
  // Helper to split text into animated chars to prevent line breaks
  const animateText = (text) => {
    let delayCounter = 0;
    return text.split('').map((char, idx) => {
      if (char === ' ') {
        return <span key={idx}>&nbsp;</span>;
      }
      // Cycles delay classes: delay-0, delay-75, delay-150... delay-1500
      const delayVal = (delayCounter % 21) * 75;
      const delayClass = `delay-${delayVal}`;
      delayCounter++;
      return (
        <span key={idx} className={`float-char ${delayClass}`}>
          {char}
        </span>
      );
    });
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Decorative blurred backdrops */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-slate/10 blur-3xl -z-10 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-terracotta/5 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col space-y-12">
        
        {/* Top: Massive Display Title (Centered) */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          {/* Status alarm floating above */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate/40 border border-sand/5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-ping"></span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-sand/80 font-sans">
              Ближайшее занятие
            </span>
            <span className="h-3 w-[1px] bg-sand/15"></span>
            <span className="text-xs text-sagelight font-sans">
              Йога в гамаках (Сегодня, 19:00) — <strong className="text-terracotta">осталось 2 места</strong>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extralight text-sand leading-[1.1] tracking-tight uppercase pt-4">
            {animateText('Ты не ищешь йогу.')} <br className="hidden sm:inline" />
            <span className="font-serif italic font-light text-terracotta select-none">
              {animateText('Ты ищешь место,')}
            </span> <br />
            {animateText('где можно выдохнуть')}
          </h1>
        </div>

        {/* Bottom: 3-Column Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6">
          
          {/* Col 1: Subtitle & CTA Actions (4/12 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-6 lg:pr-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-terracotta font-sans font-bold uppercase tracking-wider">
                <Compass size={14} />
                <span>Осознанное замедление</span>
              </div>
              <p className="text-base md:text-lg text-sagelight font-sans font-light leading-relaxed">
                <span className="font-display font-semibold tracking-wider text-sand">FLUID</span> — это эстетика чистых линий, физический комфорт и бережный подход к телу. Студия, где практика подстраивается под вас, а не вы под практику.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full pt-2">
              <a 
                href="#booking" 
                className="fluid-morph-btn-lg bg-terracotta text-sand text-center px-8 py-4 font-semibold tracking-wide shadow-md hover:bg-sand hover:text-slate hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Забронировать коврик
                <ChevronRight size={16} />
              </a>
              <a 
                href="#schedule" 
                className="fluid-morph-btn bg-slate text-sand text-center px-8 py-4 font-medium tracking-wide hover:bg-slate/60 transition-all duration-300 flex items-center justify-center gap-2 border border-sand/5"
              >
                <Calendar size={15} />
                Смотреть расписание
              </a>
            </div>
          </div>

          {/* Col 2: Main Tall Vertical Image Frame (5/12 cols) */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[450px] lg:h-[500px]">
            <div className="w-full h-full overflow-hidden fluid-morph-card bg-slate shadow-2xl border border-sand/10 relative group">
              <img 
                src="/images/hall.jpg" 
                alt="Studio interior" 
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000"
              />
            </div>
          </div>

          {/* Col 3: Side Overlapping Secondary Images Stack (3/12 cols) */}
          <div className="lg:col-span-3 flex lg:flex-col gap-6 w-full items-stretch justify-center h-full min-h-[300px] lg:min-h-auto">
            {/* Bamboo Frame */}
            <div className="flex-1 lg:h-[220px] overflow-hidden fluid-morph-card-alt bg-slate shadow-lg border border-sand/10 group">
              <img 
                src="/images/bamboo.jpg" 
                alt="Bamboo decor" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000"
              />
            </div>
            {/* Mats Frame */}
            <div className="flex-1 lg:h-[220px] overflow-hidden fluid-morph-card bg-slate shadow-lg border border-sand/10 group">
              <img 
                src="/images/mats.jpg" 
                alt="Yoga equipment detail" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
