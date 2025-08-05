import React from 'react';
import { Link2Icon, ShoppingBagIcon, TrendingUpIcon } from 'lucide-react';
export function HowItWorks() {
  return <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#7b1d38]">
          Como Funciona
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Transforme sua cozinha em um centro de lucro com nossa solução simples
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-[#f9f5f0] p-5 rounded-full mb-6">
              <Link2Icon size={40} className="text-[#00a0b0]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Conectamos sua cozinha
            </h3>
            <p className="text-gray-600">
              Conectamos sua cozinha às nossas marcas renomadas de delivery,
              ampliando seu alcance sem complicações.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-[#f9f5f0] p-5 rounded-full mb-6">
              <ShoppingBagIcon size={40} className="text-[#00a0b0]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Receba pedidos diariamente
            </h3>
            <p className="text-gray-600">
              Você recebe pedidos todos os dias via delivery, aumentando o fluxo
              de vendas com nossa plataforma.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="bg-[#f9f5f0] p-5 rounded-full mb-6">
              <TrendingUpIcon size={40} className="text-[#00a0b0]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Aumente seu faturamento
            </h3>
            <p className="text-gray-600">
              Aumenta seu faturamento sem mudar seu cardápio atual, aproveitando
              ao máximo sua estrutura existente.
            </p>
          </div>
        </div>
      </div>
    </section>;
}