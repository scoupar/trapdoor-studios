import Head from "next/head";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import HamburgerMenu from "../components/HamburgerMenu";

export default function Book() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Book</title>
      </Head>

      <div className="book-container">
        <HamburgerMenu />
        <div className="studionavcontainer">
          <h1 className="title">BOOK TRAPDOOR</h1>
          <nav className="secondnav">
            <a href="#contact">CONTACT</a>
            <a href="#faq">BOOKING FAQ</a>
          </nav>
        </div>
      </div>
      <div className="contact-container">
        <Contact />
      </div>
    </>
  );
}
