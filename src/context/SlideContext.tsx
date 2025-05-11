import React, { createContext, useState, useContext, ReactNode } from 'react';
import { slideData } from '../data/slideData';

interface SlideContextType {
  currentSlideIndex: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  slideData: any[];
}

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export const SlideProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = slideData.length;

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNextSlide = () => {
    goToSlide(currentSlideIndex + 1);
  };

  const goToPrevSlide = () => {
    goToSlide(currentSlideIndex - 1);
  };

  return (
    <SlideContext.Provider value={{ 
      currentSlideIndex, 
      totalSlides,
      goToSlide, 
      goToNextSlide, 
      goToPrevSlide,
      slideData
    }}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlideContext = (): SlideContextType => {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error('useSlideContext must be used within a SlideProvider');
  }
  return context;
};