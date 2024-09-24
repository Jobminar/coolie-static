import React from "react";
import "./styles/About.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate=useNavigate()
  return (
    <div className="card">
      <h2>About Us</h2>
      <p>
        With the rise of digital platforms and mobile apps, accessing home
        services has become easier than ever. Homeowners can now find and book
        services online, track service providers in real-time, and even pay
        electronically, making the entire process seamless and efficient.
        Overall, home services play a vital role in helping homeowners maintain
        and enhance their living spaces, ensuring they remain safe, comfortable,
        and functional for years to come. <a href="" onClick={()=>navigate("/aboutpage")}>Know more</a>
      </p>
    </div>
  );
};

export default About;
