import React from "react";
import { Link } from "react-router-dom";
import nextPageButton from "../../../assets/Next Page Arrow.svg";

export default function Basics() {
  return (
    <section id="basics">
      <h1>Basics</h1>
      <p className="subtitle">
        Some fundamental concepts to know before continuing
      </p>

      <div id="definitions">
        <h2>Definitions</h2>
        <p>Here we have out general definitions and the meanings behind them</p>
        <ul>
          <li>Electricity: The movement of electric charge(electrons).</li>
          <li>Current: The flow of electric charge(electrons).</li>
          <li>
            Conductor: Materials that freely allow the flow of an electrical
            current.
          </li>
        </ul>
        <p>
          Electricity is the movement of our electrons, current is going to be
          the flow of the electrons while a conductor is a material that freely
          allows electrons to flow through it. Note that the flow of electrons
          is the flow of the materials own electrons and not other materials.
        </p>
      </div>
      <div
        className="next-page-button"
        page="basics"
        next-page="generation-of-electricity"
      >
        <h4>Generation of Electricity</h4>
        <Link to="/generation">
          <img src={nextPageButton} />
        </Link>
      </div>
    </section>
  );
}
