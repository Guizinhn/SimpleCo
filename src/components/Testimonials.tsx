import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    name: 'Carlos Oliveira',
    location: 'São Paulo, SP',
    revenue: 'R$ 120.000/mês',
    content: 'Antes da Simple&Co, meu restaurante tinha ociosidade de 40%. Hoje operamos com capacidade máxima e triplicamos o faturamento sem grandes mudanças na estrutura.'
  }, {
    name: 'Marina Santos',
    location: 'Rio de Janeiro, RJ',
    revenue: 'R$ 85.000/mês',
    content: 'A facilidade de integrar novas marcas à nossa cozinha foi surpreendente. O suporte é excelente e o aumento no delivery foi imediato.'
  }, {
    name: 'Roberto Almeida',
    location: 'Belo Horizonte, MG',
    revenue: 'R$ 95.000/mês',
    content: 'Estava pensando em fechar meu negócio até conhecer a Simple&Co. Hoje temos uma operação muito mais rentável e ainda mantemos nossa identidade.'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  const prevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  return <section id="depoimentos" className="py-20 bg-[#f9f5f0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#7b1d38]">
          Depoimentos
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          O que nossos parceiros dizem sobre a Simple&Co
        </p>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} className="text-[#ff9e2c] fill-[#ff9e2c]" />)}
            </div>
            <blockquote className="text-xl md:text-2xl mb-8 italic text-gray-700">
              "{testimonials[currentIndex].content}"
            </blockquote>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <p className="font-bold text-lg text-gray-800">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].location}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-[#00a0b0] font-bold">
                  Faturamento: {testimonials[currentIndex].revenue}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <button onClick={prevSlide} className="p-2 rounded-full bg-white shadow hover:bg-gray-100" aria-label="Depoimento anterior">
              <ChevronLeftIcon size={24} />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-white shadow hover:bg-gray-100" aria-label="Próximo depoimento">
              <ChevronRightIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>;
}