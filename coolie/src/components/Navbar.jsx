// NavbarComponent.jsx

import React from "react";
import { FaMapMarkerAlt, FaApple, FaAndroid } from "react-icons/fa";
import "./styles/Navbar.css"; // Import the CSS file
import CoolieLogo from "./assets/coolie-logo.png";
import CallusLogo from "./assets/callus.png";
import Cart from "./assets/Cart.png";
import Register from "./assets/Register.png";
import Whatsapp from "./assets/whatsappp.png";
import TranslatorLogo from "./assets/Translation.png";
import mobileuserIcon from "./assets/mobile-user-icon.png";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogoClick = () => {
    navigate("/"); // Navigate to home page when logo is clicked
  };

  return (
    <div className="sticky-top">
      {" "}
      {/* Add the sticky-top class here */}
      <nav className="navbar navbar-top">
        <div className="app-download">
          <a href="#download">
            <FaApple /> <FaAndroid />
          </a>
          <span>Download our app</span>
        </div>
        <div className="navbar-icons">
          <a href="#login" className="icon-link">
            <img src={mobileuserIcon} alt="Login Icon" />
            <span>Login</span>
          </a>
          <a href="#register" className="icon-link">
            <img src={Register} alt="Register Icon" />
            <span>Register</span>
          </a>
          <a href="#cart" className="icon-link">
            <img src={Cart} alt="Cart Icon" />
            <span>Cart</span>
          </a>
          <a href="#translation" className="icon-link">
            <img src={TranslatorLogo} alt="Translation Icon" />
            <span>Translation</span>
          </a>
        </div>
      </nav>
      <nav className="navbar navbar-bottom">
        <div className="navbar-items">
          <div className="navbar-logo" onClick={handleLogoClick}>
            <img src={CoolieLogo} alt="CoolieNo1" />
          </div>
          <a href="tel:+1234567890">
            <img src={CallusLogo} alt="Call Us" />
            <span>Call Us</span>
          </a>
          <a href="#register">
            <img src={Register} alt="Register As A Professional" />
            <span>Register As A Professional</span>
          </a>
          <a href="https://wa.me/1234567890">
            <img src={Whatsapp} alt="WhatsApp Us" />
            <span>WhatsApp Us</span>
          </a>
          <a href="#book-service" className="book-service-button">
            Book Service
          </a>
        </div>
        <div className="navbar-search">
          <div className="navbar-location">
            <FaMapMarkerAlt />
            <span>Hyderabad</span>
          </div>
          <input
            type="text"
            placeholder="Search for a service e.g. Air Conditioner, Kitchen Chimney, Carpenter, Pest control etc"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
