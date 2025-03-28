import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutContact from "./pages/AboutContact";
import Reviews from "./pages/Reviewspage";
import Shop from "./pages/Shoppage";
import Dashboard from "./pages/Dashboardpage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <><Router>
      <Navigation/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-contact" element={<AboutContact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </Router></>
  );
}

export default App;
