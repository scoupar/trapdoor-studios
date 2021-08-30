import Head from "next/head";
import Navbar from "../components/Navbar";
import Outboard from "../components/Outboard";
import Amplifiers from "../components/Amplifiers";

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
            <a>OUTBOARD</a>
            <a>AMPLIFIERS</a>
            <a>MICROPHONES</a>
            <a>EFFECTS</a>
            <a>DRUMS</a>
          </nav>
        </div>
        <Outboard />
        <Amplifiers />
      </div>
    </>
  );
}
