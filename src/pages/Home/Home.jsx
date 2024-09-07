import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Featured from "./Featured/Featured";
import PopularMenuItems from "./PopularMenuItems/PopularMenuItems";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner />
      <div className="lg:mx-[300px]">
        <Slider />
        <PopularMenuItems />
        <CallUs />
      </div>
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
