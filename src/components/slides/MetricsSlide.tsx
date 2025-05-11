import React from 'react';
import { BarChart2, Users, ShoppingCart, Clock, Star, TrendingUp } from 'lucide-react';

interface MetricsSlideProps {
  slide: {
    title: string;
    metrics: string[];
  };
}

const MetricsSlide: React.FC<MetricsSlideProps> = ({ slide }) => {
  // Icons for each metric
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Users className="w-8 h-8 text-green-700" />;
      case 1: return <Users className="w-8 h-8 text-blue-700" />;
      case 2: return <ShoppingCart className="w-8 h-8 text-orange-700" />;
      case 3: return <Clock className="w-8 h-8 text-purple-700" />;
      case 4: return <Star className="w-8 h-8 text-yellow-700" />;
      case 5: return <TrendingUp className="w-8 h-8 text-teal-700" />;
      default: return <BarChart2 className="w-8 h-8 text-gray-700" />;
    }
  };
  
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <BarChart2 className="w-10 h-10 text-green-600 mr-3" />
          <span className="text-xl font-semibold text-gray-800">Indicadores clave de desempeño</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slide.metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow border border-gray-200 flex animate-fade-in stagger-item hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 mr-4">
                {getIcon(index)}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{metric}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full" 
                    style={{
                      width: `${Math.floor(Math.random() * 50) + 50}%`,
                      backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#FFC107', '#009688'][index % 6]
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 animate-slide-up" style={{animationDelay: '0.6s'}}>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Dashboard interactivo</h3>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
            <div className="text-green-800 font-bold text-xl">125</div>
          </div>
          <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-blue-800 font-bold text-xl">350</div>
          </div>
          <div className="h-16 bg-orange-100 rounded-lg flex items-center justify-center">
            <div className="text-orange-800 font-bold text-xl">$9.5K</div>
          </div>
          <div className="h-16 bg-purple-100 rounded-lg flex items-center justify-center">
            <div className="text-purple-800 font-bold text-xl">4.8⭐</div>
          </div>
        </div>
        <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">Gráfico interactivo de métricas</div>
        </div>
      </div>
    </div>
  );
};

export default MetricsSlide;