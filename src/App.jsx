import React, { useState } from "react";
import TopBar from "./components/TopBar"; 
import NavSlider from "./components/NavSlider";
import Slider from "./components/Slider";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import BrandingSection from "./components/BrandingSection";
import Conversation from "./components/Conversation";
import Project from "./components/Project";
import CustomExport from "./components/CustomExport";
import Features from "./components/Features";
import NewCreations from "./components/NewCreations";
import WeatherWidget from "./components/WeatherWidget";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() { 
    setIsOpen(!isOpen);
  }

  return (
    <>
    <WeatherWidget></WeatherWidget>
      <TopBar toggleMenu={toggleMenu} /> 
      <BrandingSection></BrandingSection>
      <NavSlider toggleMenu={toggleMenu} isOpen={isOpen} />
      <Slider />
      <Logo />
      <Project></Project>
      <Conversation></Conversation>
      <CustomExport></CustomExport>
      <NewCreations></NewCreations>
      <Features></Features>
      <Footer />
      
    </>
  );
}

export default App;
