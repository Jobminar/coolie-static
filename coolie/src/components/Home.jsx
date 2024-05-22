import React from "react";
import HeroSection from "./HeroSection";
import MostBookedServices from "./MostBookedServices";
import HowItWorks from "./HowitWorks";
import OurCoreServices from "./OurCoreServices";
import RepairServices from "./RepairServices";
import About from "./About";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MostBookedServices />
      <HowItWorks />
      <OurCoreServices />
      <RepairServices />
      <About />
    </div>
  );
};

export default Home;
