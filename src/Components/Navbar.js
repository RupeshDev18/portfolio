import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="logo..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                offset={-110}
                to="header"
                className="nav-link"
                aria-current="page"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-110}
                to="aboutme"
                className="nav-link"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-110}
                to="services"
                className="nav-link"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-110}
                to="experience"
                className="nav-link"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-110}
                to="portfolio"
                className="nav-link"
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-110}
                to="contactme"
                className="nav-link"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
