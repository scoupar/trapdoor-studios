import Head from "next/head";
import HamburgerMenu from "../components/HamburgerMenu";
import Navbar from "../components/Navbar";
import StudioLanding from "../components/StudioLanding";

export default function Studio() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Studio</title>
      </Head>
      <HamburgerMenu />
      <div className="studionavcontainer">
        <h1 className="title">THE STUDIO</h1>
        <nav className="secondnav">
          <a href="#control">THE CONTROL ROOM</a>
          <a href="#live">THE LIVE ROOM</a>
        </nav>
      </div>
      <div className="studio-container">
        <StudioLanding />
      </div>
    </>
  );
}
