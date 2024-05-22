import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const Home = React.lazy(() => import("./components/Home"));
const TermsOfService = React.lazy(() => import("./components/TermsOfService"));
const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy"));
const RefundPolicy = React.lazy(() => import("./components/RefundPolicy"));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />\
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
