import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./img/logo.png";

interface NavbarProps {
  title: string;
}

const Navbar = (props: NavbarProps) => {
  return (
    <div className="navbar-container">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawsFinds Logo" />
          <p>{props?.title}</p>
        </Link>
      </div>
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/pets">Pets</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/services">
          <button className="Navbar-button">Give a Pet</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
