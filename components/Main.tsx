"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function MainPage() {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const TimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "2%",
        end: "9%",
        scrub: 1,

      },
    });

    const TimeLine2 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "3%",
        end: "10%",
        scrub: 1,

      },
    });

    const TimeLine3 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "4%",
        end: "11%",
        scrub: 1,

      },
    });
    const TimeLine4 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "3.5%",
        end: "18%",
        scrub: 1,

      },
    });

    TimeLine.to(img1.current, {
      x: 1200,
      rotate: 360,
      duration: 1.5,
      ease: "expo.in",
      opacity: 0,
      scale: 1.5,
    });

    TimeLine2.to(img2.current, {
      x: -1200,
      rotate: 360,
      duration: 1.8,
      ease: "expo.in",
      opacity: 0,
      scale: 1.5,
    });

    TimeLine3.to(img3.current, {
      y: -1000,
      scale: 1.5,
      opacity: 0,
      ease: "expo.in",
      speed: 2,
    });

    TimeLine4.to(text1.current, {
      x: -1500,
      duration: 2,
      ease: "power1.inOut",
    });

    TimeLine4.to(text2.current, {
      x: 1500,
      duration: 2,
      stagger: .2,
      delay: -2,
      ease: "power1.inOut",
    });

    TimeLine4.to(text3.current, {
      y: -2500,
      duration: 3,
      delay: -2,
      ease: "power1.inOut",
    });


  }, []);





  return (
    <motion.div className="h-[89.8%] w-full text-white relative  tracking-[1px] ">
      <motion.div className="absolute top-[38%] leading-[.9] left-[20%] z-50">
        <motion.h1
          ref={text1}
          initial={{ x: -2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 1,
            ease: easeInOut,
          }}
          className="text-[10vw] "
        >
          HELLO, I'M
        </motion.h1>
        <motion.h1
        ref={text2}
          initial={{ x: -2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            ease: easeInOut,
          }}
          className="text-[10vw] ml-56"
        >
          RAUNAK
        </motion.h1>
        <motion.h1
        ref={text3}
          initial={{ x: -2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.7,
            duration: 0.8,
            ease: easeInOut,
          }}
          className="text-[10vw] ml-80"
        >
          JIJOTIA
        </motion.h1>
      </motion.div>

      <motion.div className=" flex h-full justify-center relative">
        <motion.div
          className="absolute left-[40%] "
          ref={img1}
          initial={{ opacity: 0, x: 150, rotate: 45 }}
          animate={{ opacity: 1, x: 0, rotate: 15 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <Image
            className="object-cover z-0 "
            src="/IMG4.jpg"
            alt="why is this not working"
            width={500}
            height={200}
          />
        </motion.div>

        <motion.div
          ref={img2}
          className="absolute left-[39%] "
          initial={{ opacity: 0, x: 150, rotate: 45 }}
          animate={{ opacity: 1, x: 0, rotate: 10 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Image
            className="object-cover z-0 "
            src="/IMG1.jpg"
            alt="why is this not working"
            width={500}
            height={200}
          />
        </motion.div>

        <motion.div
          ref={img3}
          className="absolute left-[40%] " 
          initial={{ opacity: 0, x: 150, rotate: 45 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <Image
            className="object-cover z-0 "
            src="/3.jpg"
            alt="why is this not working"
            width={500}
            height={200}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
