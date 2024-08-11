import { useState } from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";

import "./App.css";
import { DiHeroku } from "react-icons/di";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Pricing/>
      <Testimonial/>
    </div>
  );
}

export default App;
