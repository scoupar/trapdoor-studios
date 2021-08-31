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
          <li>Artist: {album.artist}</li>
          <li>Album: {album.album}</li>
          <li>Work Done: {album.work}</li>
          <iframe
            src={album.spotify}
            width="300"
            height="380"
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
        <ul>{albumListItems}</ul>
      </div>
    </>
  );
};

export default Listen;
