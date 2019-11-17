import React from "react";

export default function Application() {
  return (
    <section id="application">
      <h1>Applications</h1>
      <p>
        Examples of how we use electricity as well as how the electricity
        provides energy to our technologies.
      </p>

      <h2>Light</h2>
      <p>
        Light is able to be created in a multitude of ways using electricity in
        various technologies and methods.
      </p>

      <p>The ways we use electricity to generate light:</p>
      <ul>
        <li>
          Incandescent: electricity heats up metal to create heat that creates
          light
        </li>
        <li>
          Fluorescent: electrons collide with mercury atoms that excite the
          atoms, bumping electrons to higher energy levels that eventually
          return to their original energy level by releasing light photons.
        </li>
        <li>
          LED: semi conductors cause the current to release energy as
          photons(light)
        </li>
      </ul>

      <div className="light-diagrams">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <h2>Motor</h2>
      <p>
        A current of electrons also creates a magnetic field as the electrons
        are in motion, which creates a circular magnetic field since each
        electron itself is a tiny magnet. This current flow through the rotor
        which is surrounded has a south and north pole of a magnet going through
        it. This causes the rotor to spin since the magnetic field of the rotor
        to oppose the magnetic field of the stationary magnets and cause it to
        spin since opposite poles repel.
      </p>
      <div className="motor-diagram"></div>
      <div className="next-page-button" page="application" next-page="credits">
        <h4>Credits</h4>
        <button>
          <img src="../assets/Next Page Arrow.svg" />
        </button>
      </div>
    </section>
  );
}
