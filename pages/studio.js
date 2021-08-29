import Head from "next/head";
import Navbar from "../components/Navbar";
import Control from "../components/Control";

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
            <a>THE CONTROL ROOM</a>
            <a>THE LIVE ROOM</a>
          </nav>
        </div>

        <Control />
      </div>
    </>
  );
}
