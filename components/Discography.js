import React from "react";
import Gallery from "./Gallery";
import FadeInSection from "./FadeInSection";

const Discography = () => {
  return (
    <div className="discography-container">
      <section id="discography">
        <div className="gallery-container">
          <hr></hr>
          <FadeInSection>
            <Gallery className="gallery" />
          </FadeInSection>
        </div>
      </section>
      <section id="playlist">
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
