import React from "react";
import Topic from "./topic";

const Hero = () => {
  return (
    <div className="w-full min-[1920px]:w-3/5 flex flex-col items-center justify-center">
    <h1 className="mt-12 md:mb-2 md:underline font-[Osw ald] text-5xl text-white">HighLights</h1>
    <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around">
        <Topic />
        <Topic />
        <Topic />
      </div>
    </div>
  );
};

export default Hero;
