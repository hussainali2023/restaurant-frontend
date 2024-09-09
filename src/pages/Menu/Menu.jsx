import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import menuPhoto from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

import dessertImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import soupImage from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const soup = menu?.filter((item) => item.category === "soup");
  const salad = menu?.filter((item) => item.category === "salad");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const offered = menu?.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      {/* Menu Cover  */}
      <Cover
        img={menuPhoto}
        heading={"Our Menu"}
        subHeading={"Would you like to try a dish ?"}
      />
      <div>
        {/* Today's Offered  */}
        <SectionTitle heading={"Today's offer"} subHeading={"Don't miss"} />
        <MenuCategory items={offered} />

        {/* dessert */}
        <MenuCategory
          items={dessert}
          heading={"dessert"}
          subHeading={
            "ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam mollis sag"
          }
          img={dessertImage}
        />

        {/* pizza  */}

        <MenuCategory
          items={pizza}
          heading={"pizza"}
          subHeading={
            "ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam mollis sag"
          }
          img={pizzaImage}
        />

        {/* Salad */}
        <MenuCategory
          items={salad}
          heading={"salad"}
          subHeading={
            "ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam mollis sag"
          }
          img={saladImage}
        />

        {/* Soup */}
        <MenuCategory
          items={soup}
          heading={"soup"}
          subHeading={
            "ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam mollis sag"
          }
          img={soupImage}
        />
      </div>
    </div>
  );
};

export default Menu;
