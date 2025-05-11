import React from 'react';
import { Leaf } from 'lucide-react';

interface LogoProps {
  width?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 120 }) => {
  return (
    <div className="flex items-center gap-2" style={{ width: `${width}px` }}>
      <Leaf className="text-green-600" size={width / 5} />
      <div className="flex flex-col">
        <span className="font-bold text-green-600" style={{ fontSize: `${width / 8}px` }}>Eco</span>
        <span className="font-bold text-orange-500" style={{ fontSize: `${width / 8}px` }}>Market</span>
      </div>
    </div>
  );
};

export default Logo;