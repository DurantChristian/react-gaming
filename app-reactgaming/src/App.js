import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutContact from "./pages/AboutContact";
import Reviews from "./pages/Reviews";
import Shop from "./pages/Shoppage";
import Order from "./pages/Orderpage";
import Dashboard from "./pages/Dashboardpage";
import Highlights from "./pages/Highlightspage";
import Gamereview from "./pages/Gamereview";
import Settings from "./pages/Settingspage";
import Notifications from "./pages/Notificationspage";
import Activity from "./pages/Activity";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <><Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-contact" element={<AboutContact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<Order />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/gamereview" element={<Gamereview />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
      <Footer/>
    </Router></>
  );
}

export default App;
