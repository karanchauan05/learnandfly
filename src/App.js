import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Mission from './components/Mission';
import Vision from './components/Vision';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import Educators from './components/Educators';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import "./App.css";

const App = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-9 bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Mission />
      <Vision />
      <WhyChooseUs />
      <Courses />
      <Educators />
      <BlogSection />
      <Footer />
    </div>
    
  );
  
};

export default App;