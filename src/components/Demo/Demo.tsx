import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import singlecoffeebean from "../../assets/images/singlecoffeebean.webp";

const Demo = () => {
  
  useEffect(() => {
    gsap.to(".singlecoffeebean", {
      x: "random([0, 1000, 200, 500])",
      y: "random([200, 10, -1000, 550])",
      rotate: (i) => "random(360, -360)",
      rotation: (i, target) =>
        gsap.getProperty(target, "rotation") === -180 ? 90 : -360,
      duration: 30,
      ease: "none",
      // yoyo: true,
      repeat: -1,
      repeatRefresh: true,
    });
  }, []);

  useEffect(() => {
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    let cursor: any = document.querySelector(".cursor");

    let mouseX: any;
    let mouseY: any;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.5 });
    });
  }, []);

  return (
    <>
      <div className="bg-coffeeLight w-full h-[100vh] overflow-hidden">
          <div className="w-full h-full flex flex-col justify-center items-center relative">
            {[...Array(5)].map((_, index) => (
              <div
                className={`absolute ${
                  index === 0
                    ? "top-[20%] left-[12%] w-5"
                    : index === 1
                    ? "top-[15%] right-[15%] w-8"
                    : index === 2
                    ? "top-[12%] left-[25%] w-6"
                    : index === 3
                    ? "bottom-[5%] left-[15%] w-5"
                    : "bottom-[15%] right-[10%] w-8"
                } z-10 singlecoffeebean`}
              >
                <img className="" src={singlecoffeebean} alt="" />
              </div>
            ))}
            <div className="cursor bg-[#000000] w-[10px] h-[10px] rounded-full absolute top-0 left-0"></div>
            <div className="cursor bg-coffeeDark w-[50vw] h-[50vh] rounded-full blur-[200px] absolute top-0 left-0"></div>
          </div>
        </div>
    </>
  );
};

export default Demo;
