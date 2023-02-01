import React from "react";
import Link from "../Link/Link";
import SocialLink from "../socialLink/SocialLink";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <a href="#header">
          <p>francesco</p>
        </a>
      </div>

      <ul className="navigation-links">
        <Link />
      </ul>
      <ul className="social">
        <SocialLink />
      </ul>
    </nav>
  );
};

export default Nav;
