import Head from "next/head";
import Navbar from "../components/Navbar";
import Outboard from "../components/Outboard";
import Amplifiers from "../components/Amplifiers";
import Microphones from "../components/Microphones";
import Effects from "../components/Effects";
import Drums from "../components/Drums";
import GearLanding from "../components/GearLanding";

export default function () {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Gear</title>
      </Head>

      <div className="gearnavcontainer">
        <Navbar />
        <h1 className="title">THE GEAR</h1>
        <nav className="secondnav">
          <a href="#studio">STUDIO</a>
          <a href="#mics">MICROPHONES</a>
          <a href="#instruments">INSTRUMENTS</a>
        </nav>
      </div>
      <div className="gear-container">
        <GearLanding />
        <section id="studio">
          <Outboard />
        </section>
        <section id="mics">
          <Microphones />
        </section>
        <section id="fx">
          <Effects />
        </section>
      </div>
    </>
  );
}
