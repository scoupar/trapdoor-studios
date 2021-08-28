import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Studio() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Studio</title>
      </Head>
      <div className="studio-container">
        <Navbar />
        <h1 className="title">THE STUDIO</h1>
        <nav className="secondnav">
          <a>THE CONTROL ROOM</a>
          <a>THE LIVE ROOM</a>
        </nav>
      </div>
    </>
  );
}
