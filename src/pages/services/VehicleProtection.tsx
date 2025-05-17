import React from 'react';
import { Shield, Clock, Car, PenTool as Tool, Umbrella } from 'lucide-react';

const VehicleProtection = () => {
  const coverages = [
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: "Assistência 24h",
      description: "Serviço de assistência com cobertura de até 2.000 km, incluindo resgate com guincho para panes."
    },
    {
      icon: <Car className="w-12 h-12 text-green-500" />,
      title: "Carro Reserva",
      description: "Disponibilização de veículo reserva por até 30 dias, em parceria com as maiores locadoras."
    },
    {
      icon: <Tool className="w-12 h-12 text-green-500" />,
      title: "Reparos",
      description: "Cobertura para colisões, com rede credenciada de oficinas e profissionais qualificados."
    },
    {
      icon: <Umbrella className="w-12 h-12 text-green-500" />,
      title: "Eventos Naturais",
      description: "Proteção contra danos causados por fenômenos naturais, como enchentes e granizo."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proteção Veicular Completa
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Oferecemos a melhor proteção para seu veículo com cobertura completa
              e assistência 24 horas em todo o território nacional.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5534999999999?text=Olá! Gostaria de saber mais sobre a proteção veicular.', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
      </div>

      {/* Coberturas */}
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Nossas <span className="text-green-500">Coberturas</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverages.map((coverage, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">{coverage.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {coverage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {coverage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Proteja seu veículo agora mesmo
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a
            proteger seu patrimônio com as melhores condições do mercado.
          </p>
          <button 
            onClick={() => window.open('tel:3432416352')}
            className="bg-white text-green-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Ligue agora: (34) 3241-6352
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleProtection;