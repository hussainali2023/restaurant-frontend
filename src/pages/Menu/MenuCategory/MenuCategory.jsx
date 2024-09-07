import Cover from "../../../components/Cover/Cover";
import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({ items, heading, subHeading, img }) => {
  return (
    <div className=" my-16">
      {heading && <Cover heading={heading} subHeading={subHeading} img={img} />}
      <div className=" lg:mx-[300px] my-16 grid grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
