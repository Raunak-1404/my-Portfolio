"use client";

import { SplineScene } from "./Splite";
import { Card } from "./Card";
import { Spotlight } from "./SpotLight";

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[100vh] bg-black relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 z-50" fill="white" />

      <div className="flex h-full z-40">
        <div className="flex-1 relative w-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      
      <div className="absolute h-[82%] w-[30%] left-5 top-20 flex flex-col justify-center items-center gap-4 z-20 scale-90 opacity-80">
        <div
          className="w-full h-full bg-red-400 rounded-xl cursor-pointer mix-blend-multiply"
          onClick={() => window.open("https://github.com/Raunak-1404/LevisPay", "_blank")}
        >
          <img
            src="/project/LevisPay.png"
            alt="LevisPay"
            className="h-full w-full object-cover object-left-top rounded-xl"
          />
        </div>
        <div
          className="w-full h-full bg-red-500 rounded-xl cursor-pointer mix-blend-multiply"
          onClick={() => window.open("https://raunak-1404.github.io/Miranda/", "_blank")}
        >
          <img
            src="/Project1.png"
            alt="Project1"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>

     
      <div className="absolute h-[82%] w-[30%] left-[69%] top-20 flex flex-col justify-center items-center gap-4 z-20 scale-90 opacity-80">
        <div
          className="w-full h-1/2 bg-red-400 rounded-xl cursor-pointer mix-blend-multiply"
          onClick={() => window.open("https://github.com/Raunak-1404/EduVoice", "_blank")}
        >
          <img
            src="/pixelcut-export.png"
            alt="Pixelcut"
            className="h-full w-full object-cover object-left rounded-xl"
          />
        </div>
        <div
          className="w-full h-1/2 bg-red-400 rounded-xl cursor-pointer mix-blend-multiply"
          onClick={() => window.open("https://github.com/Raunak-1404/Medium-Blog/", "_blank")}
        >
          <img
            src="/project/Medium.png"
            alt="Medium"
            className="h-full w-full object-cover object-left rounded-xl"
          />
        </div>
      </div>
    </Card>
  );
}
