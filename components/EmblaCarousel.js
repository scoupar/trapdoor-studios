import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import controlImage1 from "../public/control-2.jpg";
import controlImage2 from "../public/control-5.jpg";
import controlImage3 from "../public/control-4.jpg";
import liveImage1 from "../public/live-img.jpg";
import liveImage2 from "../public/live-img-2.jpg";
import liveImage3 from "../public/live-img-3.jpg";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import next from "next";

export const EmblaCarousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
  }, [embla, onSelect]);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image src={controlImage1} className="control-image" />
          </div>
          <div className="embla__slide">
            <Image src={controlImage2} className="control-image" />
          </div>
          <div className="embla__slide">
            <Image src={controlImage3} className="control-image" />
          </div>
          <div className="embla__slide">
            <Image src={liveImage1} className="control-image" />
          </div>
          <div className="embla__slide">
            <Image src={liveImage2} className="control-image" />
          </div>
          <div className="embla__slide">
            <Image src={liveImage3} className="control-image" />
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};
