import React from 'react';
import { Target, Heart, Star, Users } from 'lucide-react';

const MissionValues: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nossa <span className="text-green-500">Missão e Valores</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Construindo um futuro mais seguro e próspero para nossos cooperados através de valores sólidos e compromisso com a excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Nossa Missão</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Proporcionar proteção, segurança e benefícios excepcionais aos nossos cooperados, 
              fortalecendo o setor de transportes através da cooperação mútua e inovação constante.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <Star size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Nossa Visão</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ser reconhecida como a cooperativa líder em proteção veicular e benefícios no Brasil, 
              referência em inovação, atendimento e satisfação dos cooperados.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Valores */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Valores</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Integridade e Transparência
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Excelência no Atendimento
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Inovação Constante
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Responsabilidade Social
              </li>
            </ul>
          </div>

          {/* Compromissos */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Compromissos</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Atendimento 24/7
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Proteção Garantida
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Benefícios Exclusivos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Desenvolvimento Sustentável
              </li>
            </ul>
          </div>

          {/* Diferenciais */}
          <div className="md:col-span-2 lg:col-span-1 bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <Star size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Diferenciais</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Tecnologia de Ponta
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Equipe Especializada
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Cobertura Nacional
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Soluções Personalizadas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;