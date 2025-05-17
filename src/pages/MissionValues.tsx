import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Star, Users } from 'lucide-react';

interface ContentBlockProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ icon, title, children, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div 
      ref={ref}
      className={`bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-green-500 p-4 rounded-xl mr-4">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
};

const MissionValues: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: 'url("https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg")'
            }}
          ></div>
        </div>

        <div 
          ref={heroRef}
          className={`container mx-auto px-4 relative z-20 text-center transform transition-all duration-700 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Nossa <span className="text-green-500">Missão e Valores</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Construindo um futuro mais seguro e próspero para nossos cooperados através 
            de valores sólidos e compromisso com a excelência.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ContentBlock 
              icon={<Target size={32} className="text-white" />}
              title="Nossa Missão"
              delay={100}
            >
              <blockquote className="text-2xl font-light text-gray-300 italic mb-6 leading-relaxed">
                "Proporcionar proteção, segurança e benefícios excepcionais aos nossos cooperados"
              </blockquote>
              <p className="text-gray-300 text-lg leading-relaxed">
                Fortalecendo o setor de transportes através da cooperação mútua e 
                inovação constante, buscamos criar um impacto positivo na vida de 
                cada cooperado.
              </p>
            </ContentBlock>

            <ContentBlock 
              icon={<Star size={32} className="text-white" />}
              title="Nossa Visão"
              delay={200}
            >
              <blockquote className="text-2xl font-light text-gray-300 italic mb-6 leading-relaxed">
                "Ser referência nacional em proteção veicular e benefícios"
              </blockquote>
              <p className="text-gray-300 text-lg leading-relaxed">
                Buscamos ser reconhecidos como a cooperativa líder em inovação, 
                atendimento e satisfação dos cooperados, estabelecendo novos 
                padrões de excelência no setor.
              </p>
            </ContentBlock>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContentBlock 
              icon={<Heart size={32} className="text-white" />}
              title="Valores"
              delay={300}
            >
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
            </ContentBlock>

            <ContentBlock 
              icon={<Users size={32} className="text-white" />}
              title="Compromissos"
              delay={400}
            >
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
            </ContentBlock>

            <ContentBlock 
              icon={<Star size={32} className="text-white" />}
              title="Diferenciais"
              delay={500}
            >
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
            </ContentBlock>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionValues;