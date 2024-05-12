import React, { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import Section2 from "./Section2";
import HeroSection from "./HeroSection";

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".homeBg",
      { xPercent: -100, backgroundColor: "#ffffff" },
      { xPercent: 0, backgroundColor: "#4287f5", duration: 2 }
    );
    gsap.fromTo(".banner", { xPercent: 350 }, { xPercent: 0, duration: 2 });
  }, []);

  return (
    <div>
      <div className="h-screen w-full homeBg z-10 overflow-hidden">
        <div className="w-full pt-[200px] banner overflow-hidden flex justify-center items-center">
          {/* <div className="circle relative border-2 border-[#267aff] w-[400px] h-[400px] rounded-full m-8 opacity-10">
            <figure className="ball sphere1 shadow-md absolute top-0 right-20 h-[50px] rounded-full">
              <span className="shadow"></span>
            </figure>
            <figure className="ball sphere2 shadow-md absolute bottom-0 left-20 w-[50px] h-[50px] rounded-full">
              <span className="shadow2"></span>
            </figure>
          </div> */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
