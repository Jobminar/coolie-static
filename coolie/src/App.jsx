import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import PaymentComponent from "./components/PaymentComponent"; // Import PaymentComponent

const Home = React.lazy(() => import("./components/Home"));
const TermsOfService = React.lazy(() => import("./components/TermsOfService"));
const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy"));
const RefundPolicy = React.lazy(() => import("./components/RefundPolicy"));
const RegisterPage = React.lazy(() => import("./components/RegisterPage"));
const ServiceBooking = React.lazy(() => import("./components/ServiceBooking"));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/servicebook" element={<ServiceBooking />} />
            {/* Add PaymentComponent route */}
            <Route path="/payment" element={<PaymentComponent />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
