import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Percent, 
  Truck, 
  Headphones, 
  CreditCard, 
  Shield, 
  Wrench as Tool, 
  Fuel, 
  Users 
} from 'lucide-react';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-6 shadow-md border border-green-500/20">
        <div className="text-green-500 w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Percent size={32} />,
      title: "Economia em Combustível",
      description: "Economize até 15% em combustível em nossa rede de postos parceiros em todo o Brasil."
    },
    {
      icon: <Shield size={32} />,
      title: "Proteção Veicular Premium",
      description: "Cobertura completa contra roubo, furto, colisão e incêndio com as melhores condições do mercado."
    },
    {
      icon: <Headphones size={32} />,
      title: "Suporte 24/7",
      description: "Assistência técnica e atendimento disponível 24 horas por dia, 7 dias por semana."
    },
    {
      icon: <Tool size={32} />,
      title: "Manutenção Preventiva",
      description: "Descontos especiais em oficinas credenciadas e peças originais para seu veículo."
    },
    {
      icon: <Fuel size={32} />,
      title: "Rede de Postos",
      description: "Acesso à maior rede de postos parceiros com preços diferenciados em todo território nacional."
    },
    {
      icon: <Truck size={32} />,
      title: "Rastreamento Avançado",
      description: "Sistema de rastreamento em tempo real com tecnologia de ponta para maior segurança."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Cartão Benefícios",
      description: "Cartão exclusivo para cooperados com descontos em diversos estabelecimentos parceiros."
    },
    {
      icon: <Users size={32} />,
      title: "Clube de Vantagens",
      description: "Acesso a benefícios exclusivos em hotéis, restaurantes e serviços em todo o Brasil."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Conheça os <span className="text-green-500">Benefícios Exclusivos</span> para Cooperados
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Ser cooperado é ter acesso a vantagens reais que fazem diferença no seu dia a dia.
            Descubra como podemos ajudar você a economizar e crescer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitItem 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="#vendors"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Quero ser cooperado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;