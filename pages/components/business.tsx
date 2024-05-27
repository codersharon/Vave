import React from "react";
import Post from "./post-1";

const Business = () => {
  return (
    <div className="bg-black text-center container w-full border-b-2 border-b-white">
      <h1 className="font-[Oswald] text-5xl text-white mt-16">Business</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
};

export default Business;
