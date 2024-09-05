import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer text-white ">
        <div className=" item-parent ">
          <div className="item-1 ">
            <div>
              <h3 className="text-3xl font-semibold">CONTACT US</h3>
              <div>
                <p>123 ABS street, Uni 24, India</p>
                <p>+91 123 456 7890</p>
                <p>example@email.com</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
          <div className="item-2 ">
            <div>
              <h3 className="text-3xl font-semibold">Follow Us</h3>
              <div>
                <p>Join us on Social Media</p>
                <a href="#" className="link link-hover">
                  Facebook
                </a>
                <a href="#" className="link link-hover">
                  Instagram
                </a>
                <a href="#" className="link link-hover">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer footer-center bg-black text-white p-4">
        <aside>
          <p>
            Copyright {new Date().getFullYear()} - All right reserved by Hussain
            Industries Ltd
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
