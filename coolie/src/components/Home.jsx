import React, { useState } from "react";
import HeroSection from "./HeroSection";
import MostBookedServices from "./MostBookedServices";
import HowItWorks from "./HowitWorks";
import OurCoreServices from "./OurCoreServices";
import About from "./About";
import ServiceBooking from "./ServiceBooking";
import RepairService from "./RepairServices";

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  return (
    <div>
      <OurCoreServices handleSelectService={handleSelectService} />;
      {selectedService && (
        <ServiceBooking
          selectedService={selectedService}
          handleSelectService={handleSelectService} // Pass the handleSelectService function to allow selecting another service
        />
      )}
      <HeroSection />
      <MostBookedServices />
      <HowItWorks />
      {/* <RepairService /> */}
      <About />
    </div>
  );
};

export default Home;
