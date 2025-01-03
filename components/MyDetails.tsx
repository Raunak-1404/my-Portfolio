"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function MyDetails () {

    const para1 = useRef(null);
    const para2 = useRef(null);
    const para3 = useRef(null);
    const para4 = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const TimeLine = gsap.timeline({
          scrollTrigger: {
            trigger: document.documentElement,
            start: "930px",
            end: "1000px",
            scrub: 1,
          },
        });

        TimeLine.from(para1.current,{
            x: 400,
            ease: 'power1.inout',
            duration: 2,
            opacity: 0,
            scale: .2
            
        });
        TimeLine.from(para2.current,{
            x: 400,
            ease: 'power1.inout',
            duration: 2,
            opacity: 0,
            scale: .2
        });
        TimeLine.from(para3.current,{
            x: 400,
            ease: 'power1.inout',
            duration: 2,
            opacity: 0,
            scale: .2
        });
        TimeLine.from(para4.current,{
            x: 400,
            ease: 'power1.inout',
            duration: 2,
            opacity: 0,
            scale: .2
        });
        
      }, []);

    return (
        <div className="w-[95%] text-center text-white text-[3.2vw] absolute flex flex-col justify-center overflow-hidden ">
            <p ref={para1}>Hello, I’m Raunak Jijotia.</p>
            <p ref={para2}>A passionate Software Engineer skilled in</p>
            <p ref={para3}>Full-Stack Development and DevOps, committed to creating, designing and delivering</p>
            <p ref={para4}>projects that solves real-world challenges.</p>
        </div>
    )
}