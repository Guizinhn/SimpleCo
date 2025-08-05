import React, { useRef } from "react";

export function BrandsCarousel() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const brands = [
    
    {
      name: "Burguer Simples",
      category: "Hambúrgueres",
      video: "/public/Burguer simple.mp4",
    },
    {
      name: "Pizza Simples",
      category: "Pizzas",
      video: "/public/Pizza simples.mp4",
    },
    {
      name: "Sala simples",
      category: "Alimentação Saudável",
      video:
        "/public/salada simples.mp4",
    },
    {
      name: "Açaí Carioca",
      category: "Açaí",
      image:
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Shawarma House",
      category: "Árabe",
      image:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    
  ];
  
  return (
    <section id="marcas" className="py-20 bg-[#f9f5f0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#7b1d38]">
          Marcas Operadas
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Diversidade de marcas para todos os gostos e públicos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                {brand.video ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={brand.video}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  />
                ) : (
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {brand.name}
                </h3>
                <p className="text-[#00a0b0]">{brand.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
