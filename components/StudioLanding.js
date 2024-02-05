import StudioGallery from "./StudioGallery";
import FadeInSection from "./FadeInSection";

const StudioHeading = () => {
  return (
    <section id="studio">
      <div className="control-title-text">
        <FadeInSection>
          <h2 className="text-title">
            Trapdoor is a space that allows for the creative process to happen
            naturally and quickly.
          </h2>
        </FadeInSection>
      </div>
    </section>
  );
};

const ControlText = () => {
  return (
    <div className="control-container">
      <div className="control-text">
        <FadeInSection>
          <hr></hr>
          <p>
            An acoustically treated cocoon, the control room is designed to
            sound great wherever you sit. The studio is built around the
            Universal Audio Apollo system with Avid Pro Tools and has a whole
            host of creative tools to capture your music.
          </p>
          <StudioGallery />
          <p className="under-image">
            Monitoring is provided by Neumann and Quested and is both accurate
            and powerful so you can guarantee that what you're hearing in the
            studio is what you'll hear at home.
          </p>

          <p className="bottom-paragraph">
            The live room is a versatile space with a clear and natural sound.
            It's a blank canvas that can be painted with many colours and is
            full of instruments and oddities to help your creativity flourish.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
};

const StudioLanding = () => {
  return (
    <>
      <StudioHeading />

      <ControlText />
    </>
  );
};

export default StudioLanding;
