import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const handleOpen = () => {
    setSideBar(true);
  };
  const handleClose = () => {
    setSideBar(false);
  };
  return (
    <>
      {/*sm screen navbar */}
      <div className="p-6 text-white md:hidden ">
        <div className="flex justify-between items-center">
          <div>
            <NavLink to="/">
              <img
                src="/shared/logo.svg"
                alt="logo"
                className="hover:cursor-pointer "
              />
            </NavLink>
          </div>
          <div className="size-8" onClick={handleOpen}>
            <img
              src="/shared/icon-hamburger.svg"
              alt="hamburger"
              className="w-full"
            />
          </div>
        </div>
        <nav
          className={
            sideBar
              ? "w-[300px] h-full bg-slate-950 p-4 px-8 top-0 bg-opacity-90 fixed z-10 -right-0 transition-all duration-300"
              : " w-0 overflow-hidden absolute"
          }
        >
          <div className="size-6 absolute top-5 left-2" onClick={handleClose}>
            <img
              src="/shared/icon-close.svg"
              alt="close icon"
              className="w-full"
            />
          </div>
          <ul className="flex flex-col gap-6 text-xl mt-20">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "border-b-2 " : "")}
                to="/"
              >
                00 Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) => (isActive ? "border-b-2 " : "")}
              >
                01 Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                className={({ isActive }) => (isActive ? "border-b-2 " : "")}
              >
                02 Crew
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={({ isActive }) => (isActive ? "border-b-2 " : "")}
              >
                03 Technoloy
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/*md screen navbar */}
      <div className=" text-white hidden md:block  pl-6">
        <div className="flex  justify-between lg:items-center lg:mt-8">
          <div className="size-12 self-center">
            <NavLink to="/">
              <img
                src="/shared/logo.svg"
                alt="logo"
                className="hover:cursor-pointer "
              />
            </NavLink>
          </div>
          <div className="grid relative items-center">
            <div className="hidden xl:block border border-gray-500 w-[350px] opacity-70 absolute -left-[300px] z-10"></div>
            <nav className="bg-slate-950 bg-opacity-70 p-16 lg:py-6 lg:px-32">
              <ul className="flex  items-center gap-6 text-xl ">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-white  ${isActive ? "border-b-2 " : ""}`
                    }
                    to="/"
                  >
                    <span className="text-gray-500">00</span> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/destination"
                    className={({ isActive }) =>
                      `text-white  ${isActive ? "border-b-2 " : ""}`
                    }
                  >
                    <span className="text-gray-500">01</span> Destination
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/crew"
                    className={({ isActive }) =>
                      `text-white  ${isActive ? "border-b-2 " : ""}`
                    }
                  >
                    <span className="text-gray-500">03</span> Crew
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/technology"
                    className={({ isActive }) =>
                      `text-white  ${isActive ? "border-b-2 " : ""}`
                    }
                  >
                    <span className="text-gray-500">04</span> Technoloy
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
