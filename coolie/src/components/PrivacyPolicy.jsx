// PrivacyPolicy.jsx

import React from "react";
import "./styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <h2>Privacy Policy</h2>
      <p>
        Your privacy is important to us. It is Coolie No1's policy to respect
        your privacy regarding any information we may collect from you across
        our website.
      </p>
      <h3>Information Collection</h3>
      <p>
        We only collect personal information that is relevant to the purpose of
        our website. This information allows us to provide you with a customized
        and efficient experience.
      </p>
      <h3>Use of Information</h3>
      <p>
        We use the information we collect in various ways, including to provide,
        operate, and maintain our website, improve, personalize, and expand our
        website, and understand and analyze how you use our website.
      </p>
      <h3>Security</h3>
      <p>
        We value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee
        its absolute security.
      </p>
      {/* Add more sections as needed */}
    </div>
  );
};

export default PrivacyPolicy;
