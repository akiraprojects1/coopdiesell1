import React from 'react';
import { File as Oil, Car, Truck, Tractor, Star } from 'lucide-react';

const Lubricants = () => {
  const products = [
    {
      icon: <Car size={32} />,
      title: "Automotivos",
      description: "Linha completa para carros de passeio"
    },
    {
      icon: <Truck size={32} />,
      title: "Caminhões",
      description: "Produtos específicos para veículos pesados"
    },
    {
      icon: <Oil size={32} />,
      title: "Motocicletas",
      description: "Óleos especiais para motos"
    },
    {
      icon: <Tractor size={32} />,
      title: "Agrícolas",
      description: "Soluções para equipamentos rurais"
    }
  ];

  const features = [
    {
      icon: <Star size={24} />,
      title: "Qualidade Premium",
      description: "Produtos das melhores marcas do mercado"
    },
    {
      icon: <Star size={24} />,
      title: "Preços Competitivos",
      description: "Economia garantida para cooperados"
    },
    {
      icon: <Star size={24} />,
      title: "Entrega Rápida",
      description: "Disponibilidade imediata de produtos"
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lubrificantes
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Produtos de alta qualidade para o melhor desempenho do seu veículo.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Nossas Linhas de Produtos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla variedade de lubrificantes para atender
              todas as suas necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-green-500 mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg flex items-start space-x-4"
              >
                <div className="text-green-500 flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  Como escolher o lubrificante correto?
                </h3>
                <p className="text-gray-600">
                  Consulte o manual do veículo ou fale com nossos especialistas
                  para encontrar o produto ideal.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  Qual a frequência de troca recomendada?
                </h3>
                <p className="text-gray-600">
                  A frequência varia conforme o tipo de veículo e uso. Em média,
                  recomenda-se a troca a cada 5.000 km ou 6 meses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Precisa de orientação?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para ajudar você a escolher
            o melhor produto para seu veículo.
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

export default Lubricants;