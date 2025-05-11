import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ColorItem {
  name: string;
  hex: string;
  description: string;
}

interface ColorsSlideProps {
  slide: {
    title: string;
    colors: ColorItem[];
  };
}

const ColorCard: React.FC<{ color: ColorItem }> = ({ color }) => {
  const [copied, setCopied] = useState(false);
  
  // Add safety check for undefined color prop
  if (!color) {
    return null;
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const textColor = color.hex === '#FFFFFF' || color.hex === '#F5F5F5' ? 'text-gray-800' : 'text-white';
  
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 animate-fade-in stagger-item">
      <div className="h-32 flex items-center justify-center" style={{ backgroundColor: color.hex }}>
        <span className={`text-xl font-bold ${textColor}`}>
          {color.name}
        </span>
      </div>
      <div className="bg-white p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono font-semibold">{color.hex}</span>
          <button 
            className="p-1 rounded-full hover:bg-gray-100"
            onClick={copyToClipboard}
            aria-label="Copiar código de color"
          >
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-600" />}
          </button>
        </div>
        <p className="text-sm text-gray-600">{color.description}</p>
      </div>
    </div>
  );
};

const ColorsSlide: React.FC<ColorsSlideProps> = ({ slide }) => {
  // Add safety check for undefined slide prop
  if (!slide || !slide.colors) {
    return null;
  }

  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slide.colors.map((color, index) => (
          <ColorCard key={index} color={color} />
        ))}
      </div>
      
      <div className="mt-10 p-4 bg-gray-50 rounded-lg animate-fade-in" style={{animationDelay: '0.6s'}}>
        <h3 className="text-xl font-semibold mb-2">Demo de uso de colores</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            Botón Primario
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
            Botón Secundario
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Botón Terciario
          </button>
          <button className="px-4 py-2 bg-brown-600 text-white rounded-md hover:bg-brown-700 transition-colors" style={{backgroundColor: '#795548'}}>
            Botón Acento
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorsSlide;