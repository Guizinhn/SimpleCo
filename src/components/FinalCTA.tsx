import React from 'react';
export function FinalCTA() {
  return <section className="py-20 bg-[#7b1d38] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sua cozinha pode ser sua{' '}
          <span className="text-[#ff9e2c]">maior fonte de lucro!</span>
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Junte-se a centenas de restaurantes que já transformaram seus negócios
          com a Simple&Co
        </p>
        <a href="https://wa.me/5511940023817" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#ff9e2c] hover:bg-[#f08c1a] text-white px-8 py-4 rounded-md text-lg font-medium transition-colors shadow-lg">
          Fale agora com nosso time
        </a>
      </div>
    </section>;
}