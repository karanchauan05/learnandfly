import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
