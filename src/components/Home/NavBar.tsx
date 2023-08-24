import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [navIndex, setNavIndex] = useState(0 as number);

  useEffect(() => {
    gsap.to(".active-nav", {
      xPercent:
        navIndex === 3
          ? navIndex * 324
          : navIndex === 4
          ? navIndex * 317
          : navIndex * 285,
      backgroundColor: `${
        navIndex === 0
          ? "#4287f5"
          : navIndex === 1
          ? "#0ff288"
          : navIndex === 3
          ? "#ff5445"
          : "#ffcc41"
      }`,
      duration: 0.8,
    });
  }, [navIndex]);

  const changeNavIndex = (index: number) => {
    setNavIndex(index);
  };

  return (
    <nav className="w-full h-[80px] pt-5 bg-white">
      <div
        className={`w-full h-10 relative flex flex-row justify-around items-center gap-10`}
      >
        <div
          className={`w-[100px] opacity-25 h-10 absolute top-[1px] left-[75px] active-nav rounded`}
        ></div>
        <NavLink
          className={`font-bold text-sm cursor-pointer p-2 ${navIndex == 0 ? 'text-[#4287f5] delay-500': ''}`}
          onClick={() => changeNavIndex(0)}
          to={'/home'}
        >
          Home
        </NavLink>
        <NavLink
          className={`font-bold text-sm cursor-pointer p-2 ${navIndex == 1 ? 'text-[#3ad28b] delay-500': ''}`}
          onClick={() => changeNavIndex(1)}
          to={'/about'}
        >
          About
        </NavLink>
        <p className={`font-black text-4xl cursor-pointer p-2`}>Pravesh.</p>
        <NavLink
          className={`font-bold text-sm cursor-pointer p-2 ${navIndex == 3 ? 'text-[#ff5445] delay-500': ''}`}
          onClick={() => changeNavIndex(3)}
          to={'/services'}
        >
          Services
        </NavLink>
        <NavLink
          className={`font-bold text-sm cursor-pointer p-2 ${navIndex == 4 ? 'text-[#ffcc41] delay-500': ''}`}
          onClick={() => changeNavIndex(4)}
          to={'/contact'}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
