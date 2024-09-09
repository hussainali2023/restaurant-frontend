import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <Link className="mr-6 text-lg font-semibold" to={"/"}>
        Home
      </Link>

      <Link className=" mr-6 text-lg font-semibold" to={"/menu"}>
        Our Menu
      </Link>
      <Link className=" mr-6 text-lg font-semibold" to={"/order/salad"}>
        Order
      </Link>

      <Link className="mr-6 text-lg font-semibold" to={"/contact"}>
        Contact Us
      </Link>

      <Link to={"/login"}>
        <button className=" text-lg px-6 py-3 bg-[#fea109]">Login</button>
      </Link>
    </>
  );

  return (
    <div className=" text-white">
      <div className="navbar fixed z-10 bg-opacity-30 bg-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-8 gap-4 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to={"/"}
            className=" uppercase font-semibold text-2xl text-[#fccb05]"
          >
            Bistro Boss
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
