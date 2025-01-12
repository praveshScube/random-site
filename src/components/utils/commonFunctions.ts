import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import scubeProject from "../../assets/images/scube.png"
import lwl8Project from "../../assets/images/lwl8.png"
import duvetProject from "../../assets/images/duvet.png"
import zaincare from "../../assets/images/zaincare.png"
import html from "../../assets/images/html.webp"
import css from "../../assets/images/css.webp"
import js from "../../assets/images/js.webp"
import react from "../../assets/images/react.webp"
import next from "../../assets/images/next.webp"
import typescript from "../../assets/images/typescript.webp"
import tailwind from "../../assets/images/tailwind.webp"
import gsapIcon from "../../assets/images/gsap.webp"
import mui from "../../assets/images/mui.webp"
import redux from "../../assets/images/redux.webp"
import github from "../../assets/images/github.webp"
import sass from "../../assets/images/sass.webp"

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

export const overviewPoints = [
  {
    id: 1,
    text: "User-friendly, responsive development",
  },
  {
    id: 2,
    text: "Seamless frontend-backend integration",
  },
  {
    id: 3,
    text: "Clean, reusable code practices",
  },
  {
    id: 4,
    text: "Pixel-perfect UI implementation",
  },
  {
    id: 5,
    text: "State management with Redux Toolkit",
  },
  {
    id: 6,
    text: "Debugging and performance optimization",
  },
  {
    id: 7,
    text: "Accessibility-focused development",
  },
  {
    id: 8,
    text: "Problem-solving with creative solutions",
  },
  {
    id: 9,
    text: "Smooth animations with GSAP",
  },
  {
    id: 10,
    text: "Interactive, dynamic user experiences",
  },
  {
    id: 11,
    text: "Continuous learning and innovation",
  },
  {
    id: 12,
    text: "Collaborative with cross-functional teams",
  },
];

export const projectsList = [
  {
    name: "Scube",
    description: "Redeveloped and maintained the official website for The Scube Business Card, a platform designed to sell NFC-enabled smart business cards. Implemented a responsive and visually appealing user interface, ensuring seamless browsing across devices. Optimized the e-commerce functionality for better performance and user experience, including secure checkout and easy navigation.",
    stack: "Next.js, Tailwind CSS, Material-UI, Gsap, Scss, Redux Toolkit",
    link: "https://scube.me/",
    image: scubeProject
  },
  {
    name: "LWL8",
    description: "Developed and maintained the official website for LWL8 Smart Bottle, showcasing its innovative features and promoting a sustainable lifestyle. Integrated animations using GSAP to enhance user engagement and emphasize the product’s technological advancements. Implemented a responsive and visually appealing layout to ensure optimal user experience across devices.",
    stack: "Next.js, Tailwind CSS, Material-UI, Gsap, Scss, Redux Toolkit",
    link: "https://lwl8.com/",
    image: lwl8Project
  },
  {
    name: "Zaincare",
    description: "Developed and maintained the official website for ZainCare, focusing on promoting their home healthcare services. Built intuitive and visually appealing web pages to highlight service offerings, such as wellness initiatives and healthcare solutions. Implemented a responsive layout to ensure compatibility across various devices and browsers.",
    stack: "React.js, Tailwind CSS, Material-UI, Gsap, Scss, Redux Toolkit",
    link: "https://zaincare.com/",
    image: zaincare
  },
  {
    name: "Duvet",
    description: "Designed and developed the official website for Duvet Home, showcasing its products and services as a leading manufacturer and exporter of stylish home textiles and garments. Created intuitive product pages to highlight offerings across categories like bedding, bath, window, and clothing etc.",
    stack: "React.js, Tailwind CSS, Material-UI, Gsap, Scss, Redux Toolkit",
    link: "https://duvetltd.com/",
    image: duvetProject
  },
]

export const skillsList = [
  {
    name: "HTML",
    image: html
  },
  {
    name: "CSS",
    image: css
  },
  {
    name: "Javascript",
    image: js
  },
  {
    name: "React Js",
    image: react
  },
  {
    name: "Redux",
    image: redux
  },
  {
    name: "Next Js",
    image: next
  },
  {
    name: "Typescript",
    image: typescript
  },
  {
    name: "Tailwind CSS",
    image: tailwind
  },
  {
    name: "Material UI",
    image: mui
  },
  {
    name: "GSAP",
    image: gsapIcon
  },
  {
    name: "SASS",
    image: sass
  },
  {
    name: "GITHUB",
    image: github
  },
]
