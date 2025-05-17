import React from 'react';
import { Fuel, Coffee, ShowerHead as Shower, Bed, Phone } from 'lucide-react';
import MapComponent from '../../components/GoogleMap';

const FuelStations = () => {
  const stations = [
    {
      name: "Posto Matriz",
      address: "Rua São Salvador, 671 – Bairro Amorim",
      phone: "(34) 3241-6352",
      coordinates: { lat: -18.6449, lng: -48.1938 }
    },
    {
      name: "Posto Guanabara",
      address: "Rua Guanabara, 634 – Bairro Nossa Senhora da Penha",
      phone: "(34) 3512-4368",
      coordinates: { lat: -18.6520, lng: -48.1875 }
    },
    {
      name: "Posto Miranda",
      address: "Avenida Espírito Santo, s/n – Bairro Miranda",
      phone: "(34) 99120-2031",
      coordinates: { lat: -18.6480, lng: -48.2010 }
    }
  ];

  const mapMarkers = stations.map(station => ({
    position: station.coordinates,
    title: station.name
  }));

  const services = [
    {
      icon: <Coffee size={32} />,
      name: "Restaurante",
      description: "Pratos típicos da culinária mineira"
    },
    {
      icon: <Shower size={32} />,
      name: "Banheiros",
      description: "Instalações limpas com chuveiros"
    },
    {
      icon: <Bed size={32} />,
      name: "Quartos",
      description: "Acomodações para descanso"
    },
    {
      icon: <Phone size={32} />,
      name: "Atendimento 24h",
      description: "Suporte completo a qualquer hora"
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/127905/pexels-photo-127905.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Postos de Combustível
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Qualidade e economia em combustíveis, com a melhor estrutura para seu conforto.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Preços Atualizados
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-700">Etanol Comum</span>
                    <span className="text-2xl font-bold text-green-500">R$ 4,03</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-700">Gasolina Comum</span>
                    <span className="text-2xl font-bold text-green-500">R$ 5,92</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-700">Diesel S10</span>
                    <span className="text-2xl font-bold text-green-500">R$ 5,84</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Diesel S500</span>
                    <span className="text-2xl font-bold text-green-500">R$ 5,74</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Serviços Disponíveis
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="text-green-500 mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              Nossas Unidades
            </h2>
            <div className="mb-8">
              <MapComponent
                center={stations[0].coordinates}
                markers={mapMarkers}
                zoom={13}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stations.map((station, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{station.name}</h3>
                  <p className="text-gray-600 mb-2">{station.address}</p>
                  <p className="text-green-500 font-bold">{station.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1634278/pexels-photo-1634278.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Seja um Cooperado
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Aproveite descontos exclusivos em combustíveis e todos os benefícios
            que só a Coopdiesel oferece.
          </p>
          <button 
            onClick={() => window.location.href = '/#vendors'}
            className="bg-white text-green-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Falar com um Consultor
          </button>
        </div>
      </div>
    </div>
  );
};

export default FuelStations;