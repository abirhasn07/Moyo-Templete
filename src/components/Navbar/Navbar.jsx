import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../../images/close.svg";
import logo from "../../images/logo.png";
import open from "../../images/menu.svg";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section className="navbar">
      <nav>
        <div className="logo">
          <img src={logo} alt="moyo-logo" />
        </div>
        <ul className={!menu ? "nav-list" : "nav-list active"}>
          <Link to="/" className="nav-item">Home</Link>
          <a href="#About" className="nav-item">
              About
          </a>
          <a href="#Project" className="nav-item">
              Project
          </a>
          <a href="#Contact" className="nav-item">
          Contact
          </a>
        
          
          
       
        </ul>
        <div className="icon">
          {!menu ? (
            <img src={open} alt="openIcon" onClick={() => setMenu(!menu)} />
          ) : (
            <img src={close} alt="closeIcon" onClick={() => setMenu(!menu)} />
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
