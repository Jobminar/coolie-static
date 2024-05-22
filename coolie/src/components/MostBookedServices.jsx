import React from "react";
import "./styles/MostBookedJobs.css";
import HomecleaningImage from "./assets/Home-cleaning.png";
import ElectricalplumbingImage from "./assets/Electricalplumbing.png";
import AppliancerepairImage from "./assets/Appliancerepair.png";
import HairSaloonImage from "./assets/HairSaloon.png";

const MostBookedJobs = () => {
  const jobs = [
    {
      title: "Home & Appliance Cleaning",
      rating: "4.5 (12K)",
      price: "Rs 900",
      image: HomecleaningImage,
    },
    {
      title: "Electrical / Plumbing / Carpenter",
      rating: "4.5 (12K)",
      price: "Rs 900",
      image: ElectricalplumbingImage,
    },
    {
      title: "Appliance Repair",
      rating: "4.5 (12K)",
      price: "Rs 900",
      image: AppliancerepairImage,
    },
    {
      title: "Hair Saloon for Women",
      rating: "4.5 (12K)",
      price: "Rs 900",
      image: HairSaloonImage,
    },
  ];

  return (
    <div className="custom-most-booked">
      <h2>Most Booked Jobs</h2>
      <div className="custom-jobs-container">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`custom-job-card ${
              index === 1 || index === 3 ? "no-margin" : ""
            }`}
          >
            <img
              src={job.image}
              alt={job.title}
              className="custom-card-img-top"
            />
            <div className="custom-card-body">
              <h5 className="custom-card-title">{job.title}</h5>
              <p className="custom-rating">{job.rating}</p>
              <p className="custom-price">{job.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostBookedJobs;
