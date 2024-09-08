const FoodCard = ({ items }) => {
  console.log(items);
  return (
    <div className=" grid md:grid-cols-3 gap-6">
      {items?.map((item) => (
        <div className=" w-[330px]" key={item?._id}>
          <div>
            <img className=" w-full" src={item?.image} alt="" />
          </div>
          <div className=" py-12 px-6 bg-[#f3f3f3] h-80">
            <h3 className=" text-center text-2xl font-semibold">
              {item?.name}
            </h3>
            <p className="text-justify py-4 h-32">{item?.recipe}</p>
            <div className=" flex justify-center">
              <button className=" uppercase text-xl font-medium border-b-4 px-8 py-5 border-[#bb8506] text-[#bb8506] bg-[#e8e8e8] hover:bg-[#111827] rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
