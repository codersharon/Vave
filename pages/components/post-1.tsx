import React, { useEffect, useState } from "react";

const Post = (props) => {
  return (
    <div className="text-white hover:text-black text-center rounded-xl pt-10 md:p-4 hover:shadow-lg shadow-none hover:shadow-white hover:backdrop-blur-md hover:bg-white bg-opacity-80 flex flex-col-reverse items-center justify-center w-fit h-fit  md:mx-20 md:mt-10 xl:m-10 xl:hover:z-20 transition-all duration-200">
      <div className="flex flex-col-reverse items-start justify-center">
        <li id="lists">Sharon</li>
        <li id="lists">1-29849-49</li>
      </div>
      <img
        className="transition-all w-56 h-60 md:w-32 md:h-24 xl:w-48 xl:h-32 rounded-xl z-20"
        src="/dummy.jpg"
        alt="highlight"
      />
      <div className="transition-all z-10 w-full md:w-32 xl:w-48 rounded-xl py-2">
        <h1 id="h1" className="w-full text-4xl md:text-2xl font-[Oswald] font-bold xl:font-normal lg:font-[Newsreader]">
          Heading or a Cathcy TagLine
        </h1>
      </div>
    </div>
  );
};

export default Post;
