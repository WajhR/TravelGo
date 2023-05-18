import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <Link to="/TravelGo/Landing" className="hover-underline-animation">
        Landing
      </Link>
      <Link to="/TravelGo/Home" className="hover-underline-animation">
        Home
      </Link>
      <Link to="/TravelGo/Map" className="hover-underline-animation">
        Map
      </Link>
      <Link to="/TravelGo/Dashboard" className="hover-underline-animation">
        Dashboard
      </Link>
    </nav>
  );
};

export default Navigation;
