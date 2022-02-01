const Contact = () => {
  return (
    <>
      <div className="contact-img">
        <h2 className="hero-text">
          Get in touch below to discuss your project
        </h2>
      </div>
      <div className="form">
        <h2 className="page-title">CONTACT</h2>
        <p>
          Please fill in the contact form, or if you prefer, you can send us an
          email directly to (whatever the studio email will be?) Whether it's a
          full production or a quick voiceover, we're always happy to have a
          chat through your ideas and discuss what Trapdoor can bring to your
          work. <br></br>
          <br></br>The studio is ideally situated just off Edge Lane (A5047) one
          of the main routes into Liverpool, so is easy to access by both car
          and public transport. There is free parking directly outside the
          studio door with a very easy load in!
        </p>
        <form
          className="contact-form"
          action="https://formsubmit.co/scott.coupar@googlemail.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name/artist name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
          <input type="hidden" name="_subject" value="New Message"></input>

          <input
            type="hidden"
            name="_next"
            value="https://localhost:3000/blah"
          />
          <textarea
            name="message"
            placeholder="Tell me about your project here!"
            required
            cols="4"
            rows="10"
          />
          <button id="submit-button" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="faq">
        <h2 className="page-title">BOOKING FAQ</h2>
        <br></br>
        <div className="faq-text">
          <h2>What are your rates?</h2>
          <hr />
          <p>
            Please get in touch and we can talk you through this. Every project
            is different so let us know what you're looking to do and we can
            tailor a quote for you.
          </p>
          <h2>How long is a day at Trapdoor?</h2>
          <hr />
          <p>A day at Trapdoor runs from 10-7.</p>
          <h2>Do you do weekends?</h2>
          <hr />
          <p>
            We prefer to operate during the week but can offer weeknds in some
            circumstances.
          </p>
          <h2>Is Trapdoor available for dry hire?</h2>
          <hr />
          <p>
            Yes! Please get in touch and we can talk you through the process.
          </p>
          <h4>For all other enquiries please get in touch.</h4>
        </div>
      </div>
    </>
  );
};

export default Contact;
