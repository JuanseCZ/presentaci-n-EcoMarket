import React from 'react';
import { Check } from 'lucide-react';

interface TwoColumnsSlideProps {
  slide: {
    title: string;
    subtitle: string;
    points: string[];
    subtitle2: string;
    points2: string[];
  };
}

const TwoColumnsSlide: React.FC<TwoColumnsSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="animate-slide-up">
          <h3 className="text-xl font-semibold mb-4 text-orange-500">
            {slide.subtitle}
          </h3>
          
          <ul className="space-y-3">
            {slide.points.map((point, index) => (
              <li 
                key={index} 
                className="flex items-start stagger-item animate-fade-in"
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                </div>
                <span className="text-gray-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
          <h3 className="text-xl font-semibold mb-4 text-orange-500">
            {slide.subtitle2}
          </h3>
          
          <ul className="space-y-3">
            {slide.points2.map((point, index) => (
              <li 
                key={index} 
                className="flex items-start stagger-item animate-fade-in"
                style={{animationDelay: `${0.4 + (index * 0.1)}s`}}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-orange-500 mr-3" />
                </div>
                <span className="text-gray-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnsSlide;