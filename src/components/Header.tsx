import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/img/logo.png" className="w-24"/>
        </div>
        
        {/* Desktop Navigation */}
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

        {/* Desktop CTA Button */}
        <a href="https://wa.me/5511940023817" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-[#ff9e2c] hover:bg-[#f08c1a] text-white px-4 py-2 rounded-md font-medium transition-colors">
          Fale Conosco
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:text-[#00a0b0] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img src="/img/logo.png" className="w-20"/>
                <button 
                  onClick={closeMenu}
                  className="p-2 text-gray-700 hover:text-[#00a0b0] transition-colors"
                >
                  <XIcon size={24} />
                </button>
              </div>
              
              <nav className="space-y-6">
                <a 
                  href="#como-funciona" 
                  className="block text-gray-700 hover:text-[#00a0b0] transition-colors text-lg font-medium"
                  onClick={closeMenu}
                >
                  Como Funciona
                </a>
                <a 
                  href="#marcas" 
                  className="block text-gray-700 hover:text-[#00a0b0] transition-colors text-lg font-medium"
                  onClick={closeMenu}
                >
                  Nossas Marcas
                </a>
                <a 
                  href="#diferenciais" 
                  className="block text-gray-700 hover:text-[#00a0b0] transition-colors text-lg font-medium"
                  onClick={closeMenu}
                >
                  Diferenciais
                </a>
                <a 
                  href="#depoimentos" 
                  className="block text-gray-700 hover:text-[#00a0b0] transition-colors text-lg font-medium"
                  onClick={closeMenu}
                >
                  Depoimentos
                </a>
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <a 
                  href="https://wa.me/5511940023817" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full bg-[#ff9e2c] hover:bg-[#f08c1a] text-white px-4 py-3 rounded-md font-medium transition-colors text-center"
                  onClick={closeMenu}
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}