import React from 'react';
import { Award, Compass, Quote } from 'lucide-react';

export default function Mentors() {
  const mentors = [
    {
      id: 'anna',
      name: 'Анна',
      role: 'Хатха & Аэройога',
      experience: '8 лет',
      photo: '/images/anna.jpg',
      approach: 'Мягкое выравнивание, осознанность в каждом движении и бережная работа с позвоночником.',
      quote: 'Йога начинается там, где заканчивается попытка быть идеальным.',
    },
    {
      id: 'sergey',
      name: 'Сергей',
      role: 'Анатомический Пилатес',
      experience: '6 лет',
      photo: '/images/sergey.jpg',
      approach: 'Спиральная стабилизация, анатомическая точность движений и укрепление мышечного баланса.',
      quote: 'Стабильность — это не когда тебя не шатает. Это когда ты знаешь, как вернуть центр.',
    },
    {
      id: 'olga',
      name: 'Ольга',
      role: 'Стретчинг & МФР',
      experience: '5 лет',
      photo: '/images/olga.jpg',
      approach: 'Миофасциальное восстановление, снятие эмоциональных зажимов через тело, бережная растяжка.',
      quote: 'Гибкость — это свобода. Не только в теле.',
    },
  ];

  return (
    <section id="mentors" className="py-24 relative bg-slate/10 border-b border-sand/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            Наша команда
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light text-sand">
            Подиум наставников <span className="font-serif italic text-terracotta">The Teachers</span>
          </h2>
          <p className="text-sm md:text-base text-sagelight/80 font-sans font-light">
            Наши мастера — ваши проводники на пути к глубокому физическому комфорту и балансу. Наведите на карточку, чтобы узнать философию мастера.
          </p>
        </div>

        {/* Polaroid Deck grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 items-center">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="flip-card w-full max-w-[320px] h-[440px] mx-auto cursor-pointer group hover:-translate-y-3 hover:scale-[1.02] hover:rotate-1 hover:shadow-terracotta/5 transition-all duration-500">
              
              <div className="flip-card-inner w-full h-full shadow-lg hover:shadow-2xl transition-all duration-700">
                
                {/* Front Side: Polaroid Style (Dark Mode with shifting organic borders) */}
                <div className="flip-card-front bg-slate p-4 pb-8 flex flex-col justify-between border border-sand/10 shadow-lg rounded-[28px_14px_36px_18px] group-hover:rounded-[14px_28px_18px_36px] transition-all duration-700 relative overflow-hidden">
                  {/* Polaroid Square Photo */}
                  <div className="w-full aspect-square overflow-hidden bg-darkslate/60 border border-sand/5 relative rounded-[20px_10px_24px_12px] group-hover:rounded-[10px_20px_12px_24px] transition-all duration-700">
                    <img 
                      src={mentor.photo} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000"
                    />
                    {/* Polaroid paper shine overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none"></div>
                  </div>
                  
                  {/* Polaroid Bottom Text */}
                  <div className="text-center pt-5 space-y-1 select-none">
                    <h3 className="font-serif font-light text-3xl text-sand italic leading-none">
                      {mentor.name}
                    </h3>
                    <p className="text-[10px] font-sans font-semibold uppercase tracking-wider text-terracotta/90 pt-0.5">
                      {mentor.role}
                    </p>
                  </div>
                </div>

                {/* Back Side: Philosophy Bio with matching shifting organic borders */}
                <div className="flip-card-back bg-slate text-sand p-8 flex flex-col justify-between rounded-[28px_14px_36px_18px] group-hover:rounded-[14px_28px_18px_36px] shadow-2xl border border-sand/15 transition-all duration-700 relative overflow-hidden">
                  
                  {/* Back BG light gradient element */}
                  <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-terracotta/10 blur-xl"></div>
                  
                  {/* Top Stats */}
                  <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-center border-b border-sand/10 pb-4">
                      <h3 className="font-display font-medium text-xl text-sand tracking-wide">
                        {mentor.name}
                      </h3>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-terracotta text-sand rounded text-xs font-sans font-semibold">
                        <Award size={13} />
                        <span>Стаж {mentor.experience}</span>
                      </div>
                    </div>

                    {/* Approach */}
                    <div className="space-y-2 text-left">
                      <div className="flex items-center gap-2 text-[10px] text-terracotta font-sans font-bold uppercase tracking-wider">
                        <Compass size={12} />
                        <span>Подход и фокус:</span>
                      </div>
                      <p className="text-xs md:text-sm text-sagelight leading-relaxed font-sans font-light">
                        {mentor.approach}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Quote block */}
                  <div className="relative border-t border-sand/10 pt-6 text-left relative z-10">
                    <Quote size={20} className="text-terracotta opacity-30 absolute top-5 left-0" />
                    <p className="font-serif italic text-sm text-sand/90 pl-6 leading-relaxed relative z-10">
                      «{mentor.quote}»
                    </p>
                  </div>

                </div>

              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
