import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import PaymentComponent from "./components/PaymentComponent"; // Import PaymentComponent
import AboutUs from "./components/Aboutpage";

const Home = React.lazy(() => import("./components/Home"));
const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy"));
const RegisterPage = React.lazy(() => import("./components/RegisterPage"));
const ServiceBooking = React.lazy(() => import("./components/ServiceBooking"));
const ContactUs = React.lazy(() => import("./components/Contactus"));
const Career = React.lazy(() => import("./components/Career"));
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/servicebook" element={<ServiceBooking />} />
            {/* Add PaymentComponent route */}
            <Route path="/payment" element={<PaymentComponent />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/career" element={<Career />} />
            <Route path="/aboutpage" element={<AboutUs />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
