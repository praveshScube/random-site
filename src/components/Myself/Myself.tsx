import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import coffeebeans from "../../assets/images/coffeebeans.webp";
import singlecoffeebean from "../../assets/images/singlecoffeebean.webp";
import me from "../../assets/images/me.webp";
import githubIcon from "../../assets/icons/githubIcon.webp";
import linkedinIcon from "../../assets/icons/linkedinIcon.webp";
// import resume from "../../assets/images/PraveshMalvi2024.pdf";
import { Link } from "react-router-dom";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Myself = () => {
  const containerRef = useRef() as any;
  const creativityList = [
    "Innovative",
    "Meticulous",
    "Intuitive",
    "Collaborative",
    "Analytical",
    "Passionate",
  ];

  const CreativityList = () => {
    creativityList.forEach((item, index) => {
      gsap.fromTo(
        `.creativityList-${index}`,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: index * 2,
          onComplete: () => {
            gsap.to(`.creativityList-${index}`, {
              opacity: index === 5 ? 1 : 0,
              duration: 1,
              delay: 0,
            });
          },
        }
      );
    });
  };

  useEffect(() => {
    creativityList.forEach((item, index) => {
      gsap.fromTo(
        `.creativityList-${index}`,
        {
          opacity: 0,
        },
        {
          opacity: 0,
          delay: 1,
          onComplete: () => {
            CreativityList();
          },
        }
      );
    });
    gsap.fromTo(
      ".textReveal",
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.5,
        delay: 1.5,
      }
    );
  }, []);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".section2", {
      width: "100%",
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom-=200",
        end: "center bottom-=200",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.fromTo(
      ".section2Content",
      {
        opacity: 0.5,
      },
      {
        opacity: 1,
        duration: 1,
        // delay: 1,
      }
    );
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1023) {
      gsap.registerPlugin(ScrollTrigger);
      let ctx = gsap.context(() => {
        gsap.to(".leftPinned", {
          scrollTrigger: {
            start: "top 80px",
            end: "bottom bottom",
            trigger: ".leftPinned",
            endTrigger: ".rightSide",
            pinSpacing: false,
            pin: true,
            scrub: true,
            // markers: true,
          },
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [window.innerWidth]);

  return (
    <>
      <section>
        <div className="bg-coffeeLight w-full h-[100vh] overflow-hidden topPinned">
          <div className="w-full h-full flex flex-col justify-center items-center relative">
            {[...Array(5)].map((_, index) => (
              <div
                className={`absolute ${
                  index === 0
                    ? "top-[20%] left-[10%] w-10"
                    : index === 1
                    ? "top-[15%] left-[20%] w-8"
                    : index === 2
                    ? "top-[10%] left-[5%] w-12"
                    : index === 3
                    ? "bottom-[5%] left-[15%] w-6"
                    : "bottom-[15%] right-[10%] w-8"
                } z-10 singlecoffeebean`}
              >
                <img className="" src={singlecoffeebean} alt="" />
              </div>
            ))}
            {creativityList?.map((item: any, index: number) => (
              <>
                <div
                  style={{ fontSize: "12vw" }}
                  className={`z-10 qanoar absolute w-full h-full flex justify-center items-center text-coffeeDark font-black`}
                >
                  <div className="relative z-20 flex justify-center items-center">
                    <span className={`creativityList-${index}`}>{item}</span>
                    <div className="bg-coffeeLight w-[80%] textReveal absolute top-0"></div>
                  </div>
                </div>
              </>
            ))}
            <div className="cursor bg-coffeeDark w-[10px] h-[10px] rounded-full absolute top-0 left-0"></div>
          </div>
        </div>
        <div
          ref={containerRef}
          className="bg-coffeeLight w-full h-full flex justify-center items-center relative py-20"
        >
          <div className="section2 w-[30%] h-full bg-coffeeDark absolute z-0"></div>
          <div className="w-full h-full flex justify-center items-start opacity-50 section2Content z-10 px-16">
            <div className="w-[40%] h-full flex flex-col justify-start items-center gap-4 px-8 leftPinned">
              <div className="w-full ">
                <p className="w-full font-normal text-[30px] text-coffeeLight text-left">
                  I am a
                </p>
              </div>
              <div className="">
                <p className="font-black text-[80px] text-coffeeLight leading-[70px]">
                  Frontend Developer
                </p>
              </div>
              <div className="w-full">
                <p className="w-full font-normal text-[30px] text-coffeeLight text-left">
                  With Experience Of
                </p>
              </div>
              <div className="w-full ">
                <p className="font-black text-[80px] text-coffeeLight leading-[70px] text-left">
                  1.9 years
                </p>
              </div>
            </div>
            <div className="w-[60%] h-full flex flex-col justify-start items-center gap-12 px-8 rightSide">
              <div className="">
                <p className="font-medium text-[40px] text-coffeeLight mb-8">
                  Overview:
                </p>
                <div className="flex justify-start items-start gap-4">
                <p className="font-normal text-[24px] text-coffeeDark bg-coffeeLight px-2 w-fit h-fit">
                  1.
                </p>
                <p className="font-light text-[24px] text-coffeeLight">
                  I love building tools that are user-friendly and delightful. I
                  am experienced in creating responsive and mobile-friendly
                  websites with cross-browser compatibility to ensure consistent
                  user experience across different devices and browsers.
                </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-4">
                <p className="font-normal text-[24px] text-coffeeDark bg-coffeeLight px-2 w-fit">
                  2.
                </p>
                <p className="font-light text-[24px] text-coffeeLight">
                  I am experienced in integrating RESTful API's to facilitate
                  seamless communication between the frontend and backend
                  systems. This involved data retrieval and submission, ensuring
                  efficient and secure transmission of information. Collaborated
                  with backend developers to define API requirements and
                  optimize performance for enhanced user experience.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="cursor bg-coffeeLight w-[10px] h-[10px] rounded-full absolute top-0 left-0 z-10"></div> */}
        </div>
        <div className="bg-coffeeLight w-full h-[100vh] flex justify-center items-center relative section3"></div>
      </section>
    </>
  );
};

export default Myself;
