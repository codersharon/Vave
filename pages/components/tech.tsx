import React from "react";
import Post from "./post-1";

const Tech = ({ news }) => {
  console.log("nrwskskk", news);
  
  return (
    <div
      id="Tech"
      className="slide-right w-full flex flex-col items-center justify-center bg-black text-center mb-28"
    >
      <h1 className="font-[Oswald] text-5xl text-white mt-6">Tech</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {news? news.map(({ image, content, title, createdAt, _id }) => {
          return <Post
              key={_id}
              id={_id}
              image={image}
              content={content}
              title={title}
              createdAt={createdAt}
              Auth={"Sharon"}
            />;
          })
        : <h1 className="text-white font-extrabold text-4xl">No News</h1>
        }
      </div>
    </div>
  );
};

export default Tech;
