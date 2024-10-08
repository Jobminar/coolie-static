import React from "react";
import "./styles/Navbar.css"; // Import the CSS file
import CoolieLogo from "./assets/coolie-logo.png";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogoClick = () => {
    navigate("/"); // Navigate to home page when logo is clicked
  };
  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to register page when register link is clicked
  };
  const handleBookServiceClick = () => {
    navigate("/servicebook"); // Navigate to servicebook page when book service link is clicked
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-bottom">
        <div className="navbar-logo" onClick={handleLogoClick}>
          <img src={CoolieLogo} alt="Task tigers" />
        </div>
      
      </nav>
    </div>
  );
};

export default NavbarComponent;
