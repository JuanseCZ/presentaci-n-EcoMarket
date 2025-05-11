import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Smartphone, Monitor, TabletSmartphone } from 'lucide-react';

interface MockupsSlideProps {
  slide: {
    title: string;
    subtitle: string;
    mockups: string[];
  };
}

const MockupsSlide: React.FC<MockupsSlideProps> = ({ slide }) => {
  const [currentMockup, setCurrentMockup] = useState(0);
  const [device, setDevice] = useState<'mobile' | 'desktop' | 'tablet'>('desktop');
  
  const handleNext = () => {
    setCurrentMockup((prev) => (prev + 1) % slide.mockups.length);
  };
  
  const handlePrev = () => {
    setCurrentMockup((prev) => (prev - 1 + slide.mockups.length) % slide.mockups.length);
  };
  
  const mockupImages = [
    // Simulated mockup content for demo purposes
    <div key="landing" className="min-h-[300px] bg-gradient-to-b from-green-50 to-white p-4 rounded-lg">
      <div className="h-12 bg-white rounded-lg flex items-center justify-between px-4 mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full mr-2"></div>
          <div className="font-bold">EcoMarket</div>
        </div>
        <div className="flex gap-4">
          <div className="w-16 h-6 bg-gray-100 rounded"></div>
          <div className="w-16 h-6 bg-gray-100 rounded"></div>
          <div className="w-16 h-6 bg-gray-100 rounded"></div>
        </div>
      </div>
      <div className="h-40 bg-green-100 rounded-lg flex items-center justify-center mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-green-800">Productos frescos directo del productor</div>
          <div className="mt-2 bg-green-600 text-white px-4 py-2 rounded-full inline-block">Comprar ahora</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-20 bg-gray-100 rounded-lg"></div>
        <div className="h-20 bg-gray-100 rounded-lg"></div>
        <div className="h-20 bg-gray-100 rounded-lg"></div>
      </div>
    </div>,
    
    <div key="catalogo" className="min-h-[300px] bg-gradient-to-b from-green-50 to-white p-4 rounded-lg">
      <div className="h-12 bg-white rounded-lg flex items-center justify-between px-4 mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full mr-2"></div>
          <div className="font-bold">EcoMarket</div>
        </div>
        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
      </div>
      <div className="mb-4 flex gap-2">
        <div className="w-24 h-8 bg-green-100 rounded-full flex items-center justify-center text-xs text-green-800">Frutas</div>
        <div className="w-24 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs">Verduras</div>
        <div className="w-24 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs">Lácteos</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-2 shadow-sm">
          <div className="h-24 bg-orange-100 rounded-lg mb-2"></div>
          <div className="font-semibold">Manzanas</div>
          <div className="text-sm text-gray-500">$35.50 / kg</div>
          <div className="mt-2 w-full h-8 bg-green-600 rounded-lg"></div>
        </div>
        <div className="bg-white rounded-lg p-2 shadow-sm">
          <div className="h-24 bg-red-100 rounded-lg mb-2"></div>
          <div className="font-semibold">Fresas</div>
          <div className="text-sm text-gray-500">$45.00 / kg</div>
          <div className="mt-2 w-full h-8 bg-green-600 rounded-lg"></div>
        </div>
        <div className="bg-white rounded-lg p-2 shadow-sm">
          <div className="h-24 bg-yellow-100 rounded-lg mb-2"></div>
          <div className="font-semibold">Plátanos</div>
          <div className="text-sm text-gray-500">$25.00 / kg</div>
          <div className="mt-2 w-full h-8 bg-green-600 rounded-lg"></div>
        </div>
        <div className="bg-white rounded-lg p-2 shadow-sm">
          <div className="h-24 bg-green-100 rounded-lg mb-2"></div>
          <div className="font-semibold">Kiwi</div>
          <div className="text-sm text-gray-500">$55.00 / kg</div>
          <div className="mt-2 w-full h-8 bg-green-600 rounded-lg"></div>
        </div>
      </div>
    </div>,
    
    <div key="detalle" className="min-h-[300px] bg-gradient-to-b from-green-50 to-white p-4 rounded-lg">
      <div className="h-12 bg-white rounded-lg flex items-center px-4 mb-4">
        <div className="w-8 h-8 bg-gray-100 rounded-full mr-2"></div>
        <div className="font-bold">Detalle de Producto</div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="h-40 bg-green-100 rounded-lg mb-4"></div>
        <div className="font-bold text-xl mb-2">Manzanas Orgánicas</div>
        <div className="text-green-700 font-semibold mb-2">$35.50 / kg</div>
        <div className="text-sm text-gray-600 mb-4">
          Manzanas orgánicas cultivadas sin pesticidas. Directamente de nuestro huerto a tu mesa.
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="text-sm">Productor: Granja El Manzano</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="text-sm">Distancia: 5km</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-32 h-10 bg-white border border-green-600 rounded-lg"></div>
          <div className="flex-grow h-10 bg-green-600 rounded-lg"></div>
        </div>
      </div>
    </div>,
    
    <div key="carrito" className="min-h-[300px] bg-gradient-to-b from-green-50 to-white p-4 rounded-lg">
      <div className="h-12 bg-white rounded-lg flex items-center px-4 mb-4">
        <div className="w-8 h-8 bg-gray-100 rounded-full mr-2"></div>
        <div className="font-bold">Carrito de Compra</div>
      </div>
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-3 shadow-sm flex">
          <div className="w-16 h-16 bg-orange-100 rounded-lg mr-3"></div>
          <div className="flex-grow">
            <div className="font-semibold">Manzanas Orgánicas</div>
            <div className="text-sm text-gray-500">$35.50 / kg</div>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
            <div className="w-8 text-center">2</div>
            <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 shadow-sm flex">
          <div className="w-16 h-16 bg-red-100 rounded-lg mr-3"></div>
          <div className="flex-grow">
            <div className="font-semibold">Fresas</div>
            <div className="text-sm text-gray-500">$45.00 / kg</div>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
            <div className="w-8 text-center">1</div>
            <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between mb-2">
            <div className="text-gray-600">Subtotal:</div>
            <div className="font-medium">$116.00</div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="text-gray-600">Envío:</div>
            <div className="font-medium">$20.00</div>
          </div>
          <div className="flex justify-between border-t pt-2 mt-2">
            <div className="font-semibold">Total:</div>
            <div className="font-bold text-green-700">$136.00</div>
          </div>
        </div>
        
        <div className="h-10 bg-green-600 rounded-lg"></div>
      </div>
    </div>,
    
    <div key="checkout" className="min-h-[300px] bg-gradient-to-b from-green-50 to-white p-4 rounded-lg">
      <div className="h-12 bg-white rounded-lg flex items-center px-4 mb-4">
        <div className="w-8 h-8 bg-gray-100 rounded-full mr-2"></div>
        <div className="font-bold">Checkout</div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="font-semibold mb-2">Dirección de entrega</div>
        <div className="space-y-2">
          <div className="h-10 bg-gray-100 rounded-lg"></div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 bg-gray-100 rounded-lg"></div>
            <div className="h-10 bg-gray-100 rounded-lg"></div>
          </div>
          <div className="h-10 bg-gray-100 rounded-lg"></div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="font-semibold mb-2">Método de pago</div>
        <div className="space-y-2">
          <div className="h-10 bg-gray-100 rounded-lg"></div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 bg-gray-100 rounded-lg"></div>
            <div className="h-10 bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>
      
      <div className="h-10 bg-green-600 rounded-lg"></div>
    </div>,
    
    <div key="panel" className="min-h-[300px] bg-gradient-to-b from-green-50 to-white p-4 rounded-lg">
      <div className="h-12 bg-white rounded-lg flex items-center justify-between px-4 mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full mr-2"></div>
          <div className="font-bold">Panel de Productor</div>
        </div>
        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-3 rounded-lg">
          <div className="text-3xl font-bold text-green-700">12</div>
          <div className="text-sm text-green-800">Productos</div>
        </div>
        <div className="bg-orange-100 p-3 rounded-lg">
          <div className="text-3xl font-bold text-orange-700">5</div>
          <div className="text-sm text-orange-800">Pedidos pendientes</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
        <div className="font-semibold mb-2">Productos populares</div>
        <div className="space-y-2">
          <div className="h-8 bg-gray-100 rounded-lg"></div>
          <div className="h-8 bg-gray-100 rounded-lg"></div>
          <div className="h-8 bg-gray-100 rounded-lg"></div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-3 shadow-sm">
        <div className="font-semibold mb-2">Pedidos recientes</div>
        <div className="space-y-2">
          <div className="h-12 bg-gray-100 rounded-lg"></div>
          <div className="h-12 bg-gray-100 rounded-lg"></div>
        </div>
      </div>
    </div>
  ];
  
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
        {slide.subtitle}
      </h3>
      
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-100 p-1 rounded-full">
          <button 
            className={`p-2 rounded-full ${device === 'mobile' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setDevice('mobile')}
            aria-label="Vista móvil"
          >
            <Smartphone className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            className={`p-2 rounded-full ${device === 'tablet' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setDevice('tablet')}
            aria-label="Vista tablet"
          >
            <TabletSmartphone className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            className={`p-2 rounded-full ${device === 'desktop' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setDevice('desktop')}
            aria-label="Vista escritorio"
          >
            <Monitor className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className={`mockup-container mx-auto mb-6 ${
        device === 'mobile' ? 'max-w-[320px]' : 
        device === 'tablet' ? 'max-w-[520px]' : 
        'max-w-[720px]'
      }`}>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {device === 'mobile' && (
            <div className="h-6 bg-gray-200 flex justify-center items-center rounded-t-lg">
              <div className="w-20 h-3 bg-gray-300 rounded-full"></div>
            </div>
          )}
          
          <div className={`mockup-content ${
            device === 'mobile' ? 'p-2' : 
            device === 'tablet' ? 'p-3' : 
            'p-4'
          }`}>
            {mockupImages[currentMockup]}
          </div>
          
          {device === 'mobile' && (
            <div className="h-6 bg-gray-200 flex justify-center items-center rounded-b-lg">
              <div className="w-12 h-3 bg-gray-300 rounded-full"></div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Mockup anterior"
        >
          <ArrowLeft className="h-5 w-5 text-gray-700" />
        </button>
        
        <div className="text-center">
          <h4 className="text-lg font-medium text-gray-800">{slide.mockups[currentMockup]}</h4>
          <div className="flex justify-center mt-2 space-x-1">
            {slide.mockups.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full ${
                  index === currentMockup ? 'bg-green-600' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
        
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Mockup siguiente"
        >
          <ArrowRight className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default MockupsSlide;