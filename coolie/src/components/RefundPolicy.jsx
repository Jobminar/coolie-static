import React from "react";
import "./styles/RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="policy-container">
      <h2>Refund Policy</h2>
      <p>
      TaskTigers strives to deliver the best service experience to our customers. 
      However, in the event of any service failure or unexpected situations, 
      we will review refund claims carefully. Refund requests must be raised within 48 hours of the service completion date.
      Approved refunds will be processed within 48 hours of the request and will be credited back to the user's original payment method within 5-7 business days, depending on the bank and payment gateway processing times.
     TaskTigers uses third-party payment processors, and while we strive to ensure smooth payment transactions, we are not responsible for any delays caused by the payment processing systems. Users can reach TaskTigers by writning an email to support@tasktigers.in
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
    </div>
  );
};

export default RefundPolicy;
