"use client";


import TopHeader from "./Top-Header";
import MainPage from "./Main";

export default function Frontpage() {
  return (
    <>
      
      <div className="bg-black h-screen w-full overflow-hidden">
        <TopHeader/>
        <MainPage/>
      </div>
    </>
  );
}
