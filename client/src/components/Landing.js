import React from "react";
import Airplane from "../assets/airplane.png"
import "../styles/Landing.css"
import { Link } from "react-router-dom"


const Landing = () => {
    return (
       <>
        <div className="sky">
        <div className="clouds"></div>
        <h1 className="title">TravelGo</h1>
        <div className="airplane">
            <img src={Airplane} />
        </div>
        <div className="flame"></div>
        <div className="flame flame2"></div>

        <div className="mountains"></div>
        <Link as={Link} to="/TravelGo/Home">
            <button className="lets-go-button">Let's Go!</button>
        </Link>
    </div>
       </>
    )
}

export default Landing;
