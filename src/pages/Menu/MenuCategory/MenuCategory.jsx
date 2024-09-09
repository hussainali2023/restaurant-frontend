import { Link } from "react-router-dom";
import Cover from "../../../components/Cover/Cover";
import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({ items, heading, subHeading, img }) => {
  return (
    <div className=" my-16">
      {heading && <Cover heading={heading} subHeading={subHeading} img={img} />}
      <div className="lg:mx-[250px] my-16 ">
        <div className="  grid grid-cols-2 gap-6">
          {items.map((item) => (
            <>
              <MenuItem key={item._id} item={item} />
            </>
          ))}
        </div>
        {heading && (
          <div className=" flex justify-center mt-10">
            <Link to={`/order/${heading}`}>
              <button className=" uppercase text-xl font-medium border-b-4 px-8 py-5 border-[#bb8506] text-[#bb8506] bg-[#e8e8e8] hover:bg-[#111827] rounded-lg">
                order {heading} now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
