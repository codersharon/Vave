import Link from "next/link";
import React, { useState } from "react";

const Post = ({ title, image, createdAt, id }) => {
  return (
    <Link href={`/blogpost/${id}`}>
      <div className="hover:bg-neutral-800 decoration-white w-full border-b-2 p-5 border-white flex items-start justify-start">
        <div className="flex flex-col items-start justify-start p-1">
          <img
            src={image}
            // className="rounded w-[320px] h-[120px] m-2"
            // alt="post"
          />
          {/* <li className="text-white w-full">{createdAt.slice(0, 10)}</li> */}
        </div>
        <h1 className="mx-5 hover:underline text-xl h-full font-bold font-[Oswald] lg:text-3xl text-white">
          {title.slice(0, 32)}...
        </h1>
      </div>
    </Link>
  );
};

export default Post;
