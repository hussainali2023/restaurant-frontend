import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import contactCover from "../../assets/contact/banner.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Bistro | Contact</title>
      </Helmet>
      <Cover
        heading={"Contact"}
        subHeading={"Fill free to contact us no hesitate "}
        img={contactCover}
      />
    </div>
  );
};

export default Contact;
