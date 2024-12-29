"use client";

import { motion } from "framer-motion";
import TopHeader from "./Top-Header";
import MainPage from "./Main";

export default function Frontpage() {
  return (
    <>
      <div className="bg-black h-screen w-full">
        <TopHeader/>
        <MainPage/>
      </div>
    </>
  );
}
