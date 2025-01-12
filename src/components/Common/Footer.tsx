import React from "react";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaRegEnvelope,
} from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="w-full h-[70vh] burningOrangeBg relative xl:px-20 md:px-16 xs:px-8 px-4">
      <div className="lg:w-8/12 w-full m-auto lg:py-12 py-8">
        <p className="text-orangeLight 2xl:text-[40px] lg:text-[30px] text-xl font-semibold w-full lg:leading-10 leading-6 text-center animated-text">
          Let's connect, collaborate, and create something amazing together.
        </p>
      </div>
      <div className="w-full flex justify-center items-center my-4">
        <Link
          to={"https://wa.me/+919009503504"}
          target="_blank"
          className="w-fit sm:px-12 px-8 py-3 bg-black/90 text-white rounded-full flex justify-center items-center sm:gap-6 gap-2 hover:shadow-xl duration-300"
        >
          <span className="font-semibold lg:text-[24px] sm:text-lg text-base">
            SAY HI ON WHATSAPP
          </span>
          <span>
            <FaWhatsapp size={"1.8em"} />
          </span>
        </Link>
      </div>
      <div className="w-full flex justify-center items-start lg:mt-16 sm:mt-10 mt-6">
        <div className="flex lg:flex-row flex-col lg:justify-start justify-center lg:items-start items-center lg:gap-28 gap-10">
          <p className="anandaBlack text-white font-black lg:text-[50px] text-3xl cursor-pointer">
            pravesh.
          </p>
          <div>
            <p className="text-white lg:text-lg sm:text-base text-sm">
              Email: <span>praveshmalvi009@gmail.com</span>
            </p>
            <p className="text-white lg:text-lg sm:text-base text-sm">
              Phone: <span>+91 9009503504</span>
            </p>
          </div>
          <div className="flex justify-start items-start md:gap-10 gap-6 text-white">
            <Link
              to={"https://in.linkedin.com/in/pravesh-malvi"}
              target="_blank"
            >
              <FaLinkedin size={"1.8em"} />
            </Link>
            <Link to={"https://wa.me/+919009503504"} target="_blank">
              <FaWhatsapp size={"1.8em"} />
            </Link>
            <Link to={"https://github.com/PraveshMalvi"} target="_blank">
              <FaGithub size={"1.8em"} />
            </Link>
            <Link to={"mailto:praveshmalvi009@gmail.com"} target="_blank">
              <FaRegEnvelope size={"1.8em"} />
            </Link>
          </div>
        </div>
        <div className="hidden">
          <ContactForm />
        </div>
      </div>
      <div className="lg:w-8/12 w-full m-auto sm:py-10 py-6 absolute bottom-0 left-0 right-0">
        <p className="text-white lg:text-lg md:text-base text-sm text-center">
          <span className="italic font-light">Design and Developed by</span>{" "}
          Pravesh.
        </p>
      </div>
    </div>
  );
};

export default Footer;
