import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Listen() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Listen</title>
      </Head>
      <div className="listen-container">
        <Navbar />
        <h1 className="title">LISTEN</h1>
        <nav className="secondnav">
          <a>DISCOGRAPHY</a>
        </nav>
      </div>
    </>
  );
}
