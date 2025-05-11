import React from 'react';
import { useSlideContext } from '../context/SlideContext';

const ProgressBar: React.FC = () => {
  const { currentSlideIndex, totalSlides } = useSlideContext();
  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="w-full h-1 bg-gray-200">
      <div 
        className="h-full bg-green-600 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;