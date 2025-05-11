import React from 'react';
import { Check } from 'lucide-react';

interface PointsSlideProps {
  slide: {
    title: string;
    subtitle?: string;
    points: string[];
    footer?: string;
  };
}

const PointsSlide: React.FC<PointsSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">
        {slide.title}
      </h2>
      
      {slide.subtitle && (
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-orange-500">
          {slide.subtitle}
        </h3>
      )}
      
      <ul className="space-y-4 mb-8">
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
      
      {slide.footer && (
        <div className="mt-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-600 text-green-800 animate-slide-up" style={{animationDelay: '0.5s'}}>
          {slide.footer}
        </div>
      )}
    </div>
  );
};

export default PointsSlide;