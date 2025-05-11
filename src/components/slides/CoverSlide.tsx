import React from 'react';
import Logo from '../Logo';

interface CoverSlideProps {
  slide: {
    title: string;
    subtitle: string;
    content: string;
    team: string[];
  };
}

const CoverSlide: React.FC<CoverSlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
      <div className="mb-8 animate-scale-in">
        <Logo width={200} />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-700 animate-slide-up">
        {slide.title}
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-orange-500 font-semibold mb-10 animate-slide-up" style={{animationDelay: '0.2s'}}>
        {slide.subtitle}
      </h2>
      
      <div className="mb-10 animate-slide-up" style={{animationDelay: '0.3s'}}>
        <h3 className="text-lg font-semibold mb-4">Equipo:</h3>
        <ul className="list-none">
          {slide.team.map((member, index) => (
            <li key={index} className="mb-2 text-gray-700 stagger-item animate-fade-in">
              {member}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="text-gray-600 animate-slide-up" style={{animationDelay: '0.5s'}}>
        {slide.content.split('\n').map((line, index) => (
          <p key={index} className="mb-1">
            {line}
          </p>
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 opacity-10 float">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path d="M30,50 Q50,20 70,50 T90,50" fill="none" stroke="#4CAF50" strokeWidth="3"/>
          <circle cx="30" cy="50" r="5" fill="#FF9800"/>
          <circle cx="70" cy="50" r="5" fill="#FF9800"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-20 opacity-10 float" style={{animationDelay: '2s'}}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path d="M10,40 Q40,10 70,40" fill="none" stroke="#795548" strokeWidth="3"/>
          <circle cx="10" cy="40" r="4" fill="#4CAF50"/>
          <circle cx="70" cy="40" r="4" fill="#4CAF50"/>
        </svg>
      </div>
    </div>
  );
};

export default CoverSlide;