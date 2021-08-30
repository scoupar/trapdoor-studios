import Head from "next/head";
import Navbar from "../components/Navbar";
import Outboard from "../components/Outboard";
import Amplifiers from "../components/Amplifiers";
import Microphones from "../components/Microphones";
import Effects from "../components/Effects";
import Drums from "../components/Drums";

export default function () {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Gear</title>
      </Head>
      <div className="gear-container">
        <div className="gearnavcontainer">
          <Navbar />
          <h1 className="title">THE GEAR</h1>
          <nav className="secondnav">
            <a href="#outboard">OUTBOARD</a>
            <a href="#amps">AMPLIFIERS</a>
            <a href="#mics">MICROPHONES</a>
            <a href="#fx">EFFECTS</a>
            <a href="#drums">DRUMS</a>
          </nav>
        </div>
        <section id="outboard">
          <Outboard />
        </section>
        <section id="amps">
          <Amplifiers />
        </section>
        <section id="mics">
          <Microphones />
        </section>
        <section id="fx">
          <Effects />
        </section>
        <section id="drums">
          <Drums />
        </section>
      </div>
    </>
  );
}
