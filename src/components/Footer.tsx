import React from 'react';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Simple&Co</h3>
            <p className="text-gray-400 mb-4">
              Transformando restaurantes em hubs de delivery com tecnologia e
              inovação.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/wearesimple.co/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#marcas" className="text-gray-400 hover:text-white transition-colors">
                  Nossas Marcas
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-400 hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <p className="text-gray-400 mb-2">ola@wearesimple.co</p>
            <p className="text-gray-400 mb-4">+55 (11) 940023817</p>
            <a href="https://wa.me/5511940023817" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#00a0b0] hover:bg-[#008a98] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Fale Conosco
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Simple&Co. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>;
}