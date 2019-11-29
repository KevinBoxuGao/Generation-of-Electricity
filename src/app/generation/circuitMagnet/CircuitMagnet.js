import React, { Component } from "react";
import $ from "jquery";
import "./CircuitMagnet.scss";

import Circuit from "../../../../assets/Rectangle 1.svg";
import Magnet from "../../../../assets/Magnet.svg";
import Electron from "../../../../assets/Electron-Yellow.svg";

class CircuitMagnet extends Component {
  handleClick = () => {
    $(".magnet").animate({ left: "+=60%" }, 1500);
    $(".electron").animate({ left: "+=60%" }, 1500);
    $(".magnet").animate({ left: "-=60%" }, 1500);
    $(".electron").animate({ left: "-=60%" }, 1500);
  };
  render() {
    return (
      <div className="circuit-magnet container-fluid">
        <div className="row justify-content-center">
          <div className="col col-md-9 diagram-container d-flex">
            <img className="magnet" src={Magnet} />
            <img className="circuit" src={Circuit} />
            <img className="electron" src={Electron} />
          </div>
        </div>
        <div className="row justify-content-center">
          <button className="button" onClick={() => this.handleClick()}>
            Play Animation
          </button>
        </div>
      </div>
    );
  }
}

export default CircuitMagnet;
