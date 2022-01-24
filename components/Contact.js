const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text-container">
        <form
          className="contact-form"
          action="https://formsubmit.co/scott.coupar@googlemail.com"
          method="POST"
        >
          <h2>CONTACT</h2>

          <p>
            Get in touch below to talk to us about your project. Whether it's a
            full production or a quick voiceover, we're always happy to have a
            chat through your ideas and discuss what Trapdoor can bring to your
            work.
          </p>
          <p>
            If you prefer, you can send us an email directly to (whatever the
            studio email will be?)
          </p>
          <p>
            The studio is ideally situated just off Edge Lane (A5047) one of the
            main routes into Liverpool, so is easy to access by both car and
            public transport. There is free parking directly outside the studio
            door with a very easy load in!
          </p>
          <input
            type="text"
            name="name"
            placeholder="Tell me your name!"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="What is your email address?"
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
      <img src="/book-img.jpg" className="contact-img" />
    </div>
  );
};

export default Contact;
