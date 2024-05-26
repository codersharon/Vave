import React from "react";

const Post = () => {
  return (
    <div className="w-fit h-fit m-16">
      <img
        className="w-56 h-56 md:w-60 md:h-60 xl:w-80 xl:h-80 rounded-xl z-10"
        src="/dummy.jpg"
        alt="highlight"
      />
      <div className="w-56 md:w-60 xl:w-80 bg-blue-500 p-4 rounded-xl z-0 -mt-4">
        <h1 className="text-3xl font-[Newsreader] text-white">
          Heading or a Cathcy TagLine
        </h1>
      </div>
    </div>
  );
};

export default Post;
