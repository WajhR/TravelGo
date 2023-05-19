import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../styles/Auth.css"
import Authbackdrop from "../assets/Travelgo2.jpg"

const Authpage = () => {
    return (
        <>
        <Header />
        <section className="auth-wrap">
            <img className="auth-background" src ={Authbackdrop} />
            <section className="auth-button-wrap">
            <Link as={Link} to="/login">
                <button className="auth-button">Login</button>
            </Link>
            <Link as={Link} to="/signup">
                <button className="auth-button">Signup</button>
            </Link>

            </section>

        </section>
        </>
    )
}

export default Authpage;