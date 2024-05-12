import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link, NavLink, useLocation } from "react-router-dom";
import MenuIcon from "../../assets/icons/MenuIcon.svg";
import { navLinks } from "../utils/nav";

const NavBar = () => {
  const [navIndex, setNavIndex] = useState(1 as number);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const isFirstRender = useRef(true) as any;

  const menuOpenClose = () => {
    setMenu(!menu);
    if (!menu) {
      isFirstRender.current = false;
    }
  };

  useEffect(() => {
    if (window.innerWidth === 1536) {
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
          ? navIndex * 272
          : pathname.includes("my-skills")
          ? navIndex * 266
          : pathname.includes("about")
          ? navIndex * 180
          : pathname.includes("home")
          ? navIndex * 70
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
    }
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

  useEffect(() => {
    if (isFirstRender.current) {
      return;
    }
    if (menu) {
      gsap.fromTo(
        ".menuWrapper",
        { yPercent: -100, backgroundColor: "#ffffff" },
        {
          yPercent: 0,
          backgroundColor: "#cccccc",
          duration: 2,
        }
      );
      const menuClasses = document.querySelectorAll(".menuLink");
      let tl = gsap.timeline({ repeat: 0, repeatDelay: 0, delay: 2 });
      tl.fromTo(
        menuClasses,
        {
          xPercent: -100,
          ease: "none",
        },
        {
          xPercent: 0,
          ease: "none",
          duration: 0.5,
          stagger: 0.3,
        }
      );
    } else if (!menu) {
      gsap.fromTo(
        ".menuWrapper",
        { yPercent: 0, backgroundColor: "#ffffff" },
        {
          yPercent: -100,
          backgroundColor: "#cccccc",
          duration: 2,
          delay: 0.5,
        }
      );
      const menuClasses = document.querySelectorAll(".menuLink");
      let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
      tl.fromTo(
        menuClasses,
        {
          xPercent: 0,
          ease: "none",
        },
        {
          xPercent: -100,
          ease: "none",
          duration: 0.5,
          stagger: 0.3,
        }
      );
    }
  }, [menu]);

  useEffect(()=>{
    gsap.fromTo(
      ".myselfBorder",
      {
        width: 0
      },
      {
        width: "100%",
        duration: 1.5
      }
    );
  },[navIndex])

  return (
    <>
      <div className="absolute top-6 right-12 z-30 sm:hidden">
        <div onClick={menuOpenClose} className="cursor-pointer">
          <img src={MenuIcon} alt="" />
        </div>
      </div>
      <nav
        className={`z-30 fixed w-full h-[70px] flex items-center justify-center transition-height duration-300 ease-in-out ${
          scrolled ? "shrink" : ""
        } ${
          navIndex === 1
            ? "bg-[#edf4ff]"
            : navIndex === 2
            ? "bg-[#e3fff2]"
            : navIndex === 3
            ? "bg-black/20 backdrop-blur-lg"
            : navIndex === 4
            ? "bg-[#ffefed]"
            : `bg-[#fff3d4]`
        }`}
      >
        <div
          className={`sm:flex hidden w-full h-10 relative flex-row justify-around items-center gap-10`}
        >
          <div
            className={`w-[100px] opacity-20 h-10 absolute top-[0px] left-[0px] active-nav ${
              navIndex === 3 ? "hidden" : "block"
            }`}
          ></div>
          {navLinks?.map((item: any, index: number) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? `${item?.activeClasses} ${navIndex === 3 ? "text-coffeeLight" : ""}` : `${item?.baseClasses} ${navIndex === 3 ? "text-coffeeLight" : "text-fontBlack"}`
              }
              onClick={() => setNavIndex(index + 1)}
              to={`${item?.link}`}
            >
              <div className="">
                <div>{item?.title}</div>
                <div className={`${navIndex === 3 && index === 2 ? "h-[3px] bg-coffeeDark myselfBorder" : "hidden"}`}></div>
              </div>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* mobile menu */}

      <div
        ref={isFirstRender}
        className="absolute top-0 left-0 z-40 menuWrapper w-full h-screen sm:hidden"
      >
        <div className="absolute top-6 right-12 z-30">
          <div onClick={menuOpenClose} className="cursor-pointer">
            <img src={MenuIcon} alt="" />
          </div>
        </div>
        {menu && (
          <div className="pt-28 pl-6 flex flex-col justify-start items-starts gap-14">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-fontBlack menuLink font-bold text-[60px] cursor-pointer p-2"
                  : "menuLink font-bold text-white text-[60px] cursor-pointer p-2"
              }
              onClick={() => setMenu(false)}
              to={"/home"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-fontBlack menuLink font-bold text-[60px] cursor-pointer p-2"
                  : "menuLink font-bold text-white text-[60px] cursor-pointer p-2"
              }
              onClick={() => setMenu(false)}
              to={"/about"}
            >
              About Me
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-fontBlack menuLink font-bold text-[60px] cursor-pointer p-2"
                  : "menuLink font-bold text-white text-[60px] cursor-pointer p-2"
              }
              onClick={() => setMenu(false)}
              to={"/my-skills"}
            >
              My Skills
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-fontBlack menuLink font-bold text-[60px] cursor-pointer p-2"
                  : "menuLink font-bold text-white text-[60px] cursor-pointer p-2"
              }
              onClick={() => setMenu(false)}
              to={"/projects"}
            >
              Projects
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
