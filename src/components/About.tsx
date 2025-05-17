import React, { useState, useEffect } from 'react';
import { Truck, Shield, Users, Calendar } from 'lucide-react';

const CounterItem: React.FC<{ 
  icon: React.ReactNode, 
  end: number, 
  suffix: string, 
  title: string 
}> = ({ icon, end, suffix, title }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 16));
    let timer: number;

    const updateCount = () => {
      start += increment;
      const progress = Math.min(start, end);
      setCount(progress);

      if (progress < end) {
        timer = window.setTimeout(updateCount, 16);
      }
    };

    timer = window.setTimeout(updateCount, 16);

    return () => clearTimeout(timer);
  }, [end, isVisible]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-green-400 mb-2 inline-flex justify-center">{icon}</div>
      <h3 className="text-3xl md:text-4xl font-bold mb-1 text-white">
        {count}
        <span className="text-green-400">{suffix}</span>
      </h3>
      <p className="text-gray-300">{title}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-2 gap-8">
              <CounterItem 
                icon={<Users size={32} />} 
                end={9000} 
                suffix="+" 
                title="Cooperados" 
              />
              <CounterItem 
                icon={<Calendar size={32} />} 
                end={15} 
                suffix="+" 
                title="Anos de Experiência" 
              />
              <CounterItem 
                icon={<Truck size={32} />} 
                end={150} 
                suffix="k" 
                title="Km Percorridos" 
              />
              <CounterItem 
                icon={<Shield size={32} />} 
                end={100} 
                suffix="%" 
                title="Proteção Garantida" 
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Sobre a <span className="text-green-600">Coopdiesel</span>
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Fundada em Araguari-MG, a Coopdiesel é uma instituição consolidada que nasceu da 
              necessidade de proporcionar mais segurança e economia para cooperados em todo o território nacional.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Com presença estratégica e mais de 9.000 cooperados ativos, oferecemos 
              soluções integradas em proteção veicular, benefícios em combustíveis e 
              serviços especializados para profissionais do transporte.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Nossa missão é assegurar que cada cooperado tenha acesso a benefícios 
              exclusivos, atendimento personalizado e a proteção necessária para 
              conduzir suas operações com total tranquilidade.
            </p>
            <div className="h-1 w-20 bg-green-600 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;