import React from 'react';
import { ShoppingCart, Users, Archive, LineChart } from 'lucide-react';

interface Module {
  title: string;
  items: string[];
}

interface ModulesSlideProps {
  slide: {
    title: string;
    subtitle: string;
    modules: Module[];
  };
}

const ModuleCard: React.FC<{ module: Module, index: number }> = ({ module, index }) => {
  // Choose icon based on module title
  const getIcon = () => {
    switch(index) {
      case 0: return <Users className="w-10 h-10 text-green-600" />;
      case 1: return <Archive className="w-10 h-10 text-orange-500" />;
      case 2: return <ShoppingCart className="w-10 h-10 text-blue-500" />;
      case 3: return <LineChart className="w-10 h-10 text-purple-500" />;
      default: return <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">{index + 1}</div>;
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in stagger-item">
      <div className="flex items-center mb-4">
        {getIcon()}
        <h3 className="text-xl font-semibold ml-3">{module.title}</h3>
      </div>
      <ul className="space-y-2">
        {module.items.map((item, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ModulesSlide: React.FC<ModulesSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <h3 className="text-xl font-semibold mb-8 text-center text-gray-700">
        {slide.subtitle}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slide.modules.map((module, index) => (
          <ModuleCard key={index} module={module} index={index} />
        ))}
      </div>
      
      {/* Decorative element */}
      <div className="mt-10 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default ModulesSlide;