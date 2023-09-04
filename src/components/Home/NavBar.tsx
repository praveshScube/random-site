import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link, NavLink, useLocation } from "react-router-dom";
import MenuIcon from "../../assets/icons/MenuIcon.svg";

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
        ? navIndex * 269
        : pathname.includes("services")
        ? navIndex * 255
        : pathname.includes("about")
        ? navIndex * 198
        : navIndex === 3
        ? navIndex * 24
        : pathname.includes("home")
        ? navIndex * 80
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
          backgroundColor: `${
            pathname.includes("home")
              ? "#edf4ff"
              : pathname.includes("about")
              ? "#e3fff2"
              : pathname.includes("services")
              ? "#ffefed"
              : "#fff3d4"
          }`,
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
      const menuClasses = document.querySelectorAll(".menuLink");
      let tl = gsap.timeline({ repeat: 0, repeatDelay: 0, delay: 0 });
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
      gsap.fromTo(
        ".menuWrapper",
        { yPercent: 0 },
        {
          yPercent: -100,
          backgroundColor: `${
            pathname.includes("home")
              ? "#edf4ff"
              : pathname.includes("about")
              ? "#e3fff2"
              : pathname.includes("services")
              ? "#ffefed"
              : "#fff3d4"
          }`,
          duration: 2,
          delay: 1.5,
        }
      );
    }
  }, [menu]);

  useEffect(()=>{
    const menuClasses = document.querySelectorAll(".menuLink");
      menuClasses.forEach((ele) => {
        gsap.set(
          ele,
          {
            xPercent: -100,
          },
        );
      });
  },[])

  useEffect(() => {
    const sphere1 = document.querySelectorAll(".sphere1");
    const sphere2 = document.querySelectorAll(".sphere2");
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    tl.to(sphere1, {
      duration: 10,
      rotation: 360,
      transformOrigin: "-11px 23px",
      ease: "none",
      stagger: {
        each: 2,
        from: "center",
      },
    });
    tl2.to(sphere2, {
      duration: 10,
      rotation: 360,
      transformOrigin: "23px -11px",
      ease: "none",
      stagger: {
        each: 2,
        from: "center",
      },
    });
  }, []);

  return (
    <>
      <div className="w-full h-[75px] absolute px-4 flex justify-between items-center z-50 sm:hidden">
        <div className="cursor-pointer flex relative justify-start items-center w-[49px] h-[49px] border-2 border-[#267aff] rounded-full">
          <figure className="ball sphere1 shadow-md absolute top-0 right-0 rounded-full">
            <span className="shadow"></span>
          </figure>
          <figure className="ball sphere2 shadow-md absolute bottom-0 left-0 rounded-full">
            <span className="shadow2"></span>
          </figure>
          <NavLink
            to={"/home"}
            className={`font-black text-fontBlack text-4xl cursor-pointer p-2`}
          >
            <span className="pl-1">P</span>
          </NavLink>
        </div>
        <div onClick={menuOpenClose} className="cursor-pointer">
          {menu ? <span>X</span> : <img src={MenuIcon} alt="" />}
        </div>
      </div>
      <nav
        className={`z-20 fixed w-full h-[75px] flex items-center justify-center transition-height duration-300 ease-in-out ${
          scrolled ? "shrink" : ""
        } ${
          navIndex === 1
            ? "bg-[#edf4ff]"
            : navIndex === 2
            ? "bg-[#e3fff2]"
            : navIndex === 4
            ? "bg-[#ffefed]"
            : "bg-[#fff3d4]"
        }`}
      >
        <div
          className={`sm:flex hidden w-full h-10 relative flex-row justify-around items-center gap-10`}
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
          <span
            onClick={() => setNavIndex(3)}
            className="cursor-pointer flex relative justify-start items-center w-[50px] h-[50px] border-2 border-[#267aff] rounded-full"
          >
            <figure className="ball sphere1 shadow-md absolute top-0 right-0 rounded-full">
              <span className="shadow"></span>
            </figure>
            <figure className="ball sphere2 shadow-md absolute bottom-0 left-0 rounded-full">
              <span className="shadow2"></span>
            </figure>
            <NavLink
              to={"/home"}
              className={`font-black text-fontBlack text-4xl cursor-pointer p-2`}
            >
              <span className="pl-1 pb-1">P</span>
            </NavLink>
          </span>
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

      {/* mobile menu */}

      <div
        ref={isFirstRender}
        className={`absolute top-0 left-0 z-40 menuWrapper w-full h-screen sm:hidden`}
      >
          <div className="pt-24 pl-6 flex flex-col justify-start items-starts gap-10">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#00000060] menuLink font-bold text-[50px] cursor-pointer p-2"
                  : "menuLink font-bold text-fontBlack text-[50px] cursor-pointer p-2"
              }
              onClick={() => setMenu(false)}
              to={"/home"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#00000060] menuLink font-bold text-[50px] cursor-pointer p-2"
                  : "menuLink font-bold text-fontBlack text-[50px] cursor-pointer p-2"
              }
              onClick={() => setMenu(false)}
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#00000060] menuLink font-bold text-[50px] cursor-pointer p-2"
                  : "menuLink font-bold text-fontBlack text-[50px] cursor-pointer p-2"
              }
              onClick={() => setMenu(false)}
              to={"/services"}
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#00000060] menuLink font-bold text-[50px] cursor-pointer p-2"
                  : "menuLink font-bold text-fontBlack text-[50px] cursor-pointer p-2"
              }
              onClick={() => setMenu(false)}
              to={"/contact"}
            >
              Contact
            </NavLink>
          </div>
      </div>
    </>
  );
};

export default NavBar;
