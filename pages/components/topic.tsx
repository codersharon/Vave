import Link from "next/link";
import React from "react";

const Topic = ({ id, title, image, content, auhtor }) => {
  return (
    <Link href={`/blogpost/${id}`}>
      <div className="w-ful md:w-[236px] xl:w-[368px] -mt-4 -z-10 md:mt-4 mx-2 mb-10 md:mb-0 px-2 pb-0">
        <img className="rounded-md" src={image} alt="highlight" />
        <div className="h-fit w-fit font-semibold font-[Newsreader] text-4xl rounded-b-md p-4 text-white">
          <h1 className="w-fit h-fit">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Topic;
