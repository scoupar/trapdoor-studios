import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { DiscogState } from "../discogstate";
import Samples from "../components/Samples";
import Discography from "../components/Discography";
import HamburgerMenu from "../components/HamburgerMenu";

const Listen = () => {
  // const [albums, setAlbums] = useState(DiscogState);

  // const albumListItems = albums.map((album) => {
  //   return (
  //     <>
  //       <div className="list-container">
  //         {/* <h3>
  //           {album.artist}/{album.album}
  //         </h3> */}

  //         <iframe
  //           src={album.spotify}
  //           width="300"
  //           height="80"
  //           frameborder="0"
  //           allowtransparency="true"
  //           allow="encrypted-media"
  //         ></iframe>
  //         <h3 className="work">{album.work}</h3>
  //       </div>
  //     </>
  //   );
  // });

  return (
    <>
      <Head>
        <title>Trapdoor Studios | Listen</title>
      </Head>
      <HamburgerMenu />
      <div className="studionavcontainer">
        <h1 className="title">LISTEN</h1>
        <nav className="secondnav">
          <a href="#showreel">SHOWREEL</a>
          <a href="#discography">DISCOGRAPHY</a>
        </nav>
      </div>
      <div className="listen-container">
        <Discography />
      </div>
    </>
  );
};

export default Listen;
