import Link from "next/link";
import { easeInOut, motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
export default function Profiles(props: {
  profile: { name: string; link: string, img:string };
}) {

  const divValue = useRef(null);

  const function1 = () => {
    const tl = gsap.timeline();
    tl.to(divValue.current, {
      y: 50,
      stagger: 0.5,
      duration: 0.7,
      ease: "none",
    });
  };

  const function2 = () => {
    const tl = gsap.timeline();

    tl.to(divValue.current, {
      y: 0,
      stagger: 0.5,
      duration: 0.7,
      ease: "none",
    });


  };

  const onMouseEnterHandler = () => {
    function1();
  };

  const onMouseLeaveHandler = () => {
    function2();
  };

  return (
    <div
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className=" border-[1px] text-white w-[40%] overflow-hidden  mx-auto h-[45vh] rounded-3xl px-7 pt-3 relative  "
    >
      <Link
        className="flex flex-col h-full justify-between "
        href={props.profile.link}
      >
        <div className="flex justify-between text-[1.3vw] pt-2">
          <p>{props.profile.name}</p>
          <p>Li</p>
        </div>

        <Image 
          src={props.profile.img}
          height={170}
          width={170}
          alt="icon"
        />

        <div ref={divValue} className="flex justify-between text-[1.3vw] mb-4">
          <p>{props.profile.name}</p>
          <p>Li</p>
        </div>
      </Link>
    </div>
  );
}
