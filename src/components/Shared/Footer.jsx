import facebookIcon from "../../assets/social-icons/facebook_icon.png";
import instagramIcon from "../../assets/social-icons/instagram_icon.png";
import twitterIcon from "../../assets/social-icons/twitter_icon.png";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-white">
        <div className="item-1 bg-[#1f2937] text-center lg:text-right pr-4 lg:pr-[158px] py-8 md:py-24">
          <div className="flex justify-center lg:justify-end">
            <div>
              <h3 className="text-[30px] font-medium pb-6">CONTACT US</h3>
              <div className="text-xl font-medium">
                <p>123 ABS street, Uni 24, India</p>
                <p>+91 123 456 7890</p>
                <p>example@email.com</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item-2 bg-[#111827] text-center lg:text-left pl-4 lg:pl-[158px] py-8 md:py-24">
          <div className="flex justify-center lg:justify-start">
            <div>
              <h3 className="text-[30px] font-medium pb-6 uppercase">
                Follow Us
              </h3>
              <div className="text-xl font-medium">
                <p className="pb-6">Join us on Social Media</p>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="#"
                    className="link link-hover"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-9 w-9"
                      src={facebookIcon}
                      alt="Facebook Icon"
                    />
                  </a>
                  <a
                    href="#"
                    className="link link-hover"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-9 w-9"
                      src={instagramIcon}
                      alt="Instagram Icon"
                    />
                  </a>
                  <a
                    href="#"
                    className="link link-hover"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-9 w-9"
                      src={twitterIcon}
                      alt="Twitter Icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 h-[70px] bg-[#151515] text-xl font-medium flex justify-center items-center">
          © Copyright 2024. All rights reserved by Hussain Ali
        </div>
      </div>
    </div>
  );
};

export default Footer;
