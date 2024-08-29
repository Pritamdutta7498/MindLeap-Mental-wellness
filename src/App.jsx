import { useState } from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";

import "./App.css";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import { WorkingStep } from "./components/WorkingStep";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingStep/>
      <Pricing/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
