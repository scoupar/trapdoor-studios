import Image from "next/image";
import bookImage from "../public/booking-banner.jpg";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const ContactHeader = () => {
  return (
    <section id="contact-text">
      <div className="form-text">
        <h2 className="text-title">
          Get in touch below to talk to us about your project.
        </h2>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <>
      <ContactHeader />
      <div className="image-container"></div>
      <section id="contact">
        <div className="form-text">
          <hr></hr>
          <p>
            Please fill in the contact form, or if you prefer, you can send us
            an email directly to (whatever the studio email will be?) Whether
            it's a full production or a quick voiceover, we're always happy to
            have a chat through your ideas and discuss what Trapdoor can bring
            to your work.
          </p>
          <div className="blue-section-image-container">
            <Image
              src={bookImage}
              className="book-image"
              layout="responsive"
              placeholder="blur"
            />
          </div>
          {/* <p className="under-image">
            The studio is ideally situated just off Edge Lane (A5047) one of the
            main routes into Liverpool, so is easy to access by both car and
            public transport. There is free parking directly outside the studio
            door with a very easy load in!
          </p> */}
          <div className="form-container">
            <form
              className="contact-form"
              action="https://formsubmit.co/scott.coupar@googlemail.com"
              method="POST"
            >
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
              <label htmlFor="email">E-mail Address</label>
              <input type="email" name="email" required />
              <input type="hidden" name="_subject" value="New Message"></input>

              <input
                type="hidden"
                name="_next"
                value="https://localhost:3000/blah"
              />
              <label htmlFor="message">Tell us about your project</label>
              <textarea name="message" required cols="4" rows="6" />
              <button id="submit-button" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="faq">
          <div className="faq-text">
            <h2>Booking FAQ</h2>
            <p></p>
            <AnimateSharedLayout>
              <Toggle title="Where is Trapdoor located?">
                <div className="answer">
                  <p>
                    The studio is ideally situated just off Edge Lane (A5047)
                    one of the main routes into Liverpool, so is easy to access
                    by both car and public transport. There is free parking
                    directly outside the studio door with a very easy load in!
                  </p>
                </div>
              </Toggle>
              <Toggle title="What are your rates?">
                <div className="answer">
                  <p>
                    Please get in touch and we can talk you through this. Every
                    project is different so let us know what you're looking to
                    do and we can tailor a quote for you.
                  </p>
                </div>
              </Toggle>
              <Toggle title="How long is a day at Trapdoor?">
                <div className="answer">
                  <p>A day at Trapdoor runs from 10-7.</p>
                </div>
              </Toggle>
              <Toggle title="Do you do weekends?">
                <div className="answer">
                  <p>
                    We prefer to operate during the week but can offer weeknds
                    in some circumstances.
                  </p>
                </div>
              </Toggle>
              <Toggle title="Is Trapdoor available for dry hire?">
                <div className="answer">
                  <p>
                    Yes! Please get in touch and we can talk you through the
                    process.
                  </p>
                </div>
              </Toggle>
              <p>For all other enquiries please get in touch.</p>
            </AnimateSharedLayout>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
