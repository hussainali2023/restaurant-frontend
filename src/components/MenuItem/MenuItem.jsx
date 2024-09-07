const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <div className=" flex">
      <div>
        <img
          className=" w-[100px] h-[65px] rounded-[0px_200px_200px_200px] "
          src={item?.image}
          alt=""
        />
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

/* Rectangle 11 */

// position: absolute;
// width: 118px;
// height: 104px;
// left: 300px;
// top: 2663px;

// background: #D9D9D9;
// border-radius: 0px 200px 200px 200px;
