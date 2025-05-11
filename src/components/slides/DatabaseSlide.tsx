import React from 'react';
import { Database } from 'lucide-react';

interface Collection {
  name: string;
  description: string;
}

interface DatabaseSlideProps {
  slide: {
    title: string;
    subtitle: string;
    collections: Collection[];
  };
}

const DatabaseSlide: React.FC<DatabaseSlideProps> = ({ slide }) => {
  return (
    <div className="p-8 md:p-12 bg-white rounded-xl shadow-md max-w-4xl mx-auto animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 text-center">
        {slide.title}
      </h2>
      
      <h3 className="text-xl font-semibold mb-8 text-center text-gray-700">
        {slide.subtitle}
      </h3>
      
      <div className="p-6 bg-gray-50 rounded-lg mb-8">
        <div className="flex items-center justify-center mb-6">
          <Database className="w-12 h-12 text-orange-500 mr-3" />
          <span className="text-xl font-semibold text-gray-800">Firebase Firestore</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slide.collections.map((collection, index) => (
            <div 
              key={index} 
              className="p-4 bg-white rounded-lg shadow border-l-4 border-orange-500 animate-fade-in stagger-item"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <span className="text-orange-700 font-bold">{collection.name.charAt(0).toUpperCase()}</span>
                </div>
                <h4 className="text-lg font-medium text-gray-800">Colección: {collection.name}</h4>
              </div>
              <p className="text-gray-700 ml-11">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-slide-up" style={{animationDelay: '0.5s'}}>
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center">
          <Database className="w-4 h-4 text-gray-600 mr-2" />
          <span className="text-sm font-medium text-gray-700">Vista Esquemática</span>
        </div>
        <div className="p-4">
          <pre className="text-xs text-gray-700 overflow-x-auto">
{`{
  "users": {
    "user_id_1": {
      "email": "usuario@example.com",
      "name": "Usuario Ejemplo",
      "role": "consumer",
      "created_at": "2025-05-01T10:00:00Z"
    },
    "user_id_2": {
      "email": "productor@example.com",
      "name": "Productor Ejemplo",
      "role": "producer",
      "created_at": "2025-05-01T11:00:00Z"
    }
  },
  "products": {
    "product_id_1": {
      "name": "Manzanas Orgánicas",
      "price": 35.50,
      "producer_id": "user_id_2",
      "stock": 100,
      "category": "frutas"
    }
  },
  "orders": {
    "order_id_1": {
      "consumer_id": "user_id_1",
      "products": [{
        "product_id": "product_id_1",
        "quantity": 5,
        "price": 35.50
      }],
      "total": 177.50,
      "status": "pending",
      "created_at": "2025-05-02T14:30:00Z"
    }
  }
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DatabaseSlide;