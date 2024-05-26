import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const ForSmoothScroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(
      ".fullPage",
      {
        y: '-100%',
        scrollTrigger: {
          trigger: ".fullPage",
          start: "top top",
          end: "bottom bottom",
          scrub: 4,
          // markers: true,
        },
      }
    );
}