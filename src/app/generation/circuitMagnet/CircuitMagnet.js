import React, { Component } from "react";
import $ from "jquery";
import "./CircuitMagnet.scss";

import Circuit from "../../../../assets/Circuit.svg";
import Magnet from "../../../../assets/Magnet.svg";
import Electron from "../../../../assets/Electron-Yellow.svg";

class CircuitMagnet extends Component {
  handleClick = () => {
    $(".electron").animate(
      {
        left: "+=40%"
      },
      1000,
      function() {
        $(".electron").animate({ left: "-=40%" }, 1000);
      }
    );
  };

  render() {
    return (
      <div className="circuit-magnet container-fluid">
        <div className="magnet-row row justify-content-center">
          <img className="magnet" src={Magnet} />
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-9">
            <div>
              <img className="circuit" src={Circuit} />
              <img className="electron" src={Electron} />
            </div>
          </div>
        </div>
        <div className="row">
          <button onClick={() => this.handleClick()}>yes</button>
        </div>
      </div>
    );
  }
}

export default CircuitMagnet;
