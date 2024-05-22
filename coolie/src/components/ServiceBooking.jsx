import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PaymentComponent from "./PaymentComponent";
import "./styles/ServiceBooking.css";
import HomeApplianceCleaning from "./assets/HomeAppliance-cleaning.png";
import ElectricalWorks from "./assets/Electricalworks.png";
import ApplianceRepair from "./assets/Appliance-Repair.png";
import HairSaloon from "./assets/HairSaloon.png";

const ServiceBooking = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [address, setAddress] = useState("");
  const [scheduleDate, setScheduleDate] = useState(new Date());
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);

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
    setSelectedService(service);
    setShowPaymentForm(true);
  };

  const handleScheduleService = () => {
    const bookingData = {
      service: selectedService,
      address,
      date: scheduleDate,
      payment: paymentMethod,
    };
    console.log(bookingData);
    alert("Payment successful!");
    navigate("/servicebook");
  };

  const handlePaymentSuccess = (response) => {
    console.log("Payment successful:", response);
    setPaymentMethod("Razorpay");
    handleScheduleService();
  };

  const handlePaymentFailure = (error) => {
    console.error("Payment failed:", error);
    alert("Payment failed. Please try again.");
  };

  return (
    <div className="slt-booking-container">
      {selectedService ? (
        <>
          <h2>Service Details</h2>
          <div className="slt-selected-container">
            <img
              className="selected-image"
              src={selectedService.image}
              alt={selectedService.title}
            />
            <h3>{selectedService.title}</h3>
            <p>{selectedService.description}</p>
          </div>
          <h2>Address</h2>
          <input
            className="slt-booking-input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
          <h2>Schedule</h2>
          <DatePicker
            selected={scheduleDate}
            onChange={(date) => setScheduleDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select a date and time"
          />
          {showPaymentForm && (
            <>
              <h2>Payment</h2>
              {paymentMethod !== "Razorpay" && (
                <PaymentComponent
                  onSuccess={handlePaymentSuccess}
                  onFailure={handlePaymentFailure}
                />
              )}
            </>
          )}
          <button
            id="schedule-button"
            onClick={handleScheduleService}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Book Now
          </button>
        </>
      ) : (
        <>
          <h2>Select a Service</h2>
          <div className="slt-card-container">
            {services.map((service, index) => (
              <div className="slt-card" id={`slt-job-${index}`} key={index}>
                <img
                  className="slt-card-image"
                  src={service.image}
                  alt={service.title}
                />
                <div className="slt-details">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    className="slt-book-now-button"
                    onClick={() => handleSelectService(service)}
                    style={{ backgroundColor: "orange", color: "white" }}
                  >
                    Select Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceBooking;
