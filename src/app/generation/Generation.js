import React from "react";

export default function Generation() {
  return (
    <section id="generation-of-electricity">
      <h1>How is Electricity Produced</h1>
      <p>The general explanation of how we generate electricity</p>
      <h2>Electricity Generation</h2>
      <p>
        Electricity is generated by means of turning a turbine to mve several
        magnets a cylinder of coiled wire, which produces an electrical current
      </p>
      <div className="turbine-diagram">
        <img />
      </div>
      <p>
        The generation of electrical current from moving a magnet around a wire
        is described and first observed through Faraday's law of induction
      </p>
      <h2>Faraday's law of induction</h2>
      <p>
        Faraday’s Law of Induction discloses, moving a magnet around a conductor
        will induce an electrical current. This occurs since the magnetic field
        of the magnets attracts electrons of the wire, and when moving will
        attract the electrons in the wire to move with them. This induces a
        current since there is now a movement of electrons.
      </p>
      <div className="circuit-magnet-diagram">
        <img />
      </div>
      <div
        className="next-page-button"
        page="generation-of-electricity"
        next-page="application"
      >
        <h4>Applications</h4>
        <button>
          <img src="../assets/Next Page Arrow.svg" />
        </button>
      </div>
    </section>
  );
}
