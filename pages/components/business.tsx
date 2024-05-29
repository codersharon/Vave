import React from "react";
import Post from "./post-1";

const Business = () => {
  return (
    <div id="Business" className="slide-left flex flex-col items-center justify-center bg-blue-400 w-full pb-20">
      <h1 className="font-[Oswald] text-5xl text-inherit mt-6">Business</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
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

export default Business;
