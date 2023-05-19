import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
   
  return (
    <nav className="nav-bar">
      <Link to="/home" className="hover-underline-animation nav-a">Home</Link>
      <Link to="/dashboard" className="hover-underline-animation nav-a">Dashboard</Link>
      <Link to="/map" className="hover-underline-animation nav-a">Map</Link>
      <Link as={Link} to="/trips" className="hover-underline-animation nav-a">Trips</Link>
      <Link as={Link} to="/" className="hover-underline-animation nav-a">Logout</Link>
    </nav>
    )
    
  
};

export default Navigation;
