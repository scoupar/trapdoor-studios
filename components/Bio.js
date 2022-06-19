import Image from "next/image";
import bioImage from "../public/tom-banner.jpg";
import historyImage from "../public/dan-banner.jpg";
import servicesImage from "../public/faq-img.jpg";
import Discography from "./Discography";
import StudioLanding from "./StudioLanding";
import Contact from "./Contact";
import GearLanding from "./GearLanding";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const BioHeader = () => {
  return (
    <section id="about">
      <div className="bio-container">
        <h2 className="text-title">
          Trapdoor Studio is the home of UK Record Producer Tom Peters.
        </h2>
      </div>
    </section>
  );
};

const BioText = () => {
  return (
    <section id="bio">
      <div className="bio-text-container">
        <div className="bio-text">
          {/* <motion.h2 className="text-title">
            Trapdoor Studio is the home of UK Record Producer Tom Peters.
          </motion.h2> */}
          <hr></hr>
          <p>
            Tom has over a decade of working experience in capturing and
            producing music to the highest standard. Starting out in 2011 as the
            assistant at The Grand Studio in rural Lancashire, he has spent the
            last 10 years honing his craft, working in studios all across the UK
            and Ireland until setting up Trapdoor in April 2019.
          </p>
          <div className="section-image-container">
            <Image src={bioImage} className="bio-image" layout="responsive" />
          </div>
          <p className="under-image">
            Tom's production is vibrant and exciting but still natural and human
            - the emphasis is on making your music sound like the best
            representation of you; full of life, colour and power whilst
            preserving the core values of your creative expression. In other
            words, he wants you to sound uniquely like you.
          </p>
          <p>
            Below you can see a selection of the artists that Tom has worked
            with throughout his career and listen to samples of his work.
          </p>
        </div>
      </div>
      <Discography />
    </section>
  );
};

const HistoryHeader = () => {
  return (
    <div className="history-container">
      <h2 className="text-title">
        Trapdoor started as a dream between Tom Peters and Dan Wild-Beesley way
        back in 2013.
      </h2>
    </div>
  );
};

const HistoryText = () => {
  return (
    <section id="history">
      <div className="history-text">
        <p>
          The pair were inseparable and spent most of their time together
          chatting about recording. microphones, bands, amps; everything music
          related. It was only natural that the conversation would move on to
          opening a studio together and in 2014, it very nearly happened.
        </p>
        <p>
          Sadly, things fell through and the studio plan had to take a backseat
          when in 2015, Dan fell ill. After several years of lengthy treatment,
          in October 2018, Dan passed away surrounded by his family. He left
          behind a legacy of incredible joy and happiness and is missed
          everyday. Trapdoor Studio is a part of that legacy, named after a
          Cleft song of the same name, it was the best way Tom could think of to
          remember his best friend by - a sacred shrine to all things Dan and a
          place where his creative spirit can live on. Dan may not be with us
          anymore but his presence is felt in every record produced at Trapdoor.
        </p>
        <p>
          Trapdoor opened its doors in 2019 and was made possible by the
          generosity of lots of wonderful contributors to the studio's startup
          Indiegogo campaign. Without them, Trapdoor would not have been
          possible. Thank you!
        </p>
      </div>
    </section>
  );
};

const ServicesText = () => {
  return (
    <section id="services">
      <div className="services-container">
        <div className="services-text">
          <h2>SERVICES</h2>
          <hr></hr>
          <p>
            Trapdoor offers a number of key services:
            <ul>
              <li>Recording and Production</li>
              <li>Mixing</li>
              <li>Mastering</li>
            </ul>
            Get in touch to discuss your project. We're usually game for
            anything so if you've got something off the beaten track to talk
            through, please don't hesitate to get in touch.
          </p>
        </div>
      </div>
    </section>
  );
};

const Bio = () => {
  return (
    <>
      <BioHeader />

      <BioText />
      <HistoryHeader />
      <Image src={historyImage} className="history-image" />
      <HistoryText />
      {/* <StudioLanding />
      <GearLanding />
      <Contact /> */}
    </>
  );
};

export default Bio;
