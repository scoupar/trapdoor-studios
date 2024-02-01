import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Image from "next/image";
import Navbar from "../components/Navbar";

import Bio from "../components/Bio";
import Landing from "../components/Landing";
import StudioLanding from "../components/StudioLanding";
import GearLanding from "../components/GearLanding";
import Contact from "../components/Contact";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="index-container">
        <Head>
          <title>Trapdoor Studios | Home</title>
        </Head>
        <Navbar />
        {/* <HamburgerMenu /> */}
        <Landing />
        <Bio />
        <StudioLanding />
        <GearLanding />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
