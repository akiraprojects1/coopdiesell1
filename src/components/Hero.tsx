import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const handleParallax = () => {
        const scrollTop = window.scrollY;
        const parallaxElement = heroRef.current;
        if (parallaxElement) {
          parallaxElement.style.transform = `translateY(${scrollTop * 0.4}px)`;
        }
      };

      window.addEventListener('scroll', handleParallax);
      return () => window.removeEventListener('scroll', handleParallax);
    }
  }, []);

  const scrollToVendors = () => {
    const vendorsSection = document.getElementById('vendors');
    if (vendorsSection) {
      vendorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div ref={heroRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        ></div>
      </div>

      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-green-900/30 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 font-['Poppins'] leading-tight text-shadow animate-fade-in-up">
          A força da estrada está na cooperação.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-['Inter'] text-shadow animate-fade-in-up delay-200">
          Mais de 9.000 cooperados confiam na Coopdiesel para proteção veicular, logística e descontos em combustível.
        </p>
        <button 
          onClick={scrollToVendors}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto shadow-lg animate-fade-in-up delay-400"
        >
          Quero ser Cooperado
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#111827" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,208C672,213,768,171,864,160C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;