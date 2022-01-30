import Image from "next/image";

const StudioLanding = () => {
  return (
    <div className="studio-landing-container">
      <div className="studio-landing-text-container">
        <p>
          Trapdoor has been carefully put together so that you feel as
          comfortable and as happy as you can making a record. It's a space that
          allows for the creative process to happen naturally and quickly with
          as little interruptions as possible. Once the door is shut, the
          outside world is irrelevant; the only thing that matters is your
          music.
        </p>
        <hr></hr>
      </div>
      <Image
        src="/studio-landing.jpg"
        className="studio-landing-img"
        layout="fill"
      />
    </div>
  );
};

export default StudioLanding;
