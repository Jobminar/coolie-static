import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/OurCoreServices.css";
import HomeApplianceCleaning from "./assets/HomeAppliance-cleaning.png";
import ElectricalWorks from "./assets/Electricalworks.png";
import ApplianceRepair from "./assets/Appliance-Repair.png";
import HairSaloon from "./assets/HairSaloon.png";

const OurCoreServices = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Home & Appliance Cleaning",
      description: "Lorem Ipsum has been the industry's .",
      image: HomeApplianceCleaning,
    },
    {
      title: "Electrical Works",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: ElectricalWorks,
    },
    {
      title: "Appliance Repair",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: ApplianceRepair,
    },
    {
      title: "Hair Saloon",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: HairSaloon,
    },
  ];

  const handleSelectService = (service) => {
    navigate("/servicebook"); // Navigate to the servicebook page
  };

  return (
    <div className="our-core-services">
      <h4 id="service-heading">Book Services Now</h4>
      <div className="service-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="service-details">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button
                className="book-now-button"
                onClick={() => handleSelectService(service)}
              >
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoreServices;
