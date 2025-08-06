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
      video: "/Burguer simple.mp4",
    },
    {
      name: "Pizza Simples",
      category: "Pizzas",
      video: "/Pizza simples.mp4",
    },
    {
      name: "Salada simples",
      category: "Alimentação Saudável",
      video:
        "/salada simples.mp4",
    },
    {
      name: "Cozinha Simples",
      category: "Prato feito",
      video:
        "/Cozinha simples.mp4",
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
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                    webkit-playsinline="true"
                    x-webkit-airplay="allow"
                    preload="auto"
                    style={{ 
                      pointerEvents: 'none', 
                      WebkitUserSelect: 'none', 
                      userSelect: 'none',
                      WebkitTouchCallout: 'none',
                      WebkitTapHighlightColor: 'transparent'
                    }}
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
