import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const StudioGallery = () => {
  const photos = [
    {
      src: "/studio-landing.jpg",
      width: 1.5,
      height: 1,
      sizes: ["(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw"],
    },
    {
      src: "/control-2.jpg",
      width: 1,
      height: 0.75,
    },

    {
      src: "/control-3.jpg",
      width: 2,
      height: 1.5,
    },
    {
      src: "control-4.jpg",
      width: 2,
      height: 1.5,
    },
    {
      src: "landing-image.jpg",
      width: 2,
      height: 1.5,
    },
    {
      src: "live-img-2.jpg",
      width: 2,
      height: 1.5,
    },
    {
      src: "control-5.jpg",
      width: 2,
      height: 1.5,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightBox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallery-container">
      <Gallery
        photos={photos}
        onClick={openLightBox}
        margin={5}
        direction={"row"}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default StudioGallery;
