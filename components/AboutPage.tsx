"use client";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import MyDetails from "./MyDetails";
import TechStack from "./TechStack";

export default function AboutPage() {
  const border1 = useRef(null);
  const text1 = useRef(null);
  const techStack = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const TimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "320px",
        end: "415px",
        scrub: 1,
      },
    });

    TimeLine.from(border1.current, {
      width: "0%",
      ease: "linear",
    });

    TimeLine.from(text1.current, {
      opacity: 0,
      y: 300,
      duration: 2.5,
      ease: "power1.in",
      delay: -2,
    });

    const TimeLine2 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "737px",
        end: "813px",
        scrub: 1,
      },
    });
    const TimeLine3 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "920px",
        end: "990px",
        scrub: 1,
      },
    });

    TimeLine2.to(text1.current, {
      opacity: 0,
      y: -100,
      duration: 2.5,
      ease: "power1.in",
    });

    TimeLine2.to(border1.current, {
      width: 0,
      ease: "linear",
      delay: 2,
    });

    TimeLine3.from(techStack.current, {
      opacity: 0,
      scale: 0,
      duration: 3,
      ease: "none",
    });
  }, []);

  return (
    <div className="bg-black h-screen w-full text-white relative">
      <div className="overflow-hidden absolute top-[-26%] ">
        <h1 ref={text1} className="text-[8vw] ml-24 overflow-hidden">
          About ME
        </h1>
      </div>
      <div ref={border1} className="w-full h-[.5px] bg-white"></div>

      <div className="top-48 w-[50%] h-[70%] flex justify-center items-center left-[45%] absolute ">
        <MyDetails />
      </div>

      {/* Add here the TechStack  */}
      <div ref={techStack} className=" absolute top-32 left-[5%] flex flex-wrap gap-8 items-center  h-[77.7vh] w-[36vw] justify-center">
          <TechStack />
      </div>
    </div>
  );
}

