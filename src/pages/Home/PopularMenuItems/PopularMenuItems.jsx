import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenuItems = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");
  return (
    <section className=" my-10">
      <div>
        <SectionTitle subHeading={"Check it Out"} heading={"From our menu"} />
      </div>
      <div className=" grid grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenuItems;
