"use client";
import { motion } from "framer-motion";
export default function TopHeader() {
  return (
    <motion.div className="top-header h-24 w-full font-Gilroy flex items-center text-white px-10 justify-between py-6 ">
      <motion.h1
        className="text-3xl "
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        RAUNAK JIJOTIA
      </motion.h1>

      <motion.div className="flex gap-10 text">
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl"
        >
          Home
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-xl"
        >
          About
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-xl"
        >
          Projects
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl"
        >
          Contact-Us
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
