import React from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";

const Discography = () => {
  const IMAGES = [
    {
      src: "/cover-art/vennart.jpg",
      thumbnail: "/cover-art/vennart.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "/cover-art/amtp-infinity-stare.jpg",
      thumbnail: "/cover-art/amtp-infinity-stare.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
      caption: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "/cover-art/last-hyena.jpeg",
      thumbnail: "/cover-art/last-hyena.jpeg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: "/cover-art/vasa-heroics.jpeg",
      thumbnail: "/cover-art/vasa-heroics.jpeg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: "/cover-art/bicurious.jpeg",
      thumbnail: "/cover-art/bicurious.jpeg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: "/cover-art/body-hound.jpeg",
      thumbnail: "/cover-art/body-hound.jpeg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: "/cover-art/amtp-health.jpeg",
      thumbnail: "/cover-art/amtp-health.jpeg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: "/cover-art/cleft-wrong.jpeg",
      thumbnail: "/cover-art/cleft-wrong.jpeg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: "/cover-art/axes.jpeg",
      thumbnail: "/cover-art/axes.jpeg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: "/cover-art/amtp-droids.jpeg",
      thumbnail: "/cover-art/amtp-droids.jpeg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: "/cover-art/vasa-colours.jpeg",
      thumbnail: "/cover-art/vasa-colours.jpeg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: "/cover-art/falls.jpeg",
      thumbnail: "/cover-art/falls.jpeg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
  ];
  return (
    <Gallery
      images={IMAGES}
      margin={0}
      enableImageSelection={false}
      enableLightbox={true}
    />
  );
};

export default Discography;
