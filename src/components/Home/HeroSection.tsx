import React, { useEffect } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".heroText",
      {
        opacity: 0,
        yPercent: -100,
        duration: 1,
        delay: 2,
        ease: "linear",
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        delay: 2,
        ease: "linear",
      }
    );
    gsap.fromTo(
      ".heroRight",
      {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        delay: 2,
        ease: "linear",
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        delay: 2,
        ease: "linear",
      }
    );
  }, []);

  return (
    <div>
      <div className="hero w-full h-screen flex justify-between items-center px-8 mt-4">
        <div className="">
          <p className="text-fontBlack text-[50px] font-black w-1/2 heroText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit aut
            voluptatibus.
          </p>
        </div>
        <div className="">
          <div className="bg-red w-[300px] h-[400px] heroRight"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
