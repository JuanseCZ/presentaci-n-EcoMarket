import React from 'react';
import Logo from '../Logo';
import { Mail, Github, Linkedin } from 'lucide-react';

interface ThanksSlideProps {
  slide: {
    title: string;
    subtitle: string;
    contact: {
      email: string;
      github: string;
      linkedin: string;
    };
  };
}

const ThanksSlide: React.FC<ThanksSlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
      <div className="mb-8 animate-scale-in">
        <Logo width={160} />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-700 animate-slide-up">
        {slide.title}
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-orange-500 mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
        {slide.subtitle}
      </h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mb-10 animate-slide-up" style={{animationDelay: '0.3s'}}>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Repositorio:</h3>
        
        <div className="space-y-4">
          
          <a 
            href={`https://${slide.contact.github}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Github className="text-green-600" size={20} />
            <span className="text-gray-800">{slide.contact.github}</span>
          </a>
        </div>
      </div>
      
      <div className="text-gray-600 animate-fade-in" style={{animationDelay: '0.5s'}}>
        <p>Universidad Tecnológica de Chihuahua | 9N Desarrollo Web Integral | Mayo 2025</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 opacity-10 float">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="60" fill="none" stroke="#4CAF50" strokeWidth="2" strokeDasharray="10 5" />
          <path d="M30,70 Q70,20 110,70" fill="none" stroke="#FF9800" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
};

export default ThanksSlide;