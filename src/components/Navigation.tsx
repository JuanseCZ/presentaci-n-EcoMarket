import React from 'react';
import { useSlideContext } from '../context/SlideContext';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ menuOpen, setMenuOpen }) => {
  const { currentSlideIndex, goToSlide, slideData } = useSlideContext();

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out z-40 overflow-y-auto ${
        menuOpen ? 'w-64' : 'w-0 -translate-x-full'
      }`}>
        <div className="p-6 flex justify-center items-center">
          <Logo width={150} />
        </div>
        
        <div className="mt-4">
          {slideData.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                goToSlide(index);
                setMenuOpen(false);
              }}
              className={`w-full text-left px-6 py-3 transition-colors duration-200 ${
                currentSlideIndex === index 
                  ? 'bg-green-100 border-l-4 border-green-600' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className={`text-sm ${currentSlideIndex === index ? 'font-semibold' : ''}`}>
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;