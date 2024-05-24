import React from "react";

const PaymentComponent = ({ amount, onSuccess, onFailure }) => {
  const handlePayment = () => {
    // Your payment logic here
    onSuccess(); // Assuming onSuccess is a function passed as prop
  };

  return (
    <div>
      <p>900/-</p>
    </div>
  );
};

export default PaymentComponent;
