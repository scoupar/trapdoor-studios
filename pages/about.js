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
      <div className="aboutnavcontainer">
        <Navbar />

        <h1 className="title">ABOUT TRAPDOOR</h1>
        <nav className="secondnav">
          <a href="#bio">BIO</a>
          <a href="#history">HISTORY</a>
          <a href="#services"> SERVICES</a>
        </nav>
      </div>
      <div className="about-container">
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
