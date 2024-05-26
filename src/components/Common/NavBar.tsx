import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link, NavLink, useLocation } from "react-router-dom";
import MenuIcon from "../../assets/icons/MenuIcon.svg";
import { navLinks, navLinksMob } from "../utils/nav";

const NavBar = () => {
  const [navIndex, setNavIndex] = useState(1 as number);
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);

  const openToggleMenu = () => {
    gsap.to(".lineToRotate1", {
      duration: 0.5,
      rotate: 45,
      y: 9,
    });
    gsap.to(".lineToRotate2", {
      duration: 0.5,
      rotate: -45,
      y: -8,
    });
    gsap.to(".lineToHide", {
      opacity: 0,
      duration: 0.5,
    });
    setMenu(true);
  };

  const closeToggleMenu = () => {
    gsap.to(".lineToRotate1", {
      duration: 0.5,
      rotate: 0,
      y: 0,
    });
    gsap.to(".lineToRotate2", {
      duration: 0.5,
      rotate: 0,
      y: 0,
    });
    gsap.to(".lineToHide", {
      opacity: 1,
      duration: 0.5,
    });
    setMenu(false);
  };

  useEffect(() => {
    setNavIndex(
      pathname.includes("home")
        ? 1
        : pathname.includes("about")
        ? 2
        : pathname.includes("myself")
        ? 3
        : pathname.includes("my-skills")
        ? 4
        : pathname.includes("projects")
        ? 5
        : 1
    );
    gsap.to(".active-nav", {
      xPercent: pathname.includes("projects")
        ? navIndex * 271
        : pathname.includes("my-skills")
        ? navIndex * 263
        : pathname.includes("about")
        ? navIndex * 186
        : pathname.includes("home")
        ? navIndex * 72
        : navIndex * 0,
      backgroundColor: `${
        pathname.includes("home")
          ? "#4287f5"
          : pathname.includes("about")
          ? "#0ff288"
          : pathname.includes("my-skills")
          ? "#ff5445"
          : "#ffcc41"
      }`,
      duration: 0.8,
    });
    if (window.innerWidth < 768) {
      closeToggleMenu();
    }
  }, [pathname, navIndex]);

  useEffect(() => {
    if (menu) {
      gsap.fromTo(
        ".menuWrapper",
        { xPercent: -100 },
        {
          xPercent: 0,
          duration: 1,
        }
      );
      const menuClasses = document.querySelectorAll(".menuLink");
      let tl = gsap.timeline({ repeat: 0, repeatDelay: 0, delay: 1 });
      tl.fromTo(
        menuClasses,
        {
          xPercent: -100,
        },
        {
          xPercent: 0,
          duration: 0.5,
          stagger: 0.3,
        }
      );
    }
  }, [menu]);

  useEffect(() => {
    gsap.fromTo(
      ".myselfBorder",
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 1.5,
      }
    );
  }, [navIndex]);

  return (
    <>
      <nav
        className={`z-30 fixed w-full h-[65px] 3xl:h-[75px] flex items-center justify-center ${
          navIndex === 1
            ? "bg-[#edf4ff]"
            : navIndex === 2
            ? "bg-[#e3fff2]"
            : navIndex === 3
            ? "bg-black/80 backdrop-blur-lg"
            : navIndex === 4
            ? "bg-[#ffefed]"
            : `bg-[#fff3d4]`
        }`}
      >
        <div
          className={`md:flex hidden w-full h-10 relative flex-row justify-between items-center lg:px-24 md:px-16`}
        >
          <div
            className={`w-[100px] opacity-20 h-10 rounded-lg absolute top-[0px] left-[0px] ${
              navIndex === 3 ||
              window.innerWidth < 1536 ||
              window.innerWidth > 1536
                ? "hidden"
                : "block active-nav"
            }`}
          ></div>
          {navLinks?.map((item: any, index: number) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${item?.activeClasses} ${
                      navIndex === 3 ? "text-coffeeLight" : ""
                    }`
                  : `${item?.baseClasses} ${
                      navIndex === 3 ? "text-coffeeLight" : "text-fontBlack"
                    }`
              }
              onClick={() => setNavIndex(index + 1)}
              to={`${item?.link}`}
            >
              <div className="relative w-fit h-fit">
                <div className="relative z-0">{item?.title}</div>
                <div
                  className={`${
                    navIndex === 3 && index === 2
                      ? "h-[3px] bg-coffeeLight myselfBorder"
                      : "hidden"
                  }`}
                ></div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Small Screen Menu */}

        <div
          onClick={!menu ? openToggleMenu : closeToggleMenu}
          className="md:hidden flex w-full flex-col justify-center items-end gap-[6px] sm:px-10 px-6"
        >
          <div
            className={`lineToRotate1 h-[3px] w-[30px] rounded-lg ${
              navIndex === 3 ? "bg-coffeeLight" : "bg-black"
            }`}
          ></div>
          <div
            className={`lineToHide h-[3px] w-[22px] rounded-lg ${
              navIndex === 3 ? "bg-coffeeLight" : "bg-black"
            }`}
          ></div>
          <div
            className={`lineToRotate2 h-[3px] w-[30px] rounded-lg ${
              navIndex === 3 ? "bg-coffeeLight" : "bg-black"
            }`}
          ></div>
        </div>
        {menu && (
          <div className="absolute top-[70px] left-0 w-full h-screen bg-[#131313] flex flex-col justify-start items-starts gap-14 menuWrapper pl-10 pt-8">
            {navLinksMob?.map((item: any) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-coffeeLight menuLink font-bold text-[60px] cursor-pointer p-2"
                    : "menuLink font-bold text-coffeeLight/40 text-[60px] cursor-pointer p-2"
                }
                onClick={() => setMenu(false)}
                to={`${item?.link}`}
              >
                {item?.title}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
