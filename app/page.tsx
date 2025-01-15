'use client';
import AboutPage from "@/components/AboutPage";
import ContactUSPage from "@/components/ContactUsPage";
import Frontpage from "@/components/Frontpage";
import ProjectPage from "@/components/ProjectPage";


import { useEffect } from "react";

export default function Home() {

  async function SCROLL () {
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _locomotiveScroll = new LocomotiveScroll(); 
  }

  useEffect(()=> {
    SCROLL();
  }, [])

  return (
    <>
      <Frontpage/>
      <AboutPage/>
      <ProjectPage />
      
      <ContactUSPage />
    </>
  );
}
