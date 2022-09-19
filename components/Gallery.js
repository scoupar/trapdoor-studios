import Image from "next/image";
import vennart from "../public/cover-art/vennart.jpg";
import amtpinfinitystare from "../public/cover-art/amtp-infinity-stare.jpg";
import lasthyena from "../public/cover-art/last-hyena.jpeg";
import bicurious from "../public/cover-art/Bicurious.jpeg";
import vasa from "../public/cover-art/vasa-heroics.jpeg";
import bodyhound from "../public/cover-art/body-hound.jpeg";
import amtphealth from "../public/cover-art/amtp-health.jpeg";
import cleft from "../public/cover-art/cleft-wrong.jpeg";
import abas from "../public/cover-art/ABAS.jpeg";
import dogdaisies from "../public/cover-art/dog-daisies.jpeg";
import amtpdroids from "../public/cover-art/amtp-droids.jpeg";
import falls from "../public/cover-art/falls.jpeg";

const Gallery = () => {
  return (
    <div className="new-gallery-container">
      <div className="image-container">
        <Image src={vennart} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Vennart - In The Dead, Dead Wood</div>
        </div>
      </div>
      <div className="image-container">
        <Image
          src={amtpinfinitystare}
          width="150"
          height="150"
          placeholder="blur"
        />
        <div className="overlay">
          <div className="text">Alpha Male Tea Party - Infinity Stare</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={lasthyena} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Last Hyena - How Soon is Mars</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={bicurious} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Bicurious - (re)constructed</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={vasa} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">VASA - Heroics</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={bodyhound} width="150" height="150" />
        <div className="overlay">
          <div className="text">Body Hound - No Moon</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={amtphealth} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Alpha Male Tea Party - Health</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={cleft} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Cleft - Wrong</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={abas} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">A Burial At Sea - A Burial At Sea</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={dogdaisies} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Dog Daisies - Eagletism</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={amtpdroids} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Alpha Male Tea Party - Droids</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={falls} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Falls - One Hundred Percent Strong</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
