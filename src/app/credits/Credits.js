import React from "react";
import "./Credits.scss";

export default function Credits() {
  return (
    <section id="credits">
      <h1>Credits</h1>
      <p className="subtitle">Everything that made this project possible</p>

      <div id="sources">
        <h2>Sources</h2>

        <p>MLA formatted biliography:</p>
        <ul className="bibliography">
          <li>
            “AC vs DC (Alternating Current vs Direct Current).” Diffen,
            www.diffen.com/difference/Alternating_Current_vs_Direct_Current.
          </li>
          <li>
            Bellis, Mary. “So... What Is Electricity?” ThoughtCo, ThoughtCo, 24
            Sept. 2018, www.thoughtco.com/what-is-electricity-4019643.
          </li>
          <li>
            Brain, Marshall. “How Lithium-Ion Batteries Work.” HowStuffWorks,
            HowStuffWorks, 14 Nov. 2006,
            electronics.howstuffworks.com/everyday-tech/lithium-ion-battery.htm.
          </li>
          <li>
            “How the Electricity Grid Works.” Union of Concerned Scientists, 17
            Feb. 2015, www.ucsusa.org/resources/how-electricity-grid-works.
          </li>
          <li>
            Khan, Salman. “What Is Faraday's Law?” Khan Academy, Khan Academy,
            www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnetic-flux-faradays-law/a/what-is-faradays-law.
          </li>
          <li>
            Khan, Salman. “What Is Magnetic Force?” Khan Academy, Khan Academy,
            www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic/a/what-is-magnetic-force.
          </li>
          <li>
            Lucas, Jim. “What Is Electric Current?” LiveScience, Purch, 1 Mar.
            2016, www.livescience.com/53889-electric-current.html.
          </li>
          <li>
            Lucas, Jim. “What Is Magnetism? | Magnetic Fields &amp; Magnetic
            Force.” LiveScience, Purch, 29 July 2015,
            www.livescience.com/38059-magnetism.html.
          </li>
          <li>
            Minutephysics and Veritasium, directors. MAGNETS: How Do They Work?
            YouTube, YouTube, 23 Sept. 2013,
            www.youtube.com/watch?v=hFAOXdXZ5TM.
          </li>
          <li>
            “U.S. Energy Information Administration - EIA - Independent
            Statistics and Analysis.” How Electricity Is Generated - U.S. Energy
            Information Administration (EIA),
            www.eia.gov/energyexplained/electricity/how-electricity-is-generated.php.
          </li>
          <li>
            “What Causes Magnetism?” Reference, IAC Publishing,
            www.reference.com/science/causes-magnetism-a846c7ad1de153b.
          </li>
          <li>
            “What Is Faraday's Law of Induction?” LiveScience, Purch,
            www.livescience.com/53509-faradays-law-induction.html.
          </li>
          <li>
            Woodford, Chris. “Magnetism for Kids - A Simple Introduction.”
            Explain That Stuff, 25 Oct. 2019,
            www.explainthatstuff.com/magnetism.html.
          </li>
        </ul>
        <h2>About</h2>
        <p>
          This is a school project designed to help incoming physics students to
          learn about the concept of the generation of electricity in a
          genralized manner.
        </p>
        <p>
          This was developed by Kevin Gao and is coded using HTML, CSS,
          Javascript and React.js
        </p>
      </div>
    </section>
  );
}
