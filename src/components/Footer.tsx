import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-gray-900 text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About column */}
          <div className="transform hover:translate-y-[-10px] transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6">Coopdiesel</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Cooperativa de proteção veicular e benefícios para transportadores em todo o Brasil.
              Mais de 9.000 cooperados confiam em nossas soluções.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          {/* Contact column */}
          <div className="transform hover:translate-y-[-10px] transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={24} className="text-green-500 mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Av. Principal, 1500, Centro<br />
                  Araguari-MG, 38440-000
                </span>
              </li>
              <li className="flex items-center group">
                <Phone size={24} className="text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="tel:+553432410000" 
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  (34) 3241-0000
                </a>
              </li>
              <li className="flex items-center group">
                <Mail size={24} className="text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="mailto:contato@coopdiesel.com.br" 
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  contato@coopdiesel.com.br
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick links */}
          <div className="transform hover:translate-y-[-10px] transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/missao-valores" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Missão e Valores
                </Link>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#vendors" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Vendedores
                </a>
              </li>
              <li>
                <Link to="/sobre/politica-privacidade" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div className="transform hover:translate-y-[-10px] transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6">Horário de Atendimento</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between items-center p-2 hover:bg-white/5 rounded transition-colors duration-300">
                <span>Segunda - Sexta:</span>
                <span className="text-green-500">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-white/5 rounded transition-colors duration-300">
                <span>Sábado:</span>
                <span className="text-green-500">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-white/5 rounded transition-colors duration-300">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
              <li className="mt-6 pt-6 border-t border-gray-700">
                <span className="font-medium block mb-2">Assistência 24h</span>
                <a 
                  href="tel:08001234567"
                  className="text-green-500 text-2xl font-bold hover:text-green-400 transition-colors duration-300"
                >
                  0800 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Coopdiesel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;