import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { DiscogState } from "../discogstate";
import Samples from "../components/Samples";

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
      <div className="studionavcontainer">
        <Navbar />
        <h1 className="title">LISTEN</h1>
        <nav className="redsecondnav">
          <a href="#control">SAMPLES</a>
          <a href="#live">DISCOGRAPHY</a>
        </nav>
      </div>
      <Samples />
      {/* <img src="/listen-img.jpg" className="listen-img" />
        <div className="list-items">{albumListItems}</div> */}
    </>
  );
};

export default Listen;
