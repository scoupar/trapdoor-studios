import homeImage from "../public/landing.jpg";
import Image from "next/image";
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
        />
      </div>
      <div className="logocontainer">
        <img className="logo" src="/trapdoor-circle.svg" />
      </div>
      <h1 className="headline">
        Established 2019 in Liverpool, UK, <span>Trapdoor Studio</span> is the
        perfect place for you to hear your music come to life.
      </h1>
    </div>
  );
};

export default Landing;
