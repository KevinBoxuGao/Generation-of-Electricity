import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./header.scss";

import CircuitDiagram from "../../../assets/Circuit Diagram.svg";

class Header extends React.Component {
  handleClick = () => {
    $("#intro").animate({ bottom: "100vh" });
  };

  render() {
    return (
      <header id="intro" className="vertical-center">
        <div className="container text-center">
          <h1>Generation of Electricity</h1>
          <div>
            <div className="circuit-diagram">
              <img src={CircuitDiagram} />
            </div>
          </div>
          <Link
            to="/basics"
            className="closeHeaderButton"
            onClick={() => this.handleClick()}
          >
            <svg className="fas fa-angle-down"></svg>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;