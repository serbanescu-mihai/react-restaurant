import { socialLinks } from "../../data";

const SocialLink = () => {
  return (
    <>
      {socialLinks.map((socialLink) => {
        const { id, icon, link } = socialLink;
        return (
          <li className="socialIcon" key={id}>
            <a href={link} target="_blank" rel="noreferrer">
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </>
  );
};

export default SocialLink;
