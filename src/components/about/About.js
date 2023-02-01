import React from "react";

const About = () => {
  return (
    <section className="section about" id="about">
      <h2 className="center allcaps fs2 mb2 accent">about</h2>
      <section className="container flex">
        <article className="plr2">
          <p>
            Francesco, a quaint Italian restaurant opened in 1910, stands as a
            beacon of tradition and elegance amidst the bustling city. With its
            brick walls and warm lighting, Francesco invites diners into a world
            of culinary delights, where time seems to stand still. Each dish is
            crafted with the utmost care and attention to detail, paying homage
            to the rich heritage of Italian cuisine. The menu, a love letter to
            the past, is filled with classic recipes passed down from generation
            to generation, brought to life with the freshest ingredients and a
            passion for flavor.
          </p>
          <br />
          <p>
            As diners savor each bite, they are transported back to a time when
            dining was an experience, a celebration of life and love. The soft
            sounds of classical music fill the air, while the aroma of simmering
            sauces and roasting meats waft through the restaurant, creating a
            warm and inviting ambiance.
          </p>
          <br />
          <p>
            Francesco, more than just a restaurant, is a piece of history, a
            living tribute to the art of Italian cuisine. It is a place where
            memories are made and traditions are kept alive, where each visit is
            like coming home. A true gem, shining bright amidst the city's
            hustle and bustle, Francesco stands as a testament to the beauty and
            timelessness of Italian dining.
          </p>
        </article>
        <aside className="plr2">
          <img src="./images/fancy-restaurant.jpg" alt="" />
        </aside>
      </section>
    </section>
  );
};

export default About;
