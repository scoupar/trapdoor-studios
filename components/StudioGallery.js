import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const StudioGallery = () => {
  const photos = [
    {
      src: "/studio-landing.jpg",
      width: 5,
      height: 3,
    },
    {
      src: "/control-2.jpg",
      width: 4,
      height: 3,
    },

    {
      src: "/control-3.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "control-4.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "landing-image.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "live-img-2.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "control-5.jpg",
      width: 4,
      height: 3,
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
    <div className="red-section-image-container">
      <Gallery photos={photos} onClick={openLightBox} margin={0} />
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
