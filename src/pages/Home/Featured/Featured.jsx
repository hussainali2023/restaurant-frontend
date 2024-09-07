import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white">
      <div className=" lg:mx-[300px] py-32">
        <SectionTitle heading={"featured Items"} subHeading={"Check it Out"} />
        <div className=" flex ">
          <div className=" pr-16 ">
            <img
              width={648}
              height={400}
              className=" "
              src={featuredImg}
              alt=""
            />
          </div>
          <div className=" w-[604px]">
            <h4 className=" text-2xl">March 20, 2024</h4>
            <h4 className=" text-2xl uppercase">Where can I get some ?</h4>
            <p className=" text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium error fugit iste eum voluptates perferendis beatae
              doloribus sunt natus enim! Quos animi, asperiores ut corrupti
              dolore exercitationem similique vel labore, dignissimos facere
              natus hic aliquid totam recusandae adipisci odit ducimus aliquam
              ratione voluptatibus voluptate sapiente ad. Quaerat eligendi
              officiis eum.
            </p>
            <button className="px-8 py-5 rounded-lg border-b-4  uppercase">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

/* Frame 2 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 20px 30px;
// gap: 10px;

// position: absolute;
// width: 178px;
// height: 64px;
// left: 1012px;
// top: 5098px;

// border-bottom: 3px solid #FFFFFF;
// border-radius: 8px;
