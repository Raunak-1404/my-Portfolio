"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function ProjectPage() {
  gsap.registerPlugin(ScrollTrigger);
  const divref = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  useLayoutEffect(() => {
    const TimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: divref.current,
        start: "0px",
        end: "850px",
        scrub: 1,
        pin: divref.current,
      },
    });

    const TimeLine2 = gsap.timeline({
      scrollTrigger: {
        trigger: divref.current,
        start: "40px",
        end: "730px",
        scrub: 1,
        pin: divref.current,
      },
    });


    TimeLine.to(img1.current, {
      height: 0,
      ease: "none",
      duration: 3,
    });

    TimeLine2.to(img2.current, {
      height: 0,
      ease: "none",
      duration: 3,
    });
  }, []);

  return (
    <div className="w-[100%] h-[104.8vh] bg-black relative" ref={divref}>
      <img
        ref={img1}
        src="/Project1.png"
        alt=""
        className="w-[100%] h-[100vh] object-cover absolute top-0 left-0 z-20"
      />
      <img
        ref={img2}
        src="/pixelcut-export.png"
        alt=""
        className="w-[100%] h-[100vh] object-cover absolute top-0 left-0 z-10"
      />
      <img
        ref={img3}
        src="/Project7.png"
        alt=""
        className="w-[100%] h-[100vh] bg-black object-cover absolute top-10 left-0"
      />
    </div>
  );
}