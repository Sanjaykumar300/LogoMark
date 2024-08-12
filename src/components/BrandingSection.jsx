import React from "react";
import "../branding.css";

function BrandingSection() {
  return (
    <div className="branding-section">
      <div className="branding-container">
        <div className="branding-title">
          <span className="branding-identity">Logo</span>
          <span className="branding-mark">Marker</span>
        </div>
        <h2>Create a unique, business-like logo for your enterprise.</h2>
        <p>
        Get your brand off the ground with ideas for letterheads, app icons, social media visuals, business cards, and more.
        </p>
        <div className="branding-btn">
          <a href="#">
            <button>Make my logo</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BrandingSection;
