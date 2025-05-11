import React from 'react';

interface ListSlideProps {
  slide: {
    title: string;
    items: string[];
  };
}

const ListSlide: React.FC<ListSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <ul className="space-y-6 list-none">
        {slide.items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm transition-all duration-300 transform hover:scale-102 hover:bg-gray-100 stagger-item animate-fade-in"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-700 rounded-full mr-4">
              {index + 1}
            </div>
            <span className="text-lg text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
      
      {/* Decorative elements */}
      <div className="w-full flex justify-center mt-10">
        <div className="h-1 w-40 bg-gradient-to-r from-green-400 to-orange-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default ListSlide;