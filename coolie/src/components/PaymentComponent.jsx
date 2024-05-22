import React from "react";

const PaymentComponent = ({ amount, onSuccess, onFailure }) => {
  const handlePayment = () => {
    // Your payment logic here
    onSuccess(); // Assuming onSuccess is a function passed as prop
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay Now with Razorpay</button>
    </div>
  );
};

export default PaymentComponent;
