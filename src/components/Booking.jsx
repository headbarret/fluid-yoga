import React, { useState } from 'react';
import { Send, Phone, MessageSquare, MapPin, CheckCircle, Navigation, Compass } from 'lucide-react';

export default function Booking() {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Soft success feedback
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setInputValue('');
    }, 4000);
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=59.9342802,30.3350986', '_blank');
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate/10 blur-3xl -z-10 animate-pulse-soft"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Side: Contact Info & Slogan (5/12 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-12">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                Забронировать место
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-light text-sand leading-tight">
                Приди. Подыши. <br />
                Найди свой <span className="font-serif italic font-light text-terracotta">ритм</span>
              </h2>
              <p className="text-sm md:text-base text-sagelight/80 font-sans font-light leading-relaxed max-w-sm">
                Мы создали пространство, где нет места спешке. Здесь начинается ваше возвращение к себе. Запишитесь на первую практику прямо сейчас.
              </p>
            </div>

            {/* Address & Code */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate/50 border border-sand/5 flex items-center justify-center text-terracotta flex-shrink-0 mt-0.5 shadow-md">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sand text-sm">Наш адрес</h4>
                  <p className="text-xs md:text-sm text-sagelight font-sans mt-0.5">
                    наб. Реки Фонтанки, 24
                  </p>
                  <p className="text-[11px] text-terracotta font-sans font-semibold mt-1">
                    вход со двора, код на двери: 24К
                  </p>
                </div>
              </div>

              {/* Quick messengers */}
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://t.me/fluid_yoga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate/40 border border-sand/5 text-sand hover:bg-terracotta hover:border-terracotta hover:text-sand text-xs font-semibold font-sans tracking-wide transition-all shadow-md"
                >
                  <Send size={14} className="text-sky-400 group-hover:text-sand" />
                  <span>Telegram</span>
                </a>
                <a 
                  href="https://wa.me/79998887766" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate/40 border border-sand/5 text-sand hover:bg-terracotta hover:border-terracotta hover:text-sand text-xs font-semibold font-sans tracking-wide transition-all shadow-md"
                >
                  <MessageSquare size={14} className="text-emerald-400 group-hover:text-sand" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Check-In & Map Grid (7/12 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* The Check-In Terminal Form */}
            <div className="bg-slate text-sand p-8 rounded-3xl border border-sand/5 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-terracotta/15 blur-xl"></div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-terracotta">
                  Регистрация
                </span>
                <h3 className="font-display font-medium text-xl md:text-2xl tracking-wide text-sand">
                  Терминал записи
                </h3>
                <p className="text-xs text-sagelight/80 font-sans font-light leading-relaxed">
                  Оставьте контактные данные. Мы свяжемся с вами в течение 15 минут для подтверждения времени и резерва коврика.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-8 relative z-10">
                {!isSubmitted ? (
                  <>
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="contact" className="text-[10px] uppercase tracking-widest text-sagelight/60 font-semibold font-sans">
                        Контакты
                      </label>
                      <input
                        type="text"
                        id="contact"
                        required
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Телефон или Telegram-ник"
                        className="w-full bg-darkslate/60 border border-sand/15 rounded-xl px-4 py-3 text-sm text-sand placeholder:text-sand/30 focus:outline-none focus:border-terracotta transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="fluid-morph-btn w-full bg-terracotta text-sand py-4 text-xs font-bold uppercase tracking-wider animate-pulse-soft hover:bg-sand hover:text-slate hover:animate-none transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Забронировать коврик
                    </button>
                  </>
                ) : (
                  <div className="py-8 flex flex-col items-center justify-center text-center space-y-3 animate-fade-in">
                    <CheckCircle size={44} className="text-terracotta" />
                    <h4 className="font-display font-medium text-lg text-sand animate-pulse">Запись отправлена!</h4>
                    <p className="text-xs text-sagelight font-sans max-w-[200px]">
                      Коврик зарезервирован. Наш администратор свяжется с вами в Telegram или по телефону.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Real Google Maps Embed with Dark Theme Filter & Hover Restoration */}
            <div className="w-full min-h-[320px] rounded-3xl overflow-hidden border border-sand/10 relative shadow-xl group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6066254583925!2d30.335098616140645!3d59.934280181879035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310b80f7bb0d%3A0x6335f6df542c3b86!2z0L3QsNCxLiDRgNC10LrQuCDQpNC-0L3RgtCw0L3QutC4LCAyNCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5MTAxMQ!5e0!3m2!1sru!2sru!4v1700000000000!5m2!1sru!2sru"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                className="w-full h-full min-h-[320px] grayscale invert-[90%] hue-rotate-180 opacity-75 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 group-hover:hue-rotate-0 transition-all duration-700"
              ></iframe>
              {/* Elegant floating address overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate/95 backdrop-blur-sm p-4 rounded-2xl border border-sand/10 flex items-center justify-between pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-left">
                  <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-terracotta">Студия FLUID</p>
                  <p className="text-xs text-sand font-medium mt-0.5 font-sans">наб. Реки Фонтанки, 24</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-sand/10 text-sand flex items-center justify-center shadow">
                  <Navigation size={14} />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
