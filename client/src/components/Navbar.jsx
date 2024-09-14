import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="top-0 py-1 lg:py-2 w-full bg-white lg:relative z-50">
        <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-black font-bold text-2xl">
                <Link to="/">Event Management</Link>
              </h2>
            </div>
            <div className="hidden lg:block">
              <ul className="flex space-x-10 text-base font-bold text-black/60">
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to={"/dashboard"} href="#">
                    Dashboard
                  </Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to={"/event"} href="#">
                    Events
                  </Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to={"/event/create"} href="#">
                    Create Event
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex lg:items-center gap-x-2">
              <span className="text-lg text-grey-900 font-semibold">Hi, {user?.name}</span>
              <button
                className="flex items-center justify-center text-white bg-red-500 rounded-lg px-3 hover:bg-red-600  py-2.5 font-medium hover:shadow-lg hover:drop-shadow transition duration-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            <div className="flex items-center justify-center lg:hidden">
              <button className="focus:outline-none text-slate-200">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="text-2xl text-slate-800  focus:outline-none active:scale-110 active:text-red-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
