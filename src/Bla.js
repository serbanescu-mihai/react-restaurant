import React from "react";

const Bla = () => {
  return (
    <div>
      <nav className="navigation">
        <div className="logo">
          <a href="#header">
            <p>francesco</p>
          </a>
        </div>

        <ul className="navigation-links">
          <li>
            <a href="#header">
              <i className="fa-solid fa-house"></i>Home
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="fa-regular fa-face-smile-wink"></i>About
            </a>
          </li>
          <li>
            <a href="#menu">
              <i className="fa-solid fa-utensils"></i>Menu
            </a>
          </li>
          <li>
            <a href="#wine">
              <i className="fa-solid fa-wine-glass"></i>Wine
            </a>
          </li>
          <li>
            <a href="#book">
              <i className="fa-regular fa-calendar-check"></i>Book
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fa-solid fa-globe"></i>Contact
            </a>
          </li>
        </ul>

        <ul className="social">
          <li className="socialIcon">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className="socialIcon">
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="socialIcon">
            <a href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </nav>
      <header className="section header" id="header">
        <div className="header-container">
          <h1>francesco</h1>
          <a href="tel:+00 0 000 0000">
            <i className="fa-solid fa-phone"></i> call now +43 681 123 0000
          </a>
        </div>
      </header>
      <main>
        <section className="section about" id="about">
          <h2 className="center allcaps fs2 mb2 accent">about</h2>
          <section className="container flex">
            <article className="plr2">
              <p>
                Francesco, a quaint Italian restaurant opened in 1910, stands as
                a beacon of tradition and elegance amidst the bustling city.
                With its brick walls and warm lighting, Francesco invites diners
                into a world of culinary delights, where time seems to stand
                still. Each dish is crafted with the utmost care and attention
                to detail, paying homage to the rich heritage of Italian
                cuisine. The menu, a love letter to the past, is filled with
                classic recipes passed down from generation to generation,
                brought to life with the freshest ingredients and a passion for
                flavor.
              </p>
              <br />
              <p>
                As diners savor each bite, they are transported back to a time
                when dining was an experience, a celebration of life and love.
                The soft sounds of classical music fill the air, while the aroma
                of simmering sauces and roasting meats waft through the
                restaurant, creating a warm and inviting ambiance.
              </p>
              <br />
              <p>
                Francesco, more than just a restaurant, is a piece of history, a
                living tribute to the art of Italian cuisine. It is a place
                where memories are made and traditions are kept alive, where
                each visit is like coming home. A true gem, shining bright
                amidst the city's hustle and bustle, Francesco stands as a
                testament to the beauty and timelessness of Italian dining.
              </p>
            </article>
            <aside className="plr2">
              <img src="./images/fancy-restaurant.jpg" alt="" />
            </aside>
          </section>
        </section>

        <section className="section menu" id="menu">
          <h2 className="center allcaps fs2 mb2 accent">menu</h2>
          <div className="button-container"></div>
          <section className="menu-container"></section>
        </section>

        <section className="section book" id="book">
          <h2 className="center allcaps fs2 mb2 accent">book</h2>
          <div className="form-container">
            <form className="form" action="">
              <div className="form-name">
                <label for="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-phone">
                <label for="phone">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="12345"
                />
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
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.55843584457!2d16.348870780310225!3d48.253626979334584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d06202c81cec7%3A0x4bc7b5ff100b8511!2sFrancesco%20Grinzing!5e0!3m2!1sen!2sat!4v1675193573571!5m2!1sen!2sat"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Bla;
