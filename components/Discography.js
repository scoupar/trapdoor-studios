import React from "react";
import Gallery from "react-grid-gallery";

const Discography = () => {
  const IMAGES = [
    {
      src: "/cover-art/vennart.jpg",
      thumbnail: "/cover-art/vennart.jpg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
      caption: "Vennart - In The Dead, Dead Wood (Engineer - guitars only)",
    },
    {
      src: "/cover-art/amtp-infinity-stare.jpg",
      thumbnail: "/cover-art/amtp-infinity-stare.jpg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
      caption: "Alpha Male Tea Party - Infinity Stare (Produce/Mix)",
    },

    {
      src: "/cover-art/last-hyena.jpeg",
      thumbnail: "/cover-art/last-hyena.jpeg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
      caption: "Last Hyena - How Soon is Mars? (Produce/Mix) ",
    },
    {
      src: "/cover-art/vasa-heroics.jpeg",
      thumbnail: "/cover-art/vasa-heroics.jpeg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
      caption: "VASA - Heroics (Produce/Mix)",
    },
    {
      src: "/cover-art/bicurious.jpeg",
      thumbnail: "/cover-art/bicurious.jpeg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
      caption: "Bicurious - (re)constructed (Produce/Mix)",
    },
    {
      src: "/cover-art/body-hound.jpeg",
      thumbnail: "/cover-art/body-hound.jpeg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
      caption: "Body Hound - No Moon (Produce/Mix)",
    },
    {
      src: "/cover-art/amtp-health.jpeg",
      thumbnail: "/cover-art/amtp-health.jpeg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
      caption: "Alpha Male Tea Party - Health (Produce/Mix)",
    },
    {
      src: "/cover-art/cleft-wrong.jpeg",
      thumbnail: "/cover-art/cleft-wrong.jpeg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
      tags: [{}],
    },
    {
      src: "/cover-art/axes.jpeg",
      thumbnail: "/cover-art/axes.jpeg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
    },
    {
      src: "/cover-art/amtp-droids.jpeg",
      thumbnail: "/cover-art/amtp-droids.jpeg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
    },
    {
      src: "/cover-art/vasa-colours.jpeg",
      thumbnail: "/cover-art/vasa-colours.jpeg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
      caption: (
        <a
          className="album-link"
          href="http://vasa.bandcamp.com"
          target="_blank"
        >
          VASA - Colours
        </a>
      ),
    },
    {
      src: "/cover-art/falls.jpeg",
      thumbnail: "/cover-art/falls.jpeg",
      thumbnailWidth: 700,
      thumbnailHeight: 700,
    },
  ];
  return (
    <div className="discog-container">
      <div className="gallery-container">
        <Gallery
          images={IMAGES}
          margin={3}
          enableImageSelection={false}
          showImageCount={false}
        />
      </div>
      <img src="/discog-img.jpg" className="discog-img"></img>
    </div>
  );
};

export default Discography;
