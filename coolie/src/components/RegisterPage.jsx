import React from "react";
import { useForm } from "react-hook-form";
import "./styles/RegisterPage.css"; // Import the CSS file
import CoolieLogo from "./assets/coolie-logo.png";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="register-page">
      <div className="register-header">
        <img src={CoolieLogo} alt="CoolieNo1" className="register-logo" />
        <h1>Register As A Professional</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <input
          type="text"
          placeholder="First Name"
          {...register("first_name", { required: true })}
        />
        <input
          type="text"
          placeholder="Last Name"
          {...register("last_name", { required: true })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="text"
          placeholder="Address"
          {...register("address", { required: true })}
        />
        <input
          type="text"
          placeholder="City"
          {...register("city", { required: true })}
        />
        <input
          type="text"
          placeholder="State"
          {...register("state", { required: true })}
        />
        <input
          type="text"
          placeholder="Country"
          {...register("country", { required: true })}
        />

        <input
          type="text"
          placeholder="PAN"
          {...register("pan", { required: true })}
        />
        <input
          type="text"
          placeholder="GST"
          {...register("gst", { required: true })}
        />
        <input
          type="text"
          placeholder="Account Name"
          {...register("account_name", { required: true })}
        />
        <input
          type="text"
          placeholder="Bank Name"
          {...register("bank_name", { required: true })}
        />
        <input
          type="text"
          placeholder="IFSC Code"
          {...register("ifsc_code", { required: true })}
        />
        <input
          type="text"
          placeholder="Branch"
          {...register("branch", { required: true })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          {...register("phone_no", { required: true })}
        />
        <input
          type="text"
          placeholder="Aadhar Number"
          {...register("aadhar_no", { required: true })}
        />
        <input
          type="text"
          placeholder="Full Name"
          {...register("full_name", { required: true })}
        />
        <input
          type="text"
          placeholder="Work Details"
          {...register("work_details", { required: true })}
        />
        <input
          type="text"
          placeholder="Pincode"
          {...register("pincode", { required: true })}
        />
        <select {...register("experience_status", { required: true })}>
          <option value="Experienced">Experienced</option>
          <option value="Fresher">Fresher</option>
        </select>
        <input
          type="number"
          placeholder="Age"
          {...register("age", { required: true })}
        />
        <input
          type="number"
          placeholder="Work Experience"
          {...register("work_experience", { required: true })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
