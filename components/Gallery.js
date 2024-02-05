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
import abas2 from "../public/cover-art/ABAS2.jpeg";
import esb from "../public/cover-art/esb.jpeg";
import helga from "../public/cover-art/helga.jpeg";
import lakes from "../public/cover-art/lakes.jpeg";
import lastvinci from "../public/cover-art/lastvinci.jpeg";
import shipwrecker from "../public/cover-art/shipwrecker.jpeg";
import vennart2 from "../public/cover-art/vennart2.jpeg";

const Gallery = () => {
  return (
    <div className="new-gallery-container">
      <div className="image-container">
        <Image src={abas2} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">A Burial At Sea - Close To Home</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={vennart2} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Vennart - Forgiveness And The Grain</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={esb} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Empire State Bastard - Rivers Of Heresy</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={helga} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Helga - Wrapped In Mist</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={lakes} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Lakes - Elysian Skies</div>
        </div>
      </div>
      <div className="image-container">
        <Image src={lastvinci} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">
            The Last Vinci - The Revolution If Made Together
          </div>
        </div>
      </div>
      <div className="image-container">
        <Image src={shipwrecker} width="150" height="150" placeholder="blur" />
        <div className="overlay">
          <div className="text">Shipwrecker - Different Beast</div>
        </div>
      </div>
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
    </div>
  );
};

export default Gallery;
