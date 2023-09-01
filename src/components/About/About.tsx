import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useEffect(() => {
    gsap.fromTo(
      ".aboutBg",
      { xPercent: -100, backgroundColor: "#ffffff" },
      { xPercent: 0, backgroundColor: "#0ff288", duration: 2 }
    );
  }, []);
  
  return (
    <>
    <div className="h-screen aboutBg z-10">
      
    </div>
    </>
  )
}

export default About