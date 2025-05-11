import React from 'react';
import { useSlideContext } from '../context/SlideContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SlideControls: React.FC = () => {
  const { currentSlideIndex, totalSlides, goToPrevSlide, goToNextSlide } = useSlideContext();

  return (
    <div className="fixed bottom-6 right-6 flex gap-4">
      <button
        onClick={goToPrevSlide}
        disabled={currentSlideIndex === 0}
        className={`p-3 rounded-full bg-green-600 text-white shadow-lg transition-all duration-200 hover:bg-green-700 
          ${currentSlideIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
        aria-label="Diapositiva anterior"
      >
        <ArrowLeft size={24} />
      </button>
      
      <button
        onClick={goToNextSlide}
        disabled={currentSlideIndex === totalSlides - 1}
        className={`p-3 rounded-full bg-green-600 text-white shadow-lg transition-all duration-200 hover:bg-green-700 
          ${currentSlideIndex === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
        aria-label="Diapositiva siguiente"
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

export default SlideControls;