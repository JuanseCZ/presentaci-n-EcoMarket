import React from 'react';

interface MVCSlideProps {
  slide: {
    title: string;
    subtitle: string;
    points: string[];
    footer: string;
  };
}

const MVCSlide: React.FC<MVCSlideProps> = ({ slide }) => {
  return (
      <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 text-center">
          {slide.title}
        </h2>

        <h3 className="text-xl font-semibold mb-8 text-center text-gray-700">
          {slide.subtitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md animate-fade-in stagger-item">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-700 font-bold text-xl">M</span>
            </div>
            <h4 className="text-lg font-semibold text-center mb-3 text-blue-700">Modelo</h4>
            <p className="text-gray-700 text-center">{slide.points[0]}</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow-md animate-fade-in stagger-item">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-700 font-bold text-xl">V</span>
            </div>
            <h4 className="text-lg font-semibold text-center mb-3 text-green-700">Vista</h4>
            <p className="text-gray-700 text-center">{slide.points[1]}</p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg shadow-md animate-fade-in stagger-item">
            <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-orange-700 font-bold text-xl">C</span>
            </div>
            <h4 className="text-lg font-semibold text-center mb-3 text-orange-700">Controlador</h4>
            <p className="text-gray-700 text-center">{slide.points[2]}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg animate-slide-up" style={{animationDelay: '0.5s'}}>
          <h3 className="text-lg font-semibold mb-3">Flujo de datos en MVC con React</h3>
          <div className="relative h-64 flex items-center justify-center">
            {/* MVC Components with correct positioning */}
            <div id="model" className="absolute top-8 left-1/4 transform -translate-x-1/2 w-32 h-12 bg-blue-100 rounded flex items-center justify-center text-blue-700 z-10">
              Modelo
            </div>

            <div id="view" className="absolute top-8 right-1/4 transform translate-x-1/2 w-32 h-12 bg-green-100 rounded flex items-center justify-center text-green-700 z-10">
              Vista
            </div>

            <div id="controller" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-orange-100 rounded flex items-center justify-center text-orange-700 z-10">
              Controlador
            </div>

            {/* SVG arrows that connect the components */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#4B5563" />
                </marker>
              </defs>

              {/* Arrow from Model to View */}
              <path
                  d="M 200 30 L 600 30"
                  stroke="#4B5563"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
              />

              {/* Arrow from View to Controller */}
              <path
                  d="M 600 40 Q 600 100 475 175"
                  stroke="#4B5563"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
              />

              {/* Arrow from Controller to Model */}
              <path
                  d="M 325 175 Q 200 100 200 50"
                  stroke="#4B5563"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
              />

              {/* Text labels for arrows */}
              <text x="400" y="20" fontSize="12" textAnchor="middle">Actualiza</text>
              <text x="550" y="90" fontSize="12" textAnchor="middle">Eventos</text>
              <text x="250" y="90" fontSize="12" textAnchor="middle">Modifica</text>
            </svg>
          </div>
        </div>

        <div className="mt-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-600 text-green-800 animate-slide-up" style={{animationDelay: '0.7s'}}>
          {slide.footer}
        </div>
      </div>
  );
};

export default MVCSlide;