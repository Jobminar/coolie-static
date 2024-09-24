import React from "react";
import "./styles/MostBookedJobs.css";
import HomeApplianceCleaning from "./assets/HomeAppliance-cleaning.png";
import ElectricalWorks from "./assets/Electricalworks.png";
import ACservice from "./assets/ACservice.png";
import Geyser from "./assets/Geyser.png";
import { useNavigate } from "react-router-dom";


const MostBookedJobs = () => {
  const navigate=useNavigate()
  const jobs = [
    {
      title: "Kitchen Cleaning",
      rating: "4.5 (12K)",
      price: "Rs 900",
      image: HomeApplianceCleaning,
    },
    {
      title: "Bathroom Cleaning",
      rating: "4.5 (12K)",
      price: "Rs 900",
      image: Geyser,
    },
    {
      title: "Door Bell Installation",
      rating: "4.5 (12K)",
      price: "Rs 900",
      image: ElectricalWorks,
    },
    {
      title: "AC Installation",
      rating: "4.5 (12K)",
      price: "Rs 900",
      image: ACservice,
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
            onClick={()=>navigate("/servicebook")}
              src={job.image}
              alt={job.title}
              className="custom-card-img-top"
            />
            <div className="custom-card-body">
              <h5 className="custom-card-title"   onClick={()=>navigate("/servicebook")}>{job.title}</h5>
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
