// ContactUs.js

import React, { useState } from "react";
import "./styles/ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Thank you for your message!");
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Your Phone Number"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-details">
        <h3>Contact Details</h3>
        <p>Address: 18-5-294/A, Sapthagiri Nagar, Kapilateertham Road,</p>
        <p>Tirupati (Urban), Chittoor- 517501, Andhra Pradesh</p>
        <p>thecoolieinfo@gmail.com</p>
        <p>Phone: +91 9959668703</p>
      </div>
    </div>
  );
};

export default ContactUs;
