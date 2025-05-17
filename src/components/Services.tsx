import React from 'react';
import { Shield, Truck, Fuel, Wrench as Tool } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div 
      ref={ref}
      className={`group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        minHeight: '320px'
      }}
    >
      <div className="mb-6 text-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg inline-block group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
        <div className="w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-green-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Shield size={48} />,
      title: "Proteção Veicular",
      description: "Cobertura completa para seu veículo com assistência 24h, reboque ilimitado e indenização garantida. Tenha a tranquilidade que você merece."
    },
    {
      icon: <Truck size={48} />,
      title: "Transporte & Logística",
      description: "Soluções integradas em transporte e logística com rastreamento em tempo real e rede de apoio em todo o Brasil. Sua carga em boas mãos."
    },
    {
      icon: <Fuel size={48} />,
      title: "Postos & Combustíveis",
      description: "Economize até 15% em combustível em nossa rede de postos parceiros. Qualidade e economia para rodar mais e gastar menos."
    },
    {
      icon: <Tool size={48} />,
      title: "Peças & Manutenção",
      description: "Descontos exclusivos em autopeças e serviços de manutenção preventiva em oficinas credenciadas. Mantenha seu veículo sempre em ordem."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Nossos <span className="text-green-500">Serviços</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Oferecemos soluções completas para cooperados em todo o Brasil, 
            garantindo mais economia, segurança e tranquilidade em suas operações.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;