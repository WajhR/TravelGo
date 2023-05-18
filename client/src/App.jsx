import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home"
import MapSearch from "./components/Map";
import Dashboard from "./components/Dashboard";
import './index.css';


const App = () => {
    return(
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} className="hover-underline-animation"/>
            <Route path="/TravelGo/Landing" element={<Landing />} className="hover-underline-animation"/>
            <Route path="/TravelGo/Home" element={<Home />}/>
            <Route path="/TravelGo/Map" element={<MapSearch />}/>
            <Route path="/TravelGo/Dashboard" element={<Dashboard />}/>
          </Routes>
        </Router>
    </div>
    );
};

export default App;