import React from 'react';

interface Sprint {
  name: string;
  duration: string;
  tasks: string;
}

interface TimelineSlideProps {
  slide: {
    title: string;
    subtitle: string;
    sprints: Sprint[];
  };
}

const TimelineSlide: React.FC<TimelineSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <h3 className="text-xl font-semibold mb-8 text-center text-gray-700">
        {slide.subtitle}
      </h3>
      
      <div className="relative py-8">
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-green-200 transform -translate-x-1/2"></div>
        
        {slide.sprints.map((sprint, index) => (
          <div 
            key={index} 
            className={`relative mb-10 w-full flex stagger-item animate-fade-in ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className={`absolute top-5 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full ${
              index === 0 ? 'bg-green-600 animate-pulse' : 'bg-green-400'
            } z-10`}></div>
            
            <div className={`bg-white p-4 rounded-lg shadow-md w-5/12 ${
              index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
            }`}>
              <div className="bg-green-50 p-2 rounded-lg inline-block mb-2">
                <span className="text-green-700 font-medium">{sprint.duration}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{sprint.name}</h3>
              <p className="text-gray-700">{sprint.tasks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSlide;