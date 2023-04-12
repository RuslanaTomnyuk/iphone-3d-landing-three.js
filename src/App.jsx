import { GlobalStyles } from "./styles/GlobalStyles";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import ProcessorSection from "src/sections/ProcessorSection";
import BatterySection from "src/sections/BatterySection";
import ColorSection from "src/sections/ColorSection";
import CameraSection from "src/sections/CameraSection";
import PricingSection from "src/sections/PricingSection";
import { ColorContextProvider } from "src/context/ColorContext";
import "./App.css";

function App() {
  return (
    <>
    <GlobalStyles />
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorContextProvider>
        <ColorSection />
        <CameraSection />
        <PricingSection />
      </ColorContextProvider>
    </>
  );
}

export default App;
