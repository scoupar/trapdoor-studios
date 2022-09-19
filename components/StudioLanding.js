import StudioGallery from "./StudioGallery";

const StudioHeading = () => {
  return (
    <section id="studio">
      <div className="control-title-text">
        <h2 className="text-title">
          Trapdoor is a space that allows for the creative process to happen
          naturally and quickly.
        </h2>
      </div>
    </section>
  );
};

const ControlText = () => {
  return (
    <div className="control-container">
      <div className="control-text">
        <hr></hr>
        <p>
          The emphasis is on cosy and comfortable. An acoustically treated
          cocoon, the control room is designed to sound great wherever you sit.
          The studio is built around the Universal Audio Apollo system with Avid
          Pro Tools and has a whole host of creative tools to capture your
          music.
        </p>
        <StudioGallery />
        <p className="under-image">
          The monitoring is provided by Neumann and Quested and is accurate and
          powerful so you can guarantee that what you're hearing in the studio
          is what you'll hear at home. It also looks rather handsome too; if
          you've got to sit in it for 10 hours, you want it to feel nice, right?
          We certainly do.
        </p>

        <p className="bottom-paragraph">
          The live room is nice and big with a clear and natural sound. It's a
          blank canvas that can be painted with many colours and is full of
          instruments and oddities to help your music flourish.
        </p>
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
