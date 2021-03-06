import React from "react";
import { Link } from "react-router-dom";
import nextPageButton from "../../../assets/Next Page Arrow.svg";
import "./Generation.scss";

import TurbineDiagram from "../../../assets/Turbine Diagram.png";
import CircuitMagnet from "./circuitMagnet/CircuitMagnet";

class Generation extends React.Component {
  render() {
    return (
      <section id="generation-of-electricity">
        <h1>How is Electricity Produced</h1>
        <p className="subtitle">
          The general explanation of how we generate electricity
        </p>

        <div id="generation">
          <h2>Electricity Generation</h2>
          <p>
            Electricity is generated by rotating a cylinder of coiled copper
            wire around several magnets.
          </p>
          <div className="turbine-diagram text-center">
            <img src={TurbineDiagram} />
          </div>
          <p>
            The generation of electrical current from moving a magnet around a
            wire or the other way around is described and first observed through
            Faraday's law of induction.
          </p>
        </div>

        <div id="faradays-law">
          <h2>Faraday's law of induction</h2>
          <p>
            Faraday’s Law of Induction discloses, moving a magnet around a
            conductor will induce an electrical current. This occurs since the
            magnetic field of the magnets attracts electrons of the wire, and
            when moving will attract the electrons in the wire to move with
            them. This induces a current since there is now a movement of
            electrons.
          </p>
          <div className="circuit-magnet-diagram">
            <CircuitMagnet />
          </div>
          <div
            className="next-page-button"
            page="generation-of-electricity"
            next-page="application"
          >
            <h4>Applications</h4>
            <div>
              <Link to="/Generation-of-Electricity/application">
                <img src={nextPageButton} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Generation;
