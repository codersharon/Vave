import React, { useEffect, useState } from "react";

const Post = (props) => {
  return (
    <div className="text-white hover:text-black rounded-xl p-4 hover:shadow-lg shadow-none hover:shadow-white hover:backdrop-blur-md hover:bg-white bg-opacity-80 flex flex-col-reverse items-center justify-center w-fit h-fit m-2 xl:m-16 xl:hover:m-10 xl:hover:z-20 transition-all">
      <img
        className="transition-all w-56 h-60 md:w-32 md:h-24 xl:w-48 xl:h-32 md:hover:w-48 md:hover:h-32 xl:hover:w-fit xl:hover:h-48 rounded-xl z-20"
        src="/dummy.jpg"
        alt="highlight"
      />
      <div className="transition-all z-10 w-56 md:w-32 xl:w-48 rounded-xl">
        <h1 className="w-full text-2xl font-[Newsreader]">
          Heading or a Cathcy TagLine
        </h1>
      </div>
    </div>
  );
};

export default Post;
