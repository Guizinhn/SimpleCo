import React from "react";
import { CheckCircleIcon } from "lucide-react";
export function HeroSection() {
  return (
    <section className="relative w-full bg-[#7b1d38] text-white">
    
<video
  autoPlay
  loop
  muted
  playsInline
  controls={false}
  disablePictureInPicture
  disableRemotePlayback
  webkit-playsinline="true"
  x-webkit-airplay="allow"
  className="absolute inset-0 w-full h-full object-cover z-0"
  style={{ pointerEvents: 'none', WebkitUserSelect: 'none', userSelect: 'none' }}
>
  <source src="/Cópia de Horizontal_FullHd.mp4" type="video/mp4" />
</video>


<div className="absolute inset-0 bg-black opacity-55 z-0" />

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Já pensou faturar até R$ 1 milhão a mais por ano... sem mudar nada
            na sua cozinha? Com a <span className="text-[#ff9e2c]">Simple</span>&<span className="text-[#00a0b0]">Co</span>, você opera nossas marcas de
            delivery e lucra alto com o que já tem!
          </h1>
          <h2 className="text-1xl md:text-2xl mb-8 font-light">
            Com baixo investimento, a gente pluga nossas marcas de delivery em sua cozinha, e pronto é só faturar!
          </h2>
          <a
            href="https://wa.me/5511940023817"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff9e2c] hover:bg-[#f08c1a] text-white px-8 py-4 rounded-md text-lg font-medium transition-colors shadow-lg"
          >
            Quero faturar com a Simple
          </a>
          <div className="flex flex-wrap mt-12 gap-8">
            <div className="flex items-center">
              <CheckCircleIcon className="text-[#00a0b0] mr-2" size={24} />
              <span className="text-lg font-medium">+150 unidades</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="text-[#00a0b0] mr-2" size={24} />
              <span className="text-lg font-medium">+15 marcas</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="text-[#00a0b0] mr-2" size={24} />
              <span className="text-lg font-medium">+13 estados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
