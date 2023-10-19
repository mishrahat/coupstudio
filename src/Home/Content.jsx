import React, { useEffect, useState } from "react";
import hero from "../assets/isometric-social-media.png";
import { useGlitch } from "react-powerglitch";
import { motion } from "framer-motion";
import arrowDown from "../assets/icons8-arrow-down-50.png";
import "./Content.css";

const Content = () => {
  const glitch = useGlitch();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
    },
  };

  const textEnter = () => {
    setCursorVariant("text");
  };
  const textLeave = () => {
    setCursorVariant("default");
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-8xl pt-16 pr-32 pb-5 uppercase title-hero z-10 font-bold tracking-widest"
        >
          <span ref={glitch.ref}>Stay One</span>
        </h1>

        <h1 className="text-8xl uppercase title-hero-2 relative font-bold pl-40 tracking-widest">
          Step Ahead!
        </h1>
        <img className="w-[530px] hero-img" src={hero} alt="" />
      </div>
      <div className="flex justify-between relative extra-hero">
        <p className="text-xl absolute bottom-2">
          We will help you stand out <br />
          to your target audience with budget.
        </p>
        <p className="text-xl absolute bottom-2 right-0">Explore</p>
      </div>
      <motion.div
        className="flex justify-center items-center"
        animate="default"
      >
        <img className="lg:hidden w-1/4" src={arrowDown} alt="" />
      </motion.div>
      <motion.div
        className="bg-[#ccfd01] h-[50px] w-[50px] rounded-full fixed top-0 left-0 pointer-events-none cursor-custom"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
    </div>
  );
};

export default Content;
