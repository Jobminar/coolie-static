import React from "react";
import coolieLogo from "./assets/coolie-logo.png";
import "./styles/Aboutpage.css";
const AboutUs = () => {
  return (
    <div className="about-container">
      <img src={coolieLogo} alt="Coolie Logo" className="about-logo" />
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          With the rise of digital platforms and mobile apps, accessing home
          services has become easier than ever. Homeowners can now find and book
          services online, track service providers in real-time, and even pay
          electronically, making the entire process seamless and efficient.
          Overall, home services play a vital role in helping homeowners
          maintain and enhance their living spaces, ensuring they remain safe,
          comfortable, and functional for years to come.
        </p>
        <p>
          At Task tigers Services, we're committed to providing top-notch home
          services across a wide range of categories. Whether you need plumbing
          repairs, electrical work, pest control, or landscaping services, our
          skilled professionals are here to assist you. We prioritize customer
          satisfaction and strive to exceed expectations with every job we
          undertake.
        </p>
        <p>
          Our team consists of experienced technicians who undergo rigorous
          training and background checks. We believe in transparency, fair
          pricing, and reliable service. When you choose Task tigers Services, you're
          choosing quality and peace of mind.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
