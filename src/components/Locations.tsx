import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

type LocationType = 'matriz' | 'posto';

interface Location {
  id: number;
  name: string;
  address: string;
  type: LocationType;
  coords: { lat: number; lng: number };
}

const locations: Location[] = [
  {
    id: 1,
    name: "Coopdiesel Matriz",
    address: "Av. Principal, 1500, Centro, Araguari-MG",
    type: "matriz",
    coords: { lat: -18.6449, lng: -48.1938 }
  },
  {
    id: 2,
    name: "Posto Parceiro - Norte",
    address: "Rod. BR-050, Km 150, Uberlândia-MG",
    type: "posto",
    coords: { lat: -18.7551, lng: -48.2665 }
  },
  {
    id: 3,
    name: "Posto Parceiro - Sul",
    address: "Rod. BR-365, Km 85, Patrocínio-MG",
    type: "posto",
    coords: { lat: -18.9429, lng: -46.9934 }
  },
  {
    id: 4,
    name: "Posto Parceiro - Leste",
    address: "Rod. BR-040, Km 320, Cristalina-GO",
    type: "posto",
    coords: { lat: -16.7675, lng: -47.6131 }
  },
  {
    id: 5,
    name: "Posto Parceiro - Oeste",
    address: "Rod. BR-153, Km 220, Itumbiara-GO",
    type: "posto",
    coords: { lat: -18.4194, lng: -49.2162 }
  }
];

const Locations: React.FC = () => {
  const [filter, setFilter] = useState<'all' | LocationType>('all');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapUrl, setMapUrl] = useState('');
  
  const filteredLocations = filter === 'all' 
    ? locations 
    : locations.filter(loc => loc.type === filter);

  useEffect(() => {
    if (selectedLocation) {
      const encodedAddress = encodeURIComponent(selectedLocation.address);
      setMapUrl(`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`);
    } else {
      setMapUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121436.69006380799!2d-48.27355562656232!3d-18.649329099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a444f8f3f1e6ed%3A0x3c67c7be3b9dd4ac!2sAraguari%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1709938493635!5m2!1spt-BR!2sbr');
    }
  }, [selectedLocation]);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const getDirections = (address: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <section id="locations" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Nossas <span className="text-green-500">Localizações</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Encontre nossa matriz e postos parceiros em todo o Brasil. Estamos sempre perto de você para oferecer o melhor atendimento.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Todos
            </button>
            <button 
              onClick={() => setFilter('matriz')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'matriz' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Matriz
            </button>
            <button 
              onClick={() => setFilter('posto')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'posto' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Postos
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Locations list */}
          <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Locais disponíveis</h3>
            <div className="space-y-4">
              {filteredLocations.map((location) => (
                <div 
                  key={location.id}
                  onClick={() => handleLocationClick(location)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    selectedLocation?.id === location.id 
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full mr-3 ${
                      location.type === 'matriz' ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      <MapPin size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">{location.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{location.address}</p>
                      
                      {selectedLocation?.id === location.id && (
                        <button 
                          onClick={() => getDirections(location.address)}
                          className="mt-2 text-green-600 dark:text-green-400 text-sm font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors"
                        >
                          Como chegar
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[600px]">
            <iframe 
              title="Coopdiesel Localizações"
              className="w-full h-full border-0"
              src={mapUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;