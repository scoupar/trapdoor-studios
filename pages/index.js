import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Image from "next/image";
import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";
import homeImage from "../public/landing.jpg";
import Bio from "../components/Bio";
import Landing from "../components/Landing";
import StudioLanding from "../components/StudioLanding";
import GearLanding from "../components/GearLanding";
import Contact from "../components/Contact";
import Discography from "../components/Discography";
import Footer from "../components/Footer";
import StudioGallery from "../components/StudioGallery";

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
