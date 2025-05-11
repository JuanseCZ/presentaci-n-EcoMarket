import React from 'react';
import { Smartphone, Gift, Truck, Store, BarChart3, Map } from 'lucide-react';

interface OpportunitiesSlideProps {
  slide: {
    title: string;
    opportunities: string[];
  };
}

const OpportunitiesSlide: React.FC<OpportunitiesSlideProps> = ({ slide }) => {
  // Icons for each opportunity
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Smartphone size={40} className="text-green-600" />;
      case 1: return <Gift size={40} className="text-blue-600" />;
      case 2: return <Truck size={40} className="text-orange-600" />;
      case 3: return <Store size={40} className="text-purple-600" />;
      case 4: return <BarChart3 size={40} className="text-teal-600" />;
      case 5: return <Map size={40} className="text-red-600" />;
      default: return null;
    }
  };
  
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {slide.opportunities.map((opportunity, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in stagger-item hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="h-32 flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100">
              {getIcon(index)}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{opportunity}</h3>
              <div className="w-12 h-1 bg-green-500 rounded-full mb-3"></div>
              <p className="text-sm text-gray-600">
                Fase de expansión: {['Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026'][index % 6]}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-green-50 rounded-lg shadow-sm animate-slide-up" style={{animationDelay: '0.6s'}}>
        <h3 className="text-xl font-semibold mb-3 text-green-800">Roadmap de Crecimiento</h3>
        <div className="relative py-6">
          <div className="absolute left-0 right-0 h-1 top-1/2 transform -translate-y-1/2 bg-gray-300"></div>
          <div className="flex justify-between relative">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-green-600 z-10 mb-2"></div>
              <div className="text-xs text-gray-700">Fase 1</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gray-400 z-10 mb-2"></div>
              <div className="text-xs text-gray-700">Fase 2</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gray-400 z-10 mb-2"></div>
              <div className="text-xs text-gray-700">Fase 3</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gray-400 z-10 mb-2"></div>
              <div className="text-xs text-gray-700">Fase 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesSlide;