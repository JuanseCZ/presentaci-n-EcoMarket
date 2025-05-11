import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FlowSlideProps {
  slide: {
    title: string;
    steps: string[];
  };
}

const FlowSlide: React.FC<FlowSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <div className="relative py-8">
        <div className="absolute top-0 bottom-0 left-10 w-1 bg-green-200"></div>
        
        {slide.steps.map((step, index) => (
          <div 
            key={index} 
            className="relative ml-10 mb-10 stagger-item animate-fade-in"
          >
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-green-600 z-10"></div>
            
            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-green-50">
              <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-700 rounded-full mr-4">
                {index + 1}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-gray-800">{step}</h3>
              </div>
              {index < slide.steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowSlide;