import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, MessageCircle, Globe } from 'lucide-react';
import MapComponent from '../../components/GoogleMap';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, children, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="text-green-500 w-12 h-12 mr-3 flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
};

const ContactChannels = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const location = {
    lat: -18.6449,
    lng: -48.1938
  };

  return (
    <div className="pt-20">
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div 
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Canais de <span className="text-green-500">Atendimento</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Estamos sempre prontos para atender você através dos nossos diversos canais de comunicação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ContactCard 
              icon={<Phone size={32} />}
              title="Atendimento Telefônico"
              delay={100}
            >
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">Central de Atendimento</p>
                  <a href="tel:+553432416352" className="text-green-500 text-xl font-bold hover:text-green-600 transition-colors">
                    (34) 3241-6352
                  </a>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">Assistência 24h</p>
                  <a href="tel:08001234567" className="text-green-500 text-xl font-bold hover:text-green-600 transition-colors">
                    0800 123 4567
                  </a>
                </div>
              </div>
            </ContactCard>

            <ContactCard 
              icon={<MessageCircle size={32} />}
              title="Canais Digitais"
              delay={200}
            >
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">Email</p>
                  <a href="mailto:contato@coopdiesel.com.br" className="text-green-500 hover:text-green-600 transition-colors break-all">
                    contato@coopdiesel.com.br
                  </a>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">WhatsApp</p>
                  <a href="https://wa.me/5534999999999" className="text-green-500 hover:text-green-600 transition-colors">
                    (34) 99999-9999
                  </a>
                </div>
              </div>
            </ContactCard>

            <ContactCard 
              icon={<Clock size={32} />}
              title="Horário de Atendimento"
              delay={300}
            >
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">Segunda a Sexta</p>
                  <p className="text-green-500 font-bold">08:00 - 18:00</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">Sábado</p>
                  <p className="text-green-500 font-bold">09:00 - 13:00</p>
                </div>
              </div>
            </ContactCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ContactCard 
              icon={<MapPin size={32} />}
              title="Nossa Localização"
              delay={400}
            >
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    Rua São Salvador, 671 – Bairro Amorim<br />
                    Araguari/MG - CEP: 38440-000
                  </p>
                </div>
                <div className="h-[300px] rounded-lg overflow-hidden">
                  <MapComponent
                    center={location}
                    markers={[{ position: location, title: "Coopdiesel Matriz" }]}
                    zoom={15}
                  />
                </div>
              </div>
            </ContactCard>

            <ContactCard 
              icon={<Globe size={32} />}
              title="Fale Conosco"
              delay={500}
            >
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent h-32"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </ContactCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactChannels;