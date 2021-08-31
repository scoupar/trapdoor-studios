import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { DiscogState } from "../discogstate";

const Listen = () => {
  const [albums, setAlbums] = useState(DiscogState);

  const albumListItems = albums.map((album) => {
    return (
      <>
        <div className="list-container">
          <h3>ARTIST: {album.artist}</h3>
          <h3>Album: {album.album}</h3>
          <h3>Work Done: {album.work}</h3>
          <iframe
            src={album.spotify}
            width="300"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </>
    );
  });

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
        <div className="list-items">{albumListItems}</div>
      </div>
    </>
  );
};

export default Listen;
