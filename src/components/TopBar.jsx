import React from "react";
import "../topbar.css";

function TopBar({ toggleMenu }) {
  return (
    <div className="top-bar">
      <div className="menu-bar">
        <div className="branding">
          <a href="#">
            <span>Logo</span>
            <span>Maker</span>
          </a>
        </div>
        <ul className="menu-items">
          <li>
            <a href="#">Tools</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="mailto:example@gmail.com">Support</a>
          </li>
          <li>
            <a className="sign-in" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-icon" onClick={() => toggleMenu()}>
        <img src="/menu-icon.svg" alt="Menu" />
      </div>
    </div>
  );
}

export default TopBar;
