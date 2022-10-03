import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-md 
        navbar-dark bg-dark"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
            <h2>Start Bootstrap</h2>
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Service
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
