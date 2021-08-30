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
        <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </>
  );
}
