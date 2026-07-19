import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FlowMatrix from './components/FlowMatrix';
import SmartCalendar from './components/SmartCalendar';
import Mentors from './components/Mentors';
import Subscriptions from './components/Subscriptions';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  // Scroll reveal fade-in micro-animation
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; // offset in pixels
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Fire once initially to show elements above the fold
    setTimeout(handleScroll, 200);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sand-texture min-h-screen text-graphite font-sans selection:bg-terracotta/25 selection:text-slate">
      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections with Scroll Reveal Animations */}
      <main>
        <div className="reveal">
          <Hero />
        </div>
        
        <div className="reveal">
          <FlowMatrix />
        </div>
        
        <div className="reveal">
          <SmartCalendar />
        </div>
        
        <div className="reveal">
          <Mentors />
        </div>
        
        <div className="reveal">
          <Subscriptions />
        </div>
        
        <div className="reveal">
          <Booking />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
