import React from "react";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <h2 className="center allcaps fs2 mb2 accent">contact</h2>
      <article>
        <p>
          <span>Phone number: </span> 00123123
        </p>
        <p>
          <span>Email: </span>email@email.com
        </p>
        <p>
          <span>Adress: </span>street Name, number 00
        </p>
      </article>
      <div className="map-container">
        <iframe
          title="goole map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.55843584457!2d16.348870780310225!3d48.253626979334584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d06202c81cec7%3A0x4bc7b5ff100b8511!2sFrancesco%20Grinzing!5e0!3m2!1sen!2sat!4v1675193573571!5m2!1sen!2sat"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
