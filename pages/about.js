import Head from "next/head";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import History from "../components/History";
import Services from "../components/Services";
import { NavHashLink } from "react-router-hash-link";

export default function About() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | About</title>
      </Head>
      <div className="about-container">
        <div className="aboutnavcontainer">
          <Navbar />

          <h1 className="title">ABOUT TRAPDOOR</h1>
          <nav className="secondnav">
            <a>BIO</a>
            <a>HISTORY</a>
            <a>SERVICES</a>
          </nav>
        </div>
        <section id="bio">
          <Bio />
        </section>
        <section id="history">
          <History />
        </section>
        <section id="services">
          <Services />
        </section>
      </div>
    </>
  );
}
