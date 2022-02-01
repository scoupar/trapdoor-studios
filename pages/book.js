import Head from "next/head";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

export default function Book() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Book</title>
      </Head>

      <div className="book-container">
        <div className="booknavcontainer">
          <Navbar />
          <h1 className="title">BOOK TRAPDOOR</h1>
          <nav className="secondnav">
            <a href="#contact">CONTACT</a>
            <a href="#faq">BOOKING FAQ</a>
          </nav>
        </div>
        <div className="contact-container">
          <Contact />
        </div>
      </div>
    </>
  );
}
