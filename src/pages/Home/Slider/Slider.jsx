import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Slider = () => {
  return (
    <div className=" lg:mx-[300px] my-10">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      />
      <Swiper
        slidesPerView={4}
        freeMode={true}
        spaceBetween={6}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper text-white"
      >
        <SwiperSlide>
          <img className=" rounded-md" src={slide1} alt="" />
          <h3 className=" text-center text-3xl font-bold absolute bottom-5 left-16 lg:left-24">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={slide2} alt="" />
          <h3 className=" text-center text-3xl font-bold absolute bottom-5 left-16 lg:left-24">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={slide3} alt="" />
          <h3 className=" text-center text-3xl font-bold absolute bottom-5 left-16 lg:left-24">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={slide4} alt="" />
          <h3 className=" text-center text-3xl font-bold absolute bottom-5 left-16 lg:left-24">
            Burgers
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={slide5} alt="" />
          <h3 className=" text-center text-3xl font-bold absolute bottom-5 left-16 lg:left-24">
            Sandwiches
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
