import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface VendorProps {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  phone: string;
}

const vendors: VendorProps[] = [
  {
    id: 1,
    name: "João Silva",
    role: "Especialista em Proteção Veicular",
    quote: "Especializado em soluções personalizadas de proteção para frotas e autônomos.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    phone: "5534991111111"
  },
  {
    id: 2,
    name: "Maria Oliveira",
    role: "Consultora de Benefícios",
    quote: "Ajudo cooperados a maximizar seus benefícios e reduzir custos operacionais.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    phone: "5534992222222"
  },
  {
    id: 3,
    name: "Pedro Santos",
    role: "Gerente de Parcerias",
    quote: "Desenvolvendo parcerias estratégicas para beneficiar nossos cooperados.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    phone: "5534993333333"
  },
  {
    id: 4,
    name: "Ana Costa",
    role: "Especialista em Logística",
    quote: "Otimizando operações e reduzindo custos para transportadoras.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    phone: "5534994444444"
  }
];

const Vendors: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextVendor = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % vendors.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevVendor = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + vendors.length) % vendors.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextVendor, 5000);
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone}?text=Olá! Vi seu perfil no site da Coopdiesel e gostaria de saber mais.`, '_blank');
  };

  const activeVendor = vendors[activeIndex];

  return (
    <section id="vendors" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Nossos <span className="text-green-500">Especialistas</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Conheça nossa equipe de especialistas prontos para ajudar você a aproveitar ao máximo sua experiência como cooperado.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <button 
            onClick={prevVendor}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none md:-left-8"
            aria-label="Vendedor anterior"
          >
            <ChevronLeft size={24} className="text-gray-700 dark:text-white" />
          </button>
          
          <button 
            onClick={nextVendor}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none md:-right-8"
            aria-label="Próximo vendedor"
          >
            <ChevronRight size={24} className="text-gray-700 dark:text-white" />
          </button>

          <div 
            className={`bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-500 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="flex flex-col md:flex-row min-h-[500px]">
              <div className="md:w-1/2 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeVendor.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
                </div>
                <div className="relative p-8 text-white md:hidden">
                  <h3 className="text-2xl font-bold">{activeVendor.name}</h3>
                  <p className="text-green-400">{activeVendor.role}</p>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 flex flex-col justify-between bg-gradient-to-br from-transparent to-black/20">
                <div>
                  <div className="hidden md:block">
                    <h3 className="text-3xl font-bold text-white mb-2">{activeVendor.name}</h3>
                    <p className="text-green-400 text-lg mb-4">{activeVendor.role}</p>
                  </div>
                  <p className="text-gray-300 text-lg italic mb-6">"{activeVendor.quote}"</p>
                </div>
                <button
                  onClick={() => openWhatsApp(activeVendor.phone)}
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Iniciar Conversa</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {vendors.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-green-500 w-6' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Ver vendedor ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;