import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
   
  return (
    <nav className="nav-bar">
      <Link to="/home" className="hover-underline-animation">Home</Link>
      <Link to="/dashboard" className="hover-underline-animation">Dashboard</Link>
      <Link to="/map" className="hover-underline-animation">Map</Link>
      <Link as={Link} to="/trips" className="hover-underline-animation">Trips</Link>
      <Link as={Link} to="/blogposts" className="hover-underline-animation">Blogposts</Link>
      <Link as={Link} to="/" className="hover-underline-animation">Logout</Link>
    </nav>
    )
    
  
};

export default Navigation;
