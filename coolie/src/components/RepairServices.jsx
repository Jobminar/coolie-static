import React from "react";
import "./styles/RepairServices.css";
import ACservice from "./assets/ACservice.png";
import WashingMachineImage from "./assets/WashingMachine.png";
import WaterPurifierImage from "./assets/WaterPurifier.png";
import Geyser from "./assets/Geyser.png";

const RepairServices = () => {
  const services = [
    {
      title: "AC Service & Repair",
      image: ACservice,
    },
    {
      title: "Washing Machine Repair",
      image: WashingMachineImage,
    },
    {
      title: "Geyser Repair",
      image: Geyser,
    },
    {
      title: "Water Purifier Repair",
      image: WaterPurifierImage,
    },
  ];

  return (
    <div className="repair-services">
      <h2>AC & APPLIANCE REPAIR</h2>
      <div className="repair-services-grid">
        {services.map((service, index) => (
          <div className="repair-service-card" key={index}>
            <div className="image-container">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="title-container">
              <p>{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepairServices;
