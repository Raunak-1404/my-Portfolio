import Link from "next/link";
import { easeInOut, motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
export default function Profiles(props: {
  profile: { name: string; link: string };
}) {
  // const h1Variants = {
  //   hover: { x: -4500, transition: { duration: 20, easeInOut }, animate:{ y: 0, opacity: 1 } }, // Adjust x value as needed
  // };

  const divref1 = useRef(null);
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
      className=" border-[1px] text-white w-[49%] overflow-hidden  mx-auto h-[45vh] rounded-3xl px-7 pt-3 relative"
    >
      <Link
        className="flex flex-col h-full justify-between   "
        href={props.profile.link}
      >
        <div className="flex justify-between text-[1.3vw] pt-2">
          <p>{props.profile.name}</p>
          <p>Li</p>
        </div>

        <div>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
          <h1>{props.profile.name}</h1>
        </div>

        <div ref={divValue} className="flex justify-between text-[1.3vw] mb-4">
          <p>{props.profile.name}</p>
          <p>Li</p>
        </div>
      </Link>
    </div>
  );
}
