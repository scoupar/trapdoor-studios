import React from "react";
import Gallery from "react-grid-gallery";
import Image from "next/image";
import listenImage from "../public/control-3.jpg";
import discogImage from "../public/discog-img.jpg";

const Discography = () => {
  const IMAGES = [
    {
      src: "/cover-art/vennart.jpg",
      thumbnail: "/cover-art/vennart.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "Vennart - In The Dead, Dead Wood (Engineer - guitars only)",
    },
    {
      src: "/cover-art/amtp-infinity-stare-large.jpeg",
      thumbnail: "/cover-art/amtp-infinity-stare-large.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "Alpha Male Tea Party - Infinity Stare (Produce/Mix)",
    },

    {
      src: "/cover-art/last-hyena.jpeg",
      thumbnail: "/cover-art/last-hyena.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "Last Hyena - How Soon is Mars? (Produce/Mix) ",
    },
    {
      src: "/cover-art/vasa-heroics.jpeg",
      thumbnail: "/cover-art/vasa-heroics.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "VASA - Heroics (Produce/Mix)",
    },
    {
      src: "/cover-art/Bicurious.jpeg",
      thumbnail: "/cover-art/Bicurious.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "Bicurious - (re)constructed (Produce/Mix)",
    },
    {
      src: "/cover-art/body-hound.jpeg",
      thumbnail: "/cover-art/body-hound.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "Body Hound - No Moon (Produce/Mix)",
    },
    {
      src: "/cover-art/amtp-health.jpeg",
      thumbnail: "/cover-art/amtp-health.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "Alpha Male Tea Party - Health (Produce/Mix)",
    },
    {
      src: "/cover-art/cleft-wrong.jpeg",
      thumbnail: "/cover-art/cleft-wrong.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "Cleft - Wrong (Engineer)",
    },
    {
      src: "/cover-art/ABAS.jpeg",
      thumbnail: "/cover-art/ABAS.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "A Burial At Sea - A Burial At Sea (Produce/Mix)",
    },
    {
      src: "/cover-art/amtp-droids.jpeg",
      thumbnail: "/cover-art/amtp-droids.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "Alpha Male Tea Party - Droids (Produce/Mix/Master)",
    },
    {
      src: "/cover-art/dog-daisies.jpeg",
      thumbnail: "/cover-art/dog-daisies.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "Dog Daisies - Eagletism (Produce/Mix)",
    },
    {
      src: "/cover-art/falls.jpeg",
      thumbnail: "/cover-art/falls.jpeg",
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      caption: "Falls - One Hundred Percent Strong (Produce/Mix)",
    },
  ];
  return (
    <div className="discography-container">
      <section id="discography">
        <div className="gallery-container">
          <hr></hr>
          <Gallery
            className="gallery"
            images={IMAGES}
            margin={2}
            enableImageSelection={false}
            showImageCount={false}
          />
        </div>
      </section>
      <section id="showreel">
        <div className="playlist-text">
          <br></br>
          <div className="player-container">
            <iframe
              src="https://open.spotify.com/embed/playlist/6iZ3KFaJQ4fTT5dgY0ijFc?utm_source=generator"
              height="380"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discography;
