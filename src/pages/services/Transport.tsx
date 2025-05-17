import React from 'react';
import { Truck, Shield, Clock, MapPin, Users } from 'lucide-react';

const Transport = () => {
  return (
    <div className="pt-20">
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serviços de Transporte
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Soluções completas em transporte e logística para sua empresa, com segurança e eficiência.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-3 rounded-full mr-4">
                  <Truck size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Transporte de Cargas</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Serviços especializados em transporte de cargas para empresas e produtores de diversos segmentos.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Motoristas cooperados experientes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Rigor no cumprimento de prazos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Monitoramento em tempo real
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-3 rounded-full mr-4">
                  <Shield size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Frota Diversificada</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Frota ampla e diversificada para atender às mais variadas necessidades logísticas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Caminhões leves, médios e pesados
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Veículos adaptados para cargas especiais
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Manutenção preventiva rigorosa
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Cobertura Regional</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Atuação estratégica no Triângulo Mineiro e regiões vizinhas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Entregas pontuais e seguras
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Otimização de rotas
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-3 rounded-full mr-4">
                  <Users size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Serviço Personalizado</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Soluções adaptadas às necessidades específicas de cada operação.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Flexibilidade de contratos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Planejamento personalizado
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-3 rounded-full mr-4">
                  <Clock size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Compromisso</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Padrões rigorosos de qualidade em todos os serviços.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Atendimento humanizado
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Inovação constante
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Precisa de um orçamento?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            com soluções em transporte e logística.
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

export default Transport;