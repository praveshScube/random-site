import React, { useEffect } from 'react'
import { gsap } from "gsap";

const Services = () => {

  useEffect(() => {
    gsap.fromTo(
      ".servicesBg",
      { xPercent: -100, backgroundColor: "#ffffff" },
      { xPercent: 0, backgroundColor: "#ff5445", duration: 2 }
    );
  }, []);

  return (
    <div className="h-screen servicesBg z-10"></div>
  )
}

export default Services