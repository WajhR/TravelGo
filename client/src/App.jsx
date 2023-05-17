import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home"
import './index.css';


const App = () => {
    return(
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} className="hover-underline-animation"/>
            <Route path="/TravelGo/Landing" element={<Landing />} className="hover-underline-animation"/>
            <Route path="/TravelGo/Home" element={<Home />}/>
          </Routes>
        </Router>
    </div>
    );
};

export default App;