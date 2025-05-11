import React from 'react';

interface CodeSlideProps {
  slide: {
    title: string;
    code: string;
  };
}

const CodeSlide: React.FC<CodeSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700">
        {slide.title}
      </h2>
      
      <div className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden animate-slide-up" style={{animationDelay: '0.2s'}}>
        <div className="flex items-center bg-gray-800 px-4 py-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-gray-400 text-sm">ProductList.tsx</div>
        </div>
        
        <pre className="p-4 text-gray-100 overflow-x-auto text-sm md:text-base">
          <code>{slide.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSlide;