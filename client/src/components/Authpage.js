import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Authpage = () => {
    return (
        <>
        <Header />
        <Link as={Link} to="/login">
            <button>Login</button>
        </Link>
        <Link as={Link} to="/signup">
            <button>Signup</button>
        </Link>
        </>
    )
}

export default Authpage;