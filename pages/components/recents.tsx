import React from "react";
import Post from "./post";
import Highlight from "./highlight";

const Recents = () => {
  return (
    <div className="pb-6 w-fit">
      <h1 className="font-medium text-center w-full mt-12 md:mb-12 font-[Oswald] text-7xl text-white">
        Recently
      </h1>
      <div className="flex flex-col items-center justify-around md:flex-row md:items-start md:justify-center">
        <div className="pb-20 w-full border-l-2 border-white ml-2 border-b md:border-b-0">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="mr-2 md:ml-10 w-full border-r md:border-l-2 border-white flex flex-col justify-start items-center md:items-center md:justify-start pb-14">
          <Highlight />
          <Highlight />
          <Highlight />
        </div>
      </div>
    </div>
  );
};

export default Recents;
