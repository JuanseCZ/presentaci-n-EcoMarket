import React from 'react';

interface ChallengesSlideProps {
  slide: {
    title: string;
    challenges: string[];
  };
}

const ChallengesSlide: React.FC<ChallengesSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slide.challenges.map((challenge, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500 animate-fade-in stagger-item"
          >
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-orange-700 font-bold text-xl">
              {index + 1}
            </div>
            <p className="text-gray-800">{challenge}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-green-50 rounded-lg animate-slide-up" style={{animationDelay: '0.6s'}}>
        <h3 className="text-xl font-semibold mb-3 text-green-800">Enfoque de Solución</h3>
        <p className="text-gray-700">
          Nuestro equipo abordará estos desafíos técnicos mediante investigación, prototipado y 
          pruebas iterativas durante el desarrollo, asegurando que las soluciones implementadas 
          sean robustas y escalables.
        </p>
      </div>
    </div>
  );
};

export default ChallengesSlide;