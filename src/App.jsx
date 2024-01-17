import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";
import Map from "./Components/Map";

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-rowdies">
      <Header />
      <Hero />
      <About />
      <Map/>
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
