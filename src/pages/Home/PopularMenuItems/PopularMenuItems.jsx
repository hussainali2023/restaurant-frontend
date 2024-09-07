import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const PopularMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenuItems(popularItems);
      });
  }, []);
  console.log(menuItems);

  return (
    <section className="lg:mx-[300px]">
      <div>
        <SectionTitle subHeading={"Check it Out"} heading={"From our menu"} />
      </div>
      <div className=" grid grid-cols-2 gap-6">
        {menuItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenuItems;
