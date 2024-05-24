import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./styles/Navbar.css"; // Import the CSS file
import CoolieLogo from "./assets/coolie-logo.png";
import Register from "./assets/Register.png";
import Cart from "./assets/Cart.png";
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
          <img src={CoolieLogo} alt="CoolieNo1" />
        </div>
        <div className="navbar-right">
          <div className="navbar-items">
            <a href="#register" onClick={handleRegisterClick}>
              <img src={Register} alt="Register As A Professional" />
              <span>Register As A Professional</span>
            </a>
            <a
              href="#book-service"
              className="book-service-button"
              id="bookthat"
              onClick={handleBookServiceClick}
            >
              Book Service
            </a>
          </div>
          <div className="navbar-search">
            <div className="navbar-location">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hyderabad
              </a>
            </div>

            <input
              type="text"
              placeholder="Search for a service e.g. House Cleaning,Air Conditioner, Kitchen Chimney,Electrical works, etc"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
