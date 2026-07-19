import React, { useState } from 'react';
import { Clock, Sliders, ChevronRight, Compass } from 'lucide-react';

export default function FlowMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  const directions = [
    {
      id: 'hatha',
      tabName: 'ХАТХА-ЙОГА',
      title: 'Хатха-йога',
      subtitle: 'Классическая практика выравнивания тела и ума',
      description: 'Классическая йога, направленная на укрепление физического тела, выравнивание осанки, работу с дыханием и развитие концентрации внимания. Идеальный фундамент для любого уровня подготовки. Помогает обрести устойчивость в теле и спокойствие в мыслях.',
      duration: '60 мин',
      levels: [1, 2, 3],
      activeLevel: 3,
      benefits: ['Исправление осанки', 'Контроль дыхания', 'Снижение уровня стресса'],
    },
    {
      id: 'aero',
      tabName: 'АЭРОЙОГА',
      title: 'Аэройога',
      subtitle: 'Практика в гамаках в состоянии невесомости',
      description: 'Занятия проходят в специальных подвесных гамаках. Мягкая декомпрессия позвоночника, глубокое раскрытие суставов и снятие зажимов. Состояние полета позволяет расслабить гравитационную нагрузку на тело и выполнить сложные перевернутые асаны безопасно.',
      duration: '60 мин',
      levels: [1, 2],
      activeLevel: 2,
      benefits: ['Растяжка позвоночника', 'Развитие баланса', 'Щадящие нагрузки'],
    },
    {
      id: 'pilates',
      tabName: 'ПИЛАТЕС MAT',
      title: 'Пилатес Mat',
      subtitle: 'Сила кора, контроль движения и стабильность',
      description: 'Осознанная силовая тренировка, сфокусированная на укреплении глубоких стабилизирующих мышц живота, спины и тазового дна. Работа с контролем дыхания и точностью выполнения каждого движения. Формирует сильный мышечный корсет без лишнего объема.',
      duration: '55 мин',
      levels: [1, 2, 3],
      activeLevel: 3,
      benefits: ['Укрепление кора', 'Гибкость позвоночника', 'Мышечный баланс'],
    },
    {
      id: 'stretch',
      tabName: 'РАСТЯЖКА & МФР',
      title: 'Растяжка & МФР',
      subtitle: 'Миофасциальный релиз и глубокое расслабление',
      description: 'Комплексный класс, совмещающий мягкую растяжку с миофасциальным релизом (самомассаж специальными роллами и мячами). Направлен на расслабление триггерных точек, улучшение кровотока, гибкости и быстрое восстановление после физических нагрузок.',
      duration: '45 мин',
      levels: [1, 2],
      activeLevel: 2,
      benefits: ['Снятие зажимов мышц', 'Улучшение гибкости', 'Лимфодренажный эффект'],
    },
  ];

  return (
    <section id="directions" className="py-24 relative bg-slate/10 border-y border-sand/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta flex items-center justify-center gap-1.5">
            <Compass size={14} />
            Направления практики
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light text-sand">
            Матрица направлений <span className="font-serif italic text-terracotta">Find Your Flow</span>
          </h2>
          <p className="text-sm md:text-base text-sagelight/80 font-sans font-light">
            Выберите практику, созвучную вашему сегодняшнему состоянию и целям
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Tabs list (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            {directions.map((direction, idx) => (
              <button
                key={direction.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left px-8 py-6 rounded-2xl transition-all duration-500 flex justify-between items-center group relative overflow-hidden border ${
                  activeTab === idx 
                    ? 'bg-terracotta text-sand border-terracotta/40 shadow-xl translate-x-2'
                    : 'bg-slate/40 text-sand/80 border-sand/5 hover:bg-slate/75 hover:text-sand hover:translate-x-1'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-sans mb-1">
                    0{idx + 1} / Направление
                  </span>
                  <span className="font-display font-medium text-lg md:text-xl tracking-wide">
                    {direction.tabName}
                  </span>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeTab === idx ? 'bg-sand text-slate rotate-90 shadow-md' : 'bg-sand/10 text-sand/80 group-hover:bg-sand/20'
                }`}>
                  <ChevronRight size={18} />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Dynamic Info Card (7 cols) */}
          <div className="lg:col-span-7 flex">
            <div className="w-full bg-slate text-sand p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden border border-sand/10">
              
              {/* Decorative light circle */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-terracotta/10 blur-2xl"></div>
              
              {/* Card top */}
              <div className="space-y-6">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                      {directions[activeTab].tabName}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-light text-sand leading-tight">
                      {directions[activeTab].title}
                    </h3>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sand/5 border border-sand/10 text-sagelight text-sm font-sans">
                    <Clock size={15} className="text-terracotta" />
                    <span>{directions[activeTab].duration}</span>
                  </div>
                </div>

                <p className="text-terracotta/90 text-sm font-serif italic">
                  {directions[activeTab].subtitle}
                </p>

                <p className="text-sagelight text-sm md:text-base leading-relaxed font-sans font-light">
                  {directions[activeTab].description}
                </p>
                
                {/* Benefits checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {directions[activeTab].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-sans text-sagelight/90 bg-sand/5 px-3 py-2.5 rounded-xl border border-sand/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card bottom: difficulty indicators */}
              <div className="border-t border-sand/10 pt-6 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Sliders size={16} className="text-terracotta" />
                  <span className="text-xs uppercase tracking-wider text-sagelight/70 font-sans font-medium">
                    Сложность:
                  </span>
                  <div className="flex gap-1.5 items-center">
                    {[1, 2, 3].map((lvl) => {
                      const isAvailable = directions[activeTab].levels.includes(lvl);
                      const isActive = lvl <= directions[activeTab].activeLevel;
                      return (
                        <div
                          key={lvl}
                          className={`w-8 py-1 rounded text-center text-[10px] font-sans font-bold transition-all duration-500 border ${
                            isActive 
                              ? 'bg-terracotta text-sand border-terracotta'
                              : isAvailable 
                                ? 'bg-sand/5 text-sand/40 border-sand/5' 
                                : 'bg-transparent text-transparent border-transparent'
                          }`}
                        >
                          {lvl}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <a 
                  href="#booking"
                  className="fluid-morph-btn bg-sand text-slate px-6 py-3 text-xs font-bold tracking-wider uppercase text-center hover:bg-terracotta hover:text-sand transition-all duration-300"
                >
                  Выбрать направление
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
