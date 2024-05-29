import React from "react";
import Post from "./post-1";

const Science = () => {
  return (
    <div className="slide-right zoom flex flex-col items-center justify-center bg-[#C93EB3] text-center w-full">
      <h1 className="font-[Oswald] text-5xl text-white mt-6">Science</h1>
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

export default Science;
