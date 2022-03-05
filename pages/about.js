import Head from "next/head";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import { NavHashLink } from "react-router-hash-link";
import HamburgerMenu from "../components/HamburgerMenu";

export default function About() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | About</title>
      </Head>
      <HamburgerMenu />
      <div className="aboutnavcontainer">
        <h1 className="title">ABOUT TRAPDOOR</h1>
        <nav className="secondnav">
          <a href="#bio">BIO</a>
          <a href="#history">HISTORY</a>
          <a href="#services"> SERVICES</a>
        </nav>
      </div>
      <div className="about-container">
        <Bio />
      </div>
    </>
  );
}
