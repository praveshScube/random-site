import { gsap, Linear } from "gsap";
import { useEffect } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
// import gsap, { Linear } from 'gsap';

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
        <div className="pt-[200px] banner overflow-hidden flex justify-center items-center">
          
        </div>
      </div>
      <div className="h-[500px]"></div>
    </div>
  );
};

export default Home;
