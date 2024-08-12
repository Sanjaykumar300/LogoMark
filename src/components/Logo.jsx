import React from "react";
import "../newLogo.css"; 

function Logo() {
  return (
    <section id="newLogo">
      <div className="newLogo-container">
        <div className="newLogo-row">
          <img src="/com/ComLogo1.svg" alt="Logo1" />
          <img src="/com/ComLogo2.svg" alt="Logo2" />
          <img src="/com/ComLogo3.svg" alt="Logo3" />
        </div>
        <div className="newLogo-row">
          <img src="/com/ComLogo4.svg" alt="Logo4" />
          <img src="/com/ComLogo5.svg" alt="Logo5" />
        </div>
      </div>
    </section>
  );
}

export default Logo;
