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
