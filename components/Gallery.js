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

      <Image
        src="/cover-art/amtp-infinity-stare.jpg"
        width="150"
        height="150"
      />
      <Image src="/cover-art/last-hyena.jpeg" width="150" height="150" />
      <Image src="/cover-art/Bicurious.jpeg" width="150" height="150" />
      <Image src="/cover-art/vasa-heroics.jpeg" width="150" height="150" />
      <Image src="/cover-art/body-hound.jpeg" width="150" height="150" />
      <Image src="/cover-art/amtp-health.jpeg" width="150" height="150" />
      <Image src="/cover-art/cleft-wrong.jpeg" width="150" height="150" />
      <Image src="/cover-art/ABAS.jpeg" width="150" height="150" />
      <Image src="/cover-art/dog-daisies.jpeg" width="150" height="150" />
      <Image src="/cover-art/falls.jpeg" width="150" height="150" />
    </div>
  );
};

export default Gallery;
