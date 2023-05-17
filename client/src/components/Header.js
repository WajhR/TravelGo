import React from "react";
import '../styles/Header.css';
import Navigation from "./Navigation";

function Header() {
  return (
    <>
    <header className="header">
      <section className="header-wrap">
        <section className="title-wrap">
          <h1 className="header-title">TravelGo</h1>
        </section>
      </section>
      <Navigation />
    </header>
    </>
  )
}

export default Header;