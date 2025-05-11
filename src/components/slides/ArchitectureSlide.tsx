import React from 'react';

interface ArchitectureSlideProps {
  slide: {
    title: string;
    subtitle: string;
    items: string[];
    footer: string;
  };
}

const ArchitectureSlide: React.FC<ArchitectureSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <h3 className="text-xl font-semibold mb-8 text-center text-gray-700">
        {slide.subtitle}
      </h3>
      
      <div className="relative bg-gray-50 rounded-xl p-6 mb-8 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
            <h4 className="text-lg font-medium text-green-700 mb-3 border-b border-green-200 pb-2">Frontend</h4>
            <div className="space-y-2">
              <div className="p-2 bg-white rounded shadow-sm">React.js</div>
              <div className="p-2 bg-white rounded shadow-sm">Redux</div>
            </div>
          </div>
          
          {/* Backend */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
            <h4 className="text-lg font-medium text-blue-700 mb-3 border-b border-blue-200 pb-2">Backend</h4>
            <div className="space-y-2">
              <div className="p-2 bg-white rounded shadow-sm">Node.js</div>
              <div className="p-2 bg-white rounded shadow-sm">Express</div>
            </div>
          </div>
          
          {/* Firebase */}
          <div className="bg-orange-50 p-4 rounded-lg shadow-sm border border-orange-200">
            <h4 className="text-lg font-medium text-orange-700 mb-3 border-b border-orange-200 pb-2">Firebase</h4>
            <div className="space-y-2">
              <div className="p-2 bg-white rounded shadow-sm">Firestore</div>
              <div className="p-2 bg-white rounded shadow-sm">Auth</div>
              <div className="p-2 bg-white rounded shadow-sm">Storage</div>
              <div className="p-2 bg-white rounded shadow-sm">Hosting</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-600 text-green-800 animate-slide-up" style={{animationDelay: '0.6s'}}>
        {slide.footer}
      </div>
    </div>
  );
};

export default ArchitectureSlide;