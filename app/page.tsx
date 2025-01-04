'use client';
import AboutPage from "@/components/AboutPage";
import Frontpage from "@/components/Frontpage";
import NextPAge from "@/components/NextPAge";

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
      <NextPAge />
    </>
  );
}
