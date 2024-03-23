import React, { useState } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  //   if (modal) {
  //     document.body.classList.add("active-modal");
  //   } else {
  //     document.body.classList.remove("active-modal");
  //   }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Privacy Policy
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="modal-overlay"></div>
          <div className="modal-content">
            <h2>Privacy Policy</h2>
            <p>
              Your privacy is important to us. It is Trapdoor Studio's policy to
              respect your privacy regarding any information we may collect from
              you across our website, trapdoorstudiosliverpool.co.uk, and other
              sites we own and operate. <br></br>
              <h2>Cookie Policy</h2>
              <p>
                Internet cookies are small text files stored on your device by
                websites you visit. They serve various purposes, such as
                remembering your preferences, login information, and browsing
                activity. Cookies help enhance your online experience by
                personalizing content and providing relevant information.
                However, they can also track your behavior across websites,
                raising privacy concerns. Users can manage and delete cookies
                through their browser settings.
              </p>
              <p>
                We value your privacy and strive to make your browsing
                experience as transparent and secure as possible. As part of our
                commitment to privacy, we want to inform you about the use of
                cookies on our website.
              </p>
              <p>
                No First-Party Cookies: We want to assure you that we do not use
                any first-party cookies on our website. This means that when you
                visit our site, we do not collect or store any personally
                identifiable information through cookies.
              </p>
              <p>
                Third-Party Cookies: While we do not utilize first-party
                cookies, it's important to note that third-party cookies may be
                present. Third-party services such as analytics or embedded
                content from external websites may utilize cookies for their
                functionalities. These cookies are controlled by third parties
                and are subject to their respective privacy policies.
              </p>
              <br></br>We only ask for personal information when we truly need
              it to provide a service to you. We collect it by fair and lawful
              means, with your knowledge and consent. We also let you know why
              we’re collecting it and how it will be used. We only retain
              collected information for as long as necessary to provide you with
              your requested service. What data we store, we’ll protect within
              commercially acceptable means to prevent loss and theft, as well
              as unauthorised access, disclosure, copying, use or modification.{" "}
              <br></br>
              <br></br>We don’t share any personally identifying information
              publicly or with third-parties, except when required to by law.
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies. <br></br>
              <br></br>You are free to refuse our request for your personal
              information, with the understanding that we may be unable to
              provide you with some of your desired services. Your continued use
              of our website will be regarded as acceptance of our practices
              around privacy and personal information. If you have any questions
              about how we handle user data and personal information, feel free
              to contact us. <br></br>
              <br></br>
              This policy is effective as of 6 March 2024.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
