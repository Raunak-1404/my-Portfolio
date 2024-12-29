"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

 
export default function MainPage() {
  return (
    <motion.div className="h-[89.8%] w-full text-white relative  tracking-[1px] ">
      <motion.div className="absolute top-[38%] leading-[.9] left-[20%] z-50">
        <motion.h1
          initial={{ x: -2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 1,  
            ease: easeInOut,
          }}
          className="text-[170px] "
        >
          HELLO, I'M
        </motion.h1>
        <motion.h1
          initial={{ x: -2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: .8,
            ease: easeInOut,
          }}
          className="text-[170px] ml-56"
        >
          RAUNAK
        </motion.h1>
        <motion.h1
          initial={{ x: -2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.7,
            duration: .8,            
            ease: easeInOut,
          }}
          className="text-[170px] ml-96"
        >
          JIJOTIA
        </motion.h1>
      </motion.div>

      <motion.div className=" flex h-full justify-center relative">
          
          <motion.div 
          className="absolute left-[40%] "
            initial={{opacity:0, x:150, rotate: 45}}
            animate={{opacity:1, x:0, rotate:15}}
            transition={{delay: 1.4, duration: 1}}
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
          className="absolute left-[39%] "
            initial={{opacity:0, x:150, rotate: 45}}
            animate={{opacity:1, x:0, rotate:10}}
            transition={{delay: 2, duration: 1}}
          >
            <Image 
              className="object-cover z-0 " 
              src="/3.jpg"
              alt="why is this not working"
              width={500}
              height={200}
            />
          </motion.div>

          <motion.div 
          className="absolute left-[40%] "
            initial={{opacity:0, x:150, rotate: 45}}
            animate={{opacity:1, x:0, rotate:0}}
            transition={{delay: 2.5, duration: 1}}
          >
            <Image 
              className="object-cover z-0 " 
              src="/IMG1.jpg"
              alt="why is this not working"
              width={500}
              height={200}
            />
          </motion.div>

      </motion.div>
    </motion.div>
  );
}
