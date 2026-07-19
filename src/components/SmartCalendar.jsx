import React, { useState } from 'react';
import { User, CalendarRange, Clock } from 'lucide-react';

export default function SmartCalendar() {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    { short: 'Пн', full: 'Понедельник' },
    { short: 'Вт', full: 'Вторник' },
    { short: 'Ср', full: 'Среда' },
    { short: 'Чт', full: 'Четверг' },
    { short: 'Пт', full: 'Пятница' },
    { short: 'Сб', full: 'Суббота' },
    { short: 'Вс', full: 'Воскресенье' }
  ];

  const schedules = {
    0: [
      { time: '09:00', title: 'Хатха-йога', coach: 'Анна', duration: '60 мин', status: 'Свободно', slots: 8 },
      { time: '11:00', title: 'Пилатес Mat', coach: 'Сергей', duration: '55 мин', status: 'Осталось 3 места', slots: 3 },
      { time: '18:00', title: 'Аэройога', coach: 'Анна', duration: '60 мин', status: 'Свободно', slots: 6 },
      { time: '19:30', title: 'Растяжка & МФР', coach: 'Ольга', duration: '45 мин', status: 'Запись в резерв', slots: 0 },
    ],
    1: [
      { time: '08:30', title: 'Пилатес Mat', coach: 'Сергей', duration: '55 мин', status: 'Свободно', slots: 10 },
      { time: '10:00', title: 'Хатха-йога', coach: 'Анна', duration: '60 мин', status: 'Осталось 1 место', slots: 1 },
      { time: '19:00', title: 'Аэройога', coach: 'Анна', duration: '60.мин', status: 'Запись в резерв', slots: 0 },
    ],
    2: [
      { time: '09:00', title: 'Хатха-йога', coach: 'Анна', duration: '60 мин', status: 'Свободно', slots: 7 },
      { time: '12:00', title: 'Растяжка & МФР', coach: 'Ольга', duration: '45 мин', status: 'Свободно', slots: 9 },
      { time: '18:30', title: 'Пилатес Mat', coach: 'Сергей', duration: '55 мин', status: 'Осталось 2 места', slots: 2 },
      { time: '20:00', title: 'Аэройога', coach: 'Анна', duration: '60 мин', status: 'Свободно', slots: 5 },
    ],
    3: [
      { time: '09:00', title: 'Пилатес Mat', coach: 'Сергей', duration: '55 мин', status: 'Свободно', slots: 8 },
      { time: '11:00', title: 'Растяжка & МФР', coach: 'Ольга', duration: '45 мин', status: 'Осталось 3 места', slots: 3 },
      { time: '19:30', title: 'Хатха-йога', coach: 'Анна', duration: '60 мин', status: 'Свободно', slots: 6 },
    ],
    4: [
      { time: '10:00', title: 'Аэройога', coach: 'Анна', duration: '60 мин', status: 'Свободно', slots: 5 },
      { time: '12:00', title: 'Пилатес Mat', coach: 'Сергей', duration: '55 мин', status: 'Запись в резерв', slots: 0 },
      { time: '18:00', title: 'Растяжка & МФР', coach: 'Ольга', duration: '45 мин', status: 'Свободно', slots: 8 },
      { time: '19:30', title: 'Хатха-йога', coach: 'Анна', duration: '60 мин', status: 'Осталось 3 места', slots: 3 },
    ],
    5: [
      { time: '10:00', title: 'Хатха-йога', coach: 'Анна', duration: '60 мин', status: 'Свободно', slots: 4 },
      { time: '11:30', title: 'Аэройога', coach: 'Анна', duration: '60 мин', status: 'Осталось 2 места', slots: 2 },
      { time: '13:00', title: 'Растяжка & МФР', coach: 'Ольга', duration: '45 мин', status: 'Свободно', slots: 6 },
    ],
    6: [
      { time: '11:00', title: 'Пилатес Mat', coach: 'Сергей', duration: '55 мин', status: 'Свободно', slots: 8 },
      { time: '12:30', title: 'Растяжка & МФР', coach: 'Ольга', duration: '45 мин', status: 'Запись в резерв', slots: 0 },
      { time: '17:00', title: 'Хатха-йога', coach: 'Анна', duration: '60 мин', status: 'Свободно', slots: 5 },
    ]
  };

  const getStatusStyles = (status) => {
    if (status === 'Свободно') {
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25';
    } else if (status === 'Запись в резерв') {
      return 'bg-sand/5 text-sand/50 border-sand/10';
    } else {
      return 'bg-terracotta/10 text-terracotta border-terracotta/25';
    }
  };

  return (
    <section id="schedule" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            Календарь занятий
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-light text-sand">
            Живое расписание <span className="font-serif italic text-terracotta">The Smart Calendar</span>
          </h2>
          <p className="text-sm md:text-base text-sagelight/80 font-sans font-light">
            Планируйте ваши тренировки заранее. Группы до 10 человек для вашего комфорта.
          </p>
        </div>

        {/* Days Header Bar */}
        <div className="bg-slate/40 p-2 rounded-2xl border border-sand/5 flex justify-between gap-1 mb-8 overflow-x-auto scrollbar-hide">
          {days.map((day, idx) => (
            <button
              key={day.short}
              onClick={() => setActiveDay(idx)}
              className={`flex-1 min-w-[60px] py-4 rounded-xl font-sans text-center transition-all duration-300 ${
                activeDay === idx
                  ? 'bg-sand text-slate shadow-md scale-102 font-semibold'
                  : 'text-sagelight/80 hover:bg-slate/60 hover:text-sand font-medium'
              }`}
            >
              <span className="block text-lg">{day.short}</span>
              <span className="block text-[9px] uppercase tracking-wider opacity-60 mt-0.5">
                {activeDay === idx ? 'Активен' : 'День'}
              </span>
            </button>
          ))}
        </div>

        {/* Day name display */}
        <div className="flex items-center gap-2 mb-6 text-sagelight/60 text-xs uppercase tracking-wider font-semibold font-sans px-2">
          <CalendarRange size={14} className="text-terracotta" />
          <span>Программа на {days[activeDay].full}</span>
        </div>

        {/* Vertical Classes list */}
        <div className="space-y-4">
          {schedules[activeDay].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate/30 p-6 rounded-2xl border border-sand/5 hover:border-terracotta/30 hover:bg-slate/50 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 group"
            >
              {/* Left block (Time & Title) */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sand font-display font-medium text-2xl tracking-tight bg-sand/5 border border-sand/5 px-4 py-2 rounded-xl group-hover:bg-terracotta group-hover:border-terracotta group-hover:text-sand transition-all duration-300">
                  <Clock size={16} className="text-terracotta group-hover:text-sand opacity-80" />
                  {item.time}
                </div>
                <div className="text-left">
                  <h3 className="font-display font-medium text-lg text-sand group-hover:text-terracotta transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-sagelight/70 font-sans mt-1">
                    <User size={12} className="text-terracotta/80" />
                    <span>Тренер: {item.coach}</span>
                    <span className="mx-1 opacity-40">•</span>
                    <span>Длительность: {item.duration}</span>
                  </div>
                </div>
              </div>

              {/* Right block (Status & CTA) */}
              <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-sand/5">
                {/* Vacancy tag */}
                <span className={`text-xs px-4 py-2 rounded-full border font-sans font-medium tracking-wide ${getStatusStyles(item.status)}`}>
                  {item.status}
                </span>

                {/* Booking Button */}
                <a
                  href="#booking"
                  className={`fluid-morph-btn px-6 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-300 border ${
                    item.status === 'Запись в резерв'
                      ? 'bg-sand/5 text-sand/60 border-sand/15 hover:bg-sand hover:text-slate'
                      : 'bg-sand text-slate border-sand hover:bg-terracotta hover:text-sand hover:border-terracotta'
                  }`}
                >
                  {item.status === 'Запись в резерв' ? 'В резерв' : 'Записать'}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
