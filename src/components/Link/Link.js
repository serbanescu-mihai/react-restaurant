import { links } from "../../data";

const Link = () => {
  return (
    <>
      {links.map((link1) => {
        const { id, name, icon, link } = link1;
        return (
          <li key={id}>
            <a href={`#${link}`}>
              <i className={icon}></i>
              {name}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default Link;
