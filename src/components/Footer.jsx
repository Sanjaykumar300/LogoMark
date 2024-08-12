import React from "react";
import "../footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-box">
          <div className="footer-1">
            <div className="footer-1-el1">
              <p>Make Your Own Logo</p>
              <p>No account required try Brandmark for free.
              </p>
            </div>
            <div className="footer-1-el2">
              <p>Assistance</p>
              <p>Need assistance or have questions? Commence here.</p>
            </div>
            <div className="footer-1-el3">
              <p>Eqipments</p>
              <p>EView our collection of free tools for designing logos, fonts.
              </p>
            </div>
          </div>
          <div className="footer-2">
            <p>Terms of service</p>
            <p>Privacy policy</p>
          </div>
        </div>
        <div className="footer-sq">
          <div className="sq-1"></div>
          <div className="sq-2"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
