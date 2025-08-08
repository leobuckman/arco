import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import FontControls from './components/FontControls';

function App() {
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial, Helvetica, sans-serif');
  const [showFontControls, setShowFontControls] = useState(false);

  // Load font preferences from localStorage
  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    const savedFontFamily = localStorage.getItem('fontFamily');
    
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize));
    }
    
    if (savedFontFamily) {
      setFontFamily(savedFontFamily);
    }
  }, []);

  // Apply font styles
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
    document.documentElement.style.setProperty('--font-family', fontFamily);
  }, [fontSize, fontFamily]);

  // Saves font preferences
  const saveFontPreferences = () => {
    localStorage.setItem('fontSize', fontSize.toString());
    localStorage.setItem('fontFamily', fontFamily);
  };

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 32);
    setFontSize(newSize);
    saveFontPreferences();
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    saveFontPreferences();
  };

  const changeFontFamily = (newFontFamily) => {
    setFontFamily(newFontFamily);
    saveFontPreferences();
  };

  const toggleFontControls = () => {
    setShowFontControls(!showFontControls);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === '=') {
        event.preventDefault();
        increaseFontSize();
      }
      if ((event.ctrlKey || event.metaKey) && event.key === '-') {
        event.preventDefault();
        decreaseFontSize();
      }
      if ((event.ctrlKey || event.metaKey) && event.key === '0') {
        event.preventDefault();
        setFontSize(16);
        saveFontPreferences();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [fontSize]);

  return (
    <div className="App">
      <FontControls 
        show={showFontControls}
        fontSize={fontSize}
        fontFamily={fontFamily}
        onIncreaseFontSize={increaseFontSize}
        onDecreaseFontSize={decreaseFontSize}
        onChangeFontFamily={changeFontFamily}
      />
      
      <Header onToggleFontControls={toggleFontControls} />
      
      <main role='main' id='main-content'>
        <HeroSection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App; 