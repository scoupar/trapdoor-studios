import Image from "next/image";
import bioImage from "../public/tom-banner.jpg";
import indiegogoImage from "../public/indiegogo2.jpg";
import historyImage from "../public/dan-banner.jpg";
import Discography from "./Discography";
import FadeInSection from "./FadeInSection";

const BioHeader = () => {
  return (
    <section id="about">
      <div className="bio-container">
        <FadeInSection>
          <h2 className="text-title">
            <span className="emphasis">
              Trapdoor Studio is a music recording and production facility in
              Liverpool, UK and is home to Record Producer and Mix Engineer, Tom
              Peters
            </span>
            .
          </h2>
        </FadeInSection>
      </div>
    </section>
  );
};

const BioText = ({ consent }) => {
  return (
    <section id="bio">
      <div className="bio-text-container">
        <div className="bio-text">
          <hr></hr>
          <FadeInSection>
            <div className="text-box">
              <p>
                Tom has over a decade of working experience in capturing and
                producing music. Starting out in 2011 at The Grand Studio in
                rural Lancashire, he has spent the last 10 years working in
                studios all across the UK and Ireland until setting up Trapdoor,
                Liverpool in April 2019.
              </p>
              <div className="blue-section-image-container">
                <Image
                  src={bioImage}
                  className="bio-image"
                  layout="responsive"
                  placeholder="blur"
                  alt="Tom Peters in Trapdoor Studios, a Liverpool Recording Studio"
                />
              </div>
              <p className="under-image">
                Tom's production is natural, vibrant and exciting - the emphasis
                is on making your music sound like the best representation of
                you; full of life, colour and power whilst preserving the core
                values of your creative expression. In other words, he wants you
                to sound like you.
              </p>
              <p>
                Tom’s client list includes Empire State Bastard, Vennart, The
                Fall, Cleft, Alpha Male Tea Party, Bicurious, Lakes, Vasa and
                many others.
              </p>
              <p>
                Below you can see a selection of the records that Tom has worked
                on throughout his career and listen to samples of his work.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>

      <div className="bottom-paragraph">
        <Discography consent={consent} />
      </div>
    </section>
  );
};

const HistoryHeader = () => {
  return (
    <div className="history-container">
      <section id="history-title">
        <FadeInSection>
          <h2 className="text-title">
            Trapdoor started as a dream between two friends, way back in 2013.
          </h2>
        </FadeInSection>
      </section>
    </div>
  );
};

const HistoryText = () => {
  return (
    <section id="history">
      <div className="history-text">
        <FadeInSection>
          <hr></hr>
          <p>
            Without Dan Wild-Beesley, there would be no Trapdoor. Tom and Dan
            dreamed of having a studio together which sadly never happened.
          </p>
          <div className="yellow-section-image-container">
            <Image
              src={historyImage}
              className="history-image"
              layout="responsive"
              placeholder="blur"
              alt="Tom Peters on stage with Dan Wild-Beesley"
            />
          </div>
          <p className="under-image">
            Dan passed away in 2018, leaving behind a legacy of incredible joy
            and happiness and Trapdoor Studio is a tribute to that legacy. Named
            after a Cleft song of the same name, it was the best way Tom could
            think to remember his best friend by - a sacred shrine to all things
            Dan and a place where his creative spirit can live on. Dan may not
            be with us anymore but his presence is felt in every record produced
            at Trapdoor.
          </p>
          <p>
            Trapdoor opened its doors in 2019, made possible by the generosity
            of many wonderful contributors to the studio's start-up Indiegogo
            campaign. Without them, Trapdoor would not exist. Thank you!
          </p>
          <div className="yellow-section-image-container">
            <Image
              src={indiegogoImage}
              className="indiegogo-image"
              layout="responsive"
              placeholder="blur"
              alt=""
            />
          </div>
          <br></br>
          <br></br>
        </FadeInSection>
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

const Bio = ({ consent }) => {
  return (
    <>
      <BioHeader />
      <BioText consent={consent} />
      <HistoryHeader />
      <HistoryText />
    </>
  );
};

export default Bio;
