const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text-container">
        <h2>CONTACT</h2>
        <form
          className="contact-form"
          action="https://formsubmit.co/scott.coupar@googlemail.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
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
            placeholder="Type your message here"
            required
            cols="4"
            rows="10"
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <img src="/contact-img.jpg" className="contact-img" />
    </div>
  );
};

export default Contact;
