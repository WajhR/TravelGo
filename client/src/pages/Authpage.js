import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/Auth.css"
import Authbackdrop from "../assets/Travelgo2.jpg"

const Authpage = () => {
    return (
        <>
        {/* <Header /> */}
        <section className="auth-wrap">
            <p className="auth-info">TravelGo is your #1 app for
            planning a trip! You can look at a map to see where you
            want to go and the many places around it. At it to your
            trip planner and share it with friends!
            </p>
            <img className="auth-background" src ={Authbackdrop} />
            <section className="auth-button-wrap">
            <Link as={Link} to="/login" className="auth-a">
                <button className="auth-button">Login</button>
            </Link>
            <Link as={Link} to="/signup" className="auth-a">
                <button className="auth-button">Signup</button>
            </Link>

            </section>

        </section>
        </>
    )
}

export default Authpage;