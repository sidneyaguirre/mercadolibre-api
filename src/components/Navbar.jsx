import React, { Component } from "react";

import "./styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar__title">
          <h3 className="Navbar__brand" href="/">
            <span className="font-weight-light">
              Sidney Aguirre Castro - "Mercado Libre"
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Navbar;
