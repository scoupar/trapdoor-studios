import Head from "next/head";
import Navbar from "../components/Navbar";
import GearLanding from "../components/GearLanding";

export default function Gear() {
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
      </div>
    </>
  );
}
