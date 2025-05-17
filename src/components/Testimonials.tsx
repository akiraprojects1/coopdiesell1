import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  location: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "A proteção veicular da Coopdiesel é sem igual. Quando precisei, o atendimento foi rápido e eficiente. Recomendo a todos os transportadores.",
    name: "Carlos Mendes",
    location: "Uberlândia, MG",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Os descontos em combustível realmente fazem diferença no final do mês. Desde que me tornei cooperado, minha margem aumentou significativamente.",
    name: "Marcelo Alves",
    location: "Goiânia, GO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "A equipe da Coopdiesel é sempre atenciosa e resolve qualquer problema rapidamente. Me sinto parte de uma família quando preciso de ajuda.",
    name: "Amanda Soares",
    location: "Brasília, DF",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Como motorista autônomo, a Coopdiesel mudou minha vida. A proteção veicular e os benefícios em combustível tornaram meu negócio mais sustentável.",
    name: "Roberto Lima",
    location: "Belo Horizonte, MG",
    image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            O que dizem <span className="text-green-500">Nossos Cooperados</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as histórias e experiências de quem já faz parte da nossa cooperativa e aproveita todos os benefícios.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 md:-left-10">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all focus:outline-none"
              aria-label="Depoimento anterior"
              disabled={isAnimating}
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 md:-right-10">
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all focus:outline-none"
              aria-label="Próximo depoimento"
              disabled={isAnimating}
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Testimonials */}
          <div 
            ref={testimonialsRef}
            className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute -top-6 left-8 text-green-500 bg-white rounded-full p-2 shadow-md">
                <Quote size={32} />
              </div>
              
              <div className="pt-4">
                <p className="text-gray-700 italic text-lg mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => {
                      setIsAnimating(false);
                    }, 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-green-500 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;