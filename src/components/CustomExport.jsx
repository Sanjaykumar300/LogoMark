import React from "react";
import "../customExport.css";

function CustomExport() {
  return (
    <section id="custom-export">
      <div className="custom-content">
        <h2>Personalize and Export Right Away</h2>
        <p>All you need is a browser; no designer or program is required.</p>
        <div className="editor-container">
          <img className="editor-image" src="/demo1.png" alt="" />
          <div className="text-section-1">
            <h6>Export in Various Formats</h6>
            <p>EPS, PNG, PDF, SVG, and moree</p>
          </div>
          <div className="text-section-2">
            <h6>Easy Editing Instruments</h6>
            <p>To edit text, double-click</p>
          </div>
          <div className="text-section-3">
            <h6>Adjust for Print and the Web</h6>
            <p>Ideally suits both media
            </p>
          </div>
          <img className="connector-line1" src="/arc.png" alt="" />
          <img className="connector-line2" src="/arc.png" alt="" />
          <img className="connector-line3" src="/arc.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default CustomExport;

