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

  useEffect(() => {
    const sphere1 = document.querySelectorAll('.sphere1')
    const sphere2 = document.querySelectorAll('.sphere2')
    let tl = gsap.timeline( {repeat:-1, repeatDelay: 0} );
    let tl2 = gsap.timeline( {repeat:-1, repeatDelay: 0} );
      tl.to(
        sphere1,
        {
          duration: 10,
          rotation: 360,
          transformOrigin: '-70px 198px',
          ease: 'none',
          stagger: {
            each: 2,
            from: 'center'
          },
        }
      );
      tl2.to(
        sphere2,
        {
          duration: 10,
          rotation: 360,
          transformOrigin: '118px -148px',
          ease: 'none',
          stagger: {
            each: 2,
            from: 'center'
          },
        }
      );
  }, []);

  return (
    <div>
      <div className="h-screen w-full homeBg z-10 overflow-hidden">
        <div className="pt-[200px] banner overflow-hidden flex justify-center items-center">
          <div className="circle relative border-2 border-[#267aff] w-[400px] h-[400px] rounded-full m-8">
            <figure className="ball sphere1 shadow-md absolute top-0 right-20 h-[50px] rounded-full">
              <span className="shadow"></span>
            </figure>
            <figure className="ball sphere2 shadow-md absolute bottom-0 left-20 w-[50px] h-[50px] rounded-full">
              <span className="shadow2"></span>
            </figure>
          </div>
        </div>
      </div>
      <div className="h-[500px]"></div>
    </div>
  );
};

export default Home;
