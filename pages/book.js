import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Book() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Book</title>
      </Head>

      <div className="book-container">
        <Navbar />
        <h1 className="title">BOOK</h1>
        <nav className="secondnav">
          <a>CONTACT</a>
          <a>BOOKING FAQ</a>
        </nav>
      </div>
    </>
  );
}
