import React from "react";
import Post from "./post-1";

const Tech = () => {
  return (
    <div className="bg-red-400 text-center container w-full">
      <h1 className="font-[Oswald] text-5xl text-white">Tech</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Tech;
