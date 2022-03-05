import Head from "next/head";
import Navbar from "../components/Navbar";
import GearLanding from "../components/GearLanding";
import HamburgerMenu from "../components/HamburgerMenu";

export default function Gear() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Gear</title>
      </Head>

      <div className="studionavcontainer">
        <HamburgerMenu />
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
