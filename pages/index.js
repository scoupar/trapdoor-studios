import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";

import Bio from "../components/Bio";
import Landing from "../components/Landing";
import StudioLanding from "../components/StudioLanding";
import GearLanding from "../components/GearLanding";
import Contact from "../components/Contact";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

export default function Home() {
  const [visible, setVisible] = useState(true);
  const [consent, setConsent] = useState(false);

  const handleClick = () => {
    setVisible(false);
  };

  const handleConsent = () => {
    setVisible(false);
    setConsent(true);
  };
  return (
    <>
      <div className="index-container">
        <Head>
          <title>Trapdoor Studios - Liverpool Recording Studio</title>
        </Head>
        <div className={visible ? "cookie-banner" : "cookie-banner-hidden"}>
          <h2 className="cookie-title">Cookie Consent</h2>
          <p>
            This website does not use ay 1st party cookies, however embedded
            content from external websites may utilize 3rd party cookies for
            their functionality. You can opt out of allowing this below.
          </p>
          <p>
            For more details you can view our
            <span>
              <Modal />
            </span>
          </p>
          <button className="cookies-button" onClick={() => handleClick()}>
            Opt Out
          </button>
          <button className="cookies-button" onClick={() => handleConsent()}>
            Allow Cookies
          </button>
        </div>
        <Navbar />

        <Landing />
        <Bio consent={consent} />
        <StudioLanding />
        <GearLanding />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
