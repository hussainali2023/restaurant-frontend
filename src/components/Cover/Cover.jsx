// import "./Cover.css";
const Cover = ({ img, heading, subHeading }) => {
  console.log(img);
  return (
    <div
      style={{
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className=" cover text-white"
    >
      <div className="flex items-center justify-center min-h-screen lg:mx-[300px] text-center">
        <div className=" uppercase bg-[#151515] px-52 py-28 bg-opacity-60">
          <h1 className=" text-[88px] font-bold">{heading}</h1>
          <p className=" text-xl ">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
