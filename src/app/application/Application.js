import React from "react";
import { Link } from "react-router-dom";
import nextPageButton from "../../../assets/Next Page Arrow.svg";

export default function Application() {
  return (
    <section id="application">
      <h1>Applications</h1>
      <p className="subtitle">
        Examples of how we use electricity as well as how the electricity
        provides energy to our technologies.
      </p>

      <div id="light">
        <h2>Light</h2>
        <p>
          Light is able to be created in a multitude of ways using electricity
          in various technologies and methods.
        </p>

        <p>The ways we use electricity to generate light:</p>
        <ul>
          <li>
            Incandescent: electricity heats up a metal filament to create heat
            that releases energy as light.
          </li>
          <li>
            Fluorescent: electrons from electric current collide with mercury
            atoms that excite the atoms, bumping electrons to higher energy
            levels that eventually return to their original energy level by
            releasing ultraviolet light. This light is then absorbed by a
            phosphor coating that releases visible light.
          </li>
          <li>
            LED: semi conductors in a diode restrict movement of electrons in
            one direction that contains electron holes that cause electrons to
            release light when travelling through it.
          </li>
        </ul>

        <div className="light-diagrams">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div id="motor">
        <h2>Motor</h2>
        <p>
          A current of electrons also creates a magnetic field as the electrons
          are in motion, which creates a circular magnetic field since each
          electron itself is a tiny magnet. This current flow through the rotor
          which is surrounded has a south and north pole of a magnet going
          through it. This causes the rotor to spin since the magnetic field of
          the rotor to oppose the magnetic field of the stationary magnets and
          cause it to spin since opposite poles repel.
        </p>
        <div className="motor-diagram"></div>
      </div>
      <div className="next-page-button" page="application" next-page="credits">
        <h4>Credits</h4>
        <div>
          <Link to="/credits">
            <img src={nextPageButton} />
          </Link>
        </div>
      </div>
    </section>
  );
}
