import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
          <Link as={Link} to="/TravelGo/Landing" className="hover-underline-animation">Landing</Link>
          <Link as={Link} to="/TravelGo/Home" className="hover-underline-animation">Home</Link>
          <Link as={Link} to="/TravelGo/Login" className="hover-underline-animation">Login</Link>
          <Link as={Link} to="/TravelGo/Signup" className="hover-underline-animation">Signup</Link>
        </nav>
    )
}

export default Navigation;