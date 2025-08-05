import React from 'react';
import { CreditCardIcon, BarChartIcon, BookOpenIcon, TrendingUpIcon, HeartHandshakeIcon } from 'lucide-react';
export function Differentials() {
  const differentials = [{
    icon: <CreditCardIcon size={32} className="text-[#00a0b0]" />,
    title: 'Sem investimento inicial',
    description: 'Comece a operar nossas marcas sem precisar desembolsar capital inicial.'
  }, {
    icon: <BookOpenIcon size={32} className="text-[#00a0b0]" />,
    title: 'Treinamento e suporte incluído',
    description: 'Equipe dedicada para garantir sua operação com excelência desde o primeiro dia.'
  }, {
    icon: <BarChartIcon size={32} className="text-[#00a0b0]" />,
    title: 'Ferramentas de gestão e marketing',
    description: 'Acesso a plataformas exclusivas para otimizar sua operação e aumentar vendas.'
  }, {
    icon: <TrendingUpIcon size={32} className="text-[#00a0b0]" />,
    title: 'Dados de consumo e tendências',
    description: 'Insights valiosos para tomar as melhores decisões baseadas em dados reais.'
  }, {
    icon: <HeartHandshakeIcon size={32} className="text-[#00a0b0]" />,
    title: 'Crescimento garantido com performance',
    description: 'Nosso sucesso está diretamente ligado ao seu, garantindo foco total em resultados.'
  }];
  return <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#7b1d38]">
          Diferenciais da Simple&Co
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Por que escolher nossa solução para seu negócio
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => <div key={index} className="bg-[#f9f5f0] p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}