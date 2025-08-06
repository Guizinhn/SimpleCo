import React from 'react';
import { MenuIcon } from 'lucide-react';
export function Header() {
  return <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/img/logo.png" className="w-24"/>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#como-funciona" className="text-gray-700 hover:text-[#00a0b0] transition-colors">
            Como Funciona
          </a>
          <a href="#marcas" className="text-gray-700 hover:text-[#00a0b0] transition-colors">
            Nossas Marcas
          </a>
          <a href="#diferenciais" className="text-gray-700 hover:text-[#00a0b0] transition-colors">
            Diferenciais
          </a>
          <a href="#depoimentos" className="text-gray-700 hover:text-[#00a0b0] transition-colors">
            Depoimentos
          </a>
        </nav>
        <div className="md:hidden">
          <button className="p-2 text-gray-700">
            <MenuIcon size={24} />
          </button>
        </div>
        <a href="https://wa.me/5511940023817" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-[#ff9e2c] hover:bg-[#f08c1a] text-white px-4 py-2 rounded-md font-medium transition-colors">
          Fale Conosco
        </a>
      </div>
    </header>;
}