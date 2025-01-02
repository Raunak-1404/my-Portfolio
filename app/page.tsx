'use client';
import AboutPage from "@/components/AboutPage";
import Frontpage from "@/components/Frontpage";
import { div } from "framer-motion/client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  async function SCROLL () {
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    const locomotiveScroll = new LocomotiveScroll(); 
  }

  useEffect(()=> {
    SCROLL();
  }, [])

  return (
    <>
      <Frontpage/>
      <AboutPage/>
    </>
  );
}
