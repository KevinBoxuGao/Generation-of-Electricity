import React from "react";
import { Link } from "react-router-dom";
import nextPageButton from "../../../assets/Next Page Arrow.svg";
import $ from "jquery";

class Basics extends React.Component {
  render() {
    return (
      <section id="basics">
        <h1>Basics</h1>
        <p className="subtitle">
          Some fundamental concepts to know before continuing.
        </p>

        <div id="definitions">
          <h2>Definitions</h2>
          <p>
            Here we have out general definitions and the meanings behind them.
          </p>
          <ul>
            <li>Electricity: The movement of electric charge(electrons).</li>
            <li>Current: The flow of electric charge(electrons).</li>
            <li>
              Conductor: Materials that freely allow the flow of an electrical
              current.
            </li>
          </ul>
          <p>
            Electricity is the movement of electrons, a current is going to be
            the flow of the electrons, while a conductor is a material that
            freely allows electrons to flow through it including its own. Note
            that the electrons in a circuit are those of the conductor and are
            manipulated by outside energies to move and create a current instead
            of having electrons be transferred in and out of the material.
          </p>
        </div>
        <div
          className="next-page-button"
          page="basics"
          next-page="generation-of-electricity"
        >
          <h4>Generation of Electricity</h4>
          <div>
            <Link to="/Generation-of-Electricity/generation">
              <img src={nextPageButton} />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Basics;
