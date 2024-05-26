import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import githubIcon from "../../assets/icons/githubIcon.webp";
import linkedinIcon from "../../assets/icons/linkedinIcon.webp";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    gsap.fromTo(
      `.boxLeft`,
      {
        x: "-150%",
      },
      {
        x: 0,
        duration: 1,
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
      }
    );
    gsap.fromTo(
      `.socialBg`,
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 4,
        delay: 1.5,
      }
    );
  }, []);

  const handleSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(slideIndex + 1);
      gsap.fromTo(
        `.slideAnimate`,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.6,
          onComplete: () => {
            gsap.to(`.slideAnimate2`, {
              opacity: 1,
              duration: 0.6,
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
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.6,
          onComplete: () => {
            gsap.to(`.slideAnimate`, {
              opacity: 1,
              duration: 0.6,
            });
          },
        }
      );
    }
  };

  const myObject = {
    name: "Pravesh Malvi",
    phone: 9009503504,
    company: "Scubeelate Technologies Pvt. Ltd.",
    location: "Bangalore, India",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React Js",
      "Next Js",
      "Typescript",
      "Tailwind CSS",
      "GSAP",
    ],
    hireable: true,
  } as any;

  return (
    <>
      <div className="w-full h-screen bg-[#0ff288] z-10 flex justify-center items-center overflow-hidden relative">
        <div className="z-20 absolute top-0 left-0 right-0 w-full h-full grid lg:grid-cols-2 grid-cols-1 px-6 sm:px-10 md:px-16 lg:px-28 lg:gap-12 gap-0">
          <div className="w-full h-full flex justify-center items-center boxLeft">
            <div className="w-full h-full flex flex-col justify-center items-start gap-6">
              <div className="flex justify-start items-center gap-2 w-full h-[30px] socialBg">
                <img
                  className="w-7 rounded-lg cursor-pointer"
                  src={githubIcon}
                  alt="githubIcon"
                />
                <img
                  className="w-7 rounded-lg cursor-pointer"
                  src={linkedinIcon}
                  alt="linkedinIcon"
                />
              </div>
              <div className="w-full h-fit flex flex-col justify-start items-start gap-4 relative">
                <p className="text-[24px] xl:text-[32px] 3xl:text-[40px] text-black font-black ">
                  Hello! I'm Pravesh,
                </p>
                <p className="border-l-[2px] border-black/60 pl-2 slideAnimate text-[16px] xl:text-[18px] 3xl:text-[22px] text-black font-normal ">
                  I am a Frontend Developer, with 1.8 years of experience in
                  React Js and Next Js. I love building tools that are
                  user-friendly and delightful. I am experienced in creating
                  responsive and mobile-friendly websites with cross-browser
                  compatibility to ensure consistent user experience across
                  different devices and browsers.
                </p>
                <p className="absolute top-[32%] opacity-0 border-l-[2px] border-black/60 pl-2 slideAnimate2 text-[16px] xl:text-[18px] 3xl:text-[22px] text-black font-normal ">
                  Experienced in integrating RESTful API's to facilitate
                  seamless communication between the frontend and backend
                  systems. This involved data retrieval and submission, ensuring
                  efficient and secure transmission of information. Collaborated
                  with backend developers to define API requirements and
                  optimize performance for enhanced user experience.
                </p>
              </div>
              <div className="flex justify-between items-center w-full h-fit mt-2">
                <div className="bg-black/90 w-12 h-12 flex justify-center rounded-lg items-center text-white font-normal">{`${slideIndex}/2`}</div>
                <div className="bg-lightGreen w-fit h-12 flex justify-center items-center text-black font-normal px-4 hover:bg-black/90 hover:text-green duration-500 cursor-pointer rounded-lg">
                  Get My Resume{" >>"}
                </div>
                <div
                  onClick={handleSlide}
                  className="cursor-pointer bg-lightGreen hover:bg-black/90 w-12 h-12 flex justify-center items-center text-black hover:text-green duration-500 rounded-lg"
                >
                  {slideIndex === 1 ? ">>" : "<<"}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full boxRight">
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-full h-fit flex justify-center items-center bg-black/90 backdrop-blur-lg p-6 rounded-xl">
                <p className="text-white">
                  <span className="text-green/60">// my personal details</span>
                  <div className="flex gap-2">
                    <span className="text-[#ff3ecb]">const</span>
                    <span className="text-[#ce3aff]">coder</span>
                    <span className="text-[#ff3ecb]">=</span>
                    <span className="text-gray-400">{"{"}</span>
                  </div>
                  {Object.keys(myObject).map((key) => (
                    <div key={key}>
                      <p>
                        {typeof myObject[key] === "string" ? (
                          <p className="pl-4">
                            {`${key}: `}
                            <span className="text-green/60">{`"${myObject[key]}"`}</span>
                          </p>
                        ) : Array.isArray(myObject[key]) ? (
                          <p className="pl-4">
                            {`${key}: `}
                            <span className="text-[#4397fd]">
                              <span className="text-gray-400">[</span>
                              {myObject[key].map(
                                (skill: any, index: number) => (
                                  <span key={skill}>
                                    <span className="text-gray-400">"</span>
                                    {`${skill}`}
                                    <span className="text-gray-400">"</span>
                                    {index < myObject[key].length - 1 && (
                                      <span className="text-gray-400">, </span>
                                    )}{" "}
                                  </span>
                                )
                              )}
                              <span className="text-gray-400">]</span>
                            </span>
                          </p>
                        ) : (
                          <p className="pl-4">
                            {`${key}: `}
                            <span className="text-[#ff6542]">{`${myObject[key]}`}</span>
                          </p>
                        )}
                      </p>
                    </div>
                  ))}
                  <span className="text-gray-400">{"}"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
