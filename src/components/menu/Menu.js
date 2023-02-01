import { useState } from "react";
import { menu } from "../../data";

const Menu = () => {
  const allCategories = [
    "all",
    ...new Set(menu.map((menuCategrory) => menuCategrory.category)),
  ];
  console.log(allCategories);
  const [menuItems, setMenuItems] = useState(menu);
  // const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenuItems(menu);
    } else {
      const newMenu = menu.filter((menuItem) => {
        return menuItem.category === category;
      });
      console.log(newMenu);
      setMenuItems(newMenu);
    }
  };

  return (
    <section className="section menu" id="menu">
      <h2 className="center allcaps fs2 mb2 accent">menu</h2>
      <div className="button-container">
        {allCategories.map((menuCategories, index) => {
          return (
            <button
              key={index}
              type="button"
              className="filter-button"
              onClick={() => {
                filterMenu(menuCategories);
              }}
            >
              {menuCategories}
            </button>
          );
        })}
      </div>
      <section className="menu-container">
        {menuItems.map((foodMenuItem) => {
          const { id, name, description, ingredients, price, image } =
            foodMenuItem;
          return (
            <article className="menu-item" key={id}>
              <img src={image} alt={name} />
              <div>
                <header className="menu-item-header">
                  <h3>{name}</h3>
                  <p className="price">€ {price}</p>
                </header>

                <p className="description">{description}</p>
                <p className="ingredients">
                  <span>Ingredients: </span>
                  {ingredients}
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Menu;
