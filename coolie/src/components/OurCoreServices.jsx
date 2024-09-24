import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/OurCoreServices.css";
import HomeApplianceCleaning from "./assets/HomeAppliance-cleaning.png";
import ElectricalWorks from "./assets/Electricalworks.png";
import Geyser from "./assets/Geyser.png";
import ACservice from "./assets/ACservice.png";

const OurCoreServices = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Kitchen Cleaning",
      description:
        "Transform your kitchen into a sparkling haven with our comprehensive cleaning services. We meticulously clean every corner, ensuring a hygienic and inviting cooking space.",
      image: HomeApplianceCleaning,
      price:900
    },
    {
      title: "Bathroom Cleaning",
      description:
        "Experience a fresh and sanitized bathroom with our top-notch cleaning services. We remove tough stains, mold, and grime, leaving your bathroom spotless and refreshing.",
      image: Geyser,
      price:600
    },
    {
      title: "Door Bell Installation",
      description:
        "Enhance the security and convenience of your home with our professional doorbell installation services. Our experts ensure a seamless installation, giving you peace of mind.",
      image: ElectricalWorks,
      price:300
    },
    {
      title: "AC Installation",
      description:
        "Stay cool and comfortable with our reliable AC installation services. Our technicians ensure proper installation for optimal performance and energy efficiency.",
      image: ACservice,
      price:1500
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
              <b><p className="service-description">Price:{service.price}</p></b>
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
