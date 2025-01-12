import React, { Fragment, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import coffeebeans from "../../assets/images/coffeebeans.webp";
import singlecoffeebean from "../../assets/images/singlecoffeebean.webp";
import me from "../../assets/images/me.webp";
import githubIcon from "../../assets/icons/githubIcon.webp";
import scubeLogo from "../../assets/images/scubeLogo2.svg";
import arrow from "../../assets/icons/arrow.gif";
import { Link } from "react-router-dom";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Button from "../Common/Button";
import Marquee from "react-fast-marquee";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaRegEnvelope,
  FaLink,
} from "react-icons/fa";
import {
  overviewPoints,
  projectsList,
  skillsList,
} from "../utils/commonFunctions";
import skewed from "../../assets/images/skewed.png";

const Myself = () => {
  const section1Ref = useRef() as any;
  const section2Ref = useRef() as any;
  const section3Ref = useRef() as any;
  const skillsRef = useRef<HTMLDivElement | null>(null);
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
              opacity: index === 5 ? 0.05 : 0,
              duration: 1,
              delay: 0,
              onComplete: () => {
                index === 5 && heroSectionContent();
              },
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "center bottom",
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(".section2", {
      width: "100%",
      duration: 2,
    }).to(
      ".section2Content",
      {
        opacity: 1,
        duration: 1,
      },
      "-=0.5"
    );
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1023) {
      gsap.registerPlugin(ScrollTrigger);
      let ctx = gsap.context(() => {
        gsap.to(".topPinned", {
          scrollTrigger: {
            start: "top top",
            end: "bottom bottom",
            trigger: ".topPinned",
            endTrigger: ".section2Content",
            pinSpacing: false,
            pin: true,
            scrub: true,
            // markers: true,
          },
        });
      }, section1Ref);
      return () => ctx.revert();
    }
  }, [window.innerWidth]);

  useEffect(() => {
    if (window.innerWidth > 1023) {
      gsap.registerPlugin(ScrollTrigger);
      let ctx = gsap.context(() => {
        gsap.to(".leftPinned", {
          scrollTrigger: {
            start: "top 80px",
            end: "bottom-=150 center",
            trigger: ".leftPinned",
            endTrigger: ".rightSide",
            pinSpacing: false,
            pin: true,
            scrub: true,
            // markers: true,
          },
        });
      }, section2Ref);
      return () => ctx.revert();
    }
  }, [window.innerWidth]);

  const heroSectionContent = () => {
    gsap.fromTo(
      `.leftContent`,
      {
        x: "-150%",
        opacity: 0,
      },
      {
        x: 0,
        duration: 2,
        opacity: 1,
      }
    );
    gsap.fromTo(
      `.rightContent`,
      {
        x: "150%",
        opacity: 0,
      },
      {
        x: "0",
        duration: 2,
        opacity: 1,
      }
    );
  };

  const handleDownloadResume = () => {
    const resumeUrl = "/PraveshMalvi2025.pdf"; // Path to the resume in the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "My_Resume.pdf"; // Specify the download file name
    link.click();
  };

  useEffect(() => {
    const section = section3Ref.current;
    const cardsWrap = section.querySelector(".section3cards");

    const windowWidth = window.innerWidth;

    const breathingSpace = windowWidth < 400 ? 35 : 150;

    gsap.to(cardsWrap, {
      x: () => -(cardsWrap.scrollWidth - window.innerWidth + breathingSpace),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: () =>
          "+=" + (cardsWrap.scrollWidth - window.innerWidth + breathingSpace),
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        // markers: true
      },
    });

    return () => {
      // Cleanup ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Split text into spans for each letter
    const paragraph = document.querySelector(".animated-text") as any;
    const letters = paragraph.textContent.split("");
    paragraph.innerHTML = letters
      .map((letter: any) =>
        letter === " "
          ? `<span class="letter">&nbsp;</span>`
          : `<span class="letter">${letter}</span>`
      )
      .join("");

    // GSAP Animation
    gsap.fromTo(
      ".letter",
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.05, // Delay between letters
        scrollTrigger: {
          trigger: ".section4",
          start: "center bottom", // Adjust as needed
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const items = skillsRef.current?.querySelectorAll(".skill-item");

    if (items) {
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top center",
            end: "top 30%",
            toggleActions: "play none none reverse",
            // markers: true
          },
        }
      );
    }
  }, []);

  return (
    <>
      <section>
        <div
          ref={section1Ref}
          className="bg-orangeLight w-full h-[100vh] overflow-hidden "
        >
          <div className="w-full h-full flex flex-col justify-center items-center relative topPinned bg-bgBlack">
            {creativityList?.map((item: any, index: number) => (
              <>
                <div
                  style={{ fontSize: "12vw" }}
                  className={`z-10 absolute bottom-0 w-full h-full flex justify-center items-center text-white font-black`}
                >
                  <div className="relative z-20 flex justify-center items-center">
                    <span className={`creativityList-${index}`}>{item}</span>
                    <div className="bg-bgBlack w-[80%] textReveal absolute top-0"></div>
                  </div>
                </div>
              </>
            ))}
            <div className="cursor burningOrangeBg w-[10px] h-[10px] rounded-full absolute top-0 left-0 z-10"></div>
            <div className="leftContent z-20 opacity-0 absolute sm:top-[20%] xs:top-[15%] top-[12%] xl:left-[100px] left-0 xl:w-[45%] w-full h-fit flex flex-col xl:justify-start justify-center xl:items-start items-center md:px-20 xs:px-8 px-4 xl:px-0 gap-3 sm:gap-4 xl:gap-0">
              <div className="flex justify-start items-center gap-4">
                <p className="text-white italic xs:text-[20px] text-base border-b-2 border-orangeDark">
                  Let's Connect
                </p>
                <img className="w-7" src={arrow} alt="" />
                <div className="flex justify-start items-center gap-4 text-white mt-[1px]">
                  <Link
                    to={"https://in.linkedin.com/in/pravesh-malvi"}
                    target="_blank"
                  >
                    <FaLinkedin size={"1.4em"} />
                  </Link>
                  <Link to={"https://wa.me/+919009503504"} target="_blank">
                    <FaWhatsapp size={"1.4em"} />
                  </Link>
                  <Link to={"https://github.com/PraveshMalvi"} target="_blank">
                    <FaGithub size={"1.4em"} />
                  </Link>
                  <Link to={"mailto:praveshmalvi009@gmail.com"} target="_blank">
                    <FaRegEnvelope size={"1.4em"} />
                  </Link>
                </div>
              </div>
              <p className="text-white font-black lg:text-[60px] md:text-[50px] sm:text-[40px] xs:text-[36px] text-[28px] mt-2">
                Your Vision, My Code
              </p>
              <p className="text-white sm:text-[20px] xs:text-[18px] text-base font-light sm:mt-3 xl:text-left text-center">
                I am dedicated to transforming ideas into stunning responsive
                websites and to delivering high-quality, modern, engaging and
                user-friendly digital experiences.
              </p>
              <div className="flex xs:flex-row flex-col xs:justify-start xs:items-start justify-center items-center gap-4 xs:mt-8 mt-2">
                {/* <a href="#projects">
                  <Button text={"Explore My Work"} onClick={() => {}} />
                </a> */}
                <Button
                  text={"Download Resume"}
                  onClick={handleDownloadResume}
                />
              </div>
            </div>
            <div className="leftContent z-20 opacity-0 absolute bottom-[10%] w-full h-fit flex flex-col justify-start items-start">
              <div className="w-full h-fit flex md:justify-start justify-center items-center gap-2 mb-2 md:pl-[100px]">
                <div className="bg-orangeDark w-[8px] h-[8px] rounded-full mt-[1px]"></div>
                <p className="text-white sm:text-base text-sm">
                  Projects i have worked on
                </p>
              </div>
              <div className="w-full h-fit flex md:justify-start justify-center items-center gap-4 md:pl-[100px] mb-2">
                <div className="flex justify-start items-center gap-2">
                  <p className="text-white font-black text-[40px]">10+</p>
                  <div className="w-full h-fit flex sm:justify-start justify-center items-center">
                    {projectsList.map(
                      (item: any, index: number) =>
                        index < 4 && (
                          <div className="w-[45px] h-[45px] rounded-full overflow-hidden -mr-2 border-2 border-white hover:border-orangeDark cursor-pointer">
                            <img
                              className="w-full h-full object-cover object-center bg-white"
                              src={item?.image}
                              alt=""
                            />
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full h-fit flex md:justify-start justify-center items-center gap-2 my-4 md:pl-[100px]">
                <div className="bg-orangeDark w-[8px] h-[8px] rounded-full mt-[1px]"></div>
                <p className="text-white sm:text-base text-sm">
                  Companies i have worked with
                </p>
              </div>
              <Marquee direction="right" autoFill={true}>
                {React.Children.toArray(
                  [scubeLogo, scubeLogo, scubeLogo, scubeLogo].map(
                    (item, index) => (
                      <Fragment>
                        <img
                          className="w-[120px] mr-20"
                          src={item}
                          alt="scubeLogo"
                        />
                      </Fragment>
                    )
                  )
                )}
              </Marquee>
            </div>
            <div className="rightContent z-20 opacity-0 absolute top-[0%] -right-20 xl:w-[55%] w-full h-full lg:block hidden">
              <img className="scale-[70%]" src={skewed} alt={``} />
            </div>
          </div>
        </div>
        <div
          ref={section2Ref}
          className="bg-orangeLight w-full h-full flex justify-center items-center relative md:py-20 py-16"
        >
          <div className="section2 w-[0.5%] h-full burningOrangeBg absolute z-0"></div>
          <div className="w-full h-full flex xl:flex-row flex-col justify-center items-start opacity-0 section2Content z-10 md:px-16 xs:px-8 px-4">
            <div className="xl:w-[40%] w-full h-full flex flex-col xl:justify-start justify-center items-center lg:gap-3 gap-0 sm:px-8 px-0 leftPinned">
              <p className="w-full font-normal xs:text-[30px] text-[20px] text-white md:text-left text-center p-0 m-0">
                Hi, I am a
              </p>

              <p className="w-full font-black lg:text-[80px] md:text-[60px] sm:text-[50px] xs:text-[36px] text-[30px] text-white leading-[90px] md:text-left text-center sm:p-0 sm:m-0 -mt-4">
                Frontend Developer
              </p>

              <p className="w-full font-normal xs:text-[30px] text-[20px] text-white md:text-left text-center sm:p-0 sm:m-0 -mt-4">
                With Experience Of
              </p>

              <p className="w-full font-black lg:text-[80px] md:text-[60px] sm:text-[50px] xs:text-[36px] text-[30px] text-white leading-[70px] md:text-left text-center sm:p-0 sm:m-0 -mt-2">
                2.3 years
              </p>
            </div>
            <div className="xl:w-[60%] w-full h-full flex flex-col justify-start items-center gap-12 sm:px-8 px-0 rightSide xl:m-0 xs:mt-16 mt-8">
              <div className="flex flex-col justify-start items-start lg:gap-6 gap-4">
                <div className="w-full flex md:justify-start md:items-start justify-center items-center">
                  <p className="w-fit font-light sm:text-[36px] xs:text-[30px] text-xl text-white sm:mb-8 mb-4 italic">
                    This is what i bring as a Frontend Developer:
                  </p>
                </div>
                <div className="grid xl:grid-cols-2 grid-cols-1 sm:gap-8 gap-6">
                  {overviewPoints?.map((point) => (
                    <div
                      key={point.id}
                      className="sm:w-[350px] w-full sm:h-[200px] h-fit burningOrangeBg rounded-xl flex justify-center items-center shadow-2xl p-4 border-l-2 border-white"
                    >
                      <p className="font-normal xs:text-[24px] text-[18px] text-white sm:text-center text-left w-full">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="cursor bg-orangeLight w-[10px] h-[10px] rounded-full absolute top-0 left-0 z-10"></div> */}
        </div>
        <div
          className="bg-orangeLight w-full h-[100vh]  md:py-[5%] py-16"
          ref={section3Ref}
          id={"projects"}
        >
          <div className="xl:px-20 md:px-16 xs:px-8 px-4">
            <div className="flex sm:justify-between justify-center items-center">
              <div className="mt-4 sm:mt-0">
                <p className="lg:text-lg md:text-base text-sm text-black/95 font-semibold m-0 sm:-mb-6 text-center sm:text-left">
                  PROJECTS
                </p>
                <p className="font-black lg:text-[80px] md:text-[60px] sm:text-[50px] xs:text-[36px] text-[30px] text-black/95 m-0 text-center sm:text-left">
                  MY WORKS
                </p>
              </div>
              <div className="hidden">
                <Button
                  color={"text-orangeDark"}
                  text={"See All Projects"}
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full relative overflow-hidden flex items-start xl:px-20 md:px-16 xs:px-8 px-4 sm:pt-0 pt-12">
            <div className="section3cards flex gap-6">
              {projectsList?.map((item: any) => (
                <div className="section3card relative sm:w-[500px] w-[90vw] h-[65vh] burningOrangeBg p-6 rounded-2xl overflow-hidden">
                  <div className="flex flex-col justify-start items-start gap-2">
                    <p className="text-white lg:text-base text-sm z-20 flex justify-start items-center gap-1">
                      <strong>Project Name :</strong> {item?.name}
                      <Link to={item?.link} target="_blank" className="w-[26px] h-[26px] rounded-full bg-white text-orangeDark flex justify-center items-center">
                        <FaLink size={"1em"} />
                      </Link>
                    </p>
                    <p className="text-white lg:text-base text-sm z-20">
                      <strong>Description :</strong> {item?.description}
                    </p>
                    <p className="text-white lg:text-base text-sm z-20">
                      <strong>Stack :</strong> {item?.stack}
                    </p>
                  </div>
                  <div className=" absolute sm:top-[15%] -bottom-[54px] sm:-right-[75px] -right-[50px] scale-75 z-10 opacity-50  duration-300">
                    <img src={item?.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-black relative xl:px-32 md:px-16 flex justify-center items-center xs:px-8 px-4 section4">
          <p className="text-orangeLight 2xl:text-[50px] lg:text-[40px] text-[30px] font-semibold w-full text-center animated-text">
            I am a passionate UI Developer who bridges the gap between
            development and design. I take responsibility to craft a good user
            experience using modern frontend architecture.
          </p>
        </div>
        <div
          ref={skillsRef}
          className="w-full h-screen lg:h-[90vh] bg-orangeLight relative xl:px-32 md:px-16 xs:px-8 px-4 py-[5%] section5"
        >
          <div className="lg:w-8/12 w-full flex sm:justify-between justify-center items-center">
            <div className="mt-4 sm:mt-0">
              <p className="lg:text-lg md:text-base text-sm text-black/95 font-semibold m-0 sm:-mb-6 text-center sm:text-left">
                Skills
              </p>
              <p className="font-black lg:text-[80px] md:text-[60px] sm:text-[50px] xs:text-[36px] text-[30px] text-black/95 m-0 text-center sm:text-left">
                MY SKILLS
              </p>
            </div>
            <div className="hidden">
              <Button
                color={"text-orangeDark"}
                text={"See All Projects"}
                onClick={() => {}}
              />
            </div>
          </div>
          <p className="text-black 2xl:text-[28px] lg:text-[22px] text-lg lg:w-8/12 w-full lg:text-left text-center sm:leading-8 mt-6">
            I have a strong obsession for attention to detail and I like to take
            responsibility to craft aesthetic user experience using modern
            frontend architecture.
          </p>
          <div className="lg:w-8/12 w-full flex lg:justify-start justify-center lg:items-start items-center gap-6 flex-wrap mt-10">
            {skillsList?.map((skill: any, index: number) => (
              <div
                key={index}
                className="w-[74px] h-[74px] bg-white p-2 rounded-lg shadow-xl skill-item"
              >
                <img
                  className="w-full h-full object-contain object-center"
                  src={skill?.image}
                  alt={`Skill ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Myself;
