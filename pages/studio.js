import Head from "next/head";
import Navbar from "../components/Navbar";
import Control from "../components/Control";
import Live from "../components/Live";

export default function Studio() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Studio</title>
      </Head>
      <div className="studio-container">
        <div className="studionavcontainer">
          <Navbar />
          <h1 className="title">THE STUDIO</h1>
          <nav className="redsecondnav">
            <a href="#control">THE CONTROL ROOM</a>
            <a href="#live">THE LIVE ROOM</a>
          </nav>
        </div>
        <section id="control">
          <Control />
        </section>
        <div className="blueseperator"></div>
        <section id="live">
          <Live />
        </section>
      </div>
    </>
  );
}
