import React, { useEffect } from 'react'
import { gsap } from "gsap";

const Contact = () => {

  useEffect(() => {
    gsap.fromTo(
      ".contactBg",
      { xPercent: -100, backgroundColor: "#ffffff" },
      { xPercent: 0, backgroundColor: "#ffcc41", duration: 2 }
    );
  }, []);
  
  return (
    <div className="h-screen contactBg z-10"></div>
  )
}

export default Contact