import React, { useState } from 'react';
import { Sparkles, Check, Flame, Waves } from 'lucide-react';

export default function Subscriptions() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const plans = [
    {
      title: 'Пробный шаг',
      price: '1 500 ₽',
      period: '1 занятие',
      description: 'Идеально, чтобы познакомиться со студией, атмосферой и найти своего тренера.',
      features: [
        'Любое направление на выбор',
        'Коврик и полотенце включены',
        'Консультация наставника',
        'Доступ в уютную чайную зону'
      ],
      isHighlighted: true, // Smoky Terracotta
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Баланс на месяц',
      price: '9 500 ₽',
      period: '8 занятий',
      description: 'Для тех, кто готов сделать заботу о теле регулярной и осознанной практикой.',
      features: [
        '8 занятий в месяц',
        'Любые направления в расписании',
        'Заморозка абонемента на 7 дней',
        'Коврик и полотенце включены',
        'Скидка 10% на мастер-классы'
      ],
      isHighlighted: false, // Slate
      icon: <Waves className="w-6 h-6" />
    },
    {
      title: 'Безлимитное погружение',
      price: '13 900 ₽',
      period: '30 дней',
      description: 'Полный безлимит для тех, кто готов к глубокой трансформации тела и ума.',
      features: [
        'Безлимитное посещение практик',
        'Все направления и тренировки',
        'Заморозка абонемента на 10 дней',
        'Коврик, полотенце и вода включены',
        'Приоритетная запись в группы',
        'Индивидуальный разбор осанки'
      ],
      isHighlighted: false, // Slate
      icon: <Flame className="w-6 h-6" />
    }
  ];

  return (
    <section id="subscriptions" className="py-24 relative">
      {/* Background Soft Blobs */}
      <div className="absolute top-1/3 right-1/10 w-80 h-80 rounded-full bg-terracotta/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/10 w-80 h-80 rounded-full bg-slate/10 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            Варианты участия
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light text-sand">
            Конструктор абонементов <span className="font-serif italic text-terracotta">Choose Your Flow</span>
          </h2>
          <p className="text-sm md:text-base text-sagelight/80 font-sans font-light">
            Выберите оптимальный формат занятий. Мы позаботились о том, чтобы на коврике вас ничего не отвлекало.
          </p>
        </div>

        {/* Subscription cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;
            
            return (
              <div
                key={plan.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex flex-col justify-between p-8 md:p-10 transition-all duration-500 rounded-3xl relative overflow-hidden border ${
                  plan.isHighlighted 
                    ? 'bg-terracotta text-sand border-terracotta/30 shadow-xl' 
                    : 'bg-slate text-sand border-sand/5 shadow-lg'
                } ${
                  isDimmed 
                    ? 'opacity-40 scale-95 blur-[0.5px]' 
                    : 'scale-100 hover:-translate-y-2 hover:shadow-2xl z-10'
                }`}
              >
                
                {/* Light decorative shapes */}
                <div className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl ${
                  plan.isHighlighted ? 'bg-sand/15' : 'bg-terracotta/15'
                }`}></div>

                {/* Plan Header */}
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                      plan.isHighlighted ? 'bg-sand/25 text-sand' : 'bg-sand/10 text-terracotta'
                    }`}>
                      {plan.isHighlighted ? 'Рекомендуем' : 'Абонемент'}
                    </span>
                    <div className={plan.isHighlighted ? 'text-sand' : 'text-terracotta'}>
                      {plan.icon}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-display font-semibold tracking-wide">
                      {plan.title}
                    </h3>
                    <p className={`text-xs font-sans ${plan.isHighlighted ? 'text-sand/90' : 'text-sagelight/80'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="py-4 border-y border-sand/10 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight">{plan.price}</span>
                    <span className={`text-sm font-sans ${plan.isHighlighted ? 'text-sand/80' : 'text-sagelight/60'}`}>/ {plan.period}</span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3.5 pt-2 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-sans font-light">
                        <Check size={16} className={`flex-shrink-0 mt-0.5 ${
                          plan.isHighlighted ? 'text-sand' : 'text-terracotta'
                        }`} />
                        <span className={plan.isHighlighted ? 'text-sand/95' : 'text-sagelight/90'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action button */}
                <div className="pt-8 relative z-10">
                  <a
                    href="#booking"
                    className={`fluid-morph-btn block w-full py-4 text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md ${
                      plan.isHighlighted
                        ? 'bg-sand text-slate hover:bg-slate hover:text-sand'
                        : 'bg-terracotta text-sand hover:bg-sand hover:text-slate'
                    }`}
                  >
                    Выбрать
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
