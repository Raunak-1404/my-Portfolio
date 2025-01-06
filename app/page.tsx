'use client';
import AboutPage from "@/components/AboutPage";
import Frontpage from "@/components/Frontpage";
import ProjectPage from "@/components/ProjectPage";


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
      <ProjectPage />
      
      <div className="w-[99vw] h-screen bg-red-500"></div>
    </>
  );
}
