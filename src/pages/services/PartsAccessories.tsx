import React from 'react';
import { Wrench, ShieldCheck, Truck, Package } from 'lucide-react';

const PartsAccessories = () => {
  const categories = [
    {
      icon: <Package size={32} />,
      title: "Peças Originais",
      description: "Garantia de qualidade e procedência"
    },
    {
      icon: <Wrench size={32} />,
      title: "Acessórios",
      description: "Personalização e funcionalidade"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Garantia",
      description: "Produtos com garantia estendida"
    },
    {
      icon: <Truck size={32} />,
      title: "Entrega",
      description: "Envio rápido para todo Brasil"
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Peças e Acessórios
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Qualidade e originalidade para seu veículo, com as melhores condições do mercado.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-green-500 mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Peças Originais
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Motor e componentes
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Suspensão e direção
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Freios e embreagem
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Filtros e lubrificação
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Acessórios
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Som e multimídia
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Segurança e rastreamento
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Conforto e personalização
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Equipamentos profissionais
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Vantagens para Cooperados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">15%</div>
                <p className="text-gray-700">Desconto em peças originais</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">24h</div>
                <p className="text-gray-700">Entrega expressa</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">12x</div>
                <p className="text-gray-700">Parcelamento sem juros</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Precisa de peças ou acessórios?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para ajudar você a encontrar
            as melhores soluções para seu veículo.
          </p>
          <button 
            onClick={() => window.location.href = '/#vendors'}
            className="bg-white text-green-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Falar com um Especialista
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartsAccessories;