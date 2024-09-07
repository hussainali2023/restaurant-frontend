import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, []);

  console.log(userReviews);

  return (
    <div className="lg:mx-[300px]">
      <SectionTitle
        heading={"Testimonial"}
        subHeading={"What Our Customer Say"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {userReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} />
            </div>
            <div className=" text-center max-w-[1096px]">
              <p className="text-xl">{review?.details}</p>
              <h3 className=" text-[#cd9003] text-3xl font-medium">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
