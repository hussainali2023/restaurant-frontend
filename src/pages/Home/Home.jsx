import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import PopularMenuItems from "./PopularMenuItems/PopularMenuItems";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="lg:mx-[300px]">
        <Slider />
        <PopularMenuItems />
      </div>
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
