import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./header.scss";

import CircuitDiagram from "../../../assets/Circuit Diagram.svg";
import Electron from "../../../assets/Electron-Blue.svg";

class Header extends React.Component {
  handleClick = () => {
    $("#intro").animate({ bottom: "100vh" });
  };

  testAnimation = () => {
    $(".electron").animate({ left: "100%" });
  };

  render() {
    return (
      <header id="intro" className="vertical-center">
        <div className="container text-center">
          <h1>Generation of Electricity</h1>
          <div>
            <div className="circuit-diagram">
              <div>
                <img src={CircuitDiagram} />
              </div>
            </div>
          </div>
          <Link
            exact
            to={"/basics"}
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
