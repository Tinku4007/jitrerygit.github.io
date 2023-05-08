import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header-caption">
        <h1>FREE SHIPPING ON ORDERS $50 & UP</h1>
      </div>
      <header>
        <div className="head_container">
          <div className="container">
            <div className="logo">
              <a href="">
                <img src="img/jitterygit-logo-black.png" alt="" width="156px" />
              </a>
            </div>
            <div className="menu" id="myTopnav">
              <ul>
                <a
                  href="javascript:void(0);"
                  style={{ fontSize: "15px" }}
                  className="icon"
                  onclick="openNav()"
                >
                  &#9776;
                </a>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/buywithprime">Buy with prime</Link>
                </li>
                <li>
                  <Link to="/robotryix">Robotryx</Link>
                </li>
                <li>
                  <Link to="/dinomainiacs">Dinomaniacs</Link>
                </li>
                <li>
                  <Link to="/blog-page">Blog</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
              <div className="header-icon desktop-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping cart"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <div id="mySidenav" className="sidenav" style={{ zIndex: "999" }}>
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
          &times;
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Request Quote</a>
        <a href="#">Contact</a>
        <div className="header-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping cart"></i>
        </div>
      </div> */}
    </>
  );
}

export default Header;
