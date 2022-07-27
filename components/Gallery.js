import Image from "next/image";

const Gallery = () => {
  return (
    <div className="new-gallery-container">
      <div className="image-container">
        <Image src="/cover-art/vennart.jpg" width="150" height="150" />
        <div className="overlay">
          <div className="text">Vennart - In The Dead, Dead Wood</div>
        </div>
      </div>
      <div className="image-container">
        <Image
          src="/cover-art/amtp-infinity-stare.jpg"
          width="150"
          height="150"
        />
        <div className="overlay">
          <div className="text">Alpha Male Tea Party - Infinity Stare</div>
        </div>
      </div>
      <div className="image-container">
        <Image src="/cover-art/last-hyena.jpeg" width="150" height="150" />
        <div className="overlay">
          <div className="text">Last Hyena - How Soon is Mars</div>
        </div>
      </div>
      <div className="image-container">
        <Image src="/cover-art/Bicurious.jpeg" width="150" height="150" />
        <div className="overlay">
          <div className="text">Bicurious - (re)constructed</div>
        </div>
      </div>
      <div className="image-container">
        <Image src="/cover-art/vasa-heroics.jpeg" width="150" height="150" />
        <div className="overlay">
          <div className="text">VASA - Heroics</div>
        </div>
      </div>
      <div className="image-container">
        <Image src="/cover-art/body-hound.jpeg" width="150" height="150" />
        <div className="overlay">
          <div className="text">Body Hound - No Moon</div>
        </div>
      </div>
      <div className="image-container">
        <Image src="/cover-art/amtp-health.jpeg" width="150" height="150" />
        <div className="overlay">
          <div className="text">Alpha Male Tea Party - Health</div>
        </div>
      </div>
      <div className="image-container">
        <Image src="/cover-art/cleft-wrong.jpeg" width="150" height="150" />
        <div className="overlay">
          <div className="text">Cleft - Wrong</div>
        </div>
      </div>
      <div className="image-container">
        <Image src="/cover-art/ABAS.jpeg" width="150" height="150" />
        <div className="overlay">
          <div className="text">A Burial At Sea - A Burial At Sea</div>
        </div>
      </div>
      <div className="image-container">
        <Image src="/cover-art/dog-daisies.jpeg" width="150" height="150" />
        <div className="overlay">
          <div className="text">Dog Daisies - Eagletism</div>
        </div>
      </div>
      <div className="image-container">
        <Image src="/cover-art/amtp-droids.jpeg" width="150" height="150" />
        <div className="overlay">
          <div className="text">Alpha Male Tea Party - Droids</div>
        </div>
      </div>
      <div className="image-container">
        <Image src="/cover-art/falls.jpeg" width="150" height="150" />
        <div className="overlay">
          <div className="text">Falls - One Hundred Percent Strong</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
