import React, { useState } from "react";
import "./styles/Career.css";

const Career = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Thank you for your application!");
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div className="career-container">
      <h2>Join Our Team</h2>
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
        <input
          type="file"
          onChange={handleResumeChange}
          placeholder="Upload Your Resume"
          required
        />
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          placeholder="Your Cover Letter"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Career;
