// RefundPolicy.jsx

import React from "react";
import "./styles/RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="policy-container">
      <h2>Refund Policy</h2>
      <p>
        Thank you for choosing Coolie No1. If you are not entirely satisfied
        with your purchase, we're here to help.
      </p>
      <h3>Refunds</h3>
      <p>
        Once we receive your return, we will inspect it and notify you that we
        have received your returned item. We will immediately notify you of the
        status of your refund after inspecting the item.
      </p>
      <h3>Eligibility for Refunds</h3>
      <p>
        To be eligible for a refund, you must notify us within 5-7 days of your
        purchase. Your item must be in the original packaging.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions on how to return your item to us, contact us
        at support@coolieno1.com.
      </p>
      {/* Add more sections as needed */}
    </div>
  );
};

export default RefundPolicy;
