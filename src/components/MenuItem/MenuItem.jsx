const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <div className=" flex">
      <div>
        <img className=" w-20 h-14 rounded-full " src={item?.image} alt="" />
      </div>
      <div className="flex">
        <div className=" ml-4">
          <h3 className=" text-xl font-medium">
            {item?.name} ------------------
          </h3>
          <p>{item?.recipe}</p>
        </div>
        <div className=" text-[#bb8506] text-xl font-medium">
          ${item?.price}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
