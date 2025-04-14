import React, { useState, useEffect } from 'react';
import WeatherBanner from './components/WeatherBanner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import CategoriesSection from './components/CategoriesSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-vh-100 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <WeatherBanner darkMode={darkMode} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <HeroSection darkMode={darkMode} />
        <FeaturedProducts darkMode={darkMode} />
        <CategoriesSection darkMode={darkMode} />
        <Newsletter darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};







export default App;