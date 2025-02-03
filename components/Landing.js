import homeImage from "../public/listen-img.jpg";
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-image-container">
        <Image
          className="landingimage"
          src={homeImage}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="a selection of microphones from trapdoor reocording studio"
        />
      </div>
      <div className="logocontainer">
        <img className="logo" src="/trapdoor-circle-edit.png" />
      </div>
      {/* <h1 className="headline">
        Established 2019 in Liverpool, UK, <span>Trapdoor Studio</span> is the
        perfect place for you to hear your music come to life.
      </h1> */}
      <button className="button">
        <Link href="#contact-text">Book Now</Link>
      </button>
    </div>
  );
};

export default Landing;
