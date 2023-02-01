import React from "react";

const Book = () => {
  return (
    <section className="section book" id="book">
      <h2 className="center allcaps fs2 mb2 accent">book</h2>
      <div className="form-container">
        <form className="form" action="">
          <div className="form-name">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="John Doe" />
          </div>
          <div className="form-phone">
            <label for="phone">Phone:</label>
            <input type="text" name="phone" id="phone" placeholder="12345" />
          </div>
          <div className="form-email">
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@domain.com"
            />
          </div>
          <div className="form-time"></div>
          <div className="form-message">
            <label for="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="your message or special request"
            ></textarea>
          </div>
          <button type="submit" className="formSubmit">
            Book now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Book;
