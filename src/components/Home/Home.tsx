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
        <HeroSection />
      </div>
      <div className="h-[1000px]"></div>
    </div>
  );
};

export default Home;
