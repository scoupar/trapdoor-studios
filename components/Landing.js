import homeImage from "../public/landing.jpg";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <Image className="landingimage" src={homeImage} layout="fixed" />
      <div className="logocontainer">
        <img className="logo" src="/trapdoor-circle.svg" />
      </div>
      <h1 className="headline">
        Established 2019 in Liverpool, UK, <span>Trapdoor Studio</span> is the
        perfect place for you to hear your music come to life.
      </h1>
    </>
  );
};

export default Landing;
