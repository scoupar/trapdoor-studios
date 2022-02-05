import React from "react";
import Gallery from "react-grid-gallery";

const Discography = () => {
  const IMAGES = [
    {
      src: "/cover-art/vennart.jpg",
      thumbnail: "/cover-art/vennart.jpg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      caption: "Vennart - In The Dead, Dead Wood (Engineer - guitars only)",
    },
    {
      src: "/cover-art/amtp-infinity-stare-large.jpeg",
      thumbnail: "/cover-art/amtp-infinity-stare-large.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      caption: "Alpha Male Tea Party - Infinity Stare (Produce/Mix)",
    },

    {
      src: "/cover-art/last-hyena.jpeg",
      thumbnail: "/cover-art/last-hyena.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      caption: "Last Hyena - How Soon is Mars? (Produce/Mix) ",
    },
    {
      src: "/cover-art/vasa-heroics.jpeg",
      thumbnail: "/cover-art/vasa-heroics.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      caption: "VASA - Heroics (Produce/Mix)",
    },
    {
      src: "/cover-art/bicurious.jpeg",
      thumbnail: "/cover-art/bicurious.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      caption: "Bicurious - (re)constructed (Produce/Mix)",
    },
    {
      src: "/cover-art/body-hound.jpeg",
      thumbnail: "/cover-art/body-hound.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      caption: "Body Hound - No Moon (Produce/Mix)",
    },
    {
      src: "/cover-art/amtp-health.jpeg",
      thumbnail: "/cover-art/amtp-health.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      caption: "Alpha Male Tea Party - Health (Produce/Mix)",
    },
    {
      src: "/cover-art/cleft-wrong.jpeg",
      thumbnail: "/cover-art/cleft-wrong.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      tags: [{}],
    },
    {
      src: "/cover-art/abas.jpeg",
      thumbnail: "/cover-art/abas.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
    },
    {
      src: "/cover-art/amtp-droids.jpeg",
      thumbnail: "/cover-art/amtp-droids.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
    },
    {
      src: "/cover-art/dog-daisies.jpeg",
      thumbnail: "/cover-art/dog-daisies.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
      caption: (
        <a
          className="album-link"
          href="http://vasa.bandcamp.com"
          target="_blank"
          rel="noreferrer"
        >
          VASA - Colours
        </a>
      ),
    },
    {
      src: "/cover-art/falls.jpeg",
      thumbnail: "/cover-art/falls.jpeg",
      thumbnailWidth: 500,
      thumbnailHeight: 500,
    },
  ];
  return (
    <>
      <div className="discog-img">
        <h2 className="hero-text">
          Below you can listen to a number of productions worked on at Trapdoor
        </h2>
      </div>
      <div className="playlist">
        <h2 className="page-title">Showreel</h2>
        <br></br>
        <iframe
          src="https://open.spotify.com/embed/playlist/6iZ3KFaJQ4fTT5dgY0ijFc?utm_source=generator"
          height="380"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <div className="gallery-container">
        {/* <h2 className="page-title">DISCOGRAPHY</h2> */}
        <Gallery
          images={IMAGES}
          margin={2}
          enableImageSelection={false}
          showImageCount={false}
        />
      </div>
    </>
  );
};

export default Discography;
