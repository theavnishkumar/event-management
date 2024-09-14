import { Link, useNavigate } from "react-router-dom";
import { MdEventAvailable } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaUserCheck } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Landing = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      {/* Header Start*/}
      <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-xl">
            Event Manement
          </a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <svg
            className="fill-current text-gray-900"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <Link className="md:p-4 py-3 px-0 block" to="/event">
                  Event
                </Link>
              </li>
              {user ? (
                <li className="flex justify-center items-center">
                  <Link className="md:p-4 py-3 px-0 block" to="/dashboard">
                    Dashboard
                  </Link>
                  <span className=" text-grey-900 font-semibold">Hi, {user?.name}</span>
                  <button
                className="flex items-center justify-center text-white bg-red-500 rounded-lg px-3 hover:bg-red-600  py-2.5  hover:shadow-lg hover:drop-shadow transition duration-200 mx-4 text-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link className="md:p-4 py-3 px-0 block" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="md:p-4 py-3 px-0 block" to="/signup">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Start */}
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
            <span className="block w-full">Createing Moments,</span> One Event
            at a Time.
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            We bring your vision to life with seamless event planning,
            personalized services, and unforgettable experiences for every
            occasion.
          </p>
          <div className="mt-4">
            <Link
              to={"/event"}
              className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"
            >
              Explore Events
            </Link>
          </div>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
            alt="Awesome hero page image"
            width="500"
            height="488"
          />
        </div>
      </div>
      {/* Hero End */}

      {/* Features Start */}
      <section id="new-features" className="py-8 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-2xl xl:text-5xl">
              Features
            </h2>
          </div>
          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <MdEventAvailable size={26} />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Create & Manage Events
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Effortlessly create, customize, and manage events with all
                essential details.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <FaUser size={26} />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Seamless Registration
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Easy attendee registration and secure payment integration.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <IoMdTime size={26} />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Real-Time Updates
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Stay informed with instant notifications for event updates,
                reminders, and changes.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                <MdEventNote size={26} />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Custom Event Pages
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Design unique event pages with branding, media, and schedules
                that stand out.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                <SlCalender size={26} />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Interactive Event Calendar
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Discover upcoming events through a user-friendly, filterable
                event calendar.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                <FaUserCheck size={26} />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Attendee Management
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Keep track of your attendees with easy export and reporting
                options.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features End */}

      {/* Footer Start */}
      <div className="bg-white">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-xl text-indigo-600">
              Event Management
            </h3>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              Resources
            </div>
            <a className="my-3 block" href="/#">
              Documentation <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Tutorials <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Support <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              Support
            </div>
            <a className="my-3 block" href="/#">
              Help Center <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Conditions <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              Contact us
            </div>
            <a className="my-3 block" href="/#">
              XXX XXXX, Floor 4 San Francisco, CA
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              contact@company.com
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center"
        >
          <div className="my-5">© Copyright 2024. All Rights Reserved.</div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
};

export default Landing;
