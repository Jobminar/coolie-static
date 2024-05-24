// TermsOfService.jsx

import React from "react";
import "./styles/TermsOfService.css";

const TermsOfService = () => {
  return (
    <div className="policy-container">
      <h2>Terms and Conditions</h2>
      <p>
        Welcome to Coolie No1. These terms and conditions outline the rules and
        regulations for the use of our service.
      </p>
      <h3>Introduction</h3>
      <p>
        By accessing this website, we assume you accept these terms and
        conditions. Do not continue to use Coolie No1 if you do not agree to all
        the terms and conditions stated on this page.
      </p>
      <h3>Service Use</h3>
      <p>
        All services provided by Coolie No1 are subject to availability. We
        reserve the right to refuse service to anyone for any reason at any
        time.
      </p>
      <h3>Changes to Terms</h3>
      <p>
        We reserve the right to amend these terms and conditions at any time.
        Your continued use of the site following any changes signifies your
        agreement to be bound by the updated terms.
      </p>
      {/* Add more sections as needed */}
    </div>
  );
};

export default TermsOfService;
