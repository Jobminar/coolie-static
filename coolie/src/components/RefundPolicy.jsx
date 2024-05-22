// RefundPolicy.jsx

import React from "react";
import "./styles/RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="policy-container">
      <h1>Refund Policy</h1>
      <p>
        Service Guarantee: Our company offer a satisfaction guarantee, promising
        to redo the work or issue a refund if the customer is not happy with the
        results. Cancellation Policy: This outlines the terms under which a
        customer can cancel a scheduled service and whether they are entitled to
        a full or partial refund. Timeframe for Refunds: This specifies how long
        a customer has to request a refund after the service has been completed.
        Refund Method: This details how the refund will be processed, such as
        through the original payment method or via store credit. Exceptions:
        Some policies may list specific situations where refunds are not
        available, such as for consumable materials used during the service or
        if the customer's dissatisfaction is due to factors outside the
        company's control. Examples of Refund Policies: Full Refund within X
        Days: "If you are not completely satisfied with our service, you may
        request a full refund within 30 days of the service date. Please contact
        us to initiate the refund process." Partial Refund or Re-do Service: "We
        guarantee your satisfaction with our work. If you are unhappy with the
        results, we will either re-do the service at no additional cost or offer
        a 50% refund. Please notify us within 14 days of the service date." No
        Refund for Consumable Materials: "Refunds are available for labor costs
        if you are dissatisfied with the service. However, we do not offer
        refunds for consumable materials used during the service, such as
        cleaning supplies or replacement parts." Cancellation Policy: "You may
        cancel a scheduled service up to 24 hours before the appointment time
        and receive a full refund. Cancellations made within 24 hours of the
        appointment time may be subject to a cancellation fee of $50."
      </p>
    </div>
  );
};

export default RefundPolicy;
