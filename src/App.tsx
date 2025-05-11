import React, { useState } from 'react';
import PresentationSlides from './components/PresentationSlides';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import { SlideProvider } from './context/SlideContext';
import './styles/animations.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SlideProvider>
      <div className="relative min-h-screen bg-white overflow-hidden">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
          <ProgressBar />
        </div>
        
        <Navigation 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
        />
        
        <main className={`transition-all duration-300 ${menuOpen ? 'ml-64' : 'ml-0'}`}>
          <PresentationSlides />
        </main>
      </div>
    </SlideProvider>
  );
}

export default App;