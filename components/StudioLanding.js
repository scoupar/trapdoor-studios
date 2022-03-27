import Image from "next/image";
import controlImage from "../public/studio-landing.jpg";
import liveImage from "../public/live-img.jpg";
import { useState } from "react";
import Gallery from "react-grid-gallery";

const ControlText = () => {
  const IMAGES = [
    {
      src: "/control-2.jpg",
      thumbnail: "/control-2.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 100,
    },
    {
      src: "/control-3.jpg",
      thumbnail: "/control-3.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 100,
    },
    {
      src: "/control-4.jpg",
      thumbnail: "/control-4.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 100,
    },
    {
      src: "/control-5.jpg",
      thumbnail: "/control-5.jpg",
      thumbnailWidth: 150,
      thumbnailHeight: 100,
    },
  ];
  return (
    <section id="control">
      <div className="control-container">
        <div className="control-text">
          <h2>THE CONTROL ROOM</h2>
          <hr></hr>
          <p>
            The emphasis is on cosy and comfortable. An acoustically treated
            cocoon, the room is designed to sound great wherever you sit. The
            studio is built around the Universal Audio Apollo system with Avid
            Pro Tools and has a whole host of creative tools to capture your
            music.
            <br></br>
            <br></br>
            The monitoring is provided by Neumann and Quested and is accurate
            and powerful so you can guarantee that what you're hearing in the
            studio is what you'll hear at home. It also looks rather handsome
            too; if you've got to sit in it for 10 hours, you want it to feel
            nice, right? We certainly do.
          </p>
        </div>
      </div>
      <div className="control-gallery-container">
        <Gallery
          className="control-gallery"
          images={IMAGES}
          margin={2}
          enableImageSelection={false}
          showImageCount={false}
        />
      </div>
    </section>
  );
};

const StudioLanding = () => {
  const [showControlText, setShowControlText] = useState(false);
  const onControlClick = () => setShowControlText(!showControlText);
  return (
    <>
      <div className="image-container">
        <a href="#control" onClick={onControlClick}>
          <Image src={controlImage} className="control-image" />
          <h1 className="imageLink">THE CONTROL ROOM</h1>
        </a>
      </div>
      {showControlText ? <ControlText /> : null}

      <div className="image-container">
        <Image src={liveImage} />
      </div>
      <section id="live">
        <div className="live-container">
          <div className="live-text">
            <h2>THE LIVE ROOM</h2>
            <hr></hr>
            <p>
              The live room is nice and big with a clear and natural sound. It's
              a blank canvas that can be painted with many colours and is full
              of instruments and oddities to help your music flourish.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudioLanding;
