import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import MissionVision from "./components/missionvision";
import Courses from "./components/courses";
import Footer from "./components/footer";
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <MissionVision />
      <Courses />
      <Footer />
    </div>
  );
};

export default App;
