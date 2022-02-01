import Image from "next/image";

const StudioLanding = () => {
  return (
    <>
      <div className="studio-image">
        <h2 className="hero-text">
          Trapdoor is a space that allows for the creative process to happen
          naturally
        </h2>
      </div>
      <div className="control-container">
        <h2 className="title">THE CONTROL ROOM</h2>
        <p>
          The emphasis is on cosy and comfortable. An acoustically treated
          cocoon, the room is designed to sound great wherever you sit. The
          studio is built around the Universal Audio Apollo system with Avid Pro
          Tools and has a whole host of creative tools to capture your music.
          <br></br>
          <br></br>
          The monitoring is provided by Neumann and Quested and is accurate and
          powerful so you can guarantee that what you're hearing in the studio
          is what you'll hear at home. It also looks rather handsome too; if
          you've got to sit in it for 10 hours, you want it to feel nice, right?
          We certainly do.
        </p>
      </div>
      <div className="live-container">
        <h2 className="title">THE LIVE ROOM</h2>
        <p>
          The live room is nice and big with a clear and natural sound. It's a
          blank canvas that can be painted with many colours and is full of
          instruments and oddities to help your music flourish.
        </p>
      </div>
    </>
  );
};

export default StudioLanding;
