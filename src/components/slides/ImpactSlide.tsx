import React from 'react';
import { Heart, Globe, ShoppingBag, Trash2, BookOpen } from 'lucide-react';

interface ImpactSlideProps {
  slide: {
    title: string;
    impacts: string[];
  };
}

const ImpactSlide: React.FC<ImpactSlideProps> = ({ slide }) => {
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Heart size={32} className="text-red-600" />;
      case 1: return <Globe size={32} className="text-green-600" />;
      case 2: return <ShoppingBag size={32} className="text-blue-600" />;
      case 3: return <Trash2 size={32} className="text-orange-600" />;
      case 4: return <BookOpen size={32} className="text-purple-600" />;
      default: return null;
    }
  };
  
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-3 bg-green-50 p-6 rounded-lg shadow-sm mb-4 animate-fade-in">
          <h3 className="text-xl font-semibold text-green-800 mb-3">Nuestro compromiso</h3>
          <p className="text-gray-700">
            EcoMarket se compromete a crear un impacto positivo tanto en la comunidad local 
            como en el medio ambiente, promoviendo prácticas sostenibles y apoyando la 
            economía circular.
          </p>
        </div>
        
        <div className="md:col-span-2">
          <div className="space-y-4">
            {slide.impacts.map((impact, index) => (
              <div 
                key={index} 
                className="p-4 bg-white rounded-lg shadow-sm flex items-start animate-fade-in stagger-item"
              >
                <div className="flex-shrink-0 mr-4 p-2 bg-gray-100 rounded-full">
                  {getIcon(index)}
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-800 mb-1">{impact}</h4>
                  <p className="text-sm text-gray-600">
                    {[
                      'Fortalecemos la economía de nuestros agricultores y artesanos locales.',
                      'Reducimos emisiones al minimizar la distancia de transporte de alimentos.',
                      'Impulsamos la conciencia sobre el origen y valor real de los alimentos.',
                      'Implementamos sistemas para reducir el desperdicio alimentario.',
                      'Compartimos conocimientos sobre producción y consumo responsable.'
                    ][index % 5]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="sticky top-20">
            <div className="p-5 bg-white rounded-lg shadow-md border border-green-100 animate-slide-up" style={{animationDelay: '0.5s'}}>
              <h3 className="text-lg font-semibold text-green-700 mb-4">Objetivos de Impacto</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-700">Reducción de CO₂</span>
                    <span className="text-xs font-medium text-green-700">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-700">Apoyo a productores</span>
                    <span className="text-xs font-medium text-green-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-700">Reducción desperdicio</span>
                    <span className="text-xs font-medium text-green-700">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSlide;