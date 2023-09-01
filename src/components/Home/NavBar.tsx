import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const [navIndex, setNavIndex] = useState(1 as number);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setNavIndex(
      pathname.includes("home")
        ? 1
        : pathname.includes("about")
        ? 2
        : pathname.includes("services")
        ? 4
        : pathname.includes("contact")
        ? 5
        : 1
    );
    gsap.to(".active-nav", {
      xPercent: pathname.includes("contact")
        ? navIndex * 271
        : pathname.includes("services")
        ? navIndex * 264
        : pathname.includes("about")
        ? navIndex * 180
        : navIndex === 3
        ? navIndex * 24
        : pathname.includes("home")
        ? navIndex * 74
        : navIndex * 0,
      backgroundColor: `${
        pathname.includes("home")
          ? "#4287f5"
          : pathname.includes("about")
          ? "#0ff288"
          : pathname.includes("services")
          ? "#ff5445"
          : "#ffcc41"
      }`,
      duration: 0.8,
    });
  }, [pathname, navIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-20 fixed w-full h-[75px] flex items-center justify-center transition-height duration-300 ease-in-out ${
        scrolled ? "shrink" : ""
      } ${navIndex === 1 ? 'bg-[#edf4ff]' : navIndex === 2 ? 'bg-[#e3fff2]' : navIndex === 4 ? 'bg-[#ffefed]' : 'bg-[#fff3d4]'}`}
    >
      <div
        className={`w-full h-10 relative flex flex-row justify-around items-center gap-10`}
      >
        <div
          className={`w-[100px] opacity-25 h-10 absolute top-[0px] left-[0px] active-nav rounded`}
        ></div>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#4287f5] delay-500 font-bold text-sm cursor-pointer p-2"
              : "font-bold text-fontBlack text-sm cursor-pointer p-2"
          }
          onClick={() => setNavIndex(1)}
          to={"/home"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#3ad28b] delay-500 font-bold text-sm cursor-pointer p-2"
              : "font-bold text-fontBlack text-sm cursor-pointer p-2"
          }
          onClick={() => setNavIndex(2)}
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          to={"/home"}
          onClick={() => setNavIndex(3)}
          className={`font-black text-fontBlack text-4xl cursor-pointer p-2`}
        >
          Pravesh.
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#ff5445] delay-500 font-bold text-sm cursor-pointer p-2"
              : "font-bold text-fontBlack text-sm cursor-pointer p-2"
          }
          onClick={() => setNavIndex(4)}
          to={"/services"}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#ffcc41] delay-500 font-bold text-sm cursor-pointer p-2"
              : "font-bold text-fontBlack text-sm cursor-pointer p-2"
          }
          onClick={() => setNavIndex(5)}
          to={"/contact"}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
