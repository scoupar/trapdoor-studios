import Head from "next/head";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import History from "../components/History";
import Services from "../components/Services";

export default function About() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | About</title>
      </Head>
      <div className="about-container">
        <Navbar />

        <h1 className="title">ABOUT TRAPDOOR</h1>
        <nav className="secondnav">
          <a>BIO</a>
          <a>HISTORY</a>
          <a>SERVICES</a>
        </nav>
        <Bio />
        <History />
        <Services />
      </div>
    </>
  );
}
