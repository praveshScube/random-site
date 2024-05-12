import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import coffeebeans from "../../assets/images/coffeebeans.webp";
import singlecoffeebean from "../../assets/images/singlecoffeebean.webp";

const Myself = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const creativityList = [
    "Innovative",
    "Detail-Oriented",
    "User-Focused",
    "Collaborative",
    "Problem-Solver",
    "Passionate",
  ];

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    gsap.fromTo(
      `.boxLeft`,
      {
        x: "-150%",
      },
      {
        x: 0,
        duration: 1,
        delay: 12,
      }
    );
    gsap.fromTo(
      `.boxRight`,
      {
        x: "150%",
      },
      {
        x: 0,
        duration: 1,
        delay: 12,
      }
    );
    gsap.fromTo(
      `.flowingFreeBg`,
      {
        width: "0%",
      },
      {
        width: "100%",
        duration: 1,
        delay: 12,
      }
    );
  }, []);

  const handleSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(slideIndex + 1);
      gsap.fromTo(
        `.slideAnimate`,
        {
          y: 0,
        },
        {
          y: "-200%",
          duration: 1,
          onComplete: () => {
            gsap.to(`.slideAnimate2`, {
              y: "125%",
              duration: 1,
            });
          },
        }
      );
    }
    if (slideIndex === 2) {
      setSlideIndex(slideIndex - 1);
      gsap.fromTo(
        `.slideAnimate2`,
        {
          y: "125%",
        },
        {
          y: "-40%",
          duration: 1,
          onComplete: () => {
            gsap.to(`.slideAnimate`, {
              y: 0,
              duration: 1,
            });
          },
        }
      );
    }
  };

  const myObject = { key: "value" };

  return (
    <div className="bg-[#000000] w-full h-screen overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        {creativityList?.map((item: any, index: number) => (
          <>
            <p
              className={`z-10 absolute w-full h-full flex justify-center items-center text-coffeeLight font-black text-[160px] creativityList-${index}`}
            >
              {item}
            </p>
          </>
        ))}
        <div className="z-0 absolute opacity-90 top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover object-center shadow-xl"
            src={coffeebeans}
            alt=""
          />
        </div>
        <div className="z-20 absolute top-0 left-0 right-0 w-full h-full grid xl:grid-cols-2 grid-cols-1">
          <div className="w-full h-full flex justify-center items-center boxLeft">
            <div className="w-[80%] h-full flex flex-col justify-center items-start gap-2">
              <div className="flex gap-2 w-full h-[100px]">
                <div className="bg-white/10 backdrop-blur-lg w-[100px] h-[100px]"></div>
                <div className="bg-white/10 backdrop-blur-lg w-full h-[100px]"></div>
              </div>
              <div className=" w-full h-[250px] p-6 flex flex-col justify-start items-start gap-2 overflow-hidden relative">
                {/* <div className="absolute top-0 right-0 w-10">
                  <img src={singlecoffeebean} alt="" />
                </div> */}
                <p className="slideAnimate text-[24px] text-coffeeLight font-bold ">
                  Hello! I'm Pravesh,
                </p>
                <p className="border-l-[3px] border-coffeeDark pl-2 slideAnimate text-[16px] text-coffeeLight font-normal ">
                  I am a Frontend Developer, with 1.8 years of experience in
                  React Js and Next Js. I love building tools that are
                  user-friendly, simple and delightful. I am experienced in
                  creating responsive and mobile-friendly websites with
                  cross-browser compatibility to ensure consistent user
                  experience across different devices and browsers.
                </p>
                <p className="absolute -top-[60%] border-l-[3px] border-coffeeDark pl-2 slideAnimate2 text-[16px] text-coffeeLight font-normal ">
                  Developed and implemented RESTful API endpoints to facilitate
                  seamless communication between the frontend and backend
                  systems. This involved designing and coding endpoints for data
                  retrieval and submission, ensuring efficient and secure
                  transmission of information. Collaborated with backend
                  developers to define API requirements and optimize performance
                  for enhanced user experience.
                </p>
                <div className="bg-white/10 backdrop-blur-lg w-10 h-10 flex justify-center items-center absolute bottom-0 left-0 text-coffeeLight font-normal">{`${slideIndex}/2`}</div>
                <div
                  onClick={handleSlide}
                  className="cursor-pointer bg-white/10 backdrop-blur-lg w-10 h-10 flex justify-center items-center absolute bottom-0 right-0 text-coffeeLight transition-all duration-500"
                >
                  {slideIndex === 1 ? ">>" : "<<"}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full boxRight">
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-[80%] h-[400px] flex justify-center items-center">
                <p className="text-coffeeLight">{JSON.stringify(myObject)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black/50 backdrop-blur-xl h-full absolute top-0 right-0 flowingFreeBg z-10"></div>
      </div>
    </div>
  );
};

export default Myself;
