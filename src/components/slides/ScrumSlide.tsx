import React from 'react';
import { RotateCcw } from 'lucide-react';

interface ScrumSlideProps {
  slide: {
    title: string;
    subtitle: string;
    points: string[];
  };
}

const ScrumSlide: React.FC<ScrumSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <h3 className="text-xl font-semibold mb-8 text-center text-gray-700">
        {slide.subtitle}
      </h3>
      
      <div className="relative w-full max-w-2xl mx-auto p-4 mb-10">
        <div className="relative flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-4 border-green-200 flex items-center justify-center relative animate-spin-slow">
            <RotateCcw className="h-10 w-10 text-green-600" />
            
            {/* Sprint dot positions around the circle */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center">
                <span className="text-xs font-medium">Sprint</span>
              </div>
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center">
                <span className="text-xs font-medium">Review</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center">
                <span className="text-xs font-medium">Retro</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center">
                <span className="text-xs font-medium">Plan</span>
              </div>
            </div>
          </div>
          
          <div className="absolute w-20 h-20 rounded-full bg-white border-4 border-green-600 shadow-md flex items-center justify-center z-10">
            <span className="text-green-700 font-bold">SCRUM</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {slide.points.map((point, index) => {
          const parts = point.split(' - ');
          
          return (
            <div 
              key={index} 
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in stagger-item"
            >
              <h4 className="text-lg font-semibold text-green-700 mb-2">{parts[0]}</h4>
              <p className="text-gray-700 text-sm">{parts[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrumSlide;