"use client";

import { easeInOut, motion } from "framer-motion";

export default function MainPage() {
  return (
    <motion.div className="h-[89.8%] w-full text-white relative  tracking-[1px] ">
      <motion.div className="absolute top-[30%] leading-[.9] left-[20%] ">
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

      <motion.div>
          
      </motion.div>
    </motion.div>
  );
}
