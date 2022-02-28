import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <AiFillFire className="navbar-icon" />
              JWALAMUKHI
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimesCircle /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={handleClick}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-links" onClick={handleClick}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/culturals"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Culturals
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mess" className="nav-links" onClick={handleClick}>
                  Mess
                </Link>
              </li>
              {/* SIGN-UP BUTTON using component + state */}
              <li className="nav-btn">
                {button ? (
                  <Link
                    to="/contact-us"
                    className="btn-link"
                    onClick={handleClick}
                  >
                    <Button buttonStyle="btn--outline">CONTACT US</Button>
                  </Link>
                ) : (
                  <Link
                    to="/contact-us"
                    className="btn-link"
                    onClick={handleClick}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      CONTACT US
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
