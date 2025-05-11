import React from 'react';
import { useSlideContext } from '../context/SlideContext';
import SlideControls from './SlideControls';
import Slide from './Slide';
import { ChevronDown } from 'lucide-react';

const PresentationSlides: React.FC = () => {
  const { currentSlideIndex, slideData } = useSlideContext();
  const currentSlide = slideData[currentSlideIndex];

  return (
    <div className="presentation-container min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="slide-content w-full max-w-5xl mx-auto">
          <Slide slide={currentSlide} />
        </div>
      </div>
      
      <SlideControls />
      
      {currentSlideIndex === 0 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-green-600">
          <ChevronDown size={32} />
        </div>
      )}
    </div>
  );
};

export default PresentationSlides;