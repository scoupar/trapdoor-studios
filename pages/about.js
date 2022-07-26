import Head from "next/head";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import HamburgerMenu from "../components/HamburgerMenu";

export default function About() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | About</title>
      </Head>
      <HamburgerMenu />
      <div className="about-container">
        <Bio />
      </div>
    </>
  );
}
